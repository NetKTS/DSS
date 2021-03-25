<template>
  <div class="bgcolor"><router-link to="/form">
    <div class="backgroundimage">
      <div class="setmid" ><img src="https://media1.giphy.com/media/24G0F8lQWYMb6jD47X/giphy.gif" alt="this slowpoke moves"  width=250/></div>
    </div></router-link>
  </div>
  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style>
.backgroundimage{
  background-image: url('../assets/wongjorn.png');
  background-size: 100vw;
  background-repeat: no-repeat;
  height: 100vh;
  
}
.bgcolor{
  background-color: #efede8;
  height: 100vh;
}
.setmid{
  margin-left: 30%;
}


</style>