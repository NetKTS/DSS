<template>
  <div id="app" >
  
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name:"app",
  components: {
    
    },
    methods: {
      
    },
    data() {
      return {
        time:""
      }
    },
  };
</script>

<style scoped>
li{
  display: inline-block ;
  padding: 10px;
}
.content-wrapper{
  margin: 24px;
  padding: 24px;
  border-width: 1px;
  border-style: dashed;
}
 #app{
  background-color: #efede8;
}


</style>