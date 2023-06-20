<template>
    <MainTransition ref="mainTransition" />
  
    <div class="container">
      <p class="buttonText">Find Deals Now</p>
      <div class="middleLine" />
  
      <div 
        ref="buttonContainer" 
        @mousemove="updateButtonPosition" 
        @mouseleave="resetButtonPosition"
        class="buttonContainer"
      >
        <div 
          @click="selectRandomString" 
          ref="buttonElement" 
          class="buttonElement cursor_hover" 
        >
          Investments
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { gsap } from 'gsap'
  
  const buttonTop = ref(0)
  const buttonLeft = ref(0)
  
  const buttonContainer = ref(null)
  const buttonElement = ref(null)
  
  onMounted(() => {
    const { offsetWidth, offsetHeight } = buttonElement.value
    buttonTop.value = (buttonContainer.value.offsetHeight - offsetHeight) / 2
    buttonLeft.value = (buttonContainer.value.offsetWidth - offsetWidth) / 2
  })
  
  function updateButtonPosition(e) {
    const rect = buttonContainer.value.getBoundingClientRect()
    const halfHeight = buttonElement.value.offsetHeight / 2
    const halfWidth = buttonElement.value.offsetWidth / 2
  
    const top = Math.max(0, Math.min(e.clientY - rect.top - halfHeight, rect.height - 2*halfHeight))
    const left = Math.max(0, Math.min(e.clientX - rect.left - halfWidth, rect.width - 2*halfWidth))
  
    gsap.to(buttonElement.value, { duration: 0.3, y: top, x: left });
  }
  
  function resetButtonPosition() {
    const { offsetWidth, offsetHeight } = buttonElement.value
    const top = (buttonContainer.value.offsetHeight - offsetHeight) / 2
    const left = (buttonContainer.value.offsetWidth - offsetWidth) / 2
  
    gsap.to(buttonElement.value, { duration: 0.3, y: top, x: left });
  }
  
  const mainTransition = ref(null)
  function transitionAndRoute(routeTo) {
    mainTransition.value.animation_and_route(routeTo)
  }
  
  const strings = ['/fund_pages/eco', '/fund_pages/nano']
  function selectRandomString() {
    const randomIndex = Math.floor(Math.random() * strings.length)
    const selectedString = strings[randomIndex]
    transitionAndRoute(selectedString)
  }
  </script>
  
  <style scoped>
  .container {
    margin-top: 10%;
  }
  
  .buttonText {
    text-align: center;
    margin-bottom: 40px;
    z-index: 100;
  }
  
  .middleLine {
    border-top: solid 1px rgba(103, 103, 103, 0.349);
  }
  
  .buttonContainer {
    height: 75px;
    position: relative;
    border: #fff 1px solid;
    width: 200px;
    margin: auto;
    margin-top: -42px;
    background-color: #fff;
  }
  
  .buttonElement {
    position: absolute;
    border: 2px solid #000;
    border-radius: 50px;
    padding: 3px;
    width: 100px;
    text-align: center;
    background-color: #fff;
  }
  
  .buttonElement:hover {
    transform: scale(1.1);
    color: #fff;
    background-color: #000;
    transition:background-color 0.6s ease, color 0.6s ease;
  }
  </style>
  