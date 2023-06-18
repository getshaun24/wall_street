<template>
  <Teleport to="body">
    <div class="custom_cursor">
      <div id="cursor_big" class="custom_cursor_ball custom_cursor_ball_big" :style="{ 'background-image': 'url(' + cursorImageUrl + ')' }" ></div>
      <div id="cursor_small" class="custom_cursor_ball custom_cursor_ball_small"></div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onUpdated } from 'vue'
import { gsap } from 'gsap'
import next_ai_img from '~/assets/content/wallstreet/fund_pages/next_ai/next_logos/next_ai.png'
import nano_img from '~/assets/content/wallstreet/fund_pages/next_ai/next_logos/next_logo_6.png'
import default_img from '~/assets/content/wallstreet/default_cursor.png'

const hoverClass = 'cursor_hover'

let cursorBig = null
let cursorSmall = null
let withHover = []
let isDragging = false;

onMounted(init)
onBeforeUnmount(destroy)
onUpdated(() => {
  destroy()
  init()
})

function init() {
  setTimeout(() => {
    cursorBig = document.getElementById('cursor_big')
    cursorSmall = document.getElementById('cursor_small')
    withHover = [...document.getElementsByTagName('a'), ...document.getElementsByClassName(hoverClass)]

    withHover.forEach((element) => {
      element.addEventListener('mouseover', onMouseHover)
      element.addEventListener('mouseout', onMouseHoverOut)
    })
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseHover)
    document.addEventListener('mouseup', onMouseHoverOut)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('click', onClick)
  }, 100)
}

function destroy() {
  withHover.forEach((element) => {
    element.removeEventListener('mouseover', onMouseHover)
    element.removeEventListener('mouseout', onMouseHoverOut)
  })
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mousedown', onMouseHover)
  document.removeEventListener('mouseup', onMouseHoverOut)
  document.removeEventListener('mouseenter', onMouseEnter)
  document.removeEventListener('mouseleave', onMouseLeave)
}


let moveTimeout;
function onMouseMove(e) {
  // Clear the timeout if it exists
  if (moveTimeout) clearTimeout(moveTimeout);

  // On mouse move, update cursor position and size
  cursorSmall.style.opacity = 1;
  gsap.to(cursorBig, 2, {
    x: e.clientX - 5,
    y: e.clientY - 5,
    opacity: 1,
    scale: scale_size.value
  });
  gsap.to(cursorSmall, 0.1, {
    x: e.clientX,
    y: e.clientY
  });
  

  // Set a timeout to trigger when the mouse stops moving
  moveTimeout = setTimeout(function() {
    // Action to perform when the mouse stops. Modify as needed.
    gsap.to(cursorBig, 3.5, {
      scale: 0,
      opacity: 0.75,
    });
  }, 0); // Adjust delay as needed
}

function onMouseEnter() {
  cursorBig.style.opacity = 1
  cursorSmall.style.opacity = 1
}

function onMouseLeave() {
  cursorBig.style.opacity = 0
  cursorSmall.style.opacity = 0
}

// function onMouseMove(e) {
//   cursorSmall.style.opacity = 1
//   gsap.to(cursorBig, 1, {
//     x: e.clientX - 3.5,
//     y: e.clientY - 3.5,
//     scale: 5
//   })
//   gsap.to(cursorSmall, 0.1, {
//     x: e.clientX,
//     y: e.clientY
//   })
// }

function onMouseHover() {
  gsap.to(cursorBig, 0.3, {
    width: 40,
    height: 40,
    left: -13,
    top:-13
  })
}

function onMouseHoverOut() {
  gsap.to(cursorBig, 0.3, {
    width: 15,
    height: 15,
    left: 0,
    top:0,
  })
}

function onClick() {
  gsap.to(cursorBig, 0.4, {
    width: 80,
    height: 80,
    left: -30,
    top:-30
  })
  gsap.to(cursorBig, 0.3, {
    width: 15,
    height: 15,
    left: 0,
    top:0,
    delay: 0.2
  })
}





const route = useRoute()
const scale_size = ref(1)
const cursorImageUrl = computed(() => {
  if (route.name === 'fund_pages-next_ai') {
    scale_size.value = 12
    return next_ai_img
  } else if (route.name === 'fund_pages-nano') {
    scale_size.value = 8
    return nano_img
  } else {
    scale_size.value = 8
    return default_img
  }
})






</script>

  <style scoped>
    
.custom_cursor{
  z-index: 1000000000000 !important;
}

    .custom_cursor_ball {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100009999 !important;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s ease;
            /* backdrop-filter: blur(2px); */
            z-index:1000000000 !important;
          }

          .custom_cursor_ball_big {
            background-image: url('');
             background-size: contain;
            background-repeat: no-repeat;
            width: 15px;
            height: 15px;
            /* border: 1px solid #006aff65; */
            /* background-color: #ffffff7c; */
            /* border-radius: 50%; */
            z-index:1000000000 !important;
          }

          .custom_cursor_ball_small {
            content: "";
            width: 10px;
            height: 10px;
            background: green;
            border-radius: 50%;
            z-index:2000000000000000 !important;
          }
  </style>