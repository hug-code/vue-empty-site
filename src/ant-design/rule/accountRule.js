export default {
    account: [
        {required: true, message: '请输入用户名', trigger: 'blur'},
        {max: 22, message: '用户名不存在!', trigger: 'blur'},
        {
            validator: (rule, value, callback) => {
                let mobile = /^1\d{10}$/
                let email = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
                if (!mobile.test(value) && !email.test(value)) {
                    callback(new Error('用户名不存在'))
                }
                callback()
            }, trigger: 'blur'
        }
    ],

    password: [
        {required: true, message: '请输入密码', trigger: 'blur'},
        {min: 8, max: 20, message: '密码不正确!', trigger: 'blur'},
        {
            validator: (rule, value, callback) => {
                if (!/^[-_A-Za-z0-9]+$/.test(value)) {
                    callback(new Error('密码不正确'))
                }
                callback()
            }, trigger: 'blur'
        }
    ]
}
