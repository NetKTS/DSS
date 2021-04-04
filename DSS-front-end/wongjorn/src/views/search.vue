<template>
  <div class="bgcolor body">
    <!--    pic cover   -->
    <center>
    <div style="padding-top: 30px">
    <table>
          <tr>
            <td style="border-collapse: collapse;width:450px;">
              <hr
                style="border-radius: 5px;height:3px;border-width:0;color:black;background-color:black;width:auto"
              />
            </td>
            <td style="border-collapse: collapse;width:200px;position:center;">
              <center>
                <router-link to="/login">
                  <img
                    src="../assets/wongjornlogo2.png"
                    style="width:60%;height:60%"
                    alt=""
                /></router-link>
              </center>
            </td>
            <td style="border-collapse: collapse;width:450px">
              <hr
                style="border-radius: 5px;height:3px;border-width:0;color:black;background-color:black;width:auto"
              />
            </td>
          </tr>
        </table>
    </div>
    </center>
    <table class="table-responsive-md font2">
      <tr>
          <td class="w-25" style="padding-top: 40px">

              <img src="../assets/cok3.jpg" class="rounded-circle img-fluid" alt="">

          </td>
          <td style="padding-left: 50px;padding-top: 50px;width: 100%;height: auto">
            <h1 style="font-size: 3vw">ร้านหมู</h1>
            <p style="font-size: 2vw">ส้มตำ</p>
          </td>

      </tr>
      <tr>
        <td colspan="2" style="border-collapse: collapse;width:450px;">
          <hr
              style="border-radius: 5px;height:2px;border-width:0;color:black;background-color:black;width:auto"
          />
        </td>
      </tr>

      <tr>
        <td class="w-25" style="padding-top: 40px;">

          <img src="../assets/cok3.jpg" class="rounded-circle img-fluid" alt="">

        </td>
        <td style="padding-left: 50px;padding-top: 50px;width: 100%;height: auto">
          <h1 style="font-size: 3vw">hello</h1>
          <p style="font-size: 2vw">world</p>
        </td>

      </tr>
    </table>
    <center>
      <router-link to="/Home_info">
        <b-button variant="warning" class="font2 btn-md">หน้าแรก</b-button>
      </router-link>
    </center>
  </div>

</template>


<script>
// @ is an alias to /src
export default {
  // name: 'Home',
  // components: {
  // },

  data() {
    return {
      mainProps: { blank: true, blankColor: '#777', width: 50, height: 50, class: 'm1' }
    }
  }
}

</script>

<style>
/*.font {*/
/*  font-family: Oswald;*/
/*}*/
.font2 {
  font-family: Athiti, serif;

}

.body {
  background-color: #efede8;
  animation: fadeInAnimation ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  width: 100%;
  height: auto;
}
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
img {
  width: 100%;
  height: 170px;
}
image {
  width: 100%;
}
</style>