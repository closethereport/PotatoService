import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

//Pages
import Main from '@/views/main/Main.vue';
import Index from '@/views/index/Index.vue';
import Team from '@/views/team/Team.vue';

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
      {
        path: '/team',
        name: 'team',
        component: Team,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
