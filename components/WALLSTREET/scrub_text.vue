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
      const initialX = index % 4 ? -window.innerWidth : window.innerWidth;
      const finalX = index % 4 ? window.innerWidth : -window.innerWidth;
  
      gsap.fromTo(line, { x: initialX }, { 
        x: finalX, 
        scrollTrigger: {
          trigger: line,
          start: "top bottom",
          end: "top -100%",
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
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:10%;
    margin-bottom:-7%;
    overflow:hidden
  }
  
  .background-text {
    text-align: center;
    list-style: none;
  }
  
  .background-text__item {
    font-weight: 600;
    font-size: 180px;
    line-height: 220px;
    text-transform: uppercase;
    color: #474747;
    text-align: center;
    background: transparent;
    white-space: nowrap;
  }
  </style>
  