<template>


    <CWSMainHeader/>
        <CWSGSAPScrollSmoother>
    <div style="background-color: #121212; padding-bottom:10%; border-bottom: 1px solid rgb(167, 211, 232, 0.4);">
     
        




        <h3 class="fund_title">US Nanotechnology Fund A</h3>

     
      <img src="~/assets/content/wallstreet/fund_pages/nano/nano_1.png" class="landing_image"/>


    <!-- <div class="slab_container">
      <img data-speed="auto" src="~/assets/content/wallstreet/fund_pages/nano/nano_1.png" class="landing_image"/>
    </div> -->

    <div class="grid_container">


        <div class="left_info">
            <h6 class="highlights_title">Investment Highlights</h6>
            <p class="left_subtitles">Fund Name:</p>
            <p class="left_text">US Nanotechnology Fund A</p>
            <br>
            <p class="left_subtitles">Strategy:</p>
            <p class="left_text">Growth</p>
            <br>
            <p class="left_subtitles">Unit Price:</p>
            <p class="left_text">$1,000</p>
            <br>
            <p class="left_subtitles">Max Investment:</p>
            <p class="left_text">$5,000,000</p>
            <br>
            <p class="left_subtitles">Term:</p>
            <p class="left_text">3 Years</p>
            <br>
            <div class="is_mobile">
            <p class="get_info is_mobile">This fund is offered GET Resources Group. GET is highly reputable and innovative P.E. firm. Check them out here.</p>
            <CWSButtonsButtonLoop/>
    </div>
    </div>


    <div class="right_info">
        <WALLSTREETFundPagesNanoScrollText/>

        <div class="is_not_mobile">
        <p class="get_info is_not_mobile">This fund is offered GET Resources Group. GET is highly reputable and innovative P.E. firm. Check them out here.</p>
        <CWSButtonsButtonLoop/>
    </div>

        </div>

    </div>

    <div class="center_img_container_outer">
    <div class="center_img_container_inner">
    <img class="center_img" src="~/assets/content/wallstreet/fund_pages/nano/nano_3.jpg">
</div>
</div>


<div class="section_3_container">
<p class="section_3_title">Widespread Applications</p>
<h5 class="section_3_text">The total addressable markets to Nanocarbon is over $11.1 Billion. With major commercial contracts imminent, now is the time to get involved.</h5>
<p class="section_3_info_text">Nanocarbon is actively engaged in some of the world's largest and most profitable industries. In each of its primary business sectors, NanoCarbon has successfully navigated the qualification process with top-tier suppliers and manufacturers. Consistency has been a hallmark of their work, with NanoCarbon providing high-quality nanocarbon solutions at market-competitive rates. The companies currently in advanced discussions with Nanocarbon, listed adjacent, are poised to transition into the commercialization phase, each representing a potential multimillion-dollar revenue opportunity.

</p>
</div>



<div class="three_grid_container">
<div class="three_grid">

    <img data-lag=".1" class="three_img" src="~/assets/content/wallstreet/fund_pages/nano/nano_4.png">

    <img data-lag=".3" class="three_img" src="~/assets/content/wallstreet/fund_pages/nano/nano_5.jpg">

    <img data-lag=".1" class="three_img" src="~/assets/content/wallstreet/fund_pages/nano/nano_6.jpg">

</div>

</div>


<h4 class="sector_title">Impacts By Sector</h4>

<div class="sector_grid">

    <div class="sector_container_1">
        <h6 class="sector_subtitle_1">Semiconductors</h6>
        <p class="sector_text_1">Semiconductors power everything from our phones and computers to airplanes and cars. Chip making machines (Fabs) are a massive investment at $150mm-$300mm each.<br><br><b>Nanocarbon Photoresists - a key component in the process - can increase the productivity of these Fabs up to 2.3X with a low cost.</b><br><br>No other photoresist has demonstrated this potential which has already been tested and “qualified” by global leaders in chip manufacturing.</p>
    </div>

    <div class="sector_container_2">
        <h6 class="sector_subtitle_2">Solar</h6>
        <p class="sector_text_2">Tandem Perovskite — Silicon PV delivers up to 50% more power out of the same surface area with no increase in weight or installation cost, and no net increase in cost per watt vs silicon.<br><br>This leads to a 40% lower cost than fossil fuel by 2025 over the lifecycle.</p>
    </div>

    <div class="sector_container_3">
        <h6 class="sector_subtitle_3">Battery Additives</h6>
        <p class="sector_text_3">Increases performance with reduced electrode degradation<br><br>Faster charge, increased range, and longer lifetime<br><br>Funded JDA with battery company for commercial EVs</p>
    </div>

    <div class="sector_container_4">
        <h6 data-speed=".9" class="sector_subtitle_4">Learn More</h6>
        <p data-speed=".9" class="sector_text_4">GET Resources group is our #1 point of contact for this fund.</p>
        <div data-speed=".85">
        <CWSButtonsButtonLoop class="sector_margin"/>
        </div>
    </div>

</div>



<WALLSTREETFundPagesNanoScrubText/>

<WALLSTREETFundNextInvestment/>




      <div class="paperOverlay_1"></div>
    </div>
    <CWSFooterMain/>
    </CWSGSAPScrollSmoother>
    
    
    </template>
    
    <script setup>
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger'

    gsap.registerPlugin(ScrollTrigger);

               // sleep time expects milliseconds
               function sleep (time) {
          return new Promise((resolve) => setTimeout(resolve, time));
        }

  
    onMounted(() => {
        sleep(500).then(() => { 
  
//   gsap.from('.section_3_info_text', {
//     y: 50, // start the animation from 50px below the original position
//     autoAlpha: 0, // start from transparent
//     duration: 1, // duration is in seconds
//     ease: 'power3.out', // easing function to make the transition smooth
//     scrollTrigger: {
//       trigger: '.section_3_info_text',
//       start: 'top bottom', // when the top of the trigger hits the bottom of the viewport
//       end: 'bottom top', // when the bottom of the trigger hits the top of the viewport
//     //   scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//     toggleActions: "play pause resume reset",
//     },
//   });





gsap.from('.sector_container_1', {
    y: 100, // start the animation from 50px below the original position
    autoAlpha: 0, // start from transparent
    duration: 2, // duration is in seconds
    ease: 'power3.out', // easing function to make the transition smooth
    scrollTrigger: {
      trigger: '.sector_container_1',
      start: 'top bottom', // when the top of the trigger hits the bottom of the viewport
      end: 'bottom top', // when the bottom of the trigger hits the top of the viewport
    //   scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    toggleActions: "play pause resume reset",
    },
  });

  gsap.from('.sector_container_2', {
    y: 100, // start the animation from 50px below the original position
    autoAlpha: 0, // start from transparent
    duration: 2, // duration is in seconds
    ease: 'power3.out', // easing function to make the transition smooth
    scrollTrigger: {
      trigger: '.sector_container_2',
      start: 'top bottom', // when the top of the trigger hits the bottom of the viewport
      end: 'bottom top', // when the bottom of the trigger hits the top of the viewport
    //   scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    toggleActions: "play pause resume reset",
    },
  });



  gsap.from('.sector_container_3', {
    y: 100, // start the animation from 50px below the original position
    autoAlpha: 0, // start from transparent
    duration: 2, // duration is in seconds
    ease: 'power3.out', // easing function to make the transition smooth
    scrollTrigger: {
      trigger: '.sector_container_3',
      start: 'top bottom', // when the top of the trigger hits the bottom of the viewport
      end: 'bottom top', // when the bottom of the trigger hits the top of the viewport
    //   scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    toggleActions: "play pause resume reset",
    },
  });


  gsap.from('.sector_container_4', {
    y: 100, // start the animation from 50px below the original position
    autoAlpha: 0, // start from transparent
    duration: 2, // duration is in seconds
    ease: 'power3.out', // easing function to make the transition smooth
    scrollTrigger: {
      trigger: '.sector_container_4',
      start: 'top bottom', // when the top of the trigger hits the bottom of the viewport
      end: 'bottom top', // when the bottom of the trigger hits the top of the viewport
    //   scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    toggleActions: "play pause resume reset",
    },
  });




})
})


    
    </script>
    
    <style scoped>



    
    .fund_title{
        color: white;
        font-size: 6vw;
        font-weight: 700;
        text-align: center;
        padding-top: 15%;
        padding-bottom: 10%;
        margin-bottom: 0;
        margin-top: 0;
    }


    .slab_container{
    width:100%;
    height: 80vh;
    margin-bottom: 10%;
    margin-top: 0;
    overflow: hidden
}

    .landing_image{
        /* height: 85vh; */
        width:100%;
        margin-bottom: 10%;
    }

    .grid_container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  width:95%;
  margin-left:5%;
  margin-top:2%
}

.left_info{
    color:#fff;
    margin-left:10%;
    margin-top:-35%
}

.left_subtitles{
    color:green;
    line-height: 0;
    margin-bottom: -10px;
}

.highlights_title{
    color: #fff;
    margin-bottom:100px
}

.get_info{
    color:#fff;
    margin-top:10%;
    margin-left:-2.5%;
    width:80%
}

.center_img_container_outer{
    display: flex;
    justify-content: center;
    align-items: center;
}

.center_img_container_inner{
    background-color:rgba(53, 157, 53, 0.534);
    padding:20px 40px;
    width:40%;
    margin-top:10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
}
.center_img{
    border-radius: 12px;
    width:100%;
}

.section_3_container{
    width:80%;
    margin-left:10%;
    margin-top:5%
}
.section_3_title{
    color:#fff;
    margin-top:15%
}

.section_3_text{
    color:#fff;
    margin-top:40px
}

.section_3_info_text{
    color:#fff;
    margin-top:40px;
    margin-bottom:10%;
    font-weight: 200;
    width:70%
}


.three_grid_container{
    background-color:#fff;
    height:55vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.three_grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 70px;
    width:85%;
}

.three_img{
    border-radius: 12px;
    width:80%;
    padding:40px 20px;
    background-color:rgba(53, 157, 53, 0.8);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.72);
}




.sector_title{
    color:#fff;
    margin-left:5%;
    margin-bottom:0
}

.sector_grid{
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    width:80%;
    margin-left:10%;
}

.sector_subtitle_1{
    font-size:50px;
    color:green;
    margin:60px 0 0 0;
}
.sector_text_1{
    color:#fff;
    width:65%;
    font-size:18px
}


.sector_subtitle_2{
    font-size:50px;
    color:green;
    margin:60px 0 0 0;
    margin-left:60%
}
.sector_text_2{
    color:#fff;
    width:65%;
    font-size:18px;
    margin-left:60%;
    width:45%
}


.sector_subtitle_3{
    font-size:50px;
    color:green;
    margin:60px 0 0 0;
    margin-top:-7%
}
.sector_text_3{
    color:#fff;
    width:50%;
    font-size:18px
}


.sector_subtitle_4{
    font-size:50px;
    color:green;
    margin:60px 0 0 0;
    margin-left:60%;
    margin-top:-20%
}
.sector_text_4{
    color:#fff;
    width:65%;
    font-size:18px;
    margin-left:60%;
    width:35%
}

.sector_margin{
    margin-left:60%;
    margin-top: 45px;
}








@media only screen and (min-width: 0px) and (max-width: 576px) {
    .grid_container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  width:95%;
  margin-left:5%;
  margin-top:30%
}


.grid_container .left_info { order: 2; }
  .grid_container .right_info { order: 1; }

  .is_not_mobile{
        display:none
  }

  .left_info{
    margin-top:-50%
}

.center_img_container_outer{
    margin-top:10%
}

.sector_grid{
    width:70%;
}

.sector_container_4{
    margin-top:-25%
}

.sector_subtitle_1, .sector_subtitle_2, .sector_subtitle_3, .sector_subtitle_4{
    font-size:40px;
}

.sector_margin{
    margin-left:30%;
    margin-top: 65px;
}



  .highlights_title{
    color: #fff;
    margin-bottom:50px;
    font-size:40px;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
}

.center_img_container_inner{
    background-color:rgba(53, 157, 53, 0.534);
    padding:20px 40px;
    width:60%;
    margin-top:10%;
    margin-bottom:10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
}

.section_3_info_text{
    color:#fff;
    margin-top:40px;
    margin-bottom:10%;
    font-weight: 200;
    width:100%
}

.three_grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    width:90%;
}

.three_img{
    border-radius: 12px;
    width:80%;
    padding:30px 10px;
    background-color:rgba(53, 157, 53, 0.8);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.72);
}

.three_grid_container{
    height:40vh;
}

.sector_text_1, .sector_text_2, .sector_text_3, .sector_text_4{
    width:100%;
    margin-left:0%
}

.sector_subtitle_1, .sector_subtitle_2, .sector_subtitle_3, .sector_subtitle_4{
    margin-left:0%
}

.sector_subtitle_3{
    margin-top:-20%
}

.sector_subtitle_4{
    margin-top:-55%
}

.fund_title{
        padding-top: 25%;
    }



}

@media only screen and (min-width: 576px) and (max-width: 768px) {

    .grid_container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  width:95%;
  margin-left:5%;
  margin-top:30%
}


.grid_container .left_info { order: 2; }
  .grid_container .right_info { order: 1; }

  .is_not_mobile{
        display:none
  }

  .highlights_title{
    color: #fff;
    margin-bottom:50px;
    font-size:40px;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
}

.center_img_container_inner{
    background-color:rgba(53, 157, 53, 0.534);
    padding:20px 30px;
    width:55%;
    margin-top:-10%;
    margin-bottom:10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
}

.section_3_info_text{
    color:#fff;
    margin-top:40px;
    margin-bottom:10%;
    font-weight: 200;
    width:100%
}

.three_grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    width:90%;
}

.three_img{
    border-radius: 12px;
    width:80%;
    padding:30px 10px;
    background-color:rgba(53, 157, 53, 0.8);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.72);
}

.three_grid_container{
    height:40vh;
}

.sector_text_1, .sector_text_2, .sector_text_3, .sector_text_4{
    width:90%;
    margin-left:0%
}

.sector_subtitle_1, .sector_subtitle_2, .sector_subtitle_3, .sector_subtitle_4{
    margin-left:0%
}

.sector_subtitle_3{
    margin-top:-20%
}

.sector_subtitle_4{
    margin-top:-55%
}

.three_grid_container{
    margin-top:20%
}

.fund_title{
        padding-top: 20%;
    }


}

@media only screen and (min-width: 768px) and (max-width: 992px) {
    .is_mobile{
        display:none
  }

  .center_img_container_inner{
    background-color:rgba(53, 157, 53, 0.534);
    padding:20px 40px;
    width:40%;
    margin-top:10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
}

.section_3_text{
    width:95%
}
.section_3_info_text{
    width:60%;
    margin-bottom:15%
}

.sector_text_4{
    width:45%;
margin-bottom:40px
}

}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
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
    