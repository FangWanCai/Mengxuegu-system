// 引入axios
import axios from "axios"

// 创建axios实例配置
const service = axios.create({
    baseURL: '',
    timeout: 5000,
})

// 请求拦截
service.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error)
})

// 导出axios实例
export default service