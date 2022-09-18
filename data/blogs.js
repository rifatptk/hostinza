import http from "../utils/http";
import {API_ENDPOINTS} from '../config/endpoints'
import {environment} from '../config/environment'
import useSWR from "swr";

export async function getBlogs(){
    const {data}  = await http.get(`${environment.blogurl}${API_ENDPOINTS.BLOGS}?key=${environment.blogkey}`)
    return data.posts
}
export function useBlogsQuery(){
    return useSWR(`${environment.blogurl}${API_ENDPOINTS.BLOGS}?key=${environment.blogkey}`,getBlogs)
}
export function getBlogsKey(){
    return `${environment.blogurl}${API_ENDPOINTS.BLOGS}?key=${environment.blogkey}`
}

export async function getBlog(slug){
    const {data}  = await http.get(`${environment.blogurl}${API_ENDPOINTS.BLOGS_SLUG}/${slug}?key=${environment.blogkey}`)
    return data.posts.length>0?data.posts[0]:data.posts
}
export function useBlogsSlugQuery(slug){
    console.log(slug)
    return useSWR(`${environment.blogurl}${API_ENDPOINTS.BLOGS_SLUG}/${slug}?key=${environment.blogkey}`,getBlog(slug))
}
export function getBlogKey(slug){
    return `${environment.blogurl}${API_ENDPOINTS.BLOGS_SLUG}/${slug}?key=${environment.blogkey}`
}
