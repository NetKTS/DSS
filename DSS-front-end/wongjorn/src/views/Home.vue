<template>
  <body>
    <center>
      <router-link to="/Home_info">
        <img
          style="width:30%;margin-top:7%;opacity:1;"
          id="img1"
          src="../assets/wongjornlogo2.png"
        />
      </router-link>
    </center>
    <h1>{{test2}}</h1>
  </body>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
body {
  background-color: #efede8;
}
.setmid {
  margin-left: 30%;
}
</style>