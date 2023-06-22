<template>

<WALLSTREETDownloadModal ref="open_it"/>

    <CWSMainHeader/>
        <CWSGSAPScrollSmoother>
    <div style="background-color: #121212; padding-bottom:10%; border-bottom: 1px solid rgb(167, 211, 232, 0.4);">
     
        




        <h3 class="fund_title">Next A.I. Fund</h3>

     
      <!-- <img src="~/assets/content/wallstreet/fund_pages/next_ai/next_5.jpg" class="landing_image"/> -->


     <div class="slab_container">
      <img data-speed="auto" src="~/assets/content/wallstreet/fund_pages/next_ai/next_5.jpg" class="landing_image"/>
    </div> 

    <div class="grid_container">


        <div class="left_info">
            <h6 class="highlights_title">Investment Highlights</h6>
            <p class="left_subtitles">Fund Name:</p>
            <p class="left_text">Next A.I. Fund</p>
            <br>
            <p class="left_subtitles">Entity Type:</p>
            <p class="left_text">LLC</p>
            <br>
            <p class="left_subtitles">Min Investment:</p>
            <p class="left_text">$10,000</p>
            <br>
            <p class="left_subtitles">Fund Goal: </p>
            <p class="left_text">$10,000,000</p>
            <br>
            <p class="left_subtitles">Investment Duration: </p>
            <p class="left_text">3-5 Years</p>
            <br>
            <p class="left_subtitles">Investment Goal: </p>
            <p class="left_text">4-7 X Returns</p>
            <br>
            <div class="is_mobile">
            <p class="get_info is_mobile">This fund is offered by GET Resources Group. GET is highly reputable and innovative P.E. firm. Check them out here.</p>
            <CWSButtonsButtonLoop :link_url="link_to_url"/>
    </div>
    </div>


    <div class="right_info">
        <WALLSTREETFundPagesNextScrollText/>

        <div class="is_not_mobile">
        <p class="get_info is_not_mobile">This fund is offered GET Resources Group. GET is highly reputable and innovative P.E. firm. Check them out here.</p>
        <CWSButtonsButtonLoop :link_url="link_to_url"/>
    </div>

        </div>

    </div>

    <div class="center_img_container_outer">
    <div class="center_img_container_inner">
    <img class="center_img" src="~/assets/content/wallstreet/fund_pages/next_ai/next_6.jpg">
</div>
</div>


<div class="section_3_container">
<p class="section_3_title">Manager’s note and Investment Thesis</p>
<h5 class="section_3_text">A multi-layered approach to capitalize on every layer of the tech stack</h5>
<p class="section_3_info_text">We GET it. OpenAI and Anthropic are red hot right now and, sure, that is part of the idea here yet we like to look at other angles. Whether it is one of them, Bard, Meta, or a company that hasn’t yet made the headlines, every player at that part of the stack relies on the companies above and below it… GET Resources takes a holistic view of the sector and seeks to get involved at all levels to maximize our successes and the returns for our investors. After all, if this is the AI “gold rush”, we want a fund that invests in the proverbial pickaxe, helmets, and blue jeans makers that are still around today, not just the gold miners themselves. 
<br><br>
…and before you ask, this was not written by ChatGPT :)

</p>
</div>


    <!-- <WALLSTREETFundPagesNextAiStackingCards/> -->




    <div>
  <div class='container'>
    <div class='cards'>
        

    <div class='card' style='top:40px'>
        <div class="cardPaperOverlay"></div>
        <img class="card_img" src="~/assets/content/wallstreet/fund_pages/next_ai/next_logos/next_logo_2.png">
        <h6 class="card_title">Open AI</h6>
        <p class="card_text">OpenAI is a leading artificial intelligence research lab consisting of both for-profit and non-profit arms. It focuses on ensuring artificial general intelligence (AGI) benefits all of humanity by building safe and beneficial AGI directly, while also striving to aid others in achieving these outcomes. OpenAI's advanced AI models, like ChatGPT, transform the way we interact with technology, offering applications from writing assistance to education, gaming, and beyond.  </p>
    </div>

    <div class='card' style='top:50px'>
        <div class="cardPaperOverlay"></div>
        <img class="card_img" src="~/assets/content/wallstreet/fund_pages/next_ai/next_logos/next_logo_1.png">
        <h6 class="card_title">MidJourney</h6>
        <p class="card_text">Midjourney, a San Francisco-based AI company, has created a unique generative AI program that transforms text prompts into images, akin to OpenAI's DALL-E. Under the leadership of David Holz, co-founder of Leap Motion, the company entered open beta in July 2022 and has been profitably operating while continuously enhancing its algorithms. The platform is currently accessible via a Discord bot, with plans for a web interface in progress. Artists use Midjourney for rapid prototyping of concepts, and industries like advertising leverage it for efficient content creation.  </p>
    </div>

    <div class='card' style='top:60px'>
        <div class="cardPaperOverlay"></div>
        <img class="card_img" src="~/assets/content/wallstreet/fund_pages/next_ai/next_logos/next_logo_3.png">
        <h6 class="card_title">Anthropic</h6>
        <p class="card_text">Anthropic is an AI startup, founded by former OpenAI researchers, specializing in developing general AI systems and language models like its chatbot, Claude. It's currently working on a "frontier model", a next-gen algorithm for AI self-teaching, with plans to invest billions in the development of this technology, which is anticipated to automate large portions of the economy. With high-profile investors such as Google, Anthropic is positioning itself as a major player in the AI field, ready to compete with established organizations like OpenAI
 </p>
    </div>

    <div class='card' style='top:70px'>
        <div class="cardPaperOverlay"></div>
        <img class="card_img" src="~/assets/content/wallstreet/fund_pages/next_ai/next_logos/next_logo_4.png">
        <h6 class="card_title">Runway ML</h6>
        <p class="card_text">Runway ML is a pioneering company in the realm of artificial intelligence, Runway ML is enhancing the field with its user-friendly and innovative approaches. Founded by the visionary Cristóbal Valenzuela, Runway ML has made a name for itself by developing a platform that empowers creators by providing them with easy access to machine learning models. The company's software is designed to be user-friendly, with a focus on delivering complex AI technologies in a way that is accessible to a wide audience, enabling them to interact and create with AI without needing a background in coding. One of their notable offerings is their 5.1 model which has shown proficiency in working better with more literal prompts.
</p>
    </div>

    <div class='card' style='top:80px'>
        <div class="cardPaperOverlay"></div>
        <img class="card_img" src="~/assets/content/wallstreet/fund_pages/next_ai/next_logos/next_logo_6.png">
        <h6 class="card_title">Nano-C</h6>
        <p class="card_text">Nano-C is a pioneering company in nanocarbon engineering, directly impacting the field of computing in general and AI specifically. Their high-quality fullerenes and carbon nanotubes enable the creation of smaller, faster, and more energy-efficient electronic devices, step-wise elevating current computational capabilities. Further, Nano-C's breakthroughs in solar cell efficiency and battery storage also contribute to sustainable energy solutions, aligning with the demand for environmentally friendly technologies in AI and computing.</p>
    </div>

    <div class='card' style='top:90px'>
        <div class="end_trigger"></div>
        <div class="cardPaperOverlay"></div>
        <img class="card_img_main" src="~/assets/content/wallstreet/fund_pages/next_ai/next_logos/next_ai.png">
        <h6 class="card_title">Free Fund Overview</h6>
        <div class="free_button cursor_hover" @click="open_popup_modal()">Access</div>
    </div>


    </div>
  </div>
  <div class='container2'>
  </div>
</div>











































<div class="three_grid_container">
<div class="three_grid">

    <img data-lag=".1" class="three_img" src="~/assets/content/wallstreet/fund_pages/next_ai/next_7_1.png">

    <img data-lag=".3" class="three_img" src="~/assets/content/wallstreet/fund_pages/next_ai/next_8.png">

    <img data-lag=".1" class="three_img" src="~/assets/content/wallstreet/fund_pages/next_ai/next_9.png">

</div>

</div>


<h4 class="sector_title">The Road To A Billion Dollars</h4>

<div class="sector_grid">

    <div class="sector_container_1">
        <h6 class="sector_subtitle_1">Conventional Companies</h6>
        <p class="sector_text_1">Did you know it took Nike 24 years to reach a Billion dollar valuation?<br><br>There is a whole list of them, Harley Davidson, Whirlpool, Mattel (the makers of Barbie) some of them took over 80 years.
</p>
    </div>

    <div class="sector_container_2">
        <h6 class="sector_subtitle_2">Tech Companies</h6>
        <p class="sector_text_2">Contrastingly, tech companies have demonstrated the ability to achieve billion-dollar valuations at an unprecedented speed. Cases in point are Instagram and Twitter, which reached this benchmark in only 2 and 3 years respectively. This accelerated growth is often attributable to the scalability of digital products, network effects, and rapid user adoption. The tech sector continues to thrive, with emergent fields like AI promising even faster paths to significant market valuations.
</p>
    </div>

    <div class="sector_container_3">
        <h6 class="sector_subtitle_3">A.I. Companies</h6>
        <p class="sector_text_3">AI companies are set to redefine the growth trajectory even further. These companies leverage an explosion of human data in a natural way that has wide applicability accross domains, capturing value outside of traditional niches. Further, this new wave of AI companies are set to impact industries on an unprecedent level because they can easily leverage the marketplaces and distribution networks that the incumbent tech companies have laid the groundwork for.   </p>
    </div>

    <div class="sector_container_4">
        <h6 data-speed=".9" class="sector_subtitle_4">Learn More</h6>
        <p data-speed=".9" class="sector_text_4">GET Resources group is our #1 point of contact for this fund.</p>
        <div data-speed=".85">
        <CWSButtonsButtonLoop :link_url="link_to_url" class="sector_margin"/>
        </div>
    </div>

</div>
<source src="~/assets/content/wallstreet/fund_pages/next_ai/next_vid.mp4" type="video/mp4">


<WALLSTREETFundPagesNanoScrubText/>


<WALLSTREETFundPagesNextInvestment/>



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






  const cardElements = gsap.utils.toArray(".card");
  
      cardElements.forEach((card, index) => {
        const tween = gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: () => `top bottom-=100`,
            end: () => `top top+=40`,
            scrub: true,
            invalidateOnRefresh: true
          },
          ease: "none",
          scale: () => 1 - (cardElements.length - index) * 0.025
        });
  
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          id: "pin",
          endTrigger: ".end_trigger",
          invalidateOnRefresh: true
        });
      });





      const sign_up_props = {
  button_text: 'Access',
  background_color: '#fafdff',
  color: '#000',
  link_to:'signup'
}

})
})


const open_it = ref(null);
function open_popup_modal() {
  open_it.value.open_modal();
}




const link_to_url = "https://thisisget.com/fund_pages/next_ai/"

    
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
    height: 90vh;
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









/* ------------------------- stacking cards ----------------------------- */


.container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .cards {
    width:60%;
    z-index:2;
    margin-top:7.5%
  }
  
  .card {
    height: 520px;
    margin-bottom: 50px;
    background: white;
    font-size: 36px;
    display:flex;
    align-items: center;
    flex-direction: column;
  }
  
  .card:first-child {
    box-shadow: 0px 0px 30px 3px rgba(0, 0, 0, 0.05);
  }
  
  .container2 {
    margin-top: 40px;
    width: 100%;
    height: 400px;
  }


  .cardPaperOverlay {
    position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity:.4;
  background-size: 80%;
  background-repeat: repeat;
  background-image: url("~/assets/content/paper/paper_overlay_3.jpg");
  mix-blend-mode: multiply;
  pointer-events: none;
}

.card_img{
    width:150px;
    height: 150px;
    margin-top:30px
}

.card_img_main{
    width:200px;
    height: 200px;
    margin-top:25px
}

.free_button{
    background-color: #35a035;
    color: #fff;
    border-radius: 50px;
    padding: 10px 20px;
    margin-top: 30px;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    border: 1px solid rgba(53, 160, 53, 0);
    outline: none;
    width: 50%;
    text-align: center;
    margin-bottom: 30px;
}

.free_button:hover{
    background-color: #ffffff;
    border: 1px solid #35a035;
    color:#35a035;
}

.card_title{
    font-size:50px;
    margin-top:60px;
    margin-bottom:30px
}

.card_text{
    font-size:13px;
    margin-top:0px;
    width:80%;
    text-align:center
}

    </style>
    