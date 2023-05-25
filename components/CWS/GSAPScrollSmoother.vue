
        <template>
        <div id="smooth-wrapper">
        <div id="smooth-content">
        <slot></slot>
        </div>
        </div>
        </template>

        <script setup>


        import { onMounted, onUnmounted, onBeforeMount, ref } from 'vue';
        import { gsap } from 'gsap'
        import { ScrollTrigger } from 'gsap/ScrollTrigger'
        import { ScrollSmoother } from 'gsap/ScrollSmoother'
        import { SplitText } from 'gsap/SplitText'
        import { useWindowSize } from '@vueuse/core'

        import { page_to } from "~/stores/page_to.js"

        // Initialize all GSAP plugins

        // gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

        if (process.client) {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
}



        // sleep time expects milliseconds
        function sleep (time) {
          return new Promise((resolve) => setTimeout(resolve, time));
        }


        const current_route = useRoute()
        console.log('this_route', current_route.name)



        const smoothy = ref()




        const { width, height } = useWindowSize()


   const sleep_for = ref(100)





  const route_to = page_to()







        // Initialize the smooth scroll plugin
        onMounted(() => {





        


    sleep_for.value = 1







  // sleep for a few milli-seconds lionger then trhe page transition time
  sleep(sleep_for.value).then(() => { 




// ScrollTrigger.refresh();
          

   smoothy.value =  ScrollSmoother.create({
   smooth: 2.5, 
   effects: true, 
   normalizeScroll: false,
   normalizeScroll: {
    allowNestedScroll: true
  },
  smoothTouch: 0.01,  
   })


    smoothy.value.scrollTo(0, false)

   

    // ------------------------------ Footer ------------------------------
// ------------------------------ Footer ------------------------------



    ScrollTrigger.create({
        trigger: "footer",
        start: "bottom bottom", 
        // end: "bottom 1000px",
        pin: "footer",
        pinSpacing: true,
      });




// ------------------------------ Home ------------------------------
// ------------------------------ Home ------------------------------






if (current_route.name == 'index' || current_route.name == '/'){

 
    }
      

      // ------------------------------ CONTACT PAGE ------------------------------ //
      // ------------------------------ CONTACT PAGE ------------------------------ //

 


})
        })

        onUnmounted(() => {




  
          // smoothy.value.refresh(); // <- Easy Cleanup!
          // console.log('REFRESHED')

        })

        </script>



<style scoped>
#smooth-content {
  /* will-change: transform; */
  border-top: 1px solid transparent;
   border-bottom: 1px solid transparent
}
</style>
