<template>
<div>
  <div class='container'>
    <div class='cards'>
        
    <div class='card' style='top:40px'>
        <div class="cardPaperOverlay"></div>
        <img class="card_img" src="~/assets/content/wallstreet/fund_pages/next_ai/next_logos/next_logo_1.png">
        <h6 class="card_title">MidJourney</h6>
        <p class="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>

    <div class='card' style='top:50px'>
        <div class="cardPaperOverlay"></div>
        <img class="card_img" src="~/assets/content/wallstreet/fund_pages/next_ai/next_logos/next_logo_2.png">
        <h6 class="card_title">Open AI</h6>
        <p class="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>

    <div class='card' style='top:60px'>
        <div class="cardPaperOverlay"></div>
        <img class="card_img" src="~/assets/content/wallstreet/fund_pages/next_ai/next_logos/next_logo_3.png">
        <h6 class="card_title">Anthropic</h6>
        <p class="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>

    <div class='card' style='top:70px'>
        <div class="cardPaperOverlay"></div>
        <img class="card_img" src="~/assets/content/wallstreet/fund_pages/next_ai/next_logos/next_logo_4.png">
        <h6 class="card_title">Runway ML</h6>
        <p class="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>

    <div class='card' style='top:80px'>
        <div class="cardPaperOverlay"></div>
        <img class="card_img" src="~/assets/content/wallstreet/fund_pages/next_ai/next_logos/next_logo_6.png">
        <h6 class="card_title">Nano-C</h6>
        <p class="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>

    <div class='card' style='top:90px'>
        <div class="end_trigger"></div>
        <div class="cardPaperOverlay"></div>
        <img class="card_img_main" src="~/assets/content/wallstreet/fund_pages/next_ai/next_logos/next_ai.png">
    </div>


    </div>
  </div>
  <div class='container2'>
  </div>
</div>
  </template>
  
  <script setup>
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { onMounted, ref } from 'vue'
  
  let sleep = (time) => new Promise(resolve => setTimeout(resolve, time));
  
  onMounted(() => {
    sleep(300).then(() => {
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
      
    });
  })
  </script>
  
  <style scoped>
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
    height: 500px;
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
    width:350px;
    height: 350px;
    margin-top:75px
}

.card_title{
    font-size:50px;
    margin-top:60px;
    margin-bottom:30px
}

.card_text{
    font-size:15px;
    margin-top:0px;
    width:80%;
    text-align:center
}
  </style>
  