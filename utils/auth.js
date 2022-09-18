import Cookies from "js-cookie";

export function isAuthenticated() {
    if(typeof window!=='undefined'){
        let token = getToken();
        if(token){
            return true;
        }
    }
    return false;
}

export function attachToken(http,token){
    http.interceptors.request.use(
        (config) => {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          };
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    return http;

}

export function getAuthCredentials(){
    let token = getToken();
    if(token){
        return  {token: token };
    }
    return {token: null }
}
export function setToken(token){
    return Cookies.set('token',token)
}
export function getToken(){
    if (typeof window === undefined) {
        return null;
    }
    return Cookies.get('token')
}
export function removeToken(token){
    return Cookies.remove('token')
}
export function setUser(user){
    return Cookies.set('user',JSON.stringify(user))
}
export function getUser(){
    return Cookies.get('user')?JSON.parse(Cookies.get('user')):{}
}