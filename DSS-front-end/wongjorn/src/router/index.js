import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Wongjorn from '../views/Wongjorn.vue'
import Compute from '../views/Compute.vue'
import Form from '../views/Form.vue'
import MyData from '../views/MyData.vue'
import login from '../views/login.vue'
import AddData from '../views/AddData.vue'
import Map from '../views/map.vue'
import Home_info from '../views/Home_info.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wongjorn',
    name: 'Wongjorn',
    component: Wongjorn
  },
  {
    path: '/compute',
    name: 'Compute',
    component: Compute
  },
  {
    path: '/form',
    name: 'From',
    component: Form
  },
  {
    path: '/MyData',
    name: 'MyData',
    component: MyData
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/AddData',
    name: 'AddData',
    component: AddData
  },
  {
    path: '/Map',
    name: 'Map',
    component: Map
  },
  {
    path: '/Home_info',
    name: 'Home_info',
    component: Home_info
  },
  {
    path: '/Details',
    name: 'Details',
    component: Details
  }

]

const router = new VueRouter({
  routes
})

export default router
