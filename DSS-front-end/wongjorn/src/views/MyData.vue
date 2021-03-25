<template>
  <div class="bgcolor">
    <br />
    <br />
    <table class="container" border="1">
      <tr>
        
        <th>ชื่อร้านอาหาร</th>
        <th>ประเภทอาหาร</th>
        <th>เรทราคา</th>
        <th>ตัวเลือกบริการ</th>
        <th>วันที่เปิด เวลาที่เปิด</th>
        <th>ตำแหน่งที่ตี่ง</th>
        <th>Edit</th>
        <th>Delete</th>
                
      </tr>
        <tr v-for="(item,index) in resturant_name" :key="index" >
            <td>{{ item.name }}</td>
            <td ><font v-for="cat in item.category" :key="cat"> {{cat}} <br></font></td>
            <td>{{ item.pricerate }}</td>
            <td> <font v-for="(ser, in2) in item.service" :key="in2"> {{ item.service[in2] }} <br> </font> </td>
            
            <td> Monday : {{item.date[index].monday}} <br> Tuesday : {{item.date[index].tuesday}} <br> Wednesday : {{ item.date[index].wednesday }}
            <br> Thursday : {{ item.date[index].thursday }} <br> Friday : {{item.date[index].friday}} <br> Saturday : {{ item.date[index].saturday}}
            <br> Sunday : {{ item.date[index].sunday }} </td>
            <td>{{ item.location }}</td>
            <!-- <td>{{ item.map }}</td> -->
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>

      
      
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MyData",
  component: {},
  data() {
      return {
          resturant_name:[],
          time:""
      }
  },
  mounted() {
    axios
      .get("http://www.localhost:2002/api/getData/")
      .then((response) => {
        
        console.log("",response.data.data);
        this.resturant_name = response.data.data
        console.log(this.resturant_name);
      })
      .catch((error) => {
        console.log(error);
      });
      //console.log(this.resturant_name)
  },
  methods: {
    subtime(){
      
    },
    
  },
};
</script>

<style>
</style>