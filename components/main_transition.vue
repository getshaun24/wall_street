<template>
  <Teleport to="body">
    <div v-show="transition_display" class="transition_overlay" :style="{opacity: overlay_opacity, 'backdrop-filter': `blur(${blur_amount})`}"></div>
    <div v-show="transition_open_display" class="menu_background_top_open" :style="{transform: transition_open ? 'translateX(0)' : 'translateX(100vw)'}">
      <div class="menu_paper"></div>
    </div>
    <div v-show="transition_open_display" class="menu_background_bottom_open" :style="{transform: transition_open ? 'translateX(0)' : 'translateX(-100vw)'}">
      <div class="menu_paper"></div>
    </div>
    <div v-show="transition_close_display" class="menu_background_top_close" :style="{transform: transition_close ? 'translateX(0)' : 'translateX(100vw)'}">
      <div class="menu_paper"></div>
    </div>
    <div v-show="transition_close_display" class="menu_background_bottom_close" :style="{transform: transition_close ? 'translateX(0)' : 'translateX(-100vw)'}">
      <div class="menu_paper"></div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watchEffect, onBeforeMount, onMounted, defineExpose } from 'vue';


function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const transition_open = ref(false)
const transition_close = ref(true)
const transition_open_display = ref(false)
const transition_close_display = ref(true)
const overlay_opacity = ref(0)
const blur_amount = ref('0px')
const transition_display = ref(false)

watchEffect(() => {
  if (transition_open.value) {
    transition_open_display.value = true
    transition_close_display.value = false
  } else if (transition_close.value) {
    transition_open_display.value = false
    transition_close_display.value = true
  }
})

function animation_and_route(route_to){

  transition_display.value = true
  transition_open_display.value = true
  sleep(1).then(() => {transition_open.value = true})
  overlay_opacity.value = 1
  blur_amount.value = '0px'
  const currentRoute = useRoute();
  if(currentRoute.path === route_to){
    close_transition()
  } else {
    sleep(850).then(() => {navigateTo(route_to)})
  }
}

function close_transition(){
  transition_display.value = true
  overlay_opacity.value = 1
  sleep(1).then(() => {
    transition_close.value = true
    transition_open.value = false
    blur_amount.value = '0px'
    transition_close.value = false
  })
  sleep(10).then(() => {overlay_opacity.value = 0})
  sleep(800).then(() => {transition_display.value = false})
  sleep(1500).then(() => {transition_close_display.value = false})
}

onBeforeMount(() => {
  close_transition()
})

onMounted(() => {
  close_transition()
})

defineExpose({
    animation_and_route
})
</script>



<style scoped>
.menu_background_top_open,
.menu_background_top_close {
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  height:50vh;
  background-color:rgb(255, 255, 255);
  z-index:1000;
  transition:all .8s ease-in-out;
}

.menu_background_bottom_open {
  position:fixed;
  top:50vh;
  left:0;
  width:100vw;
  height:50vh;
  background-color:rgb(255, 255, 255);
  z-index:1000;
  transition:all .8s ease-in-out;
}

.menu_background_bottom_close {
  position:fixed;
  top:50vh;
  left:0;
  width:100vw;
  height:50vh;
  background-color:rgb(255, 255, 255);
  z-index:1000;
  transition:all .55s ease-in-out;
}

.menu_paper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: .5;
  background-size: 35%;
  background-repeat: repeat;
  background-image: url("~/assets/content/paper/paper_overlay_3.jpg");
  mix-blend-mode: multiply;
  pointer-events: none;
}

.transition_overlay {
  width: 100vw;
  height: 200vh;
  background-color: rgba(0, 35, 59, 0.1);
  z-index: 950;
  position: fixed;
  bottom: 0;
  left: 0;
  transition: all .8s ease-in-out;
}
</style>
