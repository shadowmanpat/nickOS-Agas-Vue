<template>
  <div id="app">
     <Navigation></Navigation>
    <router-view />
   
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: {
    'Navigation': Navigation
  }
}
</script>

<style>

</style>