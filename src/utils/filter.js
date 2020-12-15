import Vue from 'vue'
import moment from 'moment'
import status from '@/config/status'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')

Vue.filter('time', (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') => {
    return moment.unix(dataStr).format(pattern)
})

Vue.filter('status', (value, model) => {
    let result = status[model][value] || false
    return result ? (result instanceof Object ? result.label : result) : status
})

Vue.prototype.status_format = function (value, model) {
    let result = status[model][value] || false
    return result ? (result instanceof Object ? `<i style="font-style:normal;color: ${result.color}">${result.label}</i>` : result) : value
}

Vue.prototype.status_select = function (model, isAll = '全部') {
    let result = isAll ? [{text: isAll, value: ''}] : []
    if (model in status) {
        for (let key in status[model]) {
            if (Object.prototype.hasOwnProperty.call(status[model], key)) {
                let res = (status[model][key] instanceof Object) ? status[model][key].label : status[model][key]
                result.push({text: res, value: Number(key)})
            }
        }
    }
    return result
}
