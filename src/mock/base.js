/**
 * 获取url上的参数
 * @param options
 * @returns {{}|any}
 */
export const getQueryParameters = (options) => {
    const url = options.url
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') + '"}')
}

/**
 * 获取列表基础格式
 * @param params
 * @returns {{msg: string, code: number, data: *[]}}
 */
export const getListBaseData = (params) => {
    let data = {
        per_page: params.per_page || 20,
        current_page: Number(params.current_page) || 1,
        total: 100,
        data: []
    }
    return getBaseData(data)
}

/**
 * 获取基础格式
 * @param data
 * @param msg
 * @returns {{msg: string, code: number, data: *[]}}
 */
export const getBaseData = (data = [], msg = 'success') => {
    return {
        code: 0,
        msg: msg,
        data: data
    }
}
