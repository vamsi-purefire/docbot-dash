import axios from 'axios'
import appConfig from 'configs/app.config'
import { TOKEN_TYPE, REQUEST_HEADER_AUTH_KEY } from 'constants/api.constant'
import { PERSIST_STORE_NAME } from 'constants/app.constant'
import deepParseJson from 'utils/deepParseJson'
import store from '../store'
import { onSignOutSuccess, setToken } from '../store/auth/sessionSlice'


const unauthorizedCode = [401]


const BaseService = axios.create({
    timeout: 60000,
    baseURL: appConfig.apiPrefix,
})



const getRefreshedToken = (accessToken) => {

    return BaseService.post('/jwt-login/v1/auth/refresh', {
        JWT: accessToken
    })
}

const refreshToken = async () => {

    const rawPersistData = localStorage.getItem(PERSIST_STORE_NAME)
    const persistData = deepParseJson(rawPersistData)

    const accessToken = persistData.auth.session.token

    const newToken = await getRefreshedToken(accessToken)

    const refreshed_token = newToken.data.data.jwt

    localStorage.setItem(PERSIST_STORE_NAME, JSON.stringify({
        ...persistData,
        auth: {
            ...persistData.auth,
            session: {
                ...persistData.auth.session,
                token: refreshed_token
            }
        }
    }))

    console.log("Refreshed token")

    return refreshed_token
}




BaseService.interceptors.request.use( async config => {

    const rawPersistData = localStorage.getItem(PERSIST_STORE_NAME)
    const persistData = deepParseJson(rawPersistData)
    
    const accessToken = persistData.auth.session.token


    if (accessToken) {
        
            config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${accessToken}`

    }


    
    return config
}, error => {
    return Promise.reject(error)
})

BaseService.interceptors.response.use(
    response => response,
      async error => {

        const { response } = error

        const config = response?.config;

        console.log(response?.data?.data?.errorCode)


        if (response?.status === 400 && response?.data?.data?.errorCode === 14 && !config?.sent) {
            config.sent = true;
            config._retry = true;

            const result = await refreshToken();
      
            if (result) {

                config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${result}`;
                store.dispatch (setToken(result))
                return BaseService.request(config);
             
            }

        }

        if (response && unauthorizedCode.includes(response.status)) {
            store.dispatch(onSignOutSuccess())
        }
      

        return Promise.reject(error)
    }
)

export default BaseService