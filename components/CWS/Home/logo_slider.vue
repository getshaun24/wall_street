<template>
    
    <div class="slide_container">
    <p class="slider_title">Trusted By Industry Leaders</p>

    <div class="logo_container">

    <swiper :breakpoints="swiperOptions.breakpoints" :modules="modules" :loop="true" :freemode="true" :speed="6000" :freeModeMomentum="true" :autoplay='{"delay": 0,"disableOnInteraction": true}' :grabCursor="true" :slides-per-view="6" :space-between="0" class="swiper_wrapper" style="transition-timing-function:linear">
      <swiper-slide><img class="logo" src="~/assets/content/wallstreet/wallstreet_verticle_1.png"></swiper-slide>
    <swiper-slide><img class="logo" src="~/assets/content/wallstreet/wallstreet_verticle_1.png"></swiper-slide>
    <swiper-slide><img class="logo" src="~/assets/content/wallstreet/wallstreet_verticle_1.png"></swiper-slide>
    <swiper-slide><img class="logo" src="~/assets/content/wallstreet/wallstreet_verticle_1.png"></swiper-slide>
    <swiper-slide><img class="logo" src="~/assets/content/wallstreet/wallstreet_verticle_1.png"></swiper-slide>
    <swiper-slide><img class="logo" src="~/assets/content/wallstreet/wallstreet_verticle_1.png"></swiper-slide>
    <swiper-slide><img class="logo" src="~/assets/content/wallstreet/wallstreet_verticle_1.png"></swiper-slide>
    <swiper-slide><img class="logo" src="~/assets/content/wallstreet/wallstreet_verticle_1.png"></swiper-slide>
    <swiper-slide><img class="logo" src="~/assets/content/wallstreet/wallstreet_verticle_1.png"></swiper-slide>
    <swiper-slide><img class="logo" src="~/assets/content/wallstreet/wallstreet_verticle_1.png"></swiper-slide>
    <swiper-slide><img class="logo" src="~/assets/content/wallstreet/wallstreet_verticle_1.png"></swiper-slide>
    <swiper-slide><img class="logo" src="~/assets/content/wallstreet/wallstreet_verticle_1.png"></swiper-slide>
    <swiper-slide><img class="logo" src="~/assets/content/wallstreet/wallstreet_verticle_1.png"></swiper-slide>
    <swiper-slide><img class="logo" src="~/assets/content/wallstreet/wallstreet_verticle_1.png"></swiper-slide>
    <swiper-slide><img class="logo" src="~/assets/content/wallstreet/wallstreet_verticle_1.png"></swiper-slide>
  </swiper>

    </div>
  </div>

</template>



<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay } from 'swiper/core';

import 'swiper/css/bundle';

const modules = [Autoplay]


const swiperOptions = {
    breakpoints: {      
      0: {slidesPerView: 2.25, spaceBetween: 20}, 
      576: {slidesPerView: 2.5, spaceBetween: 30},          
      768: {slidesPerView: 5.5, spaceBetween: 20},   
      992: {slidesPerView: 6.5, spaceBetween: 60} 
    }   
  };







</script>




<style scoped>

.swiper_wrapper {
  -webkit-transition-timing-function:linear!important; 
  -o-transition-timing-function:linear!important;
  transition-timing-function:linear!important; 
  transition:linear !important
}

swiper-slide{
    -webkit-transition-timing-function:linear!important; 
  -o-transition-timing-function:linear!important;
  transition-timing-function:linear!important; 
  transition:linear !important
}


.slider_title{
    margin-left:0%;
    text-align: center;
    width:100%;
    white-space: nowrap;
    margin-top:3%
}

.logo_container{
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    height:100px;
    cursor: pointer;
}

.logo{
    height:60px;
    width:auto;
    margin:20px 0
}



@media only screen and (min-width: 0px) and (max-width: 576px) {
  .slide_container{
    margin-top: 0px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 700px) {
  .slide_container{
    margin-top: 90px;
  }
}

@media only screen and (min-width: 700px) and (max-width: 738px) {
  .slide_container{
    margin-top: 30%;
  }
}

@media only screen and (min-width: 738px) and (max-width: 768px) {
  .slide_container{
    margin-top: 40%;
  }
}



@media only screen and (min-width: 768px) and (max-width: 992px) {
  .slide_container{
    margin-top: 90px;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1200px) and (max-width: 1400px) {
}

@media only screen and (min-width: 1400px) and (max-width: 1600px) {
}

@media only screen and (min-width: 1600px) and (max-width: 5600px) {
}

</style>