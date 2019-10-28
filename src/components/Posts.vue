<template>
  <div class="container">
    
    <h1>Posts</h1>
        <!-- <form action=""> -->
      <div class="row">
        <div class="col "> <h5> Search Posts:</h5></div>
        <div class="col s5">
            <input type="search" v-model="search"><br>
        </div>
        <div class="col s3">
            <div class="waves-effect waves-light btn black-text darken-4" v-on:click="searchText(search)">Search</div>
        </div>
      </div>
     
      
      <!-- <input type="submit"> -->
    <!-- </form> -->
    <h3>Categories</h3>

    <p>Here is some information. This is the about page</p>
    
  <div class="row">
        <li class="col " v-for="category in categories" v-bind:key="category.id">
          <div class = "chip" v-on:click = selectCategory(category.id)>           
              {{ category.name }}   
            </div>
        </li>
  </div>
      
  <div v-if="categories == 0" class="progress">
      <div class="indeterminate"></div>
  </div>

  <div class=card v-for="post in posts" v-bind:key="post.id">
      <div class="card blue-grey darken-1">
         <div class="card-content white-text">
     <span class = "card-title"><h4>{{post.title.rendered}}</h4></span>
      <div v-html="post.excerpt.rendered"> </div>
       <div class="row">
         <p class="col s3 offset-s9">{{post.date}}</p>
       </div>
       
      </div>
       
        <div class="card-action">
          <a v-on:click="showRenderedPosts(post.content.rendered)">Read More</a>
        </div>
      </div>
  </div>
  <div v-if="loadingPosts" class="progress">
      <p><div class="indeterminate"></div></p>
  </div>
  </div>
  
</template>

<script>

import axios from 'axios';
import URLS from '../config/URLS'
import Main from '../main';

export default {
  name: 'Posts',
  data: function() {
    return {
      categories : [
      ],
        posts : [],
        nextPostPAge: 1,
        loadingPosts : false,
        categoryId: "",
        search : ""
    }
 
  },

  methods :{
    scroll(){
          window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
          console.log("bottomOfWindow")
        // this.scrolledToBottom = true // replace it with your code
        if(this.nextPostPAge> 0 && !this.loadingPosts){
          this.getPosts(this.categoryId,this.nextPostPAge,this.search)
        }
    }
 }

    },
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
      this.loadingPosts = true
      var url = URLS.GETPOSTSURL+URLS.CATEGORIES+categoryId+URLS.PAGE+page+URLS.SEARCH+search
      axios
      .get(url)
      .then(response => {
        response.data.forEach(post => {
           this.posts.push(post)
          console.log(post)
        });
        console.log(response.data.length+" "+page)
        if(response.data.length > 0){
          this.nextPostPAge = this.nextPostPAge+1
          // this.getPosts(categoryId,page+1, search)
        }else {
          this.nextPostPAge = 0
        }
       
      })
      .catch(error => {
        console.log(error)
         this.nextPostPAge = 0
        
      })
      .finally(() => {
        console.log("finallyy")
        // this.loading = false
         this.loadingPosts = false
      }
      )
    },
    showRenderedPosts: function(data){
      console.log(data)
         this.$router.push({name: 'Rendered',params: { data: data }})
    },
    selectCategory : function(id){
      this.nextPostPAge = 1
      this.posts = []
      this.categoryId = id
      this.search = ""
      this.getPosts(this.categoryId,this.nextPostPAge,this.search)
    },
    searchText : function(search){
      console.log(search)
      this.nextPostPAge = 1
      this.posts = []
      this.categoryId = ""
      this.search = search
      this.getPosts(this.categoryId,this.nextPostPAge,this.search)
    }

  },
  mounted(){
    this.getCategories(1)
    this.getPosts("",1,"")
    this.scroll()
  },
}
</script>
<style scoped>

</style>