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


/**
 * 根据时间获取问候语句
 * @returns {string}
 */
export function timeGreet() {
    const hour = (new Date()).getHours()
    return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}
