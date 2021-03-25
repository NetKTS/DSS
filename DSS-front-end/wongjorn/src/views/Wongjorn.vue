<template lang="">
    <div id="wongjorn">
        <h1>Wongjorn</h1>
        
        <button @click="count++" >clickMe</button>
        <h3>{{ count }}</h3>
        <input type="text" placeholder="Count" v-model="count">
        <ul>
            <li v-for="(item, index) in category" :key="index">{{ item }}</li>
        </ul>
        <h2 v-if="count >50">Wow </h2>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: "Wongjorn",
  mounted() {
      this.count = 0
  },
  data() {
      return {
          count:0,
          account:{
              username:"admin",
              password:"1234"
          },
          category:[
              "tamsang",
              "buffet",
              "noodle"
          ]
      }
  },
  methods: {
      initial(){
          console.log("This is Initialzization")
      },
      clickMe(){
          alert("Return")
      },
      getTimestamp(){
          return Date.now()
      }
  },
};
</script>
<style lang="">
</style>