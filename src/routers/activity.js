export default [
    {
        path: '/activity',
        name: 'activity',
        component: {
            render(h) {
                return h('router-view');
            }
        },
        meta: {
            menuTitle: '活动管理',
        },
        children: [
            {
                path: 'activityList',
                name: 'activityList',
                component: resolve => require(['../views/activity/ActivityList.vue'], resolve),
                meta: {
                    menuTitle: '活动列表',
                },
            },
            {
                path: 'publicActivity',
                name: 'publicActivity',
                component: resolve => require(['../views/activity/PublishActivity.vue'], resolve),
                meta: {
                    menuTitle: '发布活动',
                },
            },
        ],
    },
];
