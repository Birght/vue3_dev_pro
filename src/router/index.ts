import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/home.vue'),
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/pages/detail/detail.vue'),
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/pages/form/form.vue'),
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/pages/table/table.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
