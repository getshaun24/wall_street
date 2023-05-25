<template>
    <div class="home_partner_section">
      <h5 class="partner_text">
        The Wall Street Network partners with innovative companies, from startups to established enterprises, to provide smart growth strategies and funding solutions for every phase of their development.
      </h5>
  
      <swiper
        data-lag=".5"
        :effect="'coverflow'"
        :modules="modules"
        :coverflowEffect="coverflowEffect"
        :freemode="true"
        :loop="true"
        :speed="1800"
        :freeModeMomentum="true"
        :centeredSlides="true"
        :grabCursor="true"
        :breakpoints="swiperOptions.breakpoints"
        :autoplay="autoplayOptions"
        class="swiper_wrapper"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div>
            <img :class="['partner_swiper_img', slide.imgClass]" :src="slide.imgSrc">
            <p class="partner_swiper_text">{{ slide.text }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, EffectCoverflow } from "swiper";
  import { computed } from 'vue';
  import { useWindowSize } from '@vueuse/core'

    import image1 from "~/assets/content/wallstreet/logos/jp_morgan.png";
    import image2 from "~/assets/content/wallstreet/logos/plaid.png";
    import image3 from "~/assets/content/wallstreet/logos/dwolla.png";
    import image4 from "~/assets/content/wallstreet/logos/b_of_a.png";
    import image5 from "~/assets/content/wallstreet/logos/JP_logo.png";

  
  const { width } = useWindowSize();
  
  const isMobile = computed(() => width.value < 768);
  
  const modules = [EffectCoverflow, Autoplay];
  
  const coverflowEffect = {
    rotate: -7.5,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false
  };
  
  const autoplayOptions = {
    delay: 1500,
    disableOnInteraction: true
  };
  
  const swiperOptions = {
    breakpoints: {      
      0: {slidesPerView: 1.25, spaceBetween: 20}, 
      576: {slidesPerView: 1.9, spaceBetween: 20},          
      768: {slidesPerView: 2, spaceBetween: 20},   
      992: {slidesPerView: 3, spaceBetween: 60} 
    }   
  };
  
  const slides = [
    {
      imgSrc: image1,
      imgClass: 'jp_morgan',
      text: 'Our Banking Agent And Fund Partner.'
    },
    {
      imgSrc: image2,
      imgClass: 'plaid',
      text: 'Our Accredidation Partners'
    },
    {
      imgSrc: image3,
      imgClass: 'dwolla',
      text: 'Our Transfer Custodians'
    },
    {
      imgSrc: image4,
      imgClass: 'b_of_a',
      text: 'Our Banking Agent'
    },
    {
      imgSrc: image5,
      imgClass: 'jp_logo',
      text: 'Our Legal Team'
    }
  ];
  </script>
  
  <style scoped>
  .home_partner_section {
      margin-left: 5%;
      width: 90%;
      margin-top: 0%;
      margin-bottom: 10%;
      padding: 5vh 0;
    }
  
    .partner_text {
      width: 75%;
    }
  
    .partner_swiper_img {
      width: 100%; 
    }
  
    .jp_morgan {
      width: 50%; 
    }
  
    .plaid {
      width: 40%;
    }
  
    .dwolla {
      width: 80%;
    }
  
    .b_of_a {
      width: 60%;
    }
  
    .jp_logo {
      width: 18%;
    }
  
    .partner_swiper_text {
      width: 90%;
      line-height: 1.5;
      margin-top: 10%;
    }
  
    .swiper_wrapper {
      margin-top: 7%;
      width: 100%;
      border-bottom: #fff solid 1px;
      padding-bottom: 75px;
      padding-top: 30px;
    }
  
    @media screen and (min-width: 768px) {
      .home_partner_section {
        margin-top: 0%;
      }
    }
  
  </style>
  