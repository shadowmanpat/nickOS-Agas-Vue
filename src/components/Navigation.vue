<template>
    
    <nav class="navbar nav-wrapper grey darken-4">
         <a href="#" class="brand-logo center  cyan-text">nickOS Agas</a>
         
        <router-link tag="li" class="waves-effect waves-light btn black-text darken-4" v-for="routes in links" 
        v-bind:key="routes.id"
        :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav> 
  
  
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/'
        },
        {
          id: 1,
          text: 'Posts',
          page:'/posts'
        },
        {
          id: 2,
          text: 'Chat',
          page:'/chat'
        }
      ]
    }
  }
}
</script>

<style>
nav li {
  margin-left: 15px;
}
</style>