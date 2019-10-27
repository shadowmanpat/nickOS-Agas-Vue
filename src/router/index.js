import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Posts from '@/components/Posts'
import Chat from '@/components/Chat'
import Rendered from '@/components/Rendered'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/rendered',
      name: 'Rendered',
      component: Rendered
    } 
  ]
})