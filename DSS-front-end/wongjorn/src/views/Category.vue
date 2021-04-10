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
    <Home class="container" />
    <center>
    <div class="font2" style="font-size: 3vw;color:black ;">
    <div v-if="id === '001'">
       {{ cate = "อาหารตามสั่ง" }}
      </div>
      <div v-if="id === '002'">
          {{ cate = "ก๋วยเตี๋ยว" }}
      </div>
      <div v-if="id === '003'">
          {{ cate = "อาหารไทย" }}
      </div>
      <div v-if="id === '004'">
          {{ cate = "สเต๊ก" }}
      </div>
      <div v-if="id === '005'">
          {{ cate = "อาหารอีสาน" }}
      </div>
      <div v-if="id === '006'">
          {{ cate = "บุฟเฟ่ต์" }}
      </div>
      <div v-if="id === '007'">
          {{ cate = "ปิ้งย่าง" }}
      </div>
      <div v-if="id === '008'">
          {{ cate = "อาหารจานเดียว" }}
      </div>
      <div v-if="id === '009'">
          {{ cate = "ฟาสต์ฟู้ด / อาหารจานด่วน" }}
      </div>
      <div v-if="id === '010'">
          {{ cate = "อาหารใต้" }}
      </div>
      <div v-if="id === '011'">
          {{ cate = "อาหารทะเล" }}
      </div>
      <div v-if="id === '012'">
          {{ cate = "ชาบู / สุกี้ยากี้" }}
      </div>
      <div v-if="id === '013'">
          {{ cate = "อาหารต่างประเทศ" }}
      </div>
      <div v-if="id === '014'">
          {{ cate = "ของหวาน / คาเฟ่ต์" }}
      </div>
      <div v-if="id === '015'">
          {{ cate = "เครื่องดื่ม" }}
      </div>
      </div>
      </center>
    <table class="container">
      <tr v-for="(item, index) in resturant_name" :key="index">
        <font v-for="cat in item.category" :key="cat">
          <div v-if="cat.includes(cate)">
            <table class="table-responsive-md font2">
              <tr>
                <td class="w-25" style="padding-top: 0px">
                  <!-- <img
                    src="../assets/cok3.jpg"
                    class="rounded-circle img-fluid"
                    alt=""
                  /> -->
                  <img
                    :src="item.img"
                    class="rounded-circle img-fluid"
                    alt=""
                    style="width: 100%;height: 200px"
                  />
                </td>
                <td
                  style="padding-left: 50px;padding-top: 0px;width: 100%;height: auto"
                >
                  <router-link :to="{name:'Details', params: {payload: item,mylocation:coordinates}}">
                    <font style="font-size: 2vw;color:black ;">{{ item.name }} </font><br>
                    <font>ระยะทาง {{ finddistance(coordinates.lat ,coordinates.lng,item.map[0].lat,item.map[0].long)}} กิโลเมตร</font>
                  </router-link>
                  <p style="font-size: 1vw">
                    <font v-for="cat2 in item.category" :key="cat2">
                      <div v-if="cat2 != null">
                        <td>{{ cat2 }}</td>
                        
                      </div>
                    </font>
                  </p>
                </td>
              </tr>
              <tr>
                <td colspan="2" style="border-collapse: collapse;width:450px;">
                  <hr
                    style="border-radius: 5px;height:2px;border-width:0;color:black;background-color:black;width:auto"
                  />
                </td>
              </tr>
            </table>
          </div>
        </font>
      </tr>
      <center>
      <router-link to="/Home_info">
        <b-button variant="warning" class="font2 btn-md">หน้าแรก</b-button>
      </router-link>
    </center>
    </table>
    <br />
  </div>
</template>

<script>
import axios from "axios";
import Home from "../components/layout/Home";


export default {
  components: { Home },
  name: "Mydata",
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 50,
        height: 50,
        class: "m1",
      },
      resturant_name: [],
      coordinates:{lat:0,lng:0},
      time: "",
      category: "",
      name: "",
      getitem: {},
      myvara:0.0,
      myvarc:0.0,
      myvard:0.0,
      rlat:0.0,
      rlong:0.0
    };
  },
  mounted() {
    axios
      .get("http://www.localhost:2002/api/getData/")
      .then((response) => {
        console.log("", response.data.data);
        this.resturant_name = response.data.data;
        console.log(this.resturant_name);
      })
      .catch((error) => {
        console.log(error);
      });
    //console.log(this.resturant_name)
  },
  created() {
      this.id = this.$route.params.id;
      this.$getLocation({}).then(coordinates => {
            this.coordinates = coordinates;
            console.log(this.coordinates.lat,this.coordinates.lng);
        });
  },
  methods: {
    finddistance(lat1,long1,lat2,long2) {
      lat1 = lat1*Math.PI/180
      lat2 = lat2*Math.PI/180
      long1 = long1*Math.PI/180
      long2 = long2*Math.PI/180
      // this.myvara = Math.pow(Math.sin((lat-this.coordinates.lat)/2),2)+ Math.cos(this.coordinates.lat)*Math.cos(lat)*Math.pow(Math.sin((long-this.coordinates.lng)/2),2)
      // this.myvarc = 2 * Math.atan2( Math.sqrt(this.myvara), Math.sqrt(1-this.myvara))
      // this.myvard = (6373 * this.myvarc)
      
      
      return parseFloat(Math.acos(Math.sin(lat1)*Math.sin(lat2)+Math.cos(lat1)*Math.cos(lat2)*Math.cos(long1 - long2)) * 6371).toFixed(1);
    },
    
  },
};
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
