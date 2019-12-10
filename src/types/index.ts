export type Method = 'get' | 'GET'
    | 'delete' | 'DELETE'
    | 'hade' | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post' | 'POST'
    | 'put' | 'PUT'
    | 'patch' | 'PATCH'

export interface AxiosRequestConfig {
    url: string,
    method?: Method,
    data?: any,
    params?: any,
}