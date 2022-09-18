import http from "../utils/http";
import {API_ENDPOINTS} from '../config/endpoints'
import useSWR from 'swr'

export async function getPlans(){
    const {data}  = await http.get(`${API_ENDPOINTS.PLANS}`)
    return data
}
export function usePlansQuery(){
    return useSWR(`${API_ENDPOINTS.PLANS}`,getPlans)
}

export function getPlansKey(){
    return API_ENDPOINTS.PLANS;
}