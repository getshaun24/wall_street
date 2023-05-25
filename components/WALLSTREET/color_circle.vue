<template>
  <Teleport to="body">
    <div
      ref="container"
      class="color-circle"
      :style="{ 
        backgroundColor: circleColor,
        width: circleSize + 'px',
        height: circleSize + 'px',
        left: circleX + 'px',
        top: circleY + 'px'
      }"
    ></div>
  </Teleport>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  const circleColor = ref('')
  const circleSize = ref(0)
  const circleX = ref(0)
  const circleY = ref(0)
  
  const route = useRoute()
  const router = useRouter()
  
  const handleClick = (event) => {
    circleColor.value = '#' + Math.floor(Math.random()*16777215).toString(16)
    circleSize.value = Math.max(document.documentElement.clientWidth, document.documentElement.clientHeight)
    circleX.value = event.clientX - circleSize.value / 2
    circleY.value = event.clientY - circleSize.value / 2
  }
  
  const handleRouteChange = () => {
    circleSize.value = 0
  }
  
  onMounted(() => {
    document.body.addEventListener('click', handleClick)
    router.afterEach(handleRouteChange)
  })
  
  onUnmounted(() => {
    document.body.removeEventListener('click', handleClick)
  })
  </script>
  
  <style scoped>
  .color-circle {
    position: absolute;
    border-radius: 50%;
    transform: scale(1);
    transition: transform 2s, width 2s, height 2s, top 2s, left 2s;
  }
  </style>
  