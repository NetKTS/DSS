<template>
  <div class="bgcolor">
    <Header class="container"/>
    <br />
    <div class="container"  align="right"> <router-link to="/AddData" > <input type="button" value="Add Resturant"> </router-link> </div>
    <br />
    <table class="container" border="1">
      <tr>
        
        <th>ชื่อร้านอาหาร</th>
        <th>ประเภทอาหาร</th>
        <th>เรทราคา</th>
        <th>ตัวเลือกบริการ</th>
        <th>วันที่เปิด เวลาที่เปิด</th>
        <th>ตำแหน่งที่ตั้ง</th>
        <th>Edit</th>
        <th>Delete</th>
                
      </tr>
        <tr v-for="(item,index) in resturant_name" :key="index" >
            <td>{{ item.name }}</td>
            <td ><font v-for="cat in item.category" :key="cat"> {{cat}} <br></font></td>
            <td>{{ item.pricerate }}</td>
            <td> <font v-for="(ser, in2) in item.service" :key="in2"> {{ item.service[in2] }} <br> </font> </td>
            
            <td> Monday : {{item.date[0].monday}} <br> Tuesday : {{item.date[0].tuesday}} <br> Wednesday : {{ item.date[0].wednesday }}
            <br> Thursday : {{ item.date[0].thursday }} <br> Friday : {{item.date[0].friday}} <br> Saturday : {{ item.date[0].saturday}}
            <br> Sunday : {{ item.date[0].sunday }} </td>
            <td>{{ item.location }}</td>
            <!-- <td>{{ item.map }}</td> -->
            <td><router-link :to="{name:'Details', params: {payload: item,mylocation:coordinates}}"><button>Edit</button></router-link> </td>
            <td><button>Delete</button></td>
        </tr>

      
      
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/layout/Header";
export default {
  components: { Header },
  name: "MyData",
  data() {
      return {
          resturant_name:[],
          coordinates:{lat:0,lng:0},
          time:"",
          distance:[]
      }
  },
  created() {
    this.$getLocation({}).then(coordinates => {
            this.coordinates = coordinates;
            console.log(this.coordinates.lat,this.coordinates.lng);
        });
  },
  mounted() {
    axios
      .get("http://www.localhost:2002/api/getData/")
      .then((response) => {
        
        // console.log("",response.data.data);
        this.resturant_name = response.data.data
        // console.log(this.resturant_name);
      })
      .catch((error) => {
        console.log(error);
      });
      //console.log(this.resturant_name)
    axios
      .get("https://mmmap15.longdo.com/mmroute/json/route/matrix?flon[0]=100.534&flat[0]=13.745&tlon[0]=100.601&tlat[0]=13.919&key=68cd5510a9da9701e87d7ca5cbc8eaef")
      .then((response) => {
        console.log(response.data.data)
        this.distance = response.data.data
        // console.log(this.distance[0].[0].distance)   ใช้ได้
      })   
  }
  ,
  methods: {
    subtime(){
      
    },
    
  },
};
</script>

<style>
</style>