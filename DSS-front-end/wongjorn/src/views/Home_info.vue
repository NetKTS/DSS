<template>
  <div class="bgcolor body">
<!--    pic cover   -->
    <div style="padding-top: 30px">
    <table>
      <tr>
        <td style="border-collapse: collapse;width:450px;">
          <hr
              style="border-radius: 5px;height:3px;border-width:0;color:black;background-color:black;width:450px"
          />
        </td>
        <td style="border-collapse: collapse;width:200px;position:center;">
          <div class="align-items-center center">
            <router-link to="/form">
              <img
                  src="../assets/wongjornlogo2.png"
                  style="width:6.5rem;"
                  alt=""
              /></router-link>
          </div>
        </td>
        <td style="border-collapse: collapse;width:450px">
          <hr
              style="border-radius: 5px;height:3px;border-width:0;color:black;background-color:black;width:450px"
          />
        </td>
      </tr>
    </table>
    </div>
<!--    search box    -->
    <b-row>
      <b-col>
        <div>
          <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
          <div class="mt-2">Value: {{ text }}</div>
        </div>
      </b-col>

      <b-col></b-col>
<!--    find restaurant btn    -->
      <b-col style="padding-left: 450px">
        <b-button variant="warning">ค้นหาร้านอาหารที่ใกล้ที่สุด</b-button>
      </b-col>
    </b-row>

<!--    popular restaurant    -->
    <div class="my-5 text-center container font2" style="background-color: whitesmoke">
      <!--        text title      -->
      <div class="row mb-2">
        <div class="col text-md-left">
          <p style="font-size: 30px ">ร้านอาหารยอดนิยมในปราจีนบุรี</p>
<!--          <p class="lead">Does what it says on the tin.</p>-->
        </div>
      </div>
<!--      slideshow     -->
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
              <div class="carousel-item active">
                <div class="row">
<!--                  card 1.1  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <b-card title="Card Title 1" img-src="../assets/wongjornlogo2.png" img-alt="Image" img-top tag="article">
                      <b-card-text>
                        hello
                      </b-card-text>
                    </b-card>
<!--                    <img src="../assets/wongjornlogo2.png">-->

                  </div>
<!--                  card 1.2  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <b-card title="Card Title 1" img-src="../assets/wongjornlogo2.png" img-alt="Image" img-top tag="article">
                      <b-card-text>
                        hello
                      </b-card-text>
                    </b-card>
<!--                    <img src="../assets/wongjornlogo2.png">-->
                  </div>
<!--                  card 1.3  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center" >
                    <b-card title="Card Title 1" img-src="../assets/wongjornlogo2.png" img-alt="Image" img-top tag="article">
                      <b-card-text>
                        hello
                      </b-card-text>
                    </b-card>
<!--                    <img src="../assets/wongjornlogo2.png">-->
                  </div>
                </div>
              </div>
<!--              slide 2 -->
              <div class="carousel-item">
                <div class="row">
<!--                  card2.1 -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <b-card title="Card Title 2" img-src="../assets/wongjornlogo2.png" img-alt="Image" img-top tag="article">
                      <b-card-text>
                        hello
                      </b-card-text>
                    </b-card>
<!--                    <img src="../assets/wongjornlogo2.png">-->
                  </div>
<!--                  card 2.2  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <b-card title="Card Title 2" img-src="../assets/wongjornlogo2.png" img-alt="Image" img-top tag="article">
                      <b-card-text>
                        hello
                      </b-card-text>
                    </b-card>
<!--                    <img src="../assets/wongjornlogo2.png">-->
                  </div>
<!--                  card 2.3  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center" >
                    <b-card title="Card Title 2" img-src="../assets/wongjornlogo2.png" img-alt="Image" img-top tag="article">
                      <b-card-text>
                        hello
                      </b-card-text>
                    </b-card>
<!--                    <img src="../assets/wongjornlogo2.png">-->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End carousel-->
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

    <div class="my-5 text-center container font2" style="background-color: whitesmoke">
      <div class="row mb-2">
        <div class="col text-md-left">
          <p style="font-size: 30px ">หาร้านอาหารตามประเภท</p>
          <!--          <p class="lead">Does what it says on the tin.</p>-->
        </div>
      </div>
      <div class="row d-flex align-items-center">
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
          <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <img src="../assets/wongjornlogo2.png" alt="">

                  </div>
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <img src="../assets/wongjornlogo2.png" alt="">
                  </div>
                  <div class="col-12 col-md d-flex align-items-center justify-content-center" >
                    <img src="../assets/wongjornlogo2.png" alt="">
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <img src="../assets/wongjornlogo2.png" alt="">
                  </div>
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <img src="../assets/wongjornlogo2.png" alt="">
                  </div>
                  <div class="col-12 col-md d-flex align-items-center justify-content-center" >
                    <img src="../assets/wongjornlogo2.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End carousel-->
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
  </div>

</template>


<script>
// @ is an alias to /src
export default {
  // name: 'Home',
  // components: {
  // },

  data() {
    return{
      text: ''
    }
  }
}

</script>

<style>
/*.font {*/
/*  font-family: Oswald;*/
/*}*/
.font2 {
  font-family: Athiti,serif;
}
.carousel-nav-icon {
  height: 48px;
  width: 48px;
}
.carousel-item,
    /*.col, .col-sm,*/ .col-md {
    margin: 8px;
    height: 300px;
    background-size: cover;
    background-position: center center;
  }
.body {
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
</style>