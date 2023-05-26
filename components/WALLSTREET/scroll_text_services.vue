<template>
    <div>  
      <div class="wrap">
        <div class="wrap-container">
          <div class="scrollElements" ref="scrollElements1">
            WSN is a private equity aggregator providing valuable insights into private equity firms and their unique deals. It promotes high-growth funds and highlights undervalued early and mid-stage companies. By curating data from various sources, WSN simplifies understanding of the private equity landscape and facilitates informed investment decisions.

            <span class="overlayText">T            WSN is a private equity aggregator providing valuable insights into private equity firms and their unique deals. It promotes high-growth funds and highlights undervalued early and mid-stage companies. By curating data from various sources, WSN simplifies understanding of the private equity landscape and facilitates informed investment decisions.
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
        color: 'green', 
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
    margin-top: 15%;
    margin-left: 20px;
    margin-bottom:20%
  }
  
  .wrap-container {
    max-width: 80%;
  }
  
  .scrollElements {
    position: relative;
    font-size: 4.25vw;
    font-weight: 500;
    margin-left:5%;
    width:85%;
    color:rgb(189, 189, 189);
    white-space: normal;
  }
  
  .overlayText {
    position: absolute;
    height: 100%;
    width: 100%;
    color: green;
    left: 0; top: 0;
    clip-path: inset(0% 100% 0% 0%);
    white-space: normal;
  }



@media only screen and (min-width: 0px) and (max-width: 576px) {
  .scrollElements {
    position: relative;
    font-size: 6.25vw;
    font-weight: 500;
    margin-left:5%;
    width:95%;
    color:rgb(189, 189, 189);
    white-space: normal;
  }
  .wrap {
    margin-top: 15%;
    margin-bottom:30%
  }
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
  .scrollElements {
    position: relative;
    font-size: 6.25vw;
    font-weight: 500;
    margin-left:5%;
    width:95%;
    color:rgb(189, 189, 189);
    white-space: normal;
  }
  .wrap {
    margin-top: 15%;
    margin-bottom:30%
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
  