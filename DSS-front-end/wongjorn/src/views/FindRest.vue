<template>
  <div class="bgcolor body">
    <!--    pic cover   -->
    <center>
      <div style="padding-top: 30px">
        <table class="table-responsive-md">
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
        <td colspan="2" style="border-collapse: collapse;width:450px;"></td>
      </tr>
    </table>
    <Home class="container" />
    <div v-if="loading">
      <center>
        <div class="font2" style="font-size: 3vw;color:black ;">
          Loading . . .
        </div>
        <br />
        <hr
          style="border-radius: 5px;height:3px;border-width:0;color:black;background-color:black;width:auto"
        />
      </center>
    </div>
    <table class="container table-responsive-md font2">
      <div v-if="resturant_name.length === 0">
        <center>
          <div class="font2" style="font-size: 3vw;color:black ;">
            ไม่พบร้านอาหารที่คุณต้องการ
          </div>
          <br />
          <hr
            style="border-radius: 5px;height:3px;border-width:0;color:black;background-color:black;width:auto"
          />
        </center>
      </div>
      <!-- <div v-if="resturant_name[0].name == ''">
        <center>
          <div class="font2" style="font-size: 3vw;color:black ;">
            Loading . . .
          </div>
          <br />
          <hr
            style="border-radius: 5px;height:3px;border-width:0;color:black;background-color:black;width:auto"
          />
        </center>
      </div> -->
      <tr v-for="(item, index) in resturant_name.slice(0,K)" :key="index">
        <!-- <font> Distance : {{ finddistance2(coordinates.lat ,coordinates.lng,item.map[0].lat,item.map[0].long,index) }}</font> -->
        <!-- <font v-for="cat in item.category" :key="cat"> -->
        <!-- <div v-if="cat.includes(cate)"> -->
        <table class="table-responsive-md font2">
          <tr v-if="dis[index] > 0 && index <= K-1 && isclose[index] != true">
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
                style="width: auto;height: auto"
              />
            </td>
            <td
              style="padding-left: 50px;padding-top: 0px;width: 100%;height: auto"
            >
              <router-link
                :to="{
                  name: 'Details',
                  params: {
                    payload: item,
                    mylocation: coordinates,
                    category: category,
                    pricerate: pricerate,
                    day: date,
                    time: time,
                  },
                }"
              >
                <font style="font-size: 2vw;color:black ;"
                  >{{ item.name }} </font
                ><br />
                <font>ระยะทาง {{ dis[index] / 1000 }} กิโลเมตร</font>
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
            <div v-if="index == k">{{ (dis[index] = 0) }};</div>
          </tr>
          <tr>
            <td
              colspan="2"
              style="border-collapse: collapse;width:450px;"
              v-if="dis[index] > 0 && index <= K-1 && isclose[index] != true"
            >
              <hr
                style="border-radius: 5px;height:2px;border-width:0;color:black;background-color:black;width:auto"
              />
            </td>
          </tr>
        </table>
        <center>
          <div v-if="index == K-1">
            <router-link to="/Home_info">
              <b-button variant="warning" class="font2 btn-md" v-bind="finish = false"
                >ย้อนกลับ
                
                </b-button
              >
            </router-link>
          </div>
        </center>
        <!-- </div> -->
        <!-- </font> -->
      </tr>
    </table>
<center>
    <div v-if="finish">
            <router-link to="/Home_info">
              <b-button variant="warning" class="font2 btn-md"
                >ย้อนกลับ</b-button
              >
            </router-link>
          </div>
          </center>
    <!-- <center>
      <router-link to="/Home_info">
            <b-button variant="warning" class="font2 btn-md">ย้อนกลับ</b-button>
          </router-link>
    </center> -->
    <br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Find",
  created() {
    this.$getLocation({}).then((coordinates) => {
      this.coordinates = coordinates;
      console.log(this.coordinates.lat, this.coordinates.lng);
    });
    // this.category = $route.params.categ;
    this.category = this.$route.params.category;
    this.pricerate = this.$route.params.pricerate;
    this.date = this.$route.params.day;
    this.time = this.$route.params.time;
    this.date = new Date().getDay();
    if (this.$route.params.pricerate == "") {
      this.pricerate = 0;
    }
    if (
      this.$route.params.category == "" &&
      this.$route.params.pricerate == ""
    ) {
      console.log("all all all all all all all ");
      this.category = "ALL";
      console.log(this.category);
      this.URL = "http://www.localhost:2002/api/getdata";
    } else if (
      this.$route.params.category != "" &&
      this.$route.params.pricerate == 0
    ) {
      this.URL =
        "http://www.localhost:2002/api/findshort/" + this.category + "/0";
    } else if (
      this.$route.params.category == "" &&
      this.$route.params.pricerate != 0
    ) {
      this.URL = "http://www.localhost:2002/api/findrate/" + this.pricerate;
    } else if (
      this.$route.params.category != "" &&
      this.$route.params.pricerate != 0
    ) {
      this.URL =
        "http://www.localhost:2002/api/findshort/" +
        this.category +
        "/" +
        this.pricerate;
    }
    console.log("URL URL URL URL " + this.URL);
    axios
      .get(this.URL)
      .then((response) => {
        // console.log("", response.data.data);
        this.resturant_name = response.data.data;

        for (this.i = 0; this.i < this.resturant_name.length; this.i++) {
          // console.log("Hi = "+this.i);
          this.finddistance2(
            this.coordinates.lat,
            this.coordinates.lng,
            this.resturant_name[this.i].map[0].lat,
            this.resturant_name[this.i].map[0].long,
            this.i
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
    //   this.sortdistance(0,0,0,0,0)
  },
  beforeMount() {
    
    axios
      .get(this.URL)
      .then((response) => {
        // console.log(response.data.data.length);
        // this.resturant_name = response.data.data;
        console.log("before mount length = " + response.data.data.le);
        this.length = response.data.data.length;
        for (this.i = 0; this.i < this.resturant_name.length; this.i++) {
          this.dis[this.i] = this.dis[this.i];
        }
        // console.log(this.dis);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {
    
    console.log(this.URL)
    if (this.date == 0) {
      this.today = "sunday";
    } else if (this.date == 1) {
      this.today = "monday";
    } else if (this.date == 2) {
      this.today = "tuesday";
    } else if (this.date == 3) {
      this.today = "wednesday";
    } else if (this.date == 4) {
      this.today = "thursday";
    } else if (this.date == 5) {
      this.today = "friday";
    } else if (this.date == 6) {
      this.today = "saturday";
    }
    console.log("log for URL" + this.URL);
    console.log("Length of restname = " + parseInt(this.length));
    axios
      .get(this.URL)
      .then((response) => {
        // console.log(response.data.data.length);
        this.resturant_name = response.data.data;
        console.log("เหนื่อย");
        console.log(response);
        this.length = response.data.data.length;
        this.sortdistance(0, 0, 0, 0, parseInt(this.length));
        for (this.i = 0; this.i < this.resturant_name.length; this.i++) {
          this.loading = false;
          this.dis[this.i] = this.dis[this.i];
          if (this.dis[this.i] <= 1) {
            this.resturant_name[this.i] = null;
          }
          if (
            this.today == "monday" &&
            this.resturant_name[this.i].date[0].monday == "ปิด"
          ) {
            this.isclose[this.i] = true;
          } else if (
            this.today == "tuesday" &&
            this.resturant_name[this.i].date[0].tuesday == "ปิด"
          ) {
            this.isclose[this.i] = true;
          } else if (
            this.today == "wednesday" &&
            this.resturant_name[this.i].date[0].wednesday == "ปิด"
          ) {
            this.isclose[this.i] = true;
          } else if (
            this.today == "thursday" &&
            this.resturant_name[this.i].date[0].thursday == "ปิด"
          ) {
            this.isclose[this.i] = true;
          } else if (
            this.today == "friday" &&
            this.resturant_name[this.i].date[0].friday == "ปิด"
          ) {
            this.isclose[this.i] = true;
          } else if (
            this.today == "saturday" &&
            this.resturant_name[this.i].date[0].saturday == "ปิด"
          ) {
            this.isclose[this.i] = true;
          } else if (
            this.today == "sunday" &&
            this.resturant_name[this.i].date[0].sunday == "ปิด"
          ) {
            this.isclose[this.i] = true;
          }
//           if (this.i == this.resturant_name.length - 1) {
// this.sortdistance(0, 0, 0, 0, parseInt(this.length));
//           }
        }
        console.log("thisdayarray");
        console.log(this.thisdayarray);
        // console.log(this.dis);
      })
      .catch((error) => {
        console.log(error);
      });
      // this.loading = false;
  },
  data() {
    return {
      count:0,
      finish:true,
      K: 10,
      resturant_name: {},
      length: 0,
      category: "",
      pricerate: 0,
      date: new Date().getDay(),
      time: new Date().getHours(),
      dis: [],
      coordinates: {
        lat: 0,
        lng: 0,
      },
      i: 0,
      n: 0,
      j: 0,
      min: 0,
      max: 0,
      tmp: 0,
      tmp2: 0,
      firsttmp: 0,
      URL: "http://www.localhost:2002/api/getcategory/",
      loading: true,
      today: "",
      day: {},
      thisdayarray: [
        {
          today: [],
        },
      ],
      isclose: [],
    };
  },
  methods: {
    finddistance2(lat1, long1, lat2, long2, index) {
      
      axios
        .get(
          "https://api.longdo.com/RouteService/json/route/guide?flon=" +
            long1 +
            "&flat=" +
            lat1 +
            "&tlon=" +
            long2 +
            "&tlat=" +
            lat2 +
            "&mode=t&type=25&locale=th&key=8a5564754580b3cda676ad2ebf437179"
        )
        .then((response) => {
          // console.log(response.data.data[0].distance)
          this.dis[index] = response.data.data[0].distance;
        });
    },
    sortdistance(i = 0, j = 0, min = 0, tmp = 0, length) {
      this.loading = false;
      console.log("Sort");
      console.log(length);
      console.log("i = " + i);
      console.log(this.dis);
      for (i = 0; i < length; i++) {
        console.log("J = " + j + " ");
        min = i;
        for (j = i + 1; j < length; j++) {
          console.log("loop 2 J : " + j);
          console.log(parseFloat(this.dis[j]));
          console.log(
            "IF Dis j : " + this.dis[j] + " < dis min : " + this.dis[min]
          );
          if (this.dis[j] < this.dis[min]) {
            console.log("true");
            min = j;
          }
        }
        console.log(
          "IF dis i : " + this.dis[i] + " > dis min :" + this.dis[min]
        );
        console.log("i = " + i);
        if (this.dis[i] > this.dis[min]) {
          console.log("Swap");
          console.log(this.resturant_name[i]);
          tmp = this.dis[i];
          this.tmp2 = this.resturant_name[i];
          this.dis[i] = this.dis[min];
          this.resturant_name[i] = this.resturant_name[min];
          this.dis[min] = tmp;
          this.resturant_name[min] = this.tmp2;
        }
      }
      console.log("Sorted");
      console.log(this.dis);
      if (this.dis.length == 0) {
        console.log("NO DATA");
        window.location = "#/NoData";
      }
    },
  },
};
</script>

<style></style>