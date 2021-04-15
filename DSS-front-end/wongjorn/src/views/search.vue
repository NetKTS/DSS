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
    <table class="container">
      <div v-if="resturant_name.length===0"></div>
      <div v-if="loading ==true&&resturant_name.length === 0">
        <center>
        <div class="font2" style="font-size: 3vw;color:black ;">
          Loading. . .
        </div>
       <br>
        <hr
                style="border-radius: 5px;height:3px;border-width:0;color:black;background-color:black;width:auto"
              />
        </center>
      </div>
      
      <div v-else>
        <table class="container">
      <tr v-for="(item, index) in resturant_name" :key="index">
            <table class="table-responsive-md font2">
              <tr>
                <td class="w-25" style="padding-top: 0px">
                  <!-- <img
                    src="../assets/cok3.jpg"
                    class="rounded-circle img-fluid"
                    alt=""
                    style="width: 100%;height: 200px"
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
                    <!-- <font>ระยะทาง {{ dis[index]/1000 }} กิโลเมตร</font> -->
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
      </tr>
      </table>
      <center>
      <router-link to="/Home_info">
            <b-button variant="warning" class="font2 btn-md">ย้อนกลับ</b-button>
          </router-link>
    </center>
      </div>
    </table>
    <br>
  </div>

</template>


<script>
// @ is an alias to /src
import axios from "axios";
import GoTop from '@inotom/vue-go-top';
export default {
  // name: 'Home',

  created() {
    this.search = this.$route.params.payload
    if(this.search==""){
      window.location = "#/Home_info";
    }
    console.log(this.search);
    this.$getLocation({}).then(coordinates => {
            this.coordinates = coordinates;
            console.log(this.coordinates.lat,this.coordinates.lng);
        });
        
        axios
      .get("http://www.localhost:2002/api/getid/"+this.search)
      .then((response) => {
        console.log("Search Page");
        console.log(response.data.data);
        this.resturant_name = response.data.data
        //console.log(this.resturant_name);
        for(this.i = 0; this.i <this.resturant_name.length;this.i++){
           
      // console.log("Hi = "+this.i);
      this.finddistance2(this.coordinates.lat,this.coordinates.lng,this.resturant_name[this.i].map[0].lat,this.resturant_name[this.i].map[0].long,this.i)
    }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    GoTop
  },

  data() {
    return {
      mainProps: { blank: true, blankColor: '#777', width: 50, height: 50, class: 'm1' },
      search:"",
      resturant_name:[],
      distance:0,
      coordinates:{},
      loading:true,
      dis:[],
    }
  },
  mounted() {
    axios
      .get("http://www.localhost:2002/api/getid/"+this.search)
      .then((response) => {
        console.log("Search Page");
        console.log(response.data.data);
        this.resturant_name = response.data.data
        //console.log(this.resturant_name);
        for(this.i = 0; this.i <this.resturant_name.length;this.i++){
           
      // console.log("Hi = "+this.i);
      this.finddistance2(this.coordinates.lat,this.coordinates.lng,this.resturant_name[this.i].map[0].lat,this.resturant_name[this.i].map[0].long,this.i)
      
    }
    if(this.dis.length == 0){
                console.log("NO DATA");
                window.location = "#/NoData";
            }
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(this.resturant_name)
    axios
      .get("https://mmmap15.longdo.com/mmroute/json/route/matrix?flon[0]=100.534&flat[0]=13.745&tlon[0]=100.601&tlat[0]=13.919&key=8a5564754580b3cda676ad2ebf437179")
      .then((response) => {
        // console.log(response.data.data)
        this.distance = response.data.data
        // console.log(this.distance[0].[0].distance)   ใช้ได้
      })   
      
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