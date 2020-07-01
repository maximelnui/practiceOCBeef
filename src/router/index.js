import Vue from 'vue'
import VueRouter from 'vue-router'
import PageMain from '../views/PageMain.vue'
import PageAuthorization from "../views/PageAuthorization";

Vue.use(VueRouter);

  const routes = [
  {
    path: '/auth',
    name: 'PageMain',
    component: PageMain
  },
  {
    path: '/',
    name: 'PageAuthorization',
    component: PageAuthorization
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
