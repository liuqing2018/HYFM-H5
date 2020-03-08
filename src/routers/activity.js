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
            {
                path: 'activityInfo',
                name: 'activityInfo',
                component: resolve => require(['../views/activity/ActivityInfo.vue'], resolve),
                meta: {
                    menuTitle: '活动详情',
                },
            },
            {
                path: 'joinActivity',
                name: 'joinActivity',
                component: resolve => require(['../views/activity/JoinActivity.vue'], resolve),
                meta: {
                    menuTitle: '报名活动',
                },
            },
            {
                path: 'memberList',
                name: 'memberList',
                component: resolve => require(['../views/activity/MemberList.vue'], resolve),
                meta: {
                    menuTitle: '活动参与人',
                },
            },
        ],
    },
];
