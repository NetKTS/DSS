<template>
  <div>
    <table class="container mylogintable" border="1">
        <div>
      <form action="" method="get">
        <tr>
          <td>Username</td>
          <td>Password</td>
        </tr>
        <tr>
          <td><input v-model="username" type="text" id="username" placeholder="username" /></td>
          <td><input v-model="password" type="password" id="password" placeholder="password" /></td>
        </tr>
        <tr>
          <td><input @click="check" type="submit" value="login" /></td>
        </tr>
        
      </form>
      </div>
    </table>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
      return {
          username:"",
          password:""
      }
  },
  component: {},
  methods: {
      check(){
          
          if(this.username=="admin"&&this.password=="1234"){
          console.log("login as admin");
          window.location="#/MyData"

          }else
          console.log("Worng");
      }
  },
};

</script>

<style>
.mylogintable{
    margin-top: 20px;
}
</style>