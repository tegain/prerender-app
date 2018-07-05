import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Users from './views/Users.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/users/:id',
      name: 'user',
      component: User
    }
  ]
})
