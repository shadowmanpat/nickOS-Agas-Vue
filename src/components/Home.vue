<template>
  <div class="container">
    <div class="center-align">
    
        <p>
          <img src="../assets/logo.png">
          </p> 
        <p>
          <h3 class="cyan-text">nickOS Agas</h3>
          <h4 class="cyan-text">Physicist Developer InquiringMind</h4>

          
        </p>
      
      <p>
        <div class="row">
              <a  v-on:click="showPage(61)" class="col s4 offset-s4 waves-effect waves-light btn-large black-text">Home</a>
        </div>
         <div v-on:click="showPage(15)" class="row">
              <a class="col s4 offset-s4 waves-effect waves-light btn-large black-text">About Me</a>
        </div>
         <div v-on:click="showPage(19)" class="row">
              <a class="col s4 offset-s4 waves-effect waves-light btn-large black-text">Contact Me</a>
        </div>
        </p>
         <div class="preloader-wrapper big active">
           
        <div v-if="loading === true" class="spinner-layer ">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>

          

  </div>

</template>

<script>

import ExampleComponent from "./ExampleComponent"
import Modal from "@melmacaluso/vue-modal"
import axios from 'axios';
import URLS from '../config/URLS'
import Vue from 'vue';
import Main from '../main';

export default {
  name: 'Home' ,
  data: function (){
    return {
      loading : false,
      dataToShow: ""
    }
  }
  , mounted() {
           
        },
  methods:{
    showPage: function(pageId){
      
      // .push({ name: 'Rendered', params: { data: response.data.content.rendered }})
    
      
      this.loading = true
      console.log(URLS.GETPAGEURL);
       axios
      .get(URLS.GETPAGEURL+pageId)
      .then(response => {
        console.log(response);
         console.log(response.data.content.rendered);
          this.dataToShow = response.data.content.rendered
          this.$router.push({name: 'Rendered',params: { data: response.data.content.rendered }})
          //  this.show(response.data.content.rendered)
      })
      .catch(error => {
        console.log(error)
        
      })
      .finally(() => {
        console.log("finallyy")
        this.loading = false
      }
      )
    }
  }
}
</script>
<style scoped>
/* img {
  margin-top:20px;
} */
</style>