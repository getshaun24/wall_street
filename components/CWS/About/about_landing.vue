<template>
  
<div class="landing_page_container"></div>
  <h1 data-speed="0.85" data-lad=".1" class="about_title">About</h1>
  <h1 data-speed="0.5" data-lad=".2" class="about_title">CWS</h1>
  <!-- <h2 class="about_subtitle">and more</h2> -->
  <img data-speed="1.1" src="~/assets/content/about/about_1.jpg"  class="landing_page_img">

  <div class="landing_page_container"></div>

</template>


<style scoped>

.landing_page_container {
  position: relative;
  width: 100%;
  height: 1vh;
}
.landing_page_img {
  width: 65vw;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  margin-left:30%;
  margin-top:10%;
  opacity: 1;
  border-radius: 40px;
}

.about_title{
  z-index: 5;
  position: relative;
  margin-left:5%;
  margin-top:18%;
  line-height: 0;
  background: -webkit-linear-gradient(-45deg, blue, yellow, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 2px white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white; 
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5)); /*This is your drop shadow. Adjust as needed.*/
  -webkit-text-stroke: 4px rgb(6, 100, 162);
  text-stroke: 4px rgb(6, 100, 162)
}



.about_subtitle{
  z-index: 5;
  position: relative;
  margin-left:5%;
  margin-top:-8%;
  background: -webkit-linear-gradient(-45deg, blue, yellow, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 2px white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white; 
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5)); /*This is your drop shadow. Adjust as needed.*/
}

</style>
