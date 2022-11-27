import ApiService from "./ApiService";


export async function apiGetAppointmentsList (data) {
    
    return ApiService.fetchData({
        url: '/api/v1/get-appointments',
        method: 'get',
    })
}