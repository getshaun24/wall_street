<template>
    
    <div class="all_investments_container">


        <div class="investment_container"></div>



        <div @click="nav_to('fund_pages/next_ai')" class="investment_container">
    <div class="video_container_outer" :style="{ 'background-color': colors[0] }">
        <div class="video_container_inner">
            <video class="video_style" autoplay muted loop playsinline>
                <source src="~/assets/content/wallstreet/fund_pages/next_ai/next_vid_square.mp4" type="video/mp4">
            </video>
        </div>
    </div>
    <div class="title_container">
            <h6 class="investment_title" :style="{ 'color': colors[1] }">NEXT AI Fund</h6>
            <h6 class="investment_title" :style="{ 'color': colors[1] }">NEXT AI Fund</h6>
        </div>
            <p class="insvestment_subtitle">A Collection of The Best</p>
        </div>

        
        <div @click="nav_to('fund_pages/nano')" class="investment_container">
            <div class="video_container_outer" :style="{ 'background-color': colors[0] }">
                <div class="video_container_inner">
                    <video class="video_style" autoplay muted loop playsinline>
                        <source src="~/assets/content/wallstreet/videos/nano_1.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="title_container">
            <h6 class="investment_title" :style="{ 'color': colors[0] }">NanoCarbon</h6>
            <h6 class="investment_title" :style="{ 'color': colors[0] }">NanoCarbon</h6>
        </div>
            <p class="insvestment_subtitle">nanocarbon technologies</p>
        </div>


        <div  @click="nav_to('fund_pages/eco')" class="investment_container">
            <div class="video_container_outer" :style="{ 'background-color': colors[1] }">
                <div class="video_container_inner">
                    <video class="video_style" autoplay muted loop playsinline>
                        <source src="~/assets/content/wallstreet/videos/oil_and_gas.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="title_container">
            <h6 class="investment_title" :style="{ 'color': colors[1] }">Eco Energy</h6>
            <h6 class="investment_title" :style="{ 'color': colors[1] }">Eco Energy</h6>
        </div>
            <p class="insvestment_subtitle">Oil & Gas Revitalization Fund</p>
        </div>
    


        <div class="investment_container is_closed">
            <div class="video_container_outer" :style="{ 'background-color': colors[2] }">
                <div class="video_container_inner">
                    <video class="video_style" autoplay muted loop playsinline ref="videoRef">
                        <source ref="videoRef" src="~/assets/content/wallstreet/videos/gww.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="title_container">
            <h6 class="investment_title" :style="{ 'color': colors[2] }">Green Worldwide</h6>
            <h6 class="investment_title" :style="{ 'color': colors[2] }">Green Worldwide</h6>
        </div>
            <p class="insvestment_subtitle">W-to-E Technologies</p>
        </div>


        <div class="investment_container"></div>


        <div class="investment_container is_closed">
            <div class="video_container_outer" :style="{ 'background-color': colors[3] }">
                <div class="video_container_inner">
                    <video ref="videoRef_1" class="video_style" autoplay muted loop playsinline>
                        <source src="~/assets/content/wallstreet/videos/impossible.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="title_container">
            <h6 class="investment_title" :style="{ 'color': colors[3] }">Impossible Foods</h6>
            <h6 class="investment_title" :style="{ 'color': colors[3] }">Impossible Foods</h6>
        </div>
            <p class="insvestment_subtitle">Healthy Alternative Meats</p>
        </div>


        <div class="investment_container"></div>


<div class="investment_container is_closed">
    <div class="video_container_outer" :style="{ 'background-color': colors[4] }">
        <div class="video_container_inner">
            <video class="video_style" autoplay muted loop playsinline>
                <source src="~/assets/content/wallstreet/videos/helpful_1.mp4" type="video/mp4">
            </video>
        </div>
    </div>
    <div class="title_container">
    <h6 class="investment_title" :style="{ 'color': colors[4] }">Helpful+</h6>
    <h6 class="investment_title" :style="{ 'color': colors[4] }">Helpful+</h6>
</div>
    <p class="insvestment_subtitle">Economically Resiliant Technologies</p>
</div>


<div @click="nav_to('investments/')" class="investment_container">
    <div class="video_container_outer" :style="{ 'background-color': colors[5] }">
        <div class="video_container_inner">
            <video class="video_style" autoplay muted loop playsinline>
                <source src="~/assets/content/wallstreet/videos/home_333.mp4" type="video/mp4">
            </video>
        </div>
    </div>
    <div class="title_container">
    <h6 class="investment_title" :style="{ 'color': colors[5] }">All Funds</h6>
    <h6 class="investment_title" :style="{ 'color': colors[5] }">All Funds</h6>
</div>
    <p class="insvestment_subtitle">Invest In The Future</p>
</div>





    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const randomHue = () => Math.floor(Math.random() * 360);
const randomSaturation = () => Math.floor(Math.random() * (70 - 30) + 30);
const colors = Array.from({ length: 6 }, () => `hsl(${randomHue()}, ${randomSaturation()}%, 50%)`);

const videoRef = ref(null);
const videoRef_1 = ref(null);

        // sleep time expects milliseconds
        function sleep (time) {
          return new Promise((resolve) => setTimeout(resolve, time));
        }



onMounted(() => {
    sleep(1000).then(() => { 


  videoRef.value.playbackRate = 0.7;
  videoRef_1.value.playbackRate = 0.6;
  
  // Add the GSAP animation
  gsap.utils.toArray('.investment_container').forEach(container => {
    gsap.from(container, {
      autoAlpha: .25, // This handles both 'opacity' and 'visibility'
      y: 100, // This will move the container up 50px (adjust as necessary)
      scrollTrigger: {
        trigger: container,
        start: "top 90%", // When the top of the element hits the bottom of the viewport
        end: "top 70%", // When the bottom of the element hits the top of the viewport
        scrub: true // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      }
    });

    let videoInner = container.querySelector('.video_container_inner');

    
      gsap.fromTo(videoInner, 
      { scale: .9 }, // Starting scale
      { scale: 1, // Ending scale
        scrollTrigger: {
          trigger: container,
          start: "top 25%",
          end: "bottom 15%",
          scrub: true
        }
      });

      gsap.fromTo(videoInner, 
      { scale: .4 }, // Starting scale
      { scale: .9, // Ending scale
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "top 85%",
          scrub: true
        }
      });

      
  });

});
});


function nav_to(page_link){
    navigateTo(page_link)
}
</script>

<style scoped>

.is_closed:hover{
  cursor: url('~/assets/content/wallstreet/closed_2.png'), pointer !important;
}

.all_investments_container{
    display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 50px;
grid-row-gap: 250px;
width:80%;
margin-left:10%;
margin-top:40%;
margin-bottom:-10%
}

.video_container_outer {
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 100%;
    height:100%;
  /* You may need to adjust the height to fit your specific needs */
    overflow: hidden; /* To respect the border-radius of the container */
    filter: drop-shadow(0 5px 5px rgba(132, 132, 132, 0.6));
}

.video_style {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    object-fit: fill;
}
.video_container_inner{
    height: 100%;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    filter: drop-shadow(0 2px 2px rgba(141, 141, 141, 0.4));
    transform: scale(.4);

}

.video_container_inner:hover {
    transform: scale(.97) !important
}

.video_container_outer:hover .video_style {
    transform: scale(1.5);
}

.title_container{
    height:60px;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    margin-bottom:-20px
}
.investment_title{
    line-height: 0;
    margin:0;
    margin-top:30px;
    margin-bottom:30px
}
.investment_title:hover{
    animation: scaleTitle 0.3s ease-in-out .5s;
  animation-fill-mode: forwards;
}

.investment_container:hover .investment_title {
  animation: scaleTitle 0.3s ease-in-out;
  animation-fill-mode: forwards;
}


@keyframes scaleTitle {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-60px);
  }
}







@media only screen and (min-width: 0px) and (max-width: 576px) {
    .all_investments_container {
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 100px;
        margin-top: -30%;
        padding-bottom: 10%;
    }
    .empty_container{
        display:none;
    }
    .inv_title{
    font-weight: 900;
    font-size: 45px;
    white-space: pre-wrap;
    padding-top:35%;
    margin:0;
    margin-left:5%;
    width:80%
}

}

@media only screen and (min-width: 576px) and (max-width: 768px) {
    .all_investments_container {
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 30px;
        grid-row-gap: 150px;
        padding-top: 15%;
        padding-bottom: 15%;
    }
    .empty_container{
        display:none;
    }
    .inv_title{
    font-weight: 900;
    font-size: 65px;
    white-space: pre-wrap;
    padding-top:20%;
    margin:0;
    margin-left:5%;
    width:80%
}

}

@media only screen and (min-width: 768px) and (max-width: 992px) {
    .all_investments_container {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 40px;
        grid-row-gap: 200px;
        padding-top: 15%;
        padding-bottom: 18%;
    }
    .inv_title{
    font-weight: 900;
    font-size: 65px;
    white-space: pre-wrap;
    padding-top:20%;
    margin:0;
    margin-left:5%;
    width:90%
}
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
    .all_investments_container {
        grid-column-gap: 45px;
        grid-row-gap: 220px;
        padding-top: 9%;
        padding-bottom: 19%;
    }
}

@media only screen and (min-width: 1200px) and (max-width: 1400px) {
    .all_investments_container {
        grid-column-gap: 48px;
        grid-row-gap: 230px;
        padding-top: 10%;
        padding-bottom: 20%;
    }
    .investment_title{
    font-size:30px
}
}

@media only screen and (min-width: 1400px) and (max-width: 1600px) {
    .all_investments_container {
        grid-column-gap: 50px;
        grid-row-gap: 240px;
        padding-top: 10%;
        padding-bottom: 20%;
    }
    .inv_title{
    font-size: 75px;
    white-space: pre-wrap;
    padding-top:10%;
    width:90%
}
.investment_title{
    font-size:40px;
    margin-top:20px;
}
}

@media only screen and (min-width: 1600px) and (max-width: 5600px) {
    .all_investments_container {
        grid-column-gap: 50px;
        grid-row-gap: 250px;
        padding-top: 10%;
        padding-bottom: 20%;
    }
    .inv_title{
    font-size: 75px;
    white-space: pre-wrap;
    padding-top:10%;
    width:90%
}

.investment_title{
    font-size:50px;
    margin-top:15px;
}
}


</style>