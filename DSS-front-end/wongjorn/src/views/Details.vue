<template>
<body>
  <div class="container">
    <br>
    <center>
          <label class="left font2" style="font-size:48px;font-weight:bold;">ลุงอ้วน</label><br>
          <div class="card-header" style="border-radius:10px;border:1px solid black;width:800px;margin-left:5px">
    <table>
  
      <tr>
        
        <td style="width:250px;" class="center" >
          <img src="../assets/cok3.jpg" style="border-radius: 15px 15px 15px 15px;" >
          <br><br>
          <center>
          <h3 class="font2">แผนที่</h3>
          <br>
          
          <img src="../assets/map.png" style="width:70%">
          </center>
        </td>
        <td style="width:50px;" class="center" >
          <hr
                style="border-radius: 5px;height:500px;border-width:0;color:black;background-color:black;width:1px"
              />
        </td>
        <td style="width:400px;">
          
          <label class="left font2" style="font-size:20px;font-weight:bold;">ประเภทอาหาร</label><br>
          <label class="left font2" style="font-size:20px;margin-left:30px">อาหารตามสั่ง</label><br>
          <label class="left font2" style="font-size:20px;font-weight:bold;">เวลาเปิด-ปิด</label><br>
          <label class="left font2" style="font-size:20px;margin-left:30px">จันทร์ - ศุกร์</label><br>
          <label class="left font2" style="font-size:20px;font-weight:bold;">เรทราคา</label><br>
          <label class="left font2" style="font-size:20px;margin-left:30px">ต่ำกว่า 100 บาท</label><br>
          <label class="left font2" style="font-size:20px;font-weight:bold;">ตัวเลือกการบริการ</label><br>
          <label class="left font2" style="font-size:20px;margin-left:30px">สั่งกลับบ้าน , นั่งรับประทานอาหารที่ร้าน</label><br>
          <label class="left font2" style="font-size:20px;font-weight:bold;">เบอร์โทรติดต่อ</label><br>
          <label class="left font2" style="font-size:20px;margin-left:30px">061-389-4556</label><br>
          <label class="left font2" style="font-size:20px;font-weight:bold;">ที่อยู่ร้าน</label><br>
          <label class="left font2" style="font-size:20px;margin-left:30px">ตำบล เนินหอม อำเภอเมืองปราจีนบุรี ปราจีนบุรี 25230</label><br>
        </td>
      </tr>
    </table>
    </div>
    </center>
    <br>
    <div>
        <center>
          <router-link to="/form">
          <button
            class="btn btn-secondary font"
            style="width:100px"
            type="clear"
            @click="clear"
          >
            Back
          </button>
          </router-link>
          <router-link to="/Home_info">
          <button
            class="btn btn-primary pad font"
            style="width:100px"
            type="submit"
            @click="submit"
          >
            Main
          </button>
          </router-link>
        </center>
      </div>
  </div>
  </body>
</template>

<script>
export default {};
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
.font {
  font-family: Oswald;
}
.font2 {
  font-family: Athiti;
}
.center 
{
    text-align: center; 
}
.left {
  margin-left: 10px;
}
.card-header {
  background-color: #ffffff;
  width: 800px;
}
</style>
