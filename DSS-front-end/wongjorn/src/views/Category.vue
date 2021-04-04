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
                  <img
                    src="../assets/cok3.jpg"
                    class="rounded-circle img-fluid"
                    alt=""
                  />
                </td>
                <td
                  style="padding-left: 50px;padding-top: 0px;width: 100%;height: auto"
                >
                  <router-link :to="{name:'Details', params: {payload: item,mylocation:coordinates}}">
                    <font style="font-size: 2vw;color:black ;">{{ item.name }}</font>
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
    </table>

    <center>
      <router-link to="/Home_info">
        <b-button variant="warning" class="font2 btn-md">หน้าแรก</b-button>
      </router-link>
    </center>
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
    subtime() {},
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
