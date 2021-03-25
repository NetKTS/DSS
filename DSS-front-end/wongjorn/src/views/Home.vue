<template>
  <body>
    <router-link to="/form">
      <center>
          <img
            style="width:30%;margin-top:7%;opacity:1;"
            id="img1"
            src="../assets/wongjornlogo2.png"
          />
      </center>
    </router-link>
  </body>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style>
/* .backgroundimage{
  background-image: url('../assets/wongjornlogo2.png');
  height: 100%;
  margin-top: 6%;
  opacity: 1;
} */
body {
  background-color: #efede8;
}

.setmid {
  margin-left: 30%;
}
</style>
