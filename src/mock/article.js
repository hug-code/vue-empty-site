import Mock from 'mockjs'
import moment from 'moment'
import api from '@/api/article'
import { getQueryParameters, getListBaseData, getBaseData } from './base'

let articleIndex = (params) => {
    let result = getListBaseData(params)
    for (let i = 1; i <= result.data.page_size; i++) {
        result.data.data.push({
            article_id: i,
            title: Mock.mock('@ctitle(15, 25)'),
            create_time: moment().unix(),
            status: params.status || Mock.mock('@integer(1, 2)'),
            read_num: Mock.mock('@integer(10, 9999)'),
            is_top: params.is_top || Mock.mock('@integer(0, 1)'),
        })
    }
    return result
}

let articleInfo = (params) => {
    let result = getBaseData(params)
    result.data = {
            article_id: params.article_id,
            title: Mock.mock('@ctitle(15, 25)'),
            thumbnail: '/article/20200412/4-LTvSuNdgwmpOtg.jpg',
            thumbnail_path: 'http://image.hug-code.cn/article/20200412/4-LTvSuNdgwmpOtg.jpg',
            status: Mock.mock('@integer(1, 2)'),
            author: 'injurys',
            reprint_address: '',
            is_original: Mock.mock('@integer(0, 1)'),
            keyword: Mock.mock('@ctitle(35, 60)'),
            description: Mock.mock('@ctitle(35, 100)'),
            create_time: moment().unix(),
            tag_list:  [1, 2, 3],
            markdown: '### 标题',
            html: '<h3>标题</h3>'
    }
    return result
}

Mock.mock(RegExp(api.articleIndex + "?.*"), 'get', (options) => {
    let params = getQueryParameters(options)
    console.log(`mock url：${options.url} params：`, params)
    return articleIndex(params)
})

Mock.mock(api.articleCreate, 'post', (options) => {
    console.log(`mock url：${options.url} params：`, options.body)
    return getBaseData(JSON.parse(options.body))
})

Mock.mock(RegExp(api.articleInfo + "?.*"), 'get', (options) => {
    let params = getQueryParameters(options)
    console.log(`mock url：${options.url} params：`, params)
    return articleInfo(params)
})


