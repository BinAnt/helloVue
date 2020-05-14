import axios from 'axios'

export function request(config) {
    //1、创建axios的实例
    const instance = axios.create({
        baseURL: 'http://api.qualife.com',
        timeout: 5000
    })
    //2、拦截器
    //2.1 添加请求拦截器
    instance.interceptors.request.use(config => {
        // 在发送请求之前做些什么
        console.log(config);
        // 1、比如config中一些信息不符合服务器的要求

        // 2、比如每次发送网络请求时，都希望在界面中显示一个请求的图标

        // 3、某些网络请求拦截（比如登录token），必须携带一些特殊的信息
        
        return config;
    }, error => {
        return Promise.reject(error)
    })

    // 2.2 响应拦截
    instance.interceptors.response.use(response => {
        //对相应做些什么
        return response;
    }, error => {
        return Promise.reject(error)
    })
    //3、发送真正的网络请求
    return instance(config)
}