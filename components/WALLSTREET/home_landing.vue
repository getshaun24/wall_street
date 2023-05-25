
<template>
    
    <div class="landing_grid" ref="target">
                            <div class="landing_left">
                              <div style="margin-top:5%">
                            <h4 class="landing_title">Settle Your<br>Deals Today.</h4>
        
        
                            <!-- <CWSButtonsSlideButton button_text="Sign Up"/> -->
        
                            <p class="landing_text">WSN aims to empower investors, professionals, and stakeholders in the private equity industry by providing them with access to valuable information and insights, enabling them to make informed investment decisions and stay ahead of market trends.
</p>
        
        
                              </div>
                            </div>
        
                            <div class="landing_right">
                               
                              <div style="z-index:0; height:80vh;">
                                <img :class="{ landing_image_background_1_anim: disabled }" class="landing_image_background_1" src="~/assets/content/CWS/homepage/home_36.svg">
                                <img :class="{ landing_image_background_2_anim: disabled }"  class="landing_image_background_2" src="~/assets/content/CWS/homepage/home_6.png">
                                <img :class="{ landing_image_background_3_anim: disabled }" class="landing_image_background_3" src="~/assets/content/CWS/homepage/home_37.png">
                              </div>


                              <div style="z-index:10; position:absolute; margin-top:-70vh;">
                                <div>
                                <img :class="{ landing_image_1_anim: disabled }"  class="landing_image_1" src="~/assets/content/CWS/homepage/home_5.jpg">
                                <p :class="{ image_text_1_anim: disabled }" class="image_text_1">For Insurance Agents</p>
                              </div>
                              <div>
                                <img :class="{ landing_image_2_anim: disabled }" class="landing_image_2" src="~/assets/content/CWS/homepage/home_4.jpg">
                                <p :class="{ image_text_2_anim: disabled }" class="image_text_2">For Lawyers</p>
                              </div>
                              <div>
                                <img :class="{ landing_image_3_anim: disabled }" class="landing_image_3" src="~/assets/content/CWS/homepage/home_3.jpg">
                                <p :class="{ image_text_3_anim: disabled }" class="image_text_3">Quick Settlements</p>
                              </div>
                              </div>



                                
            
                        
                                </div>
                    
                    
                            </div>
        

</template>



<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'


//landing_image_background_1 = ref(landing_image_background_1)

        // sleep time expects milliseconds
        function sleep (time) {
          return new Promise((resolve) => setTimeout(resolve, time));
        }


const target = ref(null)
const targetIsVisible = ref(false)
const disabled = ref(false)

    const { stop } = useIntersectionObserver( target,
      ([{ isIntersecting }], observerElement) => {
        targetIsVisible.value = isIntersecting
        if (targetIsVisible.value == true){
            sleep(1000).then(() => { disabled.value = true })
        } else{
            sleep(1000).then(() => { disabled.value = false })
        }
      },
    )




</script>





        <style scoped>
        
        .landing_title{
          margin-bottom:10%
        }
      .image_text_1{
        margin-top:112px;
        margin-left:150px;
        position:absolute;
        z-index:10;
        background-color:#fff;
        padding:10px;
        width:160px;
        border-radius:15px;
        opacity:0;
        mix-blend-mode: normal;
      }

      .image_text_2{
        margin-top:356px;
        margin-left:13px;
        position:absolute;
        z-index:10;
        background-color:#fff;
        padding:10px;
        width:92px;
        border-radius:15px;
        opacity:0;
        mix-blend-mode: normal;
      }


      .image_text_3{
        margin-top:-50px;
        margin-left:235px;
        position:absolute;
        z-index:10;
        background-color:#fff;
        padding:10px;
        width:140px;
        border-radius:15px;
        opacity:0;
        mix-blend-mode: normal;
      }

      .image_text_1_anim{
        opacity:1;
        transition: all 500ms ease 300ms;
      }
      .image_text_2_anim{
        opacity:1;
        transition: all 500ms ease 300ms;
      }
      .image_text_3_anim{
        opacity:1;
        transition: all 500ms ease 300ms;
      }





      .landing_image_1{
        width:200px;
        height:255px;
        border-radius: 25px;
        margin-top:-60%;
        margin-left:62%;
        z-index:3;
        object-fit: cover;
        position: absolute;
        opacity:.8;
        -webkit-transform: scale(1.15);
    -moz-transform: scale(1.15);
    -o-transform: scale(1.15);
    -ms-transform: scale(1.15);
    transform: scale(1.15);
      }

      .landing_image_2{
        width:200px;
        height:300px;
        border-radius: 25px;
        margin-top:30%;
        margin-left:-35%;
        z-index:3;
        object-fit: cover;
        position: absolute;
        opacity:.8;
        -webkit-transform: scale(1.15);
    -moz-transform: scale(1.15);
    -o-transform: scale(1.15);
    -ms-transform: scale(1.15);
    transform: scale(1.15);
      }

      .landing_image_3{
        width:250px;
        height:350px;
        border-radius: 25px;
        margin-top:105%;
        margin-left:80%;
        z-index:3;
        object-fit: cover;
        position: relative;
        opacity:.8;
        -webkit-transform: scale(1.15);
    -moz-transform: scale(1.15);
    -o-transform: scale(1.15);
    -ms-transform: scale(1.15);
    transform: scale(1.15);
      }

      .landing_image_1_anim{
        transition: all 700ms ease;
        margin-top:-40%;
        margin-left:60%;
        opacity:1;
        -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
      }

      .landing_image_2_anim{
        transition: all 800ms ease;
        margin-top:40%;
        margin-left:-30%;
        opacity:1;
        -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
      }

      .landing_image_3_anim{
        transition: all 900ms ease;
        margin-top:85%;
        margin-left:95%;
        opacity:1;
        -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
      }


        .btn-arrow span {
          display: inline-block;
          position: relative;
          transition: all 300ms ease-out;
          will-change: transform;
        }
        .btn-arrow:hover span {
          transform: translate3d(-1rem, 0, 0);
        }
        .btn-arrow svg {
          position: absolute;
          width: 1.1em;
          right: 0px;
          right: 0rem;
          opacity: 0;
          top: 50%;
          transform: translateY(-50%);
          transition: all 300ms ease-out;
          will-change: right, opacity;
        }
        .btn-arrow svg * {
          stroke-width: 5;
          stroke-color: transparent;
        }
        .btn-arrow:hover svg {
          opacity: 1;
          right: -2rem;
        }
        
        
        
        
        
        
        .landing_grid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 5%;
            grid-row-gap: 0px;
            margin-left:5vw;
            width:90%;
        }
        
        .landing_left{
            margin-top:15vh;
            width:100%;
        }
        .landing_right{
            margin-top:15vh;
            width:80%;
            margin-left:5%;
        }
        
        
     
        
        .landing_text{
        margin-top:30px;
        width:80%;
        font-size:110%
        }
        
        
        .landing_image_background_1{
            width: 60%;
            z-index:1;
            position: relative;
            transform: rotate(15deg);
            margin-left:-3px;
            margin-top:-12px;
            opacity:1;
            max-height:500px;
            max-width:500px
        }
        .landing_image_background_2{
            width:100%;
            margin-top:-40%;
            margin-left:-15px;
            z-index:0;
            position: relative;
            opacity:1;
            max-height:500px;
            max-width:500px
        }
        .landing_image_background_3{
            width:90%;
            margin-top:-60%;
            margin-left:77%;
            z-index:3;
            position: relative;
            width:60%;
            opacity:1;
            max-height:500px;
            max-width:500px
        }



        .landing_image_background_1_anim {
          transition: all 800ms ease;
          margin-top:12px;
          opacity:.7;
          -webkit-transform: scale(1.15);
    -moz-transform: scale(1.15);
    -o-transform: scale(1.15);
    -ms-transform: scale(1.15);
    transform: scale(1.15);
}

.landing_image_background_2_anim {
          transition: all 800ms ease;
          margin-top:-50%;
          margin-left:0px;
          opacity:.3;
          -webkit-transform: scale(1.15);
    -moz-transform: scale(1.15);
    -o-transform: scale(1.15);
    -ms-transform: scale(1.15);
    transform: scale(1.15);
}

.landing_image_background_3_anim {
          transition: all 800ms ease;
          margin-top:-50%;
            margin-left:67%;
            opacity:.3;
            -webkit-transform: scale(1.15);
    -moz-transform: scale(1.15);
    -o-transform: scale(1.15);
    -ms-transform: scale(1.15);
    transform: scale(1.15);
}

                    </style>
                    
                    
                    
                    

        