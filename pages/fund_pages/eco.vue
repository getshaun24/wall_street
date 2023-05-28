<template>


    <CWSMainHeader/>
        <CWSGSAPScrollSmoother>
    <div style="background-color: #121212; padding-bottom:10%; border-bottom: 1px solid rgb(167, 211, 232, 0.4);">
     
        




        <h3 class="fund_title">Eco Energy Partners</h3>

       <img src="~/assets/content/wallstreet/fund_pages/eco/eco_1.png" class="landing_image"/>


    <!-- <div class="slab_container">
      <img data-speed="auto" src="~/assets/content/wallstreet/fund_pages/eco/eco_1.png" class="landing_image"/>
    </div> -->

    <div class="grid_container">


        <div class="left_info">
            <h6 class="highlights_title">Investment Highlights</h6>
            <p class="left_subtitles">Company Name:</p>
            <p class="left_text">Eco Energy Partners</p>
            <br>
            <p class="left_subtitles">Entity Type:</p>
            <p class="left_text">SPV with tax pass-throughs</p>
            <br>
            <p class="left_subtitles">Min Investment:</p>
            <p class="left_text">$5,000</p>
            <br>
            <p class="left_subtitles">Expected Annual Growth*</p>
            <p class="left_text">20%</p>
            <br>
            <p class="left_subtitles">First year Tax Incentive:</p>
            <p class="left_text">80-100% writeoff or 20-30% back on principal</p>
            <br>
            <div class="is_mobile">
            <p class="get_info is_mobile">This fund is offered GET Resources Group. GET is highly reputable and innovative P.E. firm. Check them out here.</p>
            <CWSButtonsButtonLoop/>
    </div>
    </div>


    <div class="right_info">
        <WALLSTREETFundPagesEcoScrollText/>

        <div class="is_not_mobile">
        <p class="get_info is_not_mobile">This fund is offered GET Resources Group. GET is highly reputable and innovative P.E. firm. Check them out here.</p>
        <CWSButtonsButtonLoop/>
    </div>

        </div>

    </div>

    <div class="center_img_container_outer">
    <div class="center_img_container_inner">
    <img class="center_img" src="~/assets/content/wallstreet/fund_pages/eco/eco_4.png">
</div>
</div>


<div class="section_3_container">
<p class="section_3_title">A Cleaner Process for a Cleaner Future</p>
<h5 class="section_3_text">Driving green investments in Enhanced Oil Recovery with Eco Energy Partners, offering robust growth and significant tax advantages.</h5>
<p class="section_3_info_text">Currently, we cannot produce an electric car, solar panel, or wind turbine without petrochemicals/petrochemical derived fuels. This won’t change in the foreseeable future.
    <br><br>
    Being Green, really Green, requires acknowledging the above truth. With that, we invest in the smartest ways to minimize the impact of extracting the resources needed in service of creating the world and economy we want our children to grow up in.
    <br><br>
    Enhanced Oil Recovery (EOR) has been in practice for more than 40 years. It has not been widely pursued due to the economics of pulling “easy” oil out of new wells - despite the environmental harm. Now that much of the “easy” oil has been tapped and environmental regulation is tightening, new sites are more scarce and much more costly.
</p>
</div>



<div class="three_grid_container">
<div class="three_grid">

    <img data-lag=".1" class="three_img" src="~/assets/content/wallstreet/fund_pages/eco/eco_7.png">

    <!-- <img data-lag=".3" class="three_img" src="~/assets/content/wallstreet/fund_pages/nano/nano_5.jpg"> -->
    <iframe data-lag=".2" src="https://player.vimeo.com/video/821432762?h=02bcfd1239" class="vimeo" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>


    <img data-lag=".1" class="three_img" src="~/assets/content/wallstreet/fund_pages/nano/nano_6.jpg">

</div>



</div>


<h4 class="sector_title">Impacts By Sector</h4>

<div class="sector_grid">

    <div class="sector_container_1">
        <h6 class="sector_subtitle_1">20%+ Growth Annually</h6>
        <p class="sector_text_1">The underlying company has been growing by over 20% annually for over 25 years. They have the team, the technology, and the experience to grow. For a limited time they are open to outside investment.</p>
    </div>

    <div class="sector_container_2" >
        <h6 class="sector_subtitle_2">Top Tier Team</h6>
        <p class="sector_text_2">The management has more than 30 years experience each in Oil & Gas, working for companies like Haliburton and XTO Energy. Their dedicated field team has decades experience on rigs extracting Oil & Gas in Texas.</p>
    </div>

    <div class="sector_container_3" >
        <h6 class="sector_subtitle_3">Massive Tax Advantages</h6>
        <p class="sector_text_3">Using the Intangible Drilling Expense write-off and depletion tax law enables investors to obtain substantial upfront tax savings. This creates value for investors by maximizing profits and tax preferences</p>
    </div>

    <div class="sector_container_4">
        <h6 data-speed=".9" class="sector_subtitle_4">Learn More</h6>
        <p data-speed=".9" class="sector_text_4">GET Resources Group is our premium custodian for this fund.</p>
        <div data-speed=".85">
        <CWSButtonsButtonLoop class="sector_margin"/>
        </div>
    </div>

</div>



<WALLSTREETFundPagesNanoScrubText/>

<WALLSTREETFundPagesEcoFundNextInvestments/>




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
    height: 78vh;
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
    width:60%;
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

.three_grid {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 70px;
    width: 90%;
    margin-left:-2.5%
}


.vimeo{
    width:85% !important;
    margin-left:7.5%;
    height:30vh;
    z-index:3;
    border-radius: 12px !important;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
    background-color:rgba(53, 157, 53, 0.8);
    padding:10px 10px;
}



.three_img{
    border-radius: 12px;
    width:95%;
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
    margin-top:45px;
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
    margin-top:80px;
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
    margin-top:0%
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

    .center_img_container_outer{
    margin-top:15%
}

.section_3_container{
    margin-bottom:25%
}

.vimeo{
    height:15vh;
}

.sector_container_4{
    margin-top:25%
}

.sector_subtitle_1, .sector_subtitle_2, .sector_subtitle_3, .sector_subtitle_4{
    font-size:40px;
    margin-top:30px
}

.sector_margin{
    margin-left:30%;
    margin-top: 95px;
}

.section_3_text{
    width:100%
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
        padding-top: 25%;
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
    