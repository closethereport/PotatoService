import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from '@/store';

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }

  //TODO: костыль
  const date = new Date();
  date.setDate(date.getDate() + 1);
  Cookies.set('login-message', 'More rights required', {
    expired: date,
  });
  next('/login');
};

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
};

//Pages
import Main from '@/views/main/Main.vue';
import Index from '@/views/index/Index.vue';
import Team from '@/views/team/Team.vue';
import Login from '@/views/login/Login.vue';
import Profile from '@/views/profile/Profile.vue';
import Registration from '@/views/registration/Registration.vue';
import Cookies from '@/helpers/cookies';

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
      {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter: ifNotAuthenticated,
      },
      {
        path: '/profile',
        name: 'profile',
        component: Profile,
        beforeEnter: ifAuthenticated,
      },
      {
        path: '/registration',
        name: 'registration',
        component: Registration,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
