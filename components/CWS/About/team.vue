<template>

    <div class="top_text">
        <h5 class="counter_title">A Curated Team and Growing.</h5>
    
    <p>Quis ipsum suspendisse ultrices gravida dictum fusce ut. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. In eu mi bibendum neque egestas. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.</p>
    
    </div>
    
        <div class="grid">
    
        <div class="grid_inner_section_1">
            <div class="section_1_image_1"></div>
            <div  class="section_1_counter">
                <p class="counter_text">Dyl</p>
                <p class="counter_text">and</p>
                <p class="counter_text">Jensen</p>
            </div>
        </div>
    
    
    
        <div class="section_1_image_2" style="height:520px; margin-left:-25%"></div>
    
    
    
        <div class="grid_inner_section_2">
    
            <div class="grid_inner_section_2_inner">
                <div class="section_2_counter">
                    <p class="counter_text">Naif Hajjar</p>
                <p class="counter_text">and</p>
                <p class="counter_text">Jon Beirn</p>
                </div>
                <div class="section_2_image_1"></div>
           
            </div>
    
        <div class="section_2_image_2"></div>
            
    </div>
    
    
    <div class="section_3_image_1" style="height:520px"></div>
    
    
        </div>



        <div class="grid_2">

    <div class="grid_inner_section_2_bottom">

        <div class="grid_inner_section_2_inner">
            <div class="section_2_counter">
                <p class="counter_text">Shaun Cohen</p>
            <p class="counter_text">and</p>
            <p class="counter_text">Heidi Perez</p>
            </div>
            <div class="section_2_image_1_bottom"></div>
       
        </div>

    <div class="section_2_image_2_bottom"></div>
        
</div>


<div class="section_3_image_1_bottom" style="height:520px"></div>



<div class="grid_inner_section_1">
        <div class="section_1_image_1_bottom"></div>
        <div  class="section_1_counter">
            <p class="counter_text">Team Member 1</p>
            <p class="counter_text">and</p>
            <p class="counter_text">Reid Kostenuk</p>
        </div>
    </div>



    <div class="grid_inner_section_1_bottom">
        <div  class="section_1_counter">
            <p class="counter_text">Joshua Patterson</p>
            <p class="counter_text">and</p>
            <p class="counter_text">Team Member 2</p>
        </div>
        <div class="section_1_image_1_bottom_2"></div>
    </div>



    </div>
            </template>
    
    
    
            
            <script setup>
    
    import { ref } from 'vue'
    import { useIntersectionObserver } from '@vueuse/core'
    
    
    
    const target = ref(null)
    const targetIsVisible = ref(false)
    const disabled = ref(false)
    const deal_count = ref(1750)
    const law_firm_count = ref(0)
    
        const { stop } = useIntersectionObserver( target,
          ([{ isIntersecting }], observerElement) => {
            targetIsVisible.value = isIntersecting
            if (targetIsVisible.value == true){
              disabled.value = true
    
              deal_count.value = 1750
                    setInterval(function(){
                        if (deal_count.value < 2567){
                        deal_count.value ++ 
                        }
                    }, 1);
    
                    law_firm_count.value = 0
                    setInterval(function(){
                        if (law_firm_count.value < 224){
                            law_firm_count.value ++ 
                        }
                    }, 15);
                        
         
                
            } else{
              disabled.value = false
            }
          },
        )
    
    
    
    
        
            </script>
            
            
            
            
            
            
            
            <style scoped>
    
    .counter_title{
        margin-bottom:7%
    }
            .top_text{
                width:60%;
                margin-left:20%;
                text-align: center;
            }
        
            .grid{
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-template-rows: repeat(1, 1fr);
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;
                    width:90%;
                    margin:5%;
                    margin-bottom:10px
                }
    

            .grid_2{
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-template-rows: repeat(1, 1fr);
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;
                    width:95%;
                    margin:5%;
                    margin-top:10px
                }

                .grid_inner_section_1{
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: repeat(2, 1fr);
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;
                    margin-right:25%;
                }
    
                .grid_inner_section_1_bottom{
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: repeat(2, 1fr);
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;
                    margin-right:25%;
                    margin-left:-25%
                }
    
                .grid_inner_section_2{
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: repeat(2, 1fr);
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;
                    margin-left:-25%
                }

                .grid_inner_section_2_bottom{
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: repeat(2, 1fr);
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;
                    margin-left:0%;
                }
    
                .grid_inner_section_2_inner{
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: 1fr;
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;
                  
                }
    
        
    
            .section_1_image_1{
                background-image: url('~/assets/content/about/dyl_2.jpeg');
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
                border-radius:25px;
                width:100%;
                align-content: center;
                height:250px
            }
    
            .section_1_image_2{
                background-image: url('~/assets/content/about/jen_2.jpeg');
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
                border-radius:25px;
                width:100%;
                align-content: center;
                height:250px
            }
    
            .section_2_image_1{
                background-image: url('~/assets/content/about/naif.jpg');
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
                border-radius:25px;
                width:100%;
                align-content: center;
                height:250px
            }
    
            .section_2_image_2{
                background-image: url('~/assets/content/about/get_jon.jpg');
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
                border-radius:25px;
                width:100%;
                align-content: center;
                height:250px
            }
    
            .section_3_image_1{
                background-image: url('~/assets/content/about/jp.jpg');
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
                border-radius:25px;
                width:100%;
                align-content: center;
                height:250px
            }


            





            
            .section_1_image_1_bottom{
                background-image: url('~/assets/content/about/person_7.jpg');
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
                border-radius:25px;
                width:100%;
                align-content: center;
                height:250px
            }

            .section_1_image_1_bottom_2{
                background-image: url('~/assets/content/about/person_9.jpg');
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
                border-radius:25px;
                width:100%;
                align-content: center;
                height:250px
            }

        
    
            .section_1_image_2_bottom{
                background-image: url('~/assets/content/about/naif.jpg');
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
                border-radius:25px;
                width:100%;
                align-content: center;
                height:250px
            }
            
    
            .section_2_image_1_bottom{
                background-image: url('~/assets/content/about/shaun.jpeg');
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
                border-radius:25px;
                width:100%;
                align-content: center;
                height:250px
            }
    
            .section_2_image_2_bottom{
                background-image: url('~/assets/content/about/heidi.jpg');
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
                border-radius:25px;
                width:100%;
                align-content: center;
                height:250px
            }
            
    
            .section_3_image_1_bottom{
                background-image: url('~/assets/content/about/reid.jpg');
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
                border-radius:25px;
                width:100%;
                align-content: center;
                height:250px
            }





    
            .section_1_counter{
                background-color:rgb(240, 224, 255);
                height:250px;
                width:100%;
                border-radius:25px
            }
    
            .section_2_counter{
                background-color:rgb(255, 255, 218);
                height:250px;
                width:100%;
                border-radius:25px
            }
            .counter_text{
                margin-left:20px;
                margin-bottom:15px
            }
    
            .counter_nums{
                margin-left:20px;
                margin-top:-20%
             
            }
        
        
            </style>