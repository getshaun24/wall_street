<template>

    <div class="top_text">
        <h5 class="counter_title">Chosen by a growing<br>
    number of professionals.</h5>
    
    <p>Professionals are increasingly choosing The Wall Street Network for its unparalleled ability to streamline complex private equity information into digestible insights. Its commitment to spotlighting unique and impactful investment deals makes it an attractive platform for those seeking to optimize their investment decisions.</p>
    
    </div>
    
        <div class="grid">
    
        <div class="grid_inner_section_1">
            <div class="section_1_image_1"></div>
            <div  class="section_1_counter">
                <div class="counter_text">Happy Customers</div>
                <div class="counter_nums">{{ deal_count }}</div>
            </div>
        </div>
    
    
    
        <div class="section_1_image_2" style="height:520px; margin-left:-25%"></div>
    
    
    
        <div class="grid_inner_section_2">
    
            <div class="grid_inner_section_2_inner">
                <div class="section_2_counter">
                    <div class="counter_text">Funds Insights</div>
                        <div ref="target" class="counter_nums">{{ law_firm_count }}</div>
                </div>
                <div class="section_2_image_1"></div>
           
            </div>
    
        <div class="section_2_image_2"></div>
            
    </div>
    
    
    <div class="section_3_image_1"></div>
    
    
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
    
              deal_count.value = 72050
                    setInterval(function(){
                        if (deal_count.value < 72567){
                        deal_count.value ++ 
                        }
                    }, 1);
    
                    law_firm_count.value = 670
                    setInterval(function(){
                        if (law_firm_count.value < 824){
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
                width:75%;
                margin-left:12.5%;
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
                }
    
    
                .grid_inner_section_1{
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: repeat(2, 1fr);
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;
                    margin-right:25%;
                }
    
                .grid_inner_section_2{
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: repeat(2, 1fr);
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;
                    margin-left:-25%
                }
    
                .grid_inner_section_2_inner{
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: 1fr;
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;
                  
                }
    
        
    
            .section_1_image_1{
                background-image: url('~/assets/content/wallstreet/counter_images/counter_2.jpg');
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
                border-radius:25px;
                width:100%;
                align-content: center;
                height:250px
            }
    
            .section_1_image_2{
                background-image: url('~/assets/content/wallstreet/counter_images/counter_6.jpg');
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
                border-radius:25px;
                width:100%;
                align-content: center;
                height:250px
            }
    
            .section_2_image_1{
                background-image: url('~/assets/content/wallstreet/counter_images/counter_5.jpg');
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
                border-radius:25px;
                width:100%;
                align-content: center;
                height:250px
            }
    
            .section_2_image_2{
                background-image: url('~/assets/content/wallstreet/counter_images/counter_3.jpg');
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
                border-radius:25px;
                width:100%;
                align-content: center;
                height:250px
            }
    
            .section_3_image_1{
                background-image: url('~/assets/content/wallstreet/counter_images/counter_1.jpg');
                background-position: center; 
                background-repeat: no-repeat;
                background-size: cover;
                border-radius:25px;
                width:100%;
                align-content: center;
                height:520px
            }
    
            .section_1_counter{
                background-color:rgba(213, 255, 226, 0.811);
                height:250px;
                width:100%;
                border-radius:25px
            }
    
            .section_2_counter{
                background-color:rgba(205, 248, 255, 0.911);
                height:250px;
                width:100%;
                border-radius:25px
            }
            .counter_text{
                margin-left:20px;
                margin-bottom:145px;
                margin-top:20px;
                font-size:26px;
                font-weight: 600;
            }
    
            .counter_nums{
                margin-left:20px;
                margin-top:-35%;
                font-size:40px;
             
            }
        

@media only screen and (min-width: 0px) and (max-width: 576px) {
    .grid{
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: repeat(1, 1fr);
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;
                    width:100%;
                    margin:5%;
                    margin-bottom: 0%;
                }

                .grid_inner_section_2{
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    grid-template-rows: repeat(2, 1fr);
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;
                    margin-left:0%;
                    
                }
                .grid_inner_section_2_inner{
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    grid-template-rows:  repeat(1, 1fr);
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;
                    width:90%
                  
                }
                .section_3_image_1{
                width:84%;
                align-content: left;
                height:500px;
                margin-left:-8%
            }
            .section_2_image_2{
                width:180%
            }
            .top_text{
                width:80%;
                margin-left:10%;
                text-align: center;
                margin-bottom:20%
            }
}

@media only screen and (min-width: 576px) and (max-width: 768px) {


    .grid{
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: repeat(1, 1fr);
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;
                    width:100%;
                    margin:5%;
                    margin-bottom:0%
                }

                .grid_inner_section_2{
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    grid-template-rows: repeat(2, 1fr);
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;
                    margin-left:0%;
                    
                }
                .grid_inner_section_2_inner{
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    grid-template-rows:  repeat(1, 1fr);
                    grid-column-gap: 10px;
                    grid-row-gap: 10px;
                    width:90%
                  
                }
                .section_3_image_1{
                width:84%;
                align-content: left;
                height:500px;
                margin-left:-8%
            }
            .section_2_image_2{
                width:180%
            }
            .top_text{
                width:80%;
                margin-left:10%;
                text-align: center;
                margin-bottom:20%
            }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1200px) and (max-width: 1400px) {
}

@media only screen and (min-width: 1400px) and (max-width: 1600px) {
}

@media only screen and (min-width: 1600px) and (max-width: 5600px) {
}
        
            </style>