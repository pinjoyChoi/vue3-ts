import { createRouter, createWebHistory, RouteRecordRaw, RouterView } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/',
    name: 'index',
    meta: { title: 'vue3-ts' },
    component: () => import('@/views/layout/index.vue'),
    redirect: 'overview',
    children: [
      {
        path: 'overview',
        name: 'overview',
        meta: { title: '首页', icon: 'fa-home' },
        component: () => import('@/views/overview/overview.vue')
      },
      {
        path: 'news',
        name: 'news',
        meta: { title: '消息管理', icon: 'fa-comments-o' },
        component: () => import('@/views/news/news.vue')
      },
      {
        path: 'manage-center',
        name: 'manageCenter',
        meta: { title: '管理中心', icon: 'fa-cubes' },
        component: () => <RouterView key="manageCenter" />,
        redirect: 'role',
        children: [
          {
            path: 'role',
            name: 'role',
            meta: { title: '角色管理' },
            component: () => import('@/views/role/role.vue'),
          },
          {
            path: 'user',
            name: 'user',
            meta: { title: '用户管理' },
            component: () => import('@/views/user/user.vue'),
          },
        ]
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
