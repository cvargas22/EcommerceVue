import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import VeeValidate from 'vee-validate'
import HomeRoutes from './home'
import AdminRoutes from './admin'
import DetailsRoutes from './details'
import CartRoutes from './cart'

Vue.use(Router)
Vue.use(VeeValidate)

export default new Router({
  routes: [
    HomeRoutes,
    AdminRoutes,
    DetailsRoutes,
    CartRoutes
  ]
})