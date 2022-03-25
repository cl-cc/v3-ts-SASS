import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'Login',
    component: () => import('../views/login.vue')
}, {
    path: '/index',
    name: 'Index',
    component: () => import('../views/Home.vue'),
    children: [{
        path: '/index/data',
        name: '首页',
        component: () => import('../views/data.vue')
    }, {
        path: '/index/list',
        name: '列表',
        component: () => import('../views/list.vue')
    }, {
        path: '/error/401',
        name: '401',
        component: () => import('../views/error/401.vue')
    }, {
        path: '/error/404',
        name: '404',
        component: () => import('../views/error/404.vue')
    }
    ]
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;