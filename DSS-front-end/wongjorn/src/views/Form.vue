<template lang="">
    <div class="container">
        <form action="" style="font-size:20px">
            <hr> 
            <div class="setpic"> <router-link to="/login">
                <img src="../assets/formpic.png" alt=""></router-link>
            </div>
            <hr>
            <br>

            <div class="card text-white">
            <div class="card-header">
                <h5 class="alert alert-warning " > today : 
                        <font v-if="new Date().getDay()==0">Sunday</font>
                        <font v-if="new Date().getDay()==1">Monday</font>
                        <font v-if="new Date().getDay()==2">Tuesday</font>
                        <font v-if="new Date().getDay()==3">Wednesday</font>
                        <font v-if="new Date().getDay()==4">Thursday</font>
                        <font v-if="new Date().getDay()==5">Friday</font>
                        <font v-if="new Date().getDay()==6">Saturday</font>
                    </h5>
            </div>
            <table border="0">
            <div class="form-check card-body">
                <td>
                <label for="category" class="alert alert-warning" style="margin-right: 30px">ประเภทอาหาร :</label>
                </td>
                <td>
                    <!-- <div id="list-example" class="list-group " data-target="">
                        <a href="#list-item-1" class="list-group-item list-group-item-action">อาหารตามสั่ง</a>
                        <a href="#list-item-2" class="list-group-item list-group-item-action">อาหารตามสั่ง</a>
                        <a href="#list-item-3" class="list-group-item list-group-item-action">อาหารตามสั่ง</a>
                    </div> -->
                    <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radio1" name="radio-stacked" required value="1" v-model.number="applicant.category" >
    <label class="custom-control-label" for="radio1"> อาหารตามสั่ง</label>
  </div></tr>
                    <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radio2" name="radio-stacked" required value="2" v-model.number="applicant.category" >
    <label class="custom-control-label" for="radio2"> บุฟเฟ่ต์</label>
  </div></tr>
                    <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radio3" name="radio-stacked" required value="3" v-model.number="applicant.category" >
    <label class="custom-control-label" for="radio3"> สเต๊ก</label>
  </div></tr>
                    <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radio4" name="radio-stacked" required value="4" v-model.number="applicant.category" >
    <label class="custom-control-label" for="radio4"> ก๋วยเตี๋ยว</label>
  </div></tr>
                    <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radio5" name="radio-stacked" required value="5" v-model.number="applicant.category" >
    <label class="custom-control-label" for="radio5"> อาหารอีสาน</label>
  </div></tr>
                    <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radio6" name="radio-stacked" required value="6" v-model.number="applicant.category" >
    <label class="custom-control-label" for="radio6"> เครื่องดื่ม</label>
  </div></tr>
                    <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radio7" name="radio-stacked" required value="7" v-model.number="applicant.category" >
    <label class="custom-control-label" for="radio7"> ของหวาน/คาเฟ่ต์</label>
  </div></tr>
                    <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radio8" name="radio-stacked" required value="8" v-model.number="applicant.category" >
    <label class="custom-control-label" for="radio8"> อาหารต่างประเทศ</label>
  </div></tr>
                    <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radio9" name="radio-stacked" required value="9" v-model.number="applicant.category" >
    <label class="custom-control-label" for="radio9"> ปิ้งย่าง</label>
  </div></tr>
                    <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radio10" name="radio-stacked" required value="10" v-model.number="applicant.category" >
    <label class="custom-control-label" for="radio10"> ฟาสต์ฟู้ด/อาหารจานด่วน</label>
  </div></tr>
                    <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radio11" name="radio-stacked" required value="11" v-model.number="applicant.category" >
    <label class="custom-control-label" for="radio11"> อาหารใต้</label>
  </div></tr>
                    <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radio12" name="radio-stacked" required value="12" v-model.number="applicant.category" >
    <label class="custom-control-label" for="radio12"> อาหารไทย</label>
  </div></tr>
                    <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radio13" name="radio-stacked" required value="13" v-model.number="applicant.category" >
    <label class="custom-control-label" for="radio13"> ชาบู/สุกี้ยากี้</label>
  </div></tr>
                    <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radio14" name="radio-stacked" required value="14" v-model.number="applicant.category" >
    <label class="custom-control-label" for="radio14"> อาหารทะเล</label>
  </div></tr>
                    <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radio15" name="radio-stacked" required value="15" v-model.number="applicant.category" >
    <label class="custom-control-label" for="radio15"> อาหารจานเดียว</label>
  </div></tr>
  
                </td>
                        
                    
                
            </div>
            
            <div class="card-body">
                <tr>
                <td >
                <label class="alert alert-warning setw170" for="pricerate" style="margin-right: 30px"> เรทราคา :</label>
                </td>
                <td>
                <tr height="35px">
                <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radioprice1" name="pricerate" required value="1" v-model.number="applicant.pricerate" >
    <label class="custom-control-label" for="radioprice1"> 0 - 100 บาท</label>
  </div></tr>
  <tr>
                <tr height="35px"> <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radioprice2" name="pricerate" required value="2" v-model.number="applicant.pricerate" >
    <label class="custom-control-label" for="radioprice2"> 101 - 250 บาท</label>
  </div></tr>
               <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radioprice3" name="pricerate" required value="3" v-model.number="applicant.pricerate" >
    <label class="custom-control-label" for="radioprice3"> 251 - 500 บาท</label>
  </div></tr>
                <tr height="35px"><div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radioprice4" name="pricerate" required value="4" v-model.number="applicant.pricerate" >
    <label class="custom-control-label" for="radioprice4"> 500 บาทขึ้นไป</label>
  </div></tr></td></tr>
               
            </div>
            
                <div class="card-body">
                
                
                <tr>
                    <td>
                        <label class="alert alert-warning "  for="service" style="margin-right: 30px">ตัวเลือกบริการ :</label></td>
                    <td>

                        <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radioser1" name="service" required value="1" v-model.number="applicant.service" >
    <label class="custom-control-label" for="radioser1"> สั่งกลับบ้าน </label>
  </div>
  
                 <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="radioser2" name="service" required value="2" v-model.number="applicant.service" >
    <label class="custom-control-label" for="radioser2"> นั่งรับประทานอาหารที่ร้าน </label>
  </div>

                    </td>
                </tr>
                
                
            </div>
            
            </table>
                <div class="card-header">
                    <button class="btn btn-secondary" type="clear" @click="clear">Clear</button>   
                    <button class="btn btn-primary pad" type="submit" @click="submit">Submit</button>
                </div>
            </div>
        </form>
        <div style="margin-top:16px;color:red;">
            #Spy {{ JSON.stringify(applicant) }}
        </div>
    </div>
</template>
<script>
export default {
    name:"Form",
    data() {
        return {
            applicant:{
                category:"",
                pricerate:"",
                date: new Date().getDay(),
                service: ""
            },
            timestamp:""
        }
    },
    methods: {
        submit(){
            alert(JSON.stringify(this.applicant))
            
        },
        clear(){
            this.applicant = {
            }
        }
    },
}

</script>
<style>
    img{
        max-width: 100%;
        height: auto;
    }
    .pad{
        margin-left: 15px;
    }
    .card-header{
        background-color: #543414;
    }
    .card-body{
        background-color: #b48c64;
    }
    .setw170{
        width:170px
    }

</style>