<template>
  <div class="container">
    
    <h1>Posts</h1>
    <h3>Categories</h3>

    <p>Here is some information. This is the about page</p>
    
  <div class="row">
        <li class="col " v-for="category in categories" v-bind:key="category.id">
          <div class = "chip">           
              {{ category.name }}   
            </div>
        </li>
  </div>
      
  <div v-if="categories == 0" class="progress">
      <div class="indeterminate"></div>
  </div>
  </div>
  
</template>

<script>

import axios from 'axios';
import URLS from '../config/URLS'

export default {
  name: 'Posts',
  data: function() {
    return {
      categories : [
      ],
        posts : []
    }
 
  },

  methods :{
    getCategories : function(catPage){
      //  console.log(URLS.GETCATEGORIESURL+catPage);
        axios
      .get(URLS.GETCATEGORIESURL+catPage)
      .then(response => {
        response.data.forEach(cat => {
          this.categories.push(cat)
        });
        // console.log(response.data.length+" "+catPage)
        if(response.data.length > 0){
          this.getCategories(catPage+1)
        }
       
      })
      .catch(error => {
        console.log(error)
        
      })
      .finally(() => {
        console.log("finallyy")
        // this.loading = false
      }
      )
    },
    getPosts : function(categoryId = "", page=1,search= ""){
        console.log(URLS.GETPOSTSURL+URLS.CATEGORIES+categoryId+URLS.PAGE+page+URLS.SEARCH+search);
      var url = URLS.GETPOSTSURL+URLS.CATEGORIES+categoryId+URLS.PAGE+page+URLS.SEARCH+search
      axios
      .get(url)
      .then(response => {
        response.data.forEach(post => {
          // this.categories.push(post) sdafkljasf
          console.log(post)
        });
        console.log(response.data.length+" "+page)
        if(response.data.length > 0){
          this.getPosts(categoryId,page+1, search)
        }
       
      })
      .catch(error => {
        console.log(error)
        
      })
      .finally(() => {
        console.log("finallyy")
        // this.loading = false
      }
      )
    }

  },
  mounted(){
    this.getCategories(1)
    this.getPosts("",1,"")
  },
}
</script>
<style scoped>

</style>