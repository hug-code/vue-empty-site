import axios from 'axios'
import { message } from 'ant-design-vue';
import { loginOutAndClearUser } from '@/utils/util'
import router from "../router";

const service = axios.create({
    baseURL: process.env.NODE_ENV === 'development'
        ? window.location.origin + '/api'
        : process.env.VUE_APP_API_BASE_URL,
    timeout: 60000,
})

service.interceptors.request.use(config => {
    config.headers.token = localStorage.getItem('token')
    config.headers.terminal = 'admin'
    return config
}, (error) => Promise.reject(error))

service.interceptors.response.use(response => {
    const res = response.data

    if (res.code !== 0) {
        if(res.code === 13002){
            loginOutAndClearUser()
            router.push({name: 'login'})
        }
        message.error(res.msg || '接口异常')
    }
    return res
}, (error) => {
    console.log('请求异常，状态码：' + error.response.status)
    return Promise.reject(error)
})

export default service
