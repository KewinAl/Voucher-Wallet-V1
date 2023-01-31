import axiosInstance from '../axiosInstance'
//TODO: Backend endpoint for auth/token
export function getAuthToken(data){
    return axiosInstance.post('auth/token/', data)
}