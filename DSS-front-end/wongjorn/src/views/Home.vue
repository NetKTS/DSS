<template>
  <body>
    <center>
      <router-link to="/Home_info">
      <a>
        <img
          style="width:40%;height:40%;margin-top:12%;opacity:1;"
          id="img1"
          src="../assets/wongjornlogo2.png"
        />
      </a>
      
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
  animation: fadeInAnimation ease 2s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
}
@keyframes fadeInAnimation {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
.setmid {
  margin-left: 30%;
}

</style>