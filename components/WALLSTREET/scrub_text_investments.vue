<template>
    <div class="wrapper">
      <ul class="background-text">
        <li v-for="(text, index) in texts" :key="index" :ref="el => (textLines[index] = el)" class="background-text__item">
          {{ text }}
        </li>
      </ul>
    </div>
  </template>
    
  <script setup>
  import { ref, onMounted } from 'vue'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)

           // sleep time expects milliseconds
           function sleep (time) {
          return new Promise((resolve) => setTimeout(resolve, time));
        }



  
  const texts = ['Top Quality', 'Private Offers']
  const textLines = []
  
  onMounted(() => {
    sleep(1000).then(() => {
    textLines.forEach((line, index) => {
      const initialX = index % 8 ? -window.innerWidth : window.innerWidth;
      const finalX = index % 8 ? window.innerWidth : -window.innerWidth;
  
      gsap.fromTo(line, { x: initialX }, { 
        x: finalX, 
        scrollTrigger: {
          trigger: line,
          start: "top 70%",
          end: "top -80%",
          scrub: 0.5
        } 
      })
    })
  })
})
  </script>
  
  <style scoped>
  .wrapper {
    inset: 0;
    width: 100vw;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:-2%;
    margin-bottom:-2%;
  }
  
  .background-text {
    text-align: center;
    list-style: none;
  }
  
  .background-text__item {
    font-weight: 600;
    font-size: 130px;
    line-height: 150px;
    text-transform: uppercase;
    color: #474747;
    text-align: center;
    background: transparent;
    white-space: nowrap;
  }


  
@media only screen and (min-width: 0px) and (max-width: 576px) {
    .wrapper{
        height: 10vh
  }
  .background-text {
    display: none;
  }
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
    .wrapper{
        height: 10vh
  }
  .background-text {
    display: none;
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
  