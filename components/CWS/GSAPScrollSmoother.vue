<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'

// Initialize all GSAP plugins
if (process.client) {
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollSmoother,
    SplitText
  );
}

// sleep time expects milliseconds
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const smoothy = ref();

// Determine if the current browser is Safari
function isSafari() {
  return typeof window !== 'undefined' && /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);
}

function isIPhone() {
  return typeof window !== 'undefined' && /(iPhone|iPod|iPad)/i.test(window.navigator.userAgent);
}

// Determine if the current device is a mobile
function isMobile() {
  return typeof window !== 'undefined' && /Mobi|Android/i.test(window.navigator.userAgent);
}

// Use ScrollSmoother for non-Safari desktop browsers
const useSmoothScroll = isMobile();

// Initialize the smooth scroll plugin
onMounted(() => {
  document.addEventListener('scroll', function (e) {
    e.preventDefault();
  });

  // sleep for a few milliseconds longer than the page transition time
  sleep(10).then(() => {


    // Adjust ScrollSmoother parameters for Safari
    if (useSmoothScroll) {
      smoothy.value = ScrollSmoother.create({
        smooth: 0, // Adjust the smoothness for Safari
        effects: false,
        autoStart: false,
        scrollDuration: 0,
        scrollSpeed: 0,
        scrollEasing: "linear",
        smoothTouch: 0,
        normalizeScroll: true,
        normalizeScroll: {
          allowNestedScroll: true,
        },
      });
    } else {
      // Original settings for non-Safari browsers
      smoothy.value = ScrollSmoother.create({
        smooth: 2.5,
        effects: true,
        normalizeScroll: true,
        normalizeScroll: {
          allowNestedScroll: true,
        },
        smoothTouch: 0.001,
      });
    }

    smoothy.value.scrollTo(0, false);

    // Footer ScrollTrigger
    ScrollTrigger.create({
      trigger: "footer",
      start: "bottom bottom",
      pin: "footer",
      pinSpacing: true,
    });
  });
});

onUnmounted(() => {
  smoothy.value.refresh(); // <- Easy Cleanup!
});

</script>



<style scoped>
#smooth-content {
  /* will-change: transform; */
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
}
</style>
