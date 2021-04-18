<template>
  <div class="body">
    <br />
    <center>
      <table class="table-responsive-md">
      <label class="font2" style="font-size:48px;font-weight:bold;">{{
        getitem.name
      }}</label
      >
      </table>
      <br />
      <table class="table-responsive-md">

      
      <div
        class="card-header"
        style="border-radius:10px;border:1px solid black;width:auto;margin-left:5px"
      >
        <table class="table-responsive-md">
          <tr>
            
            <td style="width:250px;" class="center">
              <div>
                <h3 style="color:black;" class="font">
          Today :
          <font v-if="new Date().getDay() == 0">Sunday</font>
          <font v-if="new Date().getDay() == 1">Monday</font>
          <font v-if="new Date().getDay() == 2">Tuesday</font>
          <font v-if="new Date().getDay() == 3">Wednesday</font>
          <font v-if="new Date().getDay() == 4">Thursday</font>
          <font v-if="new Date().getDay() == 5">Friday</font>
          <font v-if="new Date().getDay() == 6">Saturday</font>
        </h3>
              </div>
              <img
                :src="getitem.img"
                style="border-radius: 15px 15px 15px 15px;border:1px solid black"
              />
              <br /><br />
              <center>
                <h3 class="font2">แผนที่</h3>
                <br />
                <router-link
                  :to="{
                    name: 'Map',
                    params: { payload: getitem, mylocation: mylocation },
                  }"
                >
                  <img src="../assets/map.png" style="width:70%" />
                </router-link>
                <br />
                กดเพื่อ แสดงแผนที่
              </center>
            </td>
            <td style="width:50px;" class="center">
              <hr
                style="border-radius: 5px;height:500px;border-width:0;color:black;background-color:black;width:1px"
              />
            </td>
            <td style="width:400px;">
              <label class="left font2" style="font-size:20px;font-weight:bold;"
                >ประเภทอาหาร</label
              >
              <label class="left font2" style="font-size:20px;margin-left:30px"
                ><font v-for="cat in getitem.category" :key="cat">
                  {{ cat }}
                </font></label
              >
              <label class="left font2" style="font-size:20px;font-weight:bold;"
                >เวลาเปิด-ปิด</label
              >
              <label class="left font2" style="font-size:20px;margin-left:30px">
                <table>
                  <tr>
                    <td style="width:120px">
                     <font color="red" v-if="new Date().getDay() == 1">→</font> Monday :
                    </td>
                    <td>
                      {{ getitem.date[0].monday }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                     <font color="red" v-if="new Date().getDay() == 2">→</font> Tuesday :
                    </td>
                    <td>
                      {{ getitem.date[0].tuesday }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                     <font color="red" v-if="new Date().getDay() == 3">→</font> Wednesday :
                    </td>
                    <td>
                      {{ getitem.date[0].wednesday }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                     <font color="red" v-if="new Date().getDay() == 4">→</font> Thursday :
                    </td>
                    <td>
                      {{ getitem.date[0].thursday }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                     <font color="red" v-if="new Date().getDay() == 5">→</font> Friday :
                    </td>
                    <td>
                      {{ getitem.date[0].friday }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                     <font color="red" v-if="new Date().getDay() == 6">→</font> Saturday :
                    </td>
                    <td>
                      {{ getitem.date[0].saturday }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                     <font color="red" v-if="new Date().getDay() == 0">→</font> Sunday :
                    </td>
                    <td>
                      {{ getitem.date[0].sunday }}
                    </td>
                  </tr>
                </table>
              </label>
              <label class="left font2" style="font-size:20px;font-weight:bold;"
                >เรทราคา</label
              >
              <label
                class="left font2"
                style="font-size:20px;margin-left:30px"
                >{{ getitem.pricerate }}</label
              >
              <label class="left font2" style="font-size:20px;font-weight:bold;"
                >ตัวเลือกการบริการ</label
              >
              <label class="left font2" style="font-size:20px;margin-left:30px"
                ><font v-for="ser in getitem.service" :key="ser">
                  {{ ser }} <br /> </font
              ></label>
              <label class="left font2" style="font-size:20px;font-weight:bold;"
                >เบอร์โทรติดต่อ</label
              >
              <label class="left font2" style="font-size:20px;margin-left:30px"
                ><font v-for="tel in getitem.tel" :key="tel">
                  {{ tel }}</font
                ></label
              >
              <label class="left font2" style="font-size:20px;font-weight:bold;"
                >ที่อยู่ร้าน</label
              >
              <label
                class="left font2"
                style="font-size:20px;margin-left:30px"
                >{{ getitem.location }}</label
              >
            </td>
          </tr>
        </table>
      </div>
      </table>
    </center>
    <br />
    <div>
      <center>
        <router-link v-if="date== null" :to="{name:'Category', params: {category: category,id:id}}">
          <button
            class="btn btn-secondary font"
            style="width:100px"
            type="clear"
          >
            Back
          </button>
        </router-link>
        <router-link v-if="date!= null" :to="{name:'FindRest', params: {category: category,pricerate:pricerate,day:date,time:time}}">
          <button
            class="btn btn-secondary font"
            style="width:100px"
            type="clear"
          >
            Back
          </button>
        </router-link>
        <!-- <router-link to="/Home_info">
          <button
            class="btn btn-primary pad font"
            style="width:100px"
            type="submit"
          >
            Main
          </button>
        </router-link> -->
      </center>
    </div>
    <br />
  </div>
</template>

<script>
// import Mydata from "./MyData";
export default {
  name: "Details",
  props: {},
  data() {
    return {
      resturant_name: [],
      getitem: {},
      mylocation: { lng: 0, lat: 0 },
      category:"",
      pricerate:"",
      date: new Date().getDay(),
      time: new Date().getHours(),
    };
  },
  created() {
    this.mylocation = this.$route.params.mylocation;
    console.log(this.mylocation);
    this.getitem = this.$route.params.payload;
    this.id = this.$route.params.id;
    this.category = this.$route.params.category;
    this.pricerate = this.$route.params.pricerate;
    this.date = this.$route.params.day;
    this.time = this.$route.params.time;
    console.log(this.id);
    if (this.getitem == null) {
      console.log("get item Error");
      window.location = "#/Home_info";
    }
    console.log("created");
    // console.log(this.$route.params);

    console.log("getId");
    console.log(this.getitem._id);
  },
  components: {},
  methods: {},
};
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
.center {
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
