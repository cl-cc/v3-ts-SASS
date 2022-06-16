import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
    transition?: string;
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    meta: {
      title: '登录',
      transition: 'animate__backInLeft',
    },
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/index/data',
        meta: {
          title: '首页',
          transition: 'animate__backInLeft',
        },
        component: () => import('@/views/data.vue'),
      },
      {
        path: '/index/list',
        meta: {
          title: '列表',
          transition: 'animate__backInLeft',
        },
        component: () => import('@/views/list/index.vue'),
      },
      {
        path: '/index/complexList',
        meta: {
          title: '列表',
          transition: 'animate__backInLeft',
        },
        component: () => import('@/views/complexList/index.vue'),
      },
      {
        path: '/index/packageList',
        meta: {
          title: '封装列表',
          transition: 'animate__backInLeft',
        },
        component: () => import('@/views/packageList/index.vue'),
      },
      {
        path: '/index/signList',
        meta: {
          title: '掘金签到列表',
          transition: 'animate__backInLeft',
        },
        component: () => import('@/views/signList/index.vue'),
      },
      {
        path: '/error/401',
        meta: {
          title: '401',
          transition: 'animate__backInLeft',
        },
        component: () => import('@/views/error/401.vue'),
      },
      {
        path: '/error/404',
        meta: {
          title: '404',
          transition: 'animate__backInLeft',
        },
        component: () => import('@/views/error/404.vue'),
      },
      {
        path: '/bigdata/index',
        meta: {
          title: '流程图',
          transition: 'animate__backInLeft',
        },
        component: () => import('@/views/bigdata/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
      };
    }
  },
  routes,
});

export default router;
