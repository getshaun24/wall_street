<template>
    <div>  
      <div class="wrap">
        <div class="wrap-container">
          <div class="scrollElements" ref="scrollElements1">
            GET Resources is proud to provide an investment gateway into a pioneer in nanocarbon applications. Collaborating with industry giants in sectors like solar, semiconductors, and touch sensors, our fund target is on the cusp of unlocking significant revenue streams. Informed by exhaustive research, consultations with subject matter experts, and thorough interviews with senior management, GET Resources believes that now is an optimal time to facilitate pre-IPO financing. With its patented processes and portfolio, seasoned team, and top-tier product endorsed by existing and prospective clients, this company is poised for a lucrative exit, either through an IPO or acquisition.



            <span class="overlayText">GET Resources is proud to provide an investment gateway into a pioneer in nanocarbon applications. Collaborating with industry giants in sectors like solar, semiconductors, and touch sensors, our fund target is on the cusp of unlocking significant revenue streams. Informed by exhaustive research, consultations with subject matter experts, and thorough interviews with senior management, GET Resources believes that now is an optimal time to facilitate pre-IPO financing. With its patented processes and portfolio, seasoned team, and top-tier product endorsed by existing and prospective clients, this company is poised for a lucrative exit, either through an IPO or acquisition.

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
  