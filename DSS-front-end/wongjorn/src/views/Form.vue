<template lang="">
  <div class="body" style="padding-top: 30px">
    <form action="" style="font-size:20px">
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
      
      <br>

      <center>
        <h2 class="font2" style="font-weight:bold;">
          ค้นหาร้านอาหารที่ใกล้ที่สุด
        </h2>
      </center>
      
    <hr
        style="border-radius: 5px;height:1px;border-width:0;color:black;background-color:black;width:auto"
      />
      <div
        class="card-header"
        style="border-radius:10px;border:1px solid black;width:225px;margin-left:5px;"
      >
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

      <br />

      <div
        class="card-header"
        style="border-radius:10px;border:1px solid black;width:auto;margin-left:5px"
      >

        <label for="category" class="font2" style="font-size:24px;font-weight:bold;"
          >ประเภทอาหาร</label
        >
        <hr
          style="border-radius: 5px;height:1px;border-width:0;color:black;background-color:black;width:1055px"
        />
        <table>
          <div class="form-check font2">
            <tr>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radio1"
                    name="radio-stacked"
                    required
                    value="1"
                    v-model.number="applicant.category"
                  />
                  <label class="custom-control-label" for="radio1">
                    อาหารตามสั่ง</label
                  >
                </div>
              </td>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radio2"
                    name="radio-stacked"
                    required
                    value="2"
                    v-model.number="applicant.category"
                  />
                  <label class="custom-control-label" for="radio2">
                    บุฟเฟ่ต์</label
                  >
                </div>
              </td>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radio3"
                    name="radio-stacked"
                    required
                    value="3"
                    v-model.number="applicant.category"
                  />
                  <label class="custom-control-label" for="radio3">
                    สเต๊ก</label
                  >
                </div>
              </td>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radio4"
                    name="radio-stacked"
                    required
                    value="4"
                    v-model.number="applicant.category"
                  />
                  <label class="custom-control-label" for="radio4">
                    ก๋วยเตี๋ยว</label
                  >
                </div>
              </td>
            </tr>

            <br />
            <tr>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radio5"
                    name="radio-stacked"
                    required
                    value="5"
                    v-model.number="applicant.category"
                  />
                  <label class="custom-control-label" for="radio5">
                    อาหารอีสาน</label
                  >
                </div>
              </td>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radio6"
                    name="radio-stacked"
                    required
                    value="6"
                    v-model.number="applicant.category"
                  />
                  <label class="custom-control-label" for="radio6">
                    เครื่องดื่ม</label
                  >
                </div>
              </td>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radio7"
                    name="radio-stacked"
                    required
                    value="7"
                    v-model.number="applicant.category"
                  />
                  <label class="custom-control-label" for="radio7">
                    ของหวาน / คาเฟ่ต์</label
                  >
                </div>
              </td>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radio8"
                    name="radio-stacked"
                    required
                    value="8"
                    v-model.number="applicant.category"
                  />
                  <label class="custom-control-label" for="radio8">
                    อาหารต่างประเทศ</label
                  >
                </div>
              </td>
            </tr>

            <br />
            <tr>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radio9"
                    name="radio-stacked"
                    required
                    value="9"
                    v-model.number="applicant.category"
                  />
                  <label class="custom-control-label" for="radio9">
                    ปิ้งย่าง</label
                  >
                </div>
              </td>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radio10"
                    name="radio-stacked"
                    required
                    value="10"
                    v-model.number="applicant.category"
                  />
                  <label class="custom-control-label" for="radio10">
                    ฟาสต์ฟู้ด/อาหารจานด่วน</label
                  >
                </div>
              </td>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radio11"
                    name="radio-stacked"
                    required
                    value="11"
                    v-model.number="applicant.category"
                  />
                  <label class="custom-control-label" for="radio11">
                    อาหารใต้</label
                  >
                </div>
              </td>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radio12"
                    name="radio-stacked"
                    required
                    value="12"
                    v-model.number="applicant.category"
                  />
                  <label class="custom-control-label" for="radio12">
                    อาหารไทย</label
                  >
                </div>
              </td>
            </tr>

            <br />
            <tr>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radio13"
                    name="radio-stacked"
                    required
                    value="13"
                    v-model.number="applicant.category"
                  />
                  <label class="custom-control-label" for="radio13">
                    ชาบู/สุกี้ยากี้</label
                  >
                </div>
              </td>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radio14"
                    name="radio-stacked"
                    required
                    value="14"
                    v-model.number="applicant.category"
                  />
                  <label class="custom-control-label" for="radio14">
                    อาหารทะเล</label
                  >
                </div>
              </td>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radio15"
                    name="radio-stacked"
                    required
                    value="15"
                    v-model.number="applicant.category"
                  />
                  <label class="custom-control-label" for="radio15">
                    อาหารจานเดียว</label
                  >
                </div>
              </td>
              <td style="border-collapse: collapse;width:275px;"></td>
            </tr>
          </div>
        </table>
      </div>

      <br />

      <div
        class="card-header"
        style="border-radius:10px;border:1px solid black;width:auto;margin-left:5px"
      >
        <label for="pricerate" class="font2" style="font-size:24px;font-weight:bold;">
          เรทราคา</label
        >
        <hr
          style="border-radius: 5px;height:1px;border-width:0;color:black;background-color:black;width:1055px"
        />
        <table>
          <div class="form-check font2">
            <tr>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radioprice1"
                    name="pricerate"
                    required
                    value="1"
                    v-model.number="applicant.pricerate"
                  />
                  <label class="custom-control-label" for="radioprice1">
                    0 - 100 บาท</label
                  >
                </div>
              </td>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radioprice2"
                    name="pricerate"
                    required
                    value="2"
                    v-model.number="applicant.pricerate"
                  />
                  <label class="custom-control-label" for="radioprice2">
                    101 - 250 บาท</label
                  >
                </div>
              </td>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radioprice3"
                    name="pricerate"
                    required
                    value="3"
                    v-model.number="applicant.pricerate"
                  />
                  <label class="custom-control-label" for="radioprice3">
                    251 - 500 บาท</label
                  >
                </div>
              </td>
              <td style="border-collapse: collapse;width:275px;">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="radioprice4"
                    name="pricerate"
                    required
                    value="4"
                    v-model.number="applicant.pricerate"
                  />
                  <label class="custom-control-label" for="radioprice4">
                    500 บาทขึ้นไป</label
                  >
                </div>
              </td>
            </tr>
          </div>
        </table>
      </div>
      <br />
      <div>
        <center>
          <button
            class="btn btn-secondary font"
            style="width:100px"
            type="clear"
            @click="clear"
          >
            Clear
          </button>
          <button
            class="btn btn-primary pad font"
            style="width:100px"
            type="submit"
            @click="submit"
          >
            Submit
          </button>
        </center>
      </div>
    </form>
    <br><br>
    <!-- <div style="margin-top:16px;color:red;">
      #Spy {{ JSON.stringify(applicant) }}
    </div> -->
  </div>
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
      applicant: {
        category: "",
        pricerate: "",
        date: new Date().getDay(),
        //service: "",
      },
      timestamp: "",
    };
  },
  methods: {
    submit() {
      alert(JSON.stringify(this.applicant));
    },
    clear() {
      this.applicant = {};
    },
  },
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
img {
  max-width: 100%;
  height: auto;
}
.pad {
  margin-left: 15px;
}
.card-header {
  background-color: #ffffff;
}
.card-body {
  background-color: #b48c64;
}
.setw170 {
  width: 170px;
}
.font {
  font-family: Oswald;
}
.font2 {
  font-family: Athiti;
}
</style>