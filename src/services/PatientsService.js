import ApiService from "./ApiService"


export async function apiGetPatientsData (params) {
    return ApiService.fetchData({
        url: '/api/v1/get-patients',
        method: 'get',
        params
    })
}

export async function apiPutPatient (data) {
    return ApiService.fetchData({
        url: '/api/v1/add-patient',
        method: 'post',
        data
    })
}