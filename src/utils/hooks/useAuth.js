import { useSelector, useDispatch } from 'react-redux'
import { setUser, initialState } from 'store/auth/userSlice'
import { apiSignIn, apiSignOut } from 'services/AuthService'
import { onSignInSuccess, onSignOutSuccess } from 'store/auth/sessionSlice'
import appConfig from 'configs/app.config'
import { REDIRECT_URL_KEY } from 'constants/app.constant'
import { useNavigate } from 'react-router-dom'
import useQuery from './useQuery'
import jwt_decode from "jwt-decode";

function useAuth() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

	const query = useQuery()

    const { token, signedIn } = useSelector((state) => state.auth.session)

    const signIn = async ({ username, password }) => {
        try {
			const resp = await apiSignIn({ username, password })
			if (resp.data) {
				 const { jwt } =  resp.data.data
				 const userdetails = jwt_decode(jwt).userDetails

				dispatch(onSignInSuccess(jwt))
				if(userdetails) {
					dispatch(setUser(userdetails || { 
						avatar: '', 
						userName: 'Anonymous', 
						authority: ['USER'], 
						email: ''
					}))
				}
				const redirectUrl = query.get(REDIRECT_URL_KEY)
				navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath)
                return {
                    status: 'success',
                    message: '',
                }
			}
		} catch (errors) {
			return {
                status: 'failed',
                message: errors?.response?.data?.data?.message || errors.toString(),
				response_data: errors?.response?.data?.data
            }
		}
    }

    const handleSignOut = ()  => {
		dispatch(onSignOutSuccess())
		dispatch(setUser(initialState))
		navigate(appConfig.unAuthenticatedEntryPath)
	}

    const signOut = async () => {
		try {
			await apiSignOut(token)
			handleSignOut()
		} catch (errors) {
			handleSignOut()
		}
	}
    
    return {
        authenticated: token && signedIn,
        signIn,
        signOut
    }
}

export default useAuth