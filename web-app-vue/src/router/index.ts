import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

//Pages
import Main from '@/views/main/Main.vue';
import Index from '@/views/index/Index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/main',
    name: 'Index',
    component: Main,
    children: [
      {
        path: '/',
        name: 'index',
        component: Index,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
