import request from '@/utils/request'

const api = {
    account: '/public/account',
}

export default api

export function account(parameter) {
    return request({
        url: api.account,
        method: 'post',
        data: parameter
    })
}
