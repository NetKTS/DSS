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
                <router-link to="/Home_info">
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
    <go-top style="background-color: black"></go-top>
    <table class="table-responsive-md font2">
      <!-- <tr>
        <td>
          <router-link to="/Home_info"> -->
            <!-- <b-button variant="warning" class="font2 btn-md">ย้อนกลับ</b-button> -->
            <!-- <img src="https://pics.freeicons.io/uploads/icons/png/9541818211553167201-512.png" style="width:20%;height:100px">
          </router-link>
        </td>
      </tr> -->
      
      <tr>
        <td colspan="2" style="border-collapse: collapse;width:450px;">
          
        </td>
      </tr>
    </table>
    <Home class="container" />
    <center>
    <div class="font2" style="font-size: 3vw;color:black ;">
      </div>
      </center>
    <table class="container">
      <div v-if="loading ==true ">
        <center>
       <br>
        <hr
                style="border-radius: 5px;height:3px;border-width:0;color:black;background-color:black;width:auto"
              />
        </center>
      </div>
     <div>
        <center>
        <div class="font2" style="font-size: 3vw;color:black ;">
          ไม่พบร้านอาหารที่คุณต้องการ
        </div>
       <br>
        <hr
                style="border-radius: 5px;height:3px;border-width:0;color:black;background-color:black;width:auto"
              />
        </center>
      </div>
    </table>
    <center>
      <router-link to="/Home_info">
            <b-button variant="warning" class="font2 btn-md">ย้อนกลับ</b-button>
          </router-link>
    </center>
    <br />
  </div>
</template>

<script>
export default {
    name:"NoData"
}
</script>

<style>

</style>