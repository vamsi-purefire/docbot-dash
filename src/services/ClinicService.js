import ApiService from "./ApiService";


export async function apiGetClinicsList (data) {

    
    return ApiService.fetchData({
        url: '/api/v1/get-clinics',
        method: 'post',
        data: {
            userID: '2',
            phone: '2333434'
          }
    })
}