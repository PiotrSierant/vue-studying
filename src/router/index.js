import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComponentContactDetails from '@/components/ComponentContactDetails.vue';
import ComponentContactEdit from '@/components/ComponentContactEdit.vue';
import ErrorView from '@/views/ErrorView.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    children: [
      { path: ':name', component: ComponentContactDetails, props: true, name: 'contact-name' },
      { path: ':name/edit', component: ComponentContactEdit,
        beforeEnter: (to, from, next) => {
          const password = prompt('Password: ')
          if(password === 'abc'){
            next()
          }
          else {
            next(false)
          }
        }
      }
    ]
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorView,
  },
  {
    path: '/*',
    redirect: '/error',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
