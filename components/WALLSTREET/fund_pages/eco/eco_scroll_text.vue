<template>
    <div>  
      <div class="wrap">
        <div class="wrap-container">
          <div class="scrollElements" ref="scrollElements1">
            The Eco Energy Partners fund supports companies that specialize in Enhanced Oil Recovery (EOR). Specifically, we invest in companies that bring the latest technology to revitalize existing Oil & Gas wells and fields. By using environmentally friendly best practices, these companies can quickly and efficiently start extracting valuable oil and gas from wells that were previously ‘tapped’.
            <br><br>
            The principal underlying company in the portfolio has been working in the space for over three (3) decades and is now opening up to outside investment as they scale. They have over 3,000 acres in their portfolio, all of the necessary equipment, and a dedicated field team. A recent revitalization project yielded over 400% more oil than expected, and there are many more similar fields and wells ready to go.
            <br><br>
            Eco Energy Partners investors take advantage of substantial tax advantages the first year, then the fund aims to deliver annual growth of 20% for the life of the investment.

            <span class="overlayText">
                The Eco Energy Partners fund supports companies that specialize in Enhanced Oil Recovery (EOR). Specifically, we invest in companies that bring the latest technology to revitalize existing Oil & Gas wells and fields. By using environmentally friendly best practices, these companies can quickly and efficiently start extracting valuable oil and gas from wells that were previously ‘tapped’.
            <br><br>
            The principal underlying company in the portfolio has been working in the space for over three (3) decades and is now opening up to outside investment as they scale. They have over 3,000 acres in their portfolio, all of the necessary equipment, and a dedicated field team. A recent revitalization project yielded over 400% more oil than expected, and there are many more similar fields and wells ready to go.
            <br><br>
            Eco Energy Partners investors take advantage of substantial tax advantages the first year, then the fund aims to deliver annual growth of 20% for the life of the investment.
</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { onBeforeMount, onMounted, ref } from 'vue'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { SplitText } from 'gsap/SplitText'
  
  gsap.registerPlugin(ScrollTrigger, SplitText)
  
  let scrollElements1 = ref(null)

          // sleep time expects milliseconds
          function sleep (time) {
          return new Promise((resolve) => setTimeout(resolve, time));
        }


  
  onMounted(() => {
    sleep(1000).then(() => { 

    const elements = [scrollElements1.value]
  
    elements.forEach((element) => {
      let split = new SplitText(element, {type:"chars,words,lines"});
  
      gsap.timeline({
        scrollTrigger: {
          trigger: element,
          scrub: 1,
          start: "top 65%",
          end: "bottom -20%",
        }
      }).to(split.chars, {
        clipPath: "inset(0% 0% 0% 0%)", 
        color: '#fff', 
        duration: 10, 
        ease: 'none',
        stagger:1.5 // adjust for stagger effect on each letter
      })
    })
  })
})
  </script>
  
  
  <style scoped>

  
  .wrap {
    margin-top: 0%;
    width:98%
  }
  
  .wrap-container {
    width: 88%;
  }
  
  .scrollElements {
    position: relative;
    font-size: 3vw;
    font-weight: 500;
    margin-left:5%;
    width:100%;
    color:rgba(71, 71, 71, 0.5);
    white-space: normal;
  }
  
  .overlayText {
    position: absolute;
    height: 100%;
    width: 100%;
    color: #fff;
    left: 0; top: 0;
    clip-path: inset(0% 100% 0% 0%);
    white-space: normal;
  }



@media only screen and (min-width: 0px) and (max-width: 576px) {
  .scrollElements {
    position: relative;
    font-size: 4.5vw;
    font-weight: 500;
    margin-left:5%;
    width:95%;
    white-space: normal;
  }
  .wrap {
    margin-top:-15%;
    margin-bottom:40%
  }
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
  .scrollElements {
    position: relative;
    font-size: 4.5vw;
    font-weight: 500;
    margin-left:5%;
    width:95%;
    white-space: normal;
  }
  .wrap {
    margin-top:-15%;
    margin-bottom:40%
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
  