import { createRouter, createWebHistory } from 'vue-router';
export default createRouter({
    // 路由的模式的设置
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('@/views/home/index.vue'),
            meta: {
                title: '首页'
            }
        },
        {
            path: '/hospital',
            component: () => import('@/views/hospital/index.vue'),
            meta: {
                title: '医院'
            }
        },{
            path: '/',
            redirect: '/home'
        },

    ]
})