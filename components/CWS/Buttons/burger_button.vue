<template>
    
    <MainTransition ref="main_tansition"/>  
    

    <div class="menu_background_top">

      <video 
            ref="videoRef" 
            muted 
            playsinline
            class="logo_vid"
            @mouseenter="playVideo"
            @click="transition_and_route('/')"
        >
    <source src="~/assets/content/wallstreet/wallstreet_logo_1.mp4" type="video/mp4">
  </video>


        <div class="menu_paper"></div>
    </div>
    <div class="menu_background_bottom">      
      <div class="menu_paper"></div></div>



  <div class="menu_overlay">
    <div class="menu_grid">

      <div @click="transition_and_route('/')" class="arrow_button">
       Home
    <img class="arrow" src="https://uploads-ssl.webflow.com/62d51dedb3f501ad1d54047c/62fa0319dac3955065e9a8b0_button_arrow.svg" loading="lazy" alt="" />
    </div>

    <div @click="transition_and_route('/services')" class="arrow_button">
       Services
    <img class="arrow" src="https://uploads-ssl.webflow.com/62d51dedb3f501ad1d54047c/62fa0319dac3955065e9a8b0_button_arrow.svg" loading="lazy" alt="" />
    </div>


      <div @click="transition_and_route('/investments')" class="arrow_button">
       Investments
    <img class="arrow" src="https://uploads-ssl.webflow.com/62d51dedb3f501ad1d54047c/62fa0319dac3955065e9a8b0_button_arrow.svg" loading="lazy" alt="" />
    </div>

    <div @click="transition_and_route('/contact')" class="arrow_button">
       Contact
    <img class="arrow" src="https://uploads-ssl.webflow.com/62d51dedb3f501ad1d54047c/62fa0319dac3955065e9a8b0_button_arrow.svg" loading="lazy" alt="" />
    </div>

    <div @click="transition_and_route('/login_pages/login')" class="arrow_button">
       Login
    <img class="arrow" src="https://uploads-ssl.webflow.com/62d51dedb3f501ad1d54047c/62fa0319dac3955065e9a8b0_button_arrow.svg" loading="lazy" alt="" />
    </div>


    </div>
  </div>



<div class="burger_container_menu" @click="burger_click">
    <div :class="{active:burger_active}" class="burger">
      <span></span>
    </div>
  </div>


</template>


<script setup>
import { gsap } from 'gsap'
const burger_active = ref(false);


// Determine if the current device is a mobile
function isMobile() {
  return typeof window !== 'undefined' && /Mobi|Android/i.test(window.navigator.userAgent);
}

// Use is_mobile_var for non-Safari desktop browsers
const is_mobile_var = isMobile();


function burger_click() {
    burger_active.value = !burger_active.value;

    //animate buttons
    if (burger_active.value == true) {
        gsap.from('.arrow_button', {
            opacity: 0,
            y: 170,
            duration: .4,
            stagger: 0.15,
            ease: 'power2.out',
            delay: .5
        });


        if (videoRef.value) {
    videoRef.value.play();
  }
      }
      else{
        videoRef.value.pause();

      }

      
}


const videoRef = ref(null);

const playVideo = () => {
  if (videoRef.value) {
    videoRef.value.play();
  }
};

const pauseVideo = () => {
  if (videoRef.value) {
    videoRef.value.pause();
  }
};

onMounted(() => {
    videoRef.value.play();
})


const main_tansition = ref(null);
  function transition_and_route(route_to) {
    main_tansition.value.animation_and_route(route_to);
  }



</script>


<style scoped>

.menu_overlay{
  position: fixed;
  top:100px;
  left:0px;
  height:100vh;
  z-index:200;
  width:95%;
  transform: translateY(v-bind(burger_active ? 0 : '120vw'));
  opacity: v-bind(burger_active ? 1 : 0);
  visibility: v-bind(burger_active ? 'visible' : 'hidden');
  transition:all .3s ease-in-out;
}

.menu_grid{
  display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 65px;
margin-top:15%;
margin-left:10%
}

.logo_vid{
    width:200px;
    margin-top:10px;
    margin-left:10px;
    cursor:pointer;
    border-radius:10px
}

.dahboard_logo{
  width:150px;
  margin-left:30px;
  margin-top:25px;
  cursor:pointer;
  z-index:100;
  opacity:v-bind(burger_active ? 1 : 0);
  transition:all .5s ease-in-out 1.2s;
}



.menu_background_top{
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:50vh;
    background-color:rgb(255, 255, 255);
    z-index:0;
    transition:all .5s ease-in-out;
    transform: translateX(v-bind(burger_active ? 0 : '100vw'));
}


.menu_background_bottom{
    position:fixed;
    top:50vh;
    left:0;
    width:100vw;
    height:50vh;
    background-color:rgb(255, 255, 255);
    z-index:90;
    transform: translateX(v-bind(burger_active ? 0 : '-100vw'));
    /* display: v-bind(burger_active ? 'block' : 'none'); */
    transition:all .5s ease-in-out;
}



.menu_paper{
    position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity:.5;
  background-size: 35%;
  background-repeat: repeat;
  background-image: url("~/assets/content/paper/paper_overlay_3.jpg");
  mix-blend-mode: multiply;
  pointer-events: none;
  display: v-bind(burger_active ? 'block' : 'none');
}







/* ------- burger animation ----------- */
/* ------- burger animation ----------- */
/* ------- burger animation ----------- */



.burger_container_menu{
    margin-top:0px;
    margin-right:0px;
    margin-left:-35%;
    margin-top:10%;
    z-index:250;
    padding:15px 10px 10px 20px;
    cursor: pointer;
    z-index:350
}


.croix span {
  width: 100%;
  height: 4px;
  border-radius: 12px;
  display: block;
}

.croix span::before,
.croix span::after {
  content: "";
  width: 30px;
  background-color: black;
  display: block;
  border-radius: 12px;
  height: 4px;
}

.croix span::before {
  transform: translateY(-10px);
  transform: rotate(45deg);
}

.croix span::after {
  transform: translateY(10px);
  transform: rotate(-45deg);
  margin-top: -4px;
}

/*===============================*/

.burger {
  width: 32px;
  height: 24px;
  cursor: pointer;
  right: 2rem;
  top: 2rem;
  z-index: 20;
}

.burger span {
  width: 100%;
  height: 4px;
  background-color: black;
  border-radius: 12px;
  display: block;
  transition: background-color 0.5s ease-in-out;
}

.burger span::before,
.burger span::after {
  content: "";
  width: 100%;
  background-color: black;
  display: block;
  transition: all 0.5s ease-in-out;
  border-radius: 12px;
  height: 4px;
}

.burger span::before {
  transform: translateY(-10px);
}

.burger span::after {
  transform: translateY(10px);
  margin-top: -4px;
}

.burger.active span {
  background-color: transparent;
}

.burger.active span::before {
  transform: rotateZ(45deg) translateY(0);
}

.burger.active span::after {
  transform: rotateZ(-45deg) translateY(0);
}


















/* --------------------- arrow button -------------------------- */
/* --------------------- arrow button -------------------------- */
/* --------------------- arrow button -------------------------- */

    
.arrow_button{
        padding:5px;
        border-bottom: 2px solid #000;
        width:295px;
        font-size:32px;
        transition: all ease 300ms;
        transition: color .2s ease;
        position: relative;
      cursor: pointer;
    }
    
    .arrow{
        margin-left:8px;
        transition: all ease 300ms;
        width:40px
    }
    
    
    
    .arrow_button:hover .arrow{
        margin-left:20px
    }
    
    
    .arrow_button:hover::after,
        .arrow_button:hover::before {
          width: 100%;
          left: 0;
        }
    
    .arrow_button::after,
      .arrow_button::before {
        content: ''; 
        position: absolute;
        top: calc(100% + 5px);
        width: 0;
        right: 0;
        height: 5px;
      }
    
    .arrow_button::before {
        transition: width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s;
        background: #2196f3;
      }
    
    .arrow_button::after {
        transition: width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
        background: green;
      }
    
    
    

</style>