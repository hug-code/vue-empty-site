import request from '@/utils/request'

const api = {
    articleIndex: '/article/index',
    articleCreate: '/article/create',
    articleInfo: '/article/info',
}

export default api

export function articleIndex(parameter) {
    return request({
        url: api.articleIndex,
        method: 'get',
        params: parameter
    })
}

export function articleCreate(parameter) {
    return request({
        url: api.articleCreate,
        method: 'post',
        data: parameter
    })
}

export function articleInfo(parameter) {
    return request({
        url: api.articleInfo,
        method: 'get',
        params: parameter
    })
}
