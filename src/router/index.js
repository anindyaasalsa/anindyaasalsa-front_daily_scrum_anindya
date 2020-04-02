import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {default:Home, header: Navbar},
    // meta: {
    //   requiresAuth: true
    // }
  },{
    path: '/login',
    name: 'login',
    components: {default: Login}
  },
  {
    path: '/register',
    name: 'register',
    components: {default: Register}
  }
]

const router = new VueRouter({
  routes
})

export default router
