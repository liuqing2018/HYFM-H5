export default [
    {
        path: '/',
        name: 'index', // 必须项，后面缓存页面需要用到，且这个name是唯一的
        meta: {
            title: '默认页面 - 注册',
        },
        component: resolve => require(['../views/Login.vue'], resolve),
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login - 登录',
            hideInMenu: true // 是否在左侧菜单中隐藏，默认为false
        },
        component: resolve => require(['../views/Login.vue'], resolve),
    },
]
