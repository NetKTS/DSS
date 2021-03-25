<template>
  <div id="header">
      <ul>
    <li><router-link to="/"> <button> Home </button></router-link></li>
    <li><router-link to="/wongjorn"> <button>Wongjorn</button> </router-link></li>
    <li><router-link to="/compute"><button>Compute</button></router-link></li>
    <li><router-link to="/form"><button>Form</button></router-link></li>
  </ul>
  </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
 ul{
     margin: 0;
     padding: 0;
 }
 li{
     display: inline-block;
 }


</style>