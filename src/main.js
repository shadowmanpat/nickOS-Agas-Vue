// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from "vue-router";

import 'v-slim-dialog/dist/v-slim-dialog.css'
import SlimDialog from 'v-slim-dialog'
import CuteModal from 'vue-cute-modal'
import VModal from 'vue-js-modal'
import Home from '@/components/Home'
import Posts from '@/components/Posts'
import Chat from '@/components/Chat'
import Rendered from '@/components/Rendered'

Vue.use(VModal, { dynamic: true })
Vue.use(CuteModal)
Vue.use(SlimDialog)

Vue.config.productionTip = false

Vue.use(VueRouter);
const routes = [
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
    component: Rendered,
    props: true
  } 
]
const router = new VueRouter({
  mode: "history",
  routes: routes
})

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
