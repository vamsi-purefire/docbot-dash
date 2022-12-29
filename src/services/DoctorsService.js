import ApiService from "./ApiService"


export async function apiGetDoctorsData (params) {
    return ApiService.fetchData({
        url: '/api/v1/get-doctors',
        method: 'get',
        params
    })
}

export async function apiPutDoctor (data) {
    return ApiService.fetchData({
        url: '/api/v1/add-doctor',
        method: 'post',
        data
    })
}