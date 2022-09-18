import http from "../utils/http";
import {API_ENDPOINTS} from '../config/endpoints'


export async function login(variables){
    return http.post(`${API_ENDPOINTS.LOGIN}`, variables)
}
export async function getUser(variables){
    return http.get(`${API_ENDPOINTS.GET_USER}`, variables)
}
