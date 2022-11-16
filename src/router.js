import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import store from './store.js';

Vue.use(Router);

store.dispatch('autologin');

const authGuard = (to, from, next) => {
  if (store.getters.isAuth) {
    next();
  } else {
    next({ name: 'login' });
  }
};

const notAuthGuard = (to, from, next) => {
  if (!store.getters.isAuth) {
    next();
  } else {
    next({ name: 'protected' });
  }
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/RegisterComponnet.vue'),
      beforeEnter: notAuthGuard
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/LoginView.vue'),
      beforeEnter: notAuthGuard
    },
    {
      path: '/protected',
      name: 'protected',
      component: () => import('./views/ProtectedComponent.vue'),
      beforeEnter: authGuard
    }
  ]
})
