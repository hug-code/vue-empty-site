import Mock from 'mockjs'
import api from '@/api/public'
import { getBaseData } from './base'


Mock.mock(api.articleCreate, 'post', (options) => {
    console.log(`mock url：${options.url} params：`, options.body)
    let result = {
        token: '123'
    }
    return getBaseData(result)
})

