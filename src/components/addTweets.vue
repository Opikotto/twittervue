<template>
     <form @submit.prevent="onUserSubmit">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="tweets ..." v-model="tweets">
      </div>
      <button type="submit" class="btn btn-block btn-primary">Add</button>
    </form>
    </template>
    <script>
    import { mapActions } from "vuex";
    export default {
      name: 'addTweets',
      data(){
          return {
               tweets: '',
          }
      },
      methods:{
        ...mapActions(["addTweets"]),
        onUserSubmit() {
            this.addTweets({
              name: this.tweets,
          //     email: this.email
            })
        }
      }
    }
    </script>