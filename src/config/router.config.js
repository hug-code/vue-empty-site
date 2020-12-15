export default [
    {
        path: "/",
        name: 'Index',
        component: resolve => require(['@/views/layouts/layout'], resolve),
        redirect: "/index",
        meta: {icon: 'home', title: '系统管理'},
        children: [
            {
                path: 'index',
                name: 'Index',
                meta: {title: '首页', hidden: true},
                component: resolve => require(['@/views/index'], resolve)
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {title: '登陆', hidden: true},
        component: resolve => require(['@/views/login'], resolve)
    },
    {
        path: '*',
        name: '404',
        meta: {title: '页面不存在', hidden: true},
        component: resolve => require(['@/views/error/404'], resolve)
    }
]
