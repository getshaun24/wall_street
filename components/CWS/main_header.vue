<template>
    <MainTransition ref="main_tansition"/>

    <div class="menu_container is_not_mobile">
        <!-- <div @click="transition_and_route('/')" ><img src="~/assets/content/homepage/home_1.png" loading="lazy" alt="" class="menu_logo" /></div> -->
      
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


    <div class="menu_items">
        <!-- <div @click="transition_and_route('/')" class="menu_item">Home</div> -->
        <div @click="transition_and_route('/services')" class="menu_item">Services</div>
        <div @click="transition_and_route('/investments')" class="menu_item">Investments</div>
        <div @click="transition_and_route('/contact')" class="menu_item">Contact</div>
        <!-- <CWSButtonsSignupLoginButton style="margin-left:7%" v-bind="sign_up_props"/> -->
        <CWSButtonsSignupLoginButton style="margin-left:7%; margin-top:-15px" v-bind="login_props"/>
    </div>

</div>


<div class="menu_container is_mobile">
    <video 
            ref="videoRef_1" 
            muted 
            playsinline
            class="logo_vid"
            @mouseenter="playVideo"
            @click="transition_and_route('/')"
        >
    <source src="~/assets/content/wallstreet/wallstreet_logo_1.mp4" type="video/mp4">
  </video>
    <div class="burger_wrap">
    <CWSButtonsBurgerButton/>
</div>

</div>

</template>


<script setup>

const sign_up_props = {
  button_text: 'Sign Up',
  background_color: '#fafdff',
  color: '#000',
  link_to: '/login_pages/sign_up'
}

const login_props = {
  button_text: 'Login',
  background_color: 'green',
  color: '#fff',
  border_color: 'green',
  link_to: '/login_pages/login'
}


const main_tansition = ref(null);
function transition_and_route(route_to) {
    main_tansition.value.animation_and_route(route_to);
}


const videoRef = ref(null);
const videoRef_1 = ref(null);

const playVideo = () => {
  if (videoRef.value) {
    videoRef.value.play();
  }
  if (videoRef_1.value) {
    videoRef_1.value.play();
  }
};

const pauseVideo = () => {
  if (videoRef.value) {
    videoRef.value.pause();
  }
  if (videoRef_1.value) {
    videoRef_1.value.pause();
  }
};

onMounted(() => {
    videoRef.value.play();
    videoRef_1.value.play();
})

</script>

<style scoped>

.menu_logo{
    width: 120px;
    margin-top: 10px;
    margin-left: 30px;
}

.menu_container{
    position: fixed;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    z-index:100;
    height:60px;
    backdrop-filter: blur(30px);
    opacity: 1;
    margin-top:-8px;
    margin-left:-8px
}
.menu_items{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    margin-left: 40%;
    margin-top: -35px;
    font-size: 20px;
    font-weight: 100;
    color: #000;
}

.menu_item{
    padding:5px 25px;
    border-radius: 50px;
    width:120px;
    text-align: center;
    cursor: pointer;
    height:20px;
    /* margin:0px 1%; */
    color:#000;
    /* line-height: 1.25; */
    justify-content: center;
    align-items: center;
}

.menu_item:hover{
    background-color: rgba(153, 223, 153, 0.8);
    color:#fff;
}

.mag_buttons{
    display: flex;
    flex-direction: row;
    }

.logo_vid{
    width:200px;
    margin-top:10px;
    margin-left:10px;
    cursor:pointer;
    border-radius:10px
}

.burger_wrap{
    margin-left:85%;
    position: absolute;
    margin-top:-50px;
}

    
@media only screen and (min-width: 0px) and (max-width: 576px) {
    .is_not_mobile{
        display:none
    }
    .burger_wrap{
    z-index:1000
}
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
    .menu_items{
    font-size: 15px;
    height:15px;
}

.is_mobile{
    display:none
}
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
    .menu_items{
    font-size: 18px;
    height:18px;
}
.is_mobile{
    display:none
}
}

@media only screen and (min-width: 1200px) and (max-width: 1400px) {
    .is_mobile{
    display:none
}
}

@media only screen and (min-width: 1400px) and (max-width: 1600px) {
    .is_mobile{
    display:none
}
}

@media only screen and (min-width: 1600px) and (max-width: 5600px) {
    .is_mobile{
    display:none
}
}




</style>