export default [
    {
        path: '/my',
        name: 'my',
        component: {
            render(h) {
                return h('router-view');
            }
        },
        meta: {
            menuTitle: '我的',
        },
        children: [
            {
                path: 'userCenter',
                name: 'userCenter',
                component: resolve => require(['../views/my/UserCenter.vue'], resolve),
                meta: {
                    menuTitle: '个人中心',
                },
            },
            {
                path: 'signUp',
                name: 'signUp',
                component: resolve => require(['../views/my/SignUp.vue'], resolve),
                meta: {
                    menuTitle: '注册',
                },
            },
        ],
    },
];
