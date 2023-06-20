<template>
  <MainTransition ref="mainTransition"/>
  <WALLSTREETEmailModal ref="open_it"/>

  <div 
    ref="buttonContainer"
    @mousemove="handleMouseMove"
    @mouseleave="resetButtonPosition"
    class="button-container cursor_hover"
  >
    <div 
      @click="transitionAndRoute(link_to)"
      ref="buttonElement"
      class="button-element"
      :style="{ left: `${buttonLeft}px`, top: `${buttonTop}px` }"
    >
      {{ button_text }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const props = defineProps(['button_text', 'background_color', 'color', 'link_to'])

const buttonContainer = ref(null)
const buttonElement = ref(null)
let buttonTop = 0
let buttonLeft = 0

onMounted(() => {
  gsap.set(buttonElement.value, { x: 0, y: 0 })
})

const handleMouseMove = (e) => {
  const rect = buttonContainer.value.getBoundingClientRect()
  buttonLeft = e.clientX - rect.left - buttonElement.value.offsetWidth / 2
  buttonTop = e.clientY - rect.top - buttonElement.value.offsetHeight / 2

  gsap.to(buttonElement.value, { duration: 0.3, x: buttonLeft, y: buttonTop })
}

const resetButtonPosition = () => {
  buttonLeft = 0
  buttonTop = 0

  gsap.to(buttonElement.value, { duration: 0.3, x: buttonLeft, y: buttonTop })
}

const mainTransition = ref(null)
const transitionAndRoute = (routeTo) => {
  if (routeTo === 'signup') {
    open_popup_modal()
  } else{
  mainTransition.value.animation_and_route(routeTo)
  }
}


const open_it = ref(null);
function open_popup_modal() {
  open_it.value.open_modal();
}
</script>

<style scoped>
.button-container {
  height: 70px;
  border: #fafdff00 1px solid;
  width: 100px;
  position: relative;
  margin-top:-5px;
  margin-left:10px
}

.button-element {
  border: 2px solid green;
  border-radius: 50px/50px;
  padding: 4px 20px;
  width: 100px;
  position: absolute;
  margin: auto;
  text-align: center;
  background-color: v-bind(background_color);
  color: v-bind(color);
  font-size: 20px;
  white-space: nowrap;
}

.button-element:hover {
  transform: scale(1.3);
  color: #fff;
  background-color: #000;
  transition:background-color 0.6s ease, color 0.6s ease;
}

@media only screen and (max-width: 576px) {
  .button-element {
    font-size: calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));
    width: calc(60px + (100 - 60) * ((100vw - 300px) / (1600 - 300)));
  }
}

@media only screen and (min-width: 576px) {
  .button-element {
    font-size: calc(14px + (20 - 14) * ((100vw - 576px) / (1600 - 576)));
    width: calc(60px + (100 - 60) * ((100vw - 576px) / (1600 - 576)));
  }
}
</style>
``
