<template>
      <div class="chat container">
        <h2 class="center teal-text">Let's Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span class="teal-text">{{message.name}}</span>
                        <span class="grey-text text-darken-3">{{message.content}}</span>
                        <span class="grey-text time">{{message.timestamp}}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name"/>
            </div>
        </div>
    </div>
</template>

<script>

import NewMessage from '@/components/chat/NewMessage'
import db from '@/firebase/init'

export default {
  name: 'Chat',
  components:{
      NewMessage
        },
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
       feedback: null,
        messages:[]
    }
  },
    created(){
        let ref = db.collection('messages_nickosagas').orderBy('timestamp')
        ref.onSnapshot(snapshot=>{
            console.log(snapshot.docChanges())
            snapshot.docChanges().forEach(change=>{
              if(change.type == 'added'){
                let doc = change.doc
                this.messages.push({
                  id:doc.id,
                  name : doc.data().name,
                  content: doc.data().content,
                  timestamp: moment(doc.data().timestamp).format('LTS')
                })
              }
            })
        })
    }
//   data(){
//     return {
//       email: 'asdf',
//       web: 'Agsdf'
//     }
//   }
}
</script>

<style >
.chat h2{
    font-size: 2.6em;
    margin-bottom: 40px;
}
.chat span{
    font-size: 1.4em;
}
.chat .time{
    display: block;
    font-size: 0.8em;
}
  .messages{
    max-height: 300px;
    overflow: auto;
  }
</style>
