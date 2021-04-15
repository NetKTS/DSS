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
        <div class="font2" style="font-size: 3vw;color:black ;">
          Loading . . .
        </div>
       <br>
        <hr
                style="border-radius: 5px;height:3px;border-width:0;color:black;background-color:black;width:auto"
              />
        </center>
      </div>
      <tr v-for="(item, index) in resturant_name" :key="index">
        <!-- <font> Distance : {{ finddistance2(coordinates.lat ,coordinates.lng,item.map[0].lat,item.map[0].long,index) }}</font> -->
        <!-- <font v-for="cat in item.category" :key="cat"> -->
          <!-- <div v-if="cat.includes(cate)"> -->
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
                  <router-link :to="{name:'Details', params: {payload: item,mylocation:coordinates,category:categ,id:id}}">
                    <font style="font-size: 2vw;color:black ;">{{ item.name }} </font><br>
                    <!-- <font>ระยะทาง {{  dis[index]/1000 }} กิโลเมตร</font> -->
                    <!-- <br><font> Distance : {{ finddistance2(coordinates.lat ,coordinates.lng,item.map[0].lat,item.map[0].long,index) }}</font> -->
                  </router-link>
                  <p style="font-size: 1vw">
                    <font v-for="cat2 in item.category" :key="cat2">
                      <!-- <div v-if="cat2 != null"> -->
                        <td>{{ cat2 }}</td>
                      <!-- </div> -->
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
          <!-- </div> -->
        <!-- </font> -->
      </tr>
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
import axios from "axios";
import Home from "../components/layout/Home";
import GoTop from '@inotom/vue-go-top';

export default {
  components: { Home , GoTop },
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
      categ:"",
      name: "",
      getitem: {},
      myvara:0.0,
      myvarc:0.0,
      myvard:0.0,
      rlat:0.0,
      rlong:0.0,
      dis:[],
      i:0,
      loading:true
    };
  },
  mounted() {
    axios
      .get("http://www.localhost:2002/api/getcategory/"+this.categ)
      .then((response) => {
        console.log("", response.data.data);
        this.resturant_name = response.data.data;
        console.log(this.resturant_name);
        this.loading = false;
        for(this.i = 0; this.i <this.resturant_name.length;this.i++){
        this.dis[this.i] = this.dis[this.i]
        // this.finddistance2(this.coordinates.lat,this.coordinates.lng,this.resturant_name[this.i].map[0].lat,this.resturant_name[this.i].map[0].long,this.i)
    }
    console.log(this.dis);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  beforeMount() {
    console.log("before");
    console.log(this.resturant_name);
     axios
      .get("http://www.localhost:2002/api/getcategory/"+this.categ)
      .then((response) => {
        console.log("", response.data.data);
        this.resturant_name = response.data.data;
        console.log(this.resturant_name);
        for(this.i = 0; this.i <this.resturant_name.length;this.i++){
        this.dis[this.i] = this.dis[this.i]
        // this.finddistance2(this.coordinates.lat,this.coordinates.lng,this.resturant_name[this.i].map[0].lat,this.resturant_name[this.i].map[0].long,this.i)
    }
    console.log(this.dis);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  created() {
      this.id = this.$route.params.id;
      this.categ = this.$route.params.category
      this.$getLocation({}).then(coordinates => {
            this.coordinates = coordinates;
            console.log(this.coordinates.lat,this.coordinates.lng);
        });
        if (this.categ == null) {
      console.log("get item Error");
      window.location = "#/Home_info";
    }
    axios
      .get("http://www.localhost:2002/api/getcategory/"+this.categ)
      .then((response) => {
        // console.log("", response.data.data);
        this.resturant_name = response.data.data;
        // console.log(this.resturant_name);
    //     for(this.i = 0; this.i <this.resturant_name.length;this.i++){
      
    //   this.finddistance2(this.coordinates.lat,this.coordinates.lng,this.resturant_name[this.i].map[0].lat,this.resturant_name[this.i].map[0].long,this.i)
    // }
    console.log(this.dis);
      })
      .catch((error) => {
        console.log(error);
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
     finddistance2(lat1,long1,lat2,long2,index){
       axios
      .get("https://api.longdo.com/RouteService/json/route/guide?flon="+long1+"&flat="+lat1+"&tlon="+long2+"&tlat="+lat2+"&mode=t&type=25&locale=th&key=8a5564754580b3cda676ad2ebf437179")
      .then((response) => {
        // console.log(response.data.data[0].distance)
        this.dis[index] = parseFloat(response.data.data[0].distance).toFixed(1)
      })
      this.loading = false;
    }
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
#myBtn {
  display: none; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: red; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
}

#myBtn:hover {
  background-color: #555; /* Add a dark-grey background on hover */
}
img {
  width: 100%;
  height: 170px;
}
image {
  width: 100%;
}
</style>
