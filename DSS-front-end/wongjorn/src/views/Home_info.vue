<template>
  <div class="bgcolor body">
<!--    pic cover   -->
    <div style="padding-top: 30px">
    <table style="width: 100%;height: auto">
      <tr>
        <td style="border-collapse: collapse;width:450px;">
          <hr
              style="border-radius: 5px;height:3px;border-width:0;color:black;background-color:black;width:450px"
          />
        </td>
        <td style="border-collapse: collapse;width:100%;height: auto;position:center;">
          <div class="align-items-center center">
            <router-link to="/Home_info">
              <img
                  src="../assets/wongjornlogo2.png"
                  style="width:6.5rem;height: auto;"
                  alt=""
              />
            </router-link>
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
          <b-form-input v-model="text" placeholder="Enter name or category"></b-form-input>
          <div class="mt-2">Value: {{ text }}</div>
        </div>
      </b-col>

      <b-col></b-col>
<!--    find restaurant btn    -->
      <b-col style="padding-left: 450px;width: 100%;height: auto;">
        <router-link to="/form">
          <b-button variant="warning">ค้นหาร้านอาหารที่ใกล้ที่สุด</b-button>
        </router-link>
      </b-col>
    </b-row>

<!--    popular restaurant    -->
    <div class="my-5 text-center container font2" style="background-color: whitesmoke;">
      <!--        text title      -->
      <div class="row mb-2">
        <div class="col text-md-left text-center">
          <p style="font-size: 30px;font-weight: bolder">ร้านอาหารยอดนิยมในปราจีนบุรี</p>
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
        <div class="col-10" >
          <!--Start carousel-->
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner">
<!--              slide 1   -->
              <div class="carousel-item active" >
                <div class="row">
<!--                  card 1.1  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <b-card title="Card Title 1" img-src="../assets/cok3.jpg" img-alt="Image" img-top tag="article">
                      <b-card-text>
                        hello
                      </b-card-text>
                    </b-card>
<!--                    <img src="../assets/wongjornlogo2.png">-->

                  </div>
<!--                  card 1.2  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <b-card title="Card Title 1" img-src="../assets/cok3.jpg" img-alt="Image" img-top tag="article">
                      <b-card-text>
                        hello
                      </b-card-text>
                    </b-card>
<!--                    <img src="../assets/wongjornlogo2.png">-->
                  </div>
<!--                  card 1.3  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center" >
                    <b-card title="Card Title 1" img-src="../assets/foodtest.png" img-alt="Image" img-top tag="article">
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
<!--        next btn    -->
        <div class="col-1 d-flex align-items-center justify-content-center"><a href="#carouselExampleIndicators" data-slide="next">
          <div class="carousel-nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
              <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
            </svg>
          </div>
        </a>
        </div>
      </div>
    </div>

<!--    categories  -->
    <div class="my-5 text-center container font2" style="background-color: whitesmoke">
      <div class="row mb-2">
        <div class="col text-md-left">
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
                    <div class="container2">
                      <img src="../assets/cok2.jpg" alt="" class="image">
                      <div class="overlay">
                        <div class="text middle">tom yum</div>
                      </div>
                    </div>


                  </div>
<!--                  card 1.2  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <div class="container2">
                      <img src="../assets/cok3.jpg" alt="" class="image">
                      <div class="overlay">
                        <div class="text middle">som tum</div>
                      </div>
                    </div>
                  </div>
<!--                  card 1.3  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center" >
                    <div class="container2">
                      <img src="../assets/foodtest.png" alt="" class="image">
                      <div class="overlay">
                        <div class="text middle">mai ru</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
<!--              slide 2   -->
              <div class="carousel-item">
                <div class="row">
<!--                  card 2.1  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <div class="container2">
                      <img src="../assets/logo.png" alt="" class="image">
                      <div class="overlay">
                        <div class="text middle">mai ru</div>
                      </div>
                    </div>
                  </div>
<!--                  card 2.2  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center">
                    <div class="container2">
                      <img src="../assets/logo.png" alt="" class="image">
                      <div class="overlay">
                        <div class="text middle">mai ru</div>
                      </div>
                    </div>
                  </div>
<!--                  card 2.3  -->
                  <div class="col-12 col-md d-flex align-items-center justify-content-center" >
                    <div class="container2">
                      <img src="../assets/logo.png" alt="" class="image">
                      <div class="overlay">
                        <div class="text middle">mai ru</div>
                      </div>
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
  height: auto;
}
</style>