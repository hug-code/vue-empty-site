import router from "@/router";

/**
 * 退出登录清空用户数据
 */
export const loginOutAndClearUser = () => {
    localStorage.clear()
    router.push({name: 'login'})
}

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
