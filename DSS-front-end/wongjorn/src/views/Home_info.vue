<template>
  <div class="bgcolor body">
    <Home class="container"/>
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
<!--    search box    -->
    <table class="table-responsive-md">
      <tr>
        <td class="w-25 container-fluid">
          <div class="container-fluid" style="margin-left:-30px">    
          <b-form-input required v-model="search" placeholder="Enter name" requireds></b-form-input> 
<!--            <div class="mt-2">Value: {{ text }}</div>-->
          </div>
        </td>
        <td>
          <router-link :to="{name:'Search', params:{payload: search}}">
          <b-button variant="warning" class="font2 btn-sm" style="margin-left:-50px">search</b-button>
        </router-link>
        </td>
        <td class="vw-100 text-right" style="width: 100%;height: auto;">
          <router-link to="/form">
            <b-button variant="warning" class="font2 btn-sm">ค้นหาร้านอาหารที่ใกล้ที่สุด</b-button>
          </router-link>
        </td>
      </tr>
      <!-- <tr>
        <router-link to="/search">
          <b-button variant="warning" class="font2 btn-sm">search</b-button>
        </router-link>
      </tr> -->
    </table>


<!--    popular restaurant    -->
<table class="table-responsive-md"> 
    <div class="my-5 text-center container-fluid font2" style="background-color: whitesmoke;border:1px solid black;border-radius:10px;width:370px">
      <div class="row mb-2">
        <div class="col text-md-left"  style="padding-top:5px">
          <p style="font-size: 30px;font-weight: bolder">ร้านอาหารแนะนำ</p>
          <!--          <p class="lead">Does what it says on the tin.</p>-->
        </div>
      </div>
      <div class="row d-flex align-items-center">
<!--        previous btn    -->
        <div class="col-1 d-flex align-items-center justify-content-center">
          <a href="#carouselExampleIndicators" role="button" data-slide="prev">
            <div class="carousel-nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/>
              </svg>
            </div>
          </a>
        </div>
        <div class="col-10">
          <!--Start carousel-->
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">

<!--              slide 1   -->
              <div class="carousel-item active" >
                <div class="row">
<!--                  card 1.1  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center font">
                    <router-link :to="{name:'Details', params: {payload: resturant_name[0],mylocation:coordinates}}" style="color:white">
                      <b-card class="font2" :img-src= resturant_name[0].img img-alt="Image" img-top tag="article" style="border:1px solid black;width:250px">
                        {{resturant_name[0].name}}
                      </b-card>
<!--                    <img src="../assets/wongjornlogo2.png">-->
                    </router-link>
                  </div>      
                </div>
              </div>

              <div class="carousel-item" >
                <div class="row">
<!--                  card 1.2  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center font">
                    <router-link :to="{name:'Details', params: {payload: resturant_name[1],mylocation:coordinates}}" style="color:white">
                    <b-card class="font2" :img-src= resturant_name[1].img img-alt="Image" img-top tag="article" style="border:1px solid black;width:250px">
                      {{resturant_name[1].name}}
                    </b-card>
<!--                    <img src="../assets/wongjornlogo2.png">-->
</router-link>
                  </div>
                </div>
              </div>

<!--              slide 2 -->
              <div class="carousel-item">
                <div class="row">
<!--                  card2.1 -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center font">
                    <router-link :to="{name:'Details', params: {payload: resturant_name[3],mylocation:coordinates}}" style="color:white">
                    <b-card class="font2" :img-src= resturant_name[3].img img-alt="Image" img-top tag="article" style="border:1px solid black;width:250px">
                     {{resturant_name[3].name}}
                    </b-card>
<!--                    <img src="../assets/wongjornlogo2.png">-->
</router-link>
                  </div>
                </div>
              </div>
              <div class="carousel-item" >
                <div class="row">
<!--                  card 2.2  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center font">
                    <router-link :to="{name:'Details', params: {payload: resturant_name[4],mylocation:coordinates}}" style="color:white">
                    <b-card class="font2" :img-src= resturant_name[4].img img-alt="Image" img-top tag="article" style="border:1px solid black;width:250px">
                     {{resturant_name[4].name}}
                    </b-card>
<!--                    <img src="../assets/wongjornlogo2.png">-->
</router-link>
                  </div>
<!--                  card 2.3  -->
                  
                </div>
              </div>

<!--              slide 3 -->
              <div class="carousel-item">
                <div class="row">
<!--                  card3.1 -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center font">
                    <router-link :to="{name:'Details', params: {payload: resturant_name[6],mylocation:coordinates}}" style="color:white">
                    <b-card class="font2" :img-src= resturant_name[6].img img-alt="Image" img-top tag="article" style="border:1px solid black;width:250px">
                     {{resturant_name[6].name}}
                    </b-card>
<!--                    <img src="../assets/wongjornlogo2.png">-->
</router-link>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
<!--                  card 3.2  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center font">
                    <router-link :to="{name:'Details', params: {payload: resturant_name[7],mylocation:coordinates}}" style="color:white">
                    <b-card class="font2" :img-src= resturant_name[7].img img-alt="Image" img-top tag="article" style="border:1px solid black;width:250px">
                     {{resturant_name[7].name}}
                    </b-card>
<!--                    <img src="../assets/wongjornlogo2.png">-->
</router-link>
                  </div>
<!--                  card 3.3  -->
                  
                </div>
              </div>


              </div>
<!--        next btn  -->
      </div>
    </div>
    <div class="col-1 d-flex align-items-center justify-content-center"><a  href="#carouselExampleIndicators" data-slide="next">
          <div class="carousel-nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
              <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
            </svg>
          </div>
        </a>
        </div>
      </div>
    </div>
    
</table>

<!--    categories  -->
<table class="table-responsive-md"> 
    <div class="my-5 text-center container-fluid font2" style="background-color: whitesmoke;border:1px solid black;border-radius:10px;width:370px">
      <div class="row mb-2">
        <div class="col text-md-left"  style="padding-top:5px">
          <p style="font-size: 30px;font-weight: bolder">หาร้านอาหารตามประเภท</p>
          <!--          <p class="lead">Does what it says on the tin.</p>-->
        </div>
      </div>
      <div class="row d-flex align-items-center">
<!--        previous btn    -->
        <div class="col-1 d-flex align-items-center justify-content-center">
          <a href="#carouselExampleIndicators2" role="button" data-slide="prev">
            <div class="carousel-nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/>
              </svg>
            </div>
          </a>
        </div>
        <div class="col-10">
          <!--Start carousel-->
          <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner">
<!--              slide 1   -->
              <div class="carousel-item active">
                <div class="row">
<!--                  card 1.1  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center" >
                    <div class="container2 image">
                      <router-link :to="{name:'Category', params: {id: '001',category:'อาหารตามสั่ง'}}">
                      <img src="https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2019/03/%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B0%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%AA%E0%B8%B1%E0%B8%9A-1.jpg" alt="" style="border-radius:10px;border:1px solid black;width:250px">
                      <div class="overlay">
                        <div class="middle font2" style="color:white">
                          
                          <b-button variant="light" style="width:auto">อาหารตามสั่ง</b-button> 
                          </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
<!--                  card 1.2  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <div class="container2 image">
                      <router-link :to="{name:'Category', params: {id: '002',category:'ก๋วยเตี๋ยว'}}">
                      <img src="https://bottomlineis.co/uploads/images/image_750x_5d691a8d5f2f9.jpg" alt="" style="border-radius:10px;border:1px solid black;width:250px">
                      <div class="overlay">
                        <div class="middle font2" style="color:white">
                          <b-button variant="light" style="width:auto">ก๋วยเตี๋ยว</b-button> 
                          </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>


<!--              slide 2   -->
              <div class="carousel-item">
                <div class="row">
                  <!--                  card 1.3  -->

                  <div class="col-12 col-md d-flex align-items-center justify-content-center" >
                    <div class="container2 image">
                      <router-link :to="{name:'Category', params: {id: '003',category:'อาหารไทย'}}">
                      <img src="https://storage.thaipost.net/main/uploads/photos/big/20190528/image_big_5cecea82795fa.jpg" alt="" style="border-radius:10px;border:1px solid black;width:250px">
                      <div class="overlay">
                        <div class="middle font2" style="color:white">
                          <b-button variant="light" style="width:auto">อาหารไทย</b-button> 
                          </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
                  </div>
              </div>
              <div class="carousel-item">
                <div class="row">
<!--                  card 2.1  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <div class="container2 image">
                      <router-link :to="{name:'Category', params: {id: '004',category:'สเต๊ก'}}">
                      <img src="http://1.bp.blogspot.com/-5SQlytVoinE/VHYd1tftnZI/AAAAAAAAAJw/wIccsQKgGMc/s1600/%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B9%87%E0%B8%81.jpg" alt="" style="border-radius:10px;border:1px solid black;width:250px">
                      <div class="overlay">
                        <div class="middle font2" style="color:white">
                          <b-button variant="light" style="width:auto">สเต๊ก</b-button> 
                          </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>

              <!--              slide 3   -->
              <div class="carousel-item">
                <div class="row">
                  <!--                  card 2.2  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <div class="container2 image">
                      <router-link :to="{name:'Category', params: {id: '005',category:'อาหารอีสาน'}}">
                      <img src="https://food.mthai.com/app/uploads/2015/06/iStock_000049519500_Small.jpg" alt="" style="border-radius:10px;border:1px solid black;width:250px">
                      <div class="overlay">
                        <div class="middle font2" style="color:white">
                          <b-button variant="light" style="width:auto">อาหารอีสาน</b-button> 
                          </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
                  </div>
              </div>
              <div class="carousel-item">
                <div class="row">
<!--                  card 2.3  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center" >
                    <div class="container2 image">
                      <router-link :to="{name:'Category', params: {id: '006',category:'บุฟเฟ่ต์'}}">
                      <img src="http://f.ptcdn.info/658/041/000/o5cr2xgpr3N1gRNJ1LU-o.jpg" alt="" style="border-radius:10px;border:1px solid black;width:250px">
                      <div class="overlay">
                        <div class="middle font2" style="color:white">
                          <b-button variant="light" style="width:auto">บุฟเฟ่ต์</b-button> 
                          </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div class="row">
<!--                  card 3.1  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <div class="container2 image">
                      <router-link :to="{name:'Category', params: {id: '007',category:'ปิ้งย่าง'}}">
                      <img src="http://f.ptcdn.info/686/024/000/1413800215-2014101714-o.jpg" alt="" style="border-radius:10px;border:1px solid black;width:250px">
                      <div class="overlay">
                        <div class="middle font2" style="color:white">
                          <b-button variant="light" style="width:auto">ปิ้งย่าง</b-button> 
                          </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
                  </div>
              </div>
              <div class="carousel-item">
                <div class="row">
<!--                  card 3.2  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <div class="container2 image">
                      <router-link :to="{name:'Category', params: {id: '008',category:'อาหารจานเดียว'}}">
                      <img src="https://img.kapook.com/u/2015/surauch/cook2/PT1.jpg" alt="" style="border-radius:10px;border:1px solid black;width:250px">
                      <div class="overlay">
                        <div class="middle font2" style="color:white">
                          <b-button variant="light" style="width:auto">อาหารจานเดียว</b-button> 
                          </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>

              <!--              slide 4   -->
              <div class="carousel-item">
                <div class="row">
                  <!--                  card 3.3  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center" >
                    <div class="container2 image">
                      <router-link :to="{name:'Category', params: {id: '009',category:'ฟาสต์ฟู้ด'}}">
                      <img src="https://i0.wp.com/shopee.co.th/blog/wp-content/uploads/2020/10/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%84%E0%B8%81%E0%B9%88.jpg?resize=1280%2C720&ssl=1" alt="" style="border-radius:10px;border:1px solid black;width:250px">
                      <div class="overlay">
                        <div class="middle font2" style="color:white">
                          <b-button variant="light" style="width:auto">ฟาสต์ฟู้ด / อาหารจานด่วน</b-button> 
                          </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
                  </div>
              </div>
              <div class="carousel-item">
                <div class="row">
<!--                  card 4.1  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <div class="container2 image">
                      <router-link :to="{name:'Category', params: {id: '010',category:'อาหารใต้'}}">
                      <img src="https://api.tourismthailand.org/upload/live/content_article/4-2996.png" alt="" style="border-radius:10px;border:1px solid black;width:250px">
                      <div class="overlay">
                        <div class="middle font2" style="color:white">
                          <b-button variant="light" style="width:auto">อาหารใต้</b-button> 
                          </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>

              <!--              slide 5   -->
              <div class="carousel-item">
                <div class="row">
                  <!--                  card 4.2  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <div class="container2 image">
                      <router-link :to="{name:'Category', params: {id: '011',category:'อาหารทะเล'}}">
                      <img src="https://aowtakiabseafood.com/wp-content/uploads/2019/01/seafood002.jpg" alt="" style="border-radius:10px;border:1px solid black;width:250px">
                      <div class="overlay">
                        <div class="middle font2" style="color:white">
                          <b-button variant="light" style="width:auto">อาหารทะเล</b-button> 
                          </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
                  </div>
              </div>
              <div class="carousel-item">
                <div class="row">
<!--                  card 4.3  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center" >
                    <div class="container2 image">
                      <router-link :to="{name:'Category', params: {id: '012',category:'สุกี้ยากี้'}}">
                      <img src="https://kiji.life/eats/wp-content/uploads/2018/07/FCM_0541-1024x683.jpg" alt="" style="border-radius:10px;border:1px solid black;width:250px">
                      <div class="overlay">
                        <div class="middle font2" style="color:white">
                          <b-button variant="light" style="width:auto">ชาบู / สุกี้ยากี้</b-button> 
                          </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div class="row">
<!--                  card 5.1  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <div class="container2 image">
                      <router-link :to="{name:'Category', params: {id: '013',category:'อาหารต่างประเทศ'}}">
                      <img src="http://www.smeleader.com/wp-content/uploads/2015/01/%E0%B8%AD%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%8B%E0%B8%B9%E0%B8%8A%E0%B8%B4-JJ-Sushi-Foods-%E0%B9%81%E0%B8%AB%E0%B8%A5%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%96%E0%B8%B8%E0%B8%94%E0%B8%B4%E0%B8%9A%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%A3%E0%B8%94%E0%B9%80%E0%B8%AD-%E0%B8%9B%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%9D%E0%B8%B1%E0%B8%99%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%8B%E0%B8%B9%E0%B8%8A%E0%B8%B4-2.jpg" alt="" style="border-radius:10px;border:1px solid black;width:250px">
                      <div class="overlay">
                        <div class="middle font2" style="color:white">
                          <b-button variant="light" style="width:auto">อาหารต่างประเทศ</b-button> 
                          </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
                  </div>
              </div>
              <div class="carousel-item">
                <div class="row">
<!--                  card 5.2  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <div class="container2 image">
                      <router-link :to="{name:'Category', params: {id: '014',category:'ของหวาน'}}">
                      <img src="https://s359.kapook.com/pagebuilder/6ed57640-526b-4dd4-bf60-4f9fe6b4f16b.jpg" alt="" style="border-radius:10px;border:1px solid black;width:250px">
                      <div class="overlay">
                        <div class="middle font2" style="color:white">
                          <b-button variant="light" style="width:100px">ของหวาน / คาเฟ่ต์</b-button> 
                          </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
<div class="carousel-item">
                <div class="row">
              <!--                  card 5.3  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center" >
                    <div class="container2 image">
                      <router-link :to="{name:'Category', params: {id: '015',category:'เครื่องดื่ม'}}">
                      <img src="https://www.falconforprofessional.com/sites/default/files/green_tea_thumbnail_0.jpg" alt="" style="border-radius:10px;border:1px solid black;width:250px">
                      <div class="overlay">
                        <div class="middle font2" style="color:white">
                          <b-button variant="light" style="width:auto">เครื่องดื่ม</b-button> 
                          </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
</div>
              </div>
            </div>
          </div>
          <!--End carousel-->
        </div>
<!--        next btn  -->
        <div class="col-1 d-flex align-items-center justify-content-center"><a  href="#carouselExampleIndicators2" data-slide="next">
          <div class="carousel-nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
              <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
            </svg>
          </div>
        </a>
        </div>
      </div>
    </div>
</table>

    <br>

    <!-- <table class="container" border="1">
      <tr v-for="(item,index) in resturant_name" :key="index" >
            <font v-for="cat in item.category" :key="cat">
            <div v-if="cat.includes('อาหารไทย')">
              {{ item.name }}
              <font v-for="cat2 in item.category" :key="cat2">
                  <td>{{ cat2 }}</td>
              </font>
            </div>
            </font>      
        </tr>
    </table> -->
  </div>

</template>


<script>
import axios from "axios";
import Home from "../components/layout/Home";

export default {
  components: { Home },
  name: "MyData",
  data() {
      return {
          resturant_name:[],
          coordinates:{},
          time:"",
          search:"",
          errors: false
      }
  },
  created() {
    this.$getLocation({}).then(coordinates => {
            this.coordinates = coordinates;
            console.log(this.coordinates.lat,this.coordinates.lng);
        });
        if(this.coordinates < 0){
            window.location = "#/Home_info";
        }
  },
  mounted() {
    axios
      .get("http://www.localhost:2002/api/getrandomdata/")
      .then((response) => {
        
        console.log("",response.data.data);
        this.resturant_name = response.data.data
        console.log(this.resturant_name[0].name);
      })
      .catch((error) => {
        console.log(error);
      });
      //console.log(this.resturant_name)
  },
  methods: {
    subtime(){
      
    },
    invalidateForm() {
      this.errors = true;
    }
    
  },
  
};

</script>

<style>
.font {
  font-family: Oswald;
}
.font2 {
  font-family: Athiti, serif;
  
}
.carousel-nav-icon {
  height: 48px;
  width: 48px;
}
.carousel-item /*.col, .col-sm,*/ .col-md {
    margin: 8px;
    height: 300px;
    background-size: cover;
    background-position: center center;
  }
.container2 {
  position: relative;
  width: 100%;
}
.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.container2:hover .image {
  opacity: 0.3;
}
.container2:hover .middle {
  opacity: 1;
}
/*.overlay {*/
/*  position: absolute;*/
/*  top: 0;*/
/*  bottom: 0;*/
/*  left: 0;*/
/*  right: 0;*/
/*  height: 100%;*/
/*  width: 100%;*/
/*  opacity: 0;*/
/*  transition: .5s ease;*/
/*  background-color: #ffc93c;*/
/*}*/
.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
    backface-visibility: hidden;
}
.text {
  color: black;
  font-weight: bolder;
  font-size: 17px;
  padding: 16px 32px;

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