<template>
  <MainTransition ref="main_tansition"/>

    <div class="pricing_grid" ref="pricing">
      <div class="card_grd">
      <div class="card">
        <h4 class="title">Weekly Insight Plan</h4>
        <p class="subtitle">Access to a continuous stream of the high quality and curated fund information.</p>
        <div class="price">
          <span class="currency">$</span>
          <span class="amount">Free</span>
        </div>
        <button @click="transition_and_route('/login_pages/sign_up')" class="start_button">Get Started</button>
      </div>
      <!-- <div class="card" style="margin-top:100px">
        <h6 class="title">Monthly Insight Plan</h6>
        <div class="price">
          <span class="currency">$</span>
          <span class="amount">Free</span>
        </div>
        <button @click="transition_and_route('/login_pages/sign_up')" class="start_button">Get Started</button>
      </div> -->
    </div>
      <div class="pricing_grid_2">
        <div data-speed=".95" class="card_small">
            <img data-lag=".1" src="~/assets/content/about/pricing.png" class="small_icon">
            <p>The Wall Street Network provides exclusive access to unique and transformative investment deals, playing a pivotal role in shaping the private equity landscape.</p>
      </div>
      <div data-speed="1.05" class="card_small">
        <p>The WSN Insight Plan is your pass to the intricacies of private equity, turning complexities into comprehensible insights. It's like having a seasoned guide navigating you through the labyrinth of investment strategies and firm performance, making it an indispensable resource for those striving to master the market dynamics. </p>
      </div>

        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { gsap } from 'gsap'
  
  const pricing = ref(null)
  
  let observer
  
  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.fromTo(
            pricing.value,
            { opacity: 0, y: 80 },
            { opacity: 1, y: 0, duration: 1.5 }
          )
        }
      },
      { threshold: 0.1 }
    )
  
    observer.observe(pricing.value)
  })
  
  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  const main_tansition = ref(null);
function transition_and_route(route_to) {
    main_tansition.value.animation_and_route(route_to);
}
  </script>
  
  <style scoped>
  .pricing_grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 35px;
    grid-row-gap: 0px;
    width:80%;
    margin-left:10%;
    height: 150%;
    margin-bottom:10%;
    margin-top:15%
  }

  .pricing_grid .card_grd { order: 1; }
  .pricing_grid .pricing_grid_2 { order: 2; }


  .pricing_grid_2{
    display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 40px;
  }


  .card_grd{
    background-color: #ffffff;
    border-radius: 5px;
    padding: 30px;
    width: 90%;
    border-radius:40px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    height:93% 
  }
  .card_small {
    background-color: #ffffff;
    border-radius: 5px;
    padding: 30px;
    width: 90%;
    border-radius:40px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .title{
    margin-top:20px;
    margin-bottom:30px
  }

  .subtitle{
    font-size: 15px;
    color: #999;
    margin-bottom: 60px;
  }
  .price {
    font-size: 10vw;
    font-weight: bold;
    margin: 80px 0;
    color: rgba(9, 153, 189, 0.773)
  }
  
  .currency {
    font-size: 0.6em;
    vertical-align: super;
  }
  

  .small_icon{
    width:80px;
    height:80px;
    margin-bottom:20px
  }



  .start_button{
    width:70%;
    height:40px;
    background-color:green ;
    margin-left: 2.5%;
    margin-top:25px;
    border-radius:100px;
    border:#fff solid 0px;
    cursor:pointer;
    font-size:25px;
    line-height:40px;
    color:#fff;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.2);
    outline: 0px solid rgba(19, 218, 218, 0.6);
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
    text-align: center;
}


.start_button:hover{
  box-shadow: 0px 10px 15px rgba(0, 128, 0, 0.474);
  transform: translateY(-3px);
  outline: 3px solid rgba(19, 218, 218, 0.6);
  transition: outline 12s ease 1s;
} 





@media only screen and (min-width: 0px) and (max-width: 576px) {
  .pricing_grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 45px;
    grid-row-gap: 0px;
    width:80%;
    margin-left:10%;
    height: 150%;
    margin-bottom:-20%;
    margin-top:15%
  }
  .pricing_grid .card_grd { order: 2; }
  .pricing_grid .pricing_grid_2 { order: 1; }


.card_grd {
    background-color: #ffffff;
    border-radius: 5px;
    padding: 30px;
    width: 90%;
    border-radius:40px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    height: 400px
  }
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
  .pricing_grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 45px;
    grid-row-gap: 0px;
    width:80%;
    margin-left:10%;
    height: 150%;
    margin-bottom:-15%;
    margin-top:15%
  }
  .pricing_grid .card_grd { order: 2; }
  .pricing_grid .pricing_grid_2 { order: 1; }

.card_grd {
    background-color: #ffffff;
    border-radius: 5px;
    padding: 30px;
    width: 90%;
    border-radius:40px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    height: 400px
  }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
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
  