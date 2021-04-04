<template>
  <div class="body">
    <br>
    <center>
          <label class="left font2" style="font-size:48px;font-weight:bold;">{{ getitem.name }}</label><br>
          <div class="card-header" style="border-radius:10px;border:1px solid black;width:800px;margin-left:5px">
    <table>
  
      <tr>
        
        <td style="width:250px;" class="center" >
          <img src="../assets/cok3.jpg" style="border-radius: 15px 15px 15px 15px;" >
          <br><br>
          <center>
          <h3 class="font2">แผนที่</h3>
          <br>
          <router-link :to="{name:'Map', params: {payload: getitem,mylocation: mylocation}}">
          <img src="../assets/map.png" style="width:70%">
          </router-link>
          <br> กดเพื่อ แสดงแผนที่
          </center>
        </td>
        <td style="width:50px;" class="center" >
         <hr
                style="border-radius: 5px;height:500px;border-width:0;color:black;background-color:black;width:1px"
              />
        </td>
        <td style="width:400px;">
          
          <label class="left font2" style="font-size:20px;font-weight:bold;">ประเภทอาหาร</label><br>
          <label class="left font2" style="font-size:20px;margin-left:30px"><font v-for="cat in getitem.category" :key="cat"> {{cat}} </font></label><br>
          <label class="left font2" style="font-size:20px;font-weight:bold;">เวลาเปิด-ปิด</label><br>
          <label class="left font2" style="font-size:20px;margin-left:30px">
            Monday : {{getitem.date[0].monday}} <br>
            Tuesday : {{getitem.date[0].tuesday}} <br>
            Wednesday : {{getitem.date[0].wednesday}} <br>
            Thursday : {{getitem.date[0].thursday}} <br>
            Friday : {{getitem.date[0].friday}} <br>
            Saturday : {{getitem.date[0].saturday}} <br>
            Sunday : {{getitem.date[0].sunday}} <br>
            </label><br>
          <label class="left font2" style="font-size:20px;font-weight:bold;">เรทราคา</label><br>
          <label class="left font2" style="font-size:20px;margin-left:30px">{{ getitem.pricerate }}</label><br>
          <label class="left font2" style="font-size:20px;font-weight:bold;">ตัวเลือกการบริการ</label><br>
          <label class="left font2" style="font-size:20px;margin-left:30px"><font v-for="ser in getitem.service" :key="ser"> {{ser}} <br> </font></label><br>
          <label class="left font2" style="font-size:20px;font-weight:bold;">เบอร์โทรติดต่อ</label><br>
          <label class="left font2" style="font-size:20px;margin-left:30px"><font v-for="tel in getitem.tel" :key="tel"> {{tel}}</font></label><br>
          <label class="left font2" style="font-size:20px;font-weight:bold;">ที่อยู่ร้าน</label><br>
          <label class="left font2" style="font-size:20px;margin-left:30px">{{ getitem.location }}</label><br>
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
          >
            Back
          </button>
          </router-link>
          <router-link to="/Home_info">
          <button
            class="btn btn-primary pad font"
            style="width:100px"
            type="submit"
          >
            Main
          </button>
          </router-link>
        </center>
      </div>
      <br>
  </div>
</template>

<script>
// import Mydata from "./MyData";

export default {
  name:"Details",
  props:{
    
  },
  data() {
    return {
      resturant_name:[],
      getitem:{},
      mylocation:{lng:0,lat:0}
    }
  },
  created() {
    this.mylocation = this.$route.params.mylocation
    console.log(this.mylocation);
    this.getitem = this.$route.params.payload
    if(this.getitem == null){
      console.log("get item Error")
      window.location="#/Home_info"
    }
    console.log("created");
    // console.log(this.$route.params);
    
    console.log("getId");
    console.log(this.getitem._id);
  },
  components:{
    
  },
  methods: {
    
  }
}

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
