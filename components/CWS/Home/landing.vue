
<template>
    
    <div class="landing_grid is_not_mobile" ref="target">
                            <div class="landing_left">
                              <div style="margin-top:5%">
                            <h4 class="landing_title">Empower Your<br>Portfolio Today.</h4>
        
        
                            <CWSButtonsSlideButton button_text="Sign Up"/>
        
                            <p class="landing_text">The Wall Street Network aims to empower investors, professionals, and stakeholders in the private equity industry by providing them with access to valuable information and insights, enabling them to make informed investment decisions and stay ahead of market trends.
</p>
        
        
                              </div>
                            </div>
        
                            <div class="landing_right">
                               
                              <div style="z-index:0; height:80vh;" class="background_images">
                                <img :class="{ landing_image_background_1_anim: disabled }" class="landing_image_background_1" src="~/assets/content/homepage/home_36.svg">
                                <img :class="{ landing_image_background_2_anim: disabled }"  class="landing_image_background_2" src="~/assets/content/homepage/home_6.png">
                                <img :class="{ landing_image_background_3_anim: disabled }" class="landing_image_background_3" src="~/assets/content/homepage/home_37.png">
                              </div>


                              <div style="z-index:10; position:absolute; margin-top:-63vh;">
                                <div>
                                <img :class="{ landing_image_1_anim: disabled }"  class="landing_image_1" src="~/assets/content/wallstreet/home/home_1.jpg">
                                <p :class="{ image_text_1_anim: disabled }" class="image_text_1">You Are An Investor</p>
                              </div>
                              <div>
                                <img :class="{ landing_image_2_anim: disabled }" class="landing_image_2" src="~/assets/content/wallstreet/home/home_3.jpg">
                                <p :class="{ image_text_2_anim: disabled }" class="image_text_2">You Are Savvy</p>
                              </div>
                              <div>
                                <img :class="{ landing_image_3_anim: disabled }" class="landing_image_3" src="~/assets/content/wallstreet/home/home_5.jpg">
                                <p :class="{ image_text_3_anim: disabled }" class="image_text_3">You Are Here</p>
                              </div>
                              </div>                        
                                </div>
                            </div>
        


       
                            



                            <div class="landing_grid is_mobile" ref="target">


                              <div class="landing_right">
                               
                               <div style="z-index:0; height:100vh;">
                                 <img :class="{ landing_image_background_1_anim: disabled }" class="landing_image_background_1" src="~/assets/content/homepage/home_36.svg">
                                 <img :class="{ landing_image_background_2_anim: disabled }"  class="landing_image_background_2" src="~/assets/content/homepage/home_6.png">
                                 <img :class="{ landing_image_background_3_anim: disabled }" class="landing_image_background_3" src="~/assets/content/homepage/home_37.png">
                               </div>
 
 
                               <div style="z-index:10; position:absolute; margin-top:-75vh; width:80%">
                                 <div>
                                 <img :class="{ landing_image_1_anim: disabled }"  class="landing_image_1" style="object-position: center 10%;" src="~/assets/content/homepage/home_5.jpg">
                                 <p :class="{ image_text_1_anim: disabled }" class="image_text_1">You are an Investor. This is for you.</p>
                               </div>
      
                               </div>                        
                                 </div>










                            <div class="landing_left">
                              <div style="margin-top:0%">
                            <h4 class="landing_title">Empower Your<br>Portfolio Today.</h4>
        
        
                            <CWSButtonsSlideButton button_text="Sign Up"/>
        
                            <p class="landing_text">The Wall Street Network aims to empower investors, professionals, and stakeholders in the private equity industry by providing them with access to valuable information and insights, enabling them to make informed investment decisions and stay ahead of market trends.</p>
        
        
                              </div>
                            </div>
        
                            </div>
        

</template>



<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'


//landing_image_background_1 = ref(landing_image_background_1)



const target = ref(null)
const targetIsVisible = ref(false)
const disabled = ref(false)

    const { stop } = useIntersectionObserver( target,
      ([{ isIntersecting }], observerElement) => {
        targetIsVisible.value = isIntersecting
        if (targetIsVisible.value == true){
          disabled.value = true
        } else{
          disabled.value = false
        }
      },
    )




</script>





        <style scoped>
        
        .landing_title{
          margin-bottom:10%
        }
      .image_text_1{
        font-size:15px;
        margin-top:35px;
        margin-left:150px;
        position:absolute;
        z-index:10;
        background-color:#fff;
        padding:10px;
        width:180px;
        text-align:center;
        border-radius:15px;
        border:rgba(0, 128, 0, 0.15) 1px solid;
        opacity:1
      }

      .image_text_2{
        font-size:18px;
        margin-top:346px;
        margin-left:-40px;
        position:absolute;
        z-index:10;
        background-color:#fff;
        padding:10px;
        width:145px;
        text-align:center;
        border-radius:15px;
        border:rgba(0, 128, 0, 0.15) 1px solid;
        opacity:1
      }


      .image_text_3{
        font-size:20px;
        margin-top:-30px;
        margin-left:245px;
        position:absolute;
        z-index:10;
        background-color:#fff;
        padding:10px;
        width:180px;
        border-radius:15px;
        text-align:center;
        border:rgba(0, 128, 0, 0.15) 1px solid;
        box-shadow: 0px 0px 10px 1px #00000052;
        opacity:1
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
        height:215px;
        border-radius: 25px;
        margin-top:-60%;
        margin-left:62%;
        z-index:3;
        object-fit: cover;
        position: absolute;
        opacity:1;
        -webkit-transform: scale(1.15);
    -moz-transform: scale(1.15);
    -o-transform: scale(1.15);
    -ms-transform: scale(1.15);
    transform: scale(1.15);
      }

      .landing_image_2{
        width:170px;
        height:270px;
        border-radius: 25px;
        margin-top:30%;
        margin-left:-25%;
        z-index:3;
        object-fit: cover;
        position: absolute;
        opacity:1;
        -webkit-transform: scale(1.15);
    -moz-transform: scale(1.15);
    -o-transform: scale(1.15);
    -ms-transform: scale(1.15);
    transform: scale(1.15);
      }

      .landing_image_3{
        width:280px;
        height:230px;
        border-radius: 25px;
        margin-top:60%;
        margin-left:75%;
        z-index:3;
        object-fit: cover;
        position: relative;
        opacity:1;
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
            opacity:.6;
            max-height:500px;
            max-width:500px
        }
        .landing_image_background_3{
            width:90%;
            margin-top:-60%;
            margin-left:70%;
            z-index:3;
            position: relative;
            width:60%;
            opacity:.8;
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



@media only screen and (min-width: 0px) and (max-width: 475px) {
.is_not_mobile{
  display:none !important
}
.landing_grid{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, 1fr); 
            grid-column-gap: 5%;
            grid-row-gap: 0px;
            margin-left:5vw;
            width:90%;
            margin-bottom: -210%;
        }      
        .landing_right{
            margin-top:15vh;
            width:60%;
            margin-left:5%;
        }
        .landing_image_1{
        width:80%;
        height:255px;
        border-radius: 25px;
        margin-top:-60%;
        margin-left:10%;
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
      .image_text_1{
        margin-top:70px;
        margin-left:50px;
        position:relative;
        z-index:10;
        background-color:#fff;
        border: green solid 1px;
        padding:10px;
        width:200px;
        border-radius:15px;
        opacity:1
      }
      .landing_left{
            margin-top:-110%;
            width:100%;
        }
  
}


@media only screen and (min-width: 475px) and (max-width: 576px) {
.is_not_mobile{
  display:none !important
}
.landing_grid{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, 1fr); 
            grid-column-gap: 5%;
            grid-row-gap: 0px;
            margin-left:5vw;
            width:90%;
            margin-bottom: -165%;
        }      
        .landing_right{
            margin-top:10vh;
            width:70%;
            margin-left:15%;
        }
        .landing_image_1{
        width:80%;
        height:275px;
        border-radius: 25px;
        margin-top:-61%;
        margin-left:0%;
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
      .image_text_1{
        margin-top:113px;
        margin-left:150px;
        position:relative;
        z-index:10;
        background-color:#fff;
        border: green solid 1px;
        padding:10px;
        width:200px;
        border-radius:15px;
        opacity:1
      }
      .landing_left{
            margin-top:-105%;
            width:100%;
        }
  
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
  
  .is_not_mobile{
  display:none !important
}
.landing_grid{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, 1fr); 
            grid-column-gap: 5%;
            grid-row-gap: 0px;
            margin-left:5vw;
            width:90%;
            margin-bottom: -165%;
        }      
        .landing_right{
            margin-top:10vh;
            width:70%;
            margin-left:15%;
        }
        .landing_image_1{
        width:80%;
        height:275px;
        border-radius: 25px;
        margin-top:-50%;
        margin-left:0%;
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
      .image_text_1{
        margin-top:90px;
        margin-left:50%;
        position:relative;
        z-index:10;
        background-color:#fff;
        border: green solid 1px;
        padding:10px;
        width:200px;
        border-radius:15px;
        opacity:1
      }
      .landing_left{
            margin-top:-105%;
            width:100%;
        }


.landing_title{
          margin-top:22%
        }

   

}

@media only screen and (min-width: 576px) and (max-width: 650px) {
  .landing_image_background_1_anim {
          margin-top:-30px;
          opacity:1
}

.landing_image_background_2_anim {
          margin-top:-230px;
}
.landing_image_background_3_anim {
          margin-top:-730px;
          margin-left:60%
}

  
}

@media only screen and (min-width: 650px) and (max-width: 720px) {
  .landing_image_background_1_anim {
          margin-top:-30px;
          opacity:1
}

.landing_image_background_2_anim {
          margin-top:-330px;
}
.landing_image_background_3_anim {
          margin-top:-730px;
          margin-left:60%
}  
}

@media only screen and (min-width: 720px) and (max-width: 768px) {
  .landing_image_background_1_anim {
          margin-top:-30px;
          margin-left:-20%;
          opacity:1
}

.landing_image_background_2_anim {
          margin-top:-400px;
}
.landing_image_background_3_anim {
          margin-top:-730px;
          margin-left:60%
}

.landing_image_1{
        width:80%;
        height:300px;
        border-radius: 25px;
        margin-top:-45%;
   
      }
   
      .landing_title{
          margin-top:35%
        }

  
}


@media only screen and (min-width: 768px) and (max-width: 992px) {
  .is_mobile{
  display:none !important
  }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .is_mobile{
  display:none !important
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1400px) {
  .is_mobile{
  display:none !important
  }
}

@media only screen and (min-width: 1400px) and (max-width: 1600px) {
  .is_mobile{
  display:none !important
  }
}

@media only screen and (min-width: 1600px) and (max-width: 5600px) {
  .is_mobile{
  display:none !important
  }
}

                    </style>
                    
                    
                    
                    

        