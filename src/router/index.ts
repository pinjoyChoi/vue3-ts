import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: 'news',
        name: 'news',
        component: () => import('@/views/news/news.vue')
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
