<template>

    <div class="grid_xxx">

        <div class="image_section_container">
        <div class="image_section" data-speed="auto"></div>
    </div>

    <div class="text_section">

        <h6 class="title_text">Time-Savings</h6>
        <p>WSN is a one-stop shop for private equity insights, saving you valuable time. By aggregating and curating information from various sources, we remove the need for tedious research, allowing you to focus on strategic decision-making. Stay informed about trends and notable deals without sifting through countless resources.</p>
        <br><br>
        <h6 class="title_text">Cost-Effective</h6>
        <p>WSN provides a cost-effective gateway to comprehensive private equity information. Rather than subscribing to multiple databases or investing in costly research, rely on WSN for accurate and timely insights. We offer high-quality information and unique investment opportunities at a fraction of the cost, maximizing your investment budget.</p>
    </div>
    

        
    </div>
        </template>
        
        <script setup>
    
        </script>
        
        
        
        
        
        
        
        <style scoped>
    
        .grid_xxx{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 80px;
            grid-row-gap: 0px;
            width:90%;
            margin: 0% 5%;
            margin-bottom:10%
            }

        .grid_xxx .image_section_container { order: 1; }
        .grid_xxx .text_section { order: 2; }
    
        .text_section{
            margin-top:10%;
        }
    
        .title_text{
            margin:30px 0;
            font-size:250%
        }
    
        .image_section_container{
            overflow:hidden;
            min-height:800px;
            height:100%;
            border-radius:25px;
        }
        .image_section{
            background-image: url('~/assets/content/wallstreet/services/services_1.jpg');
            background-position: center; 
            background-repeat: no-repeat;
            background-size: cover;
            width:100%;
            align-content: center;
            min-height:800px;
            height:120%
        }
    





@media only screen and (min-width: 0px) and (max-width: 576px) {
    .grid_xxx{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 100px;
            grid-row-gap: 0px;
            width:85%;
            margin: 0% 7.5%;
            margin-bottom:10%;
            margin-top:-30%
            }
    
    .grid_xxx .image_section_container { order: 2; }
    .grid_xxx .text_section { order: 1; }
    
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
    .grid_xxx{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 100px;
            grid-row-gap: 0px;
            width:85%;
            margin: 0% 7.5%;
            margin-bottom:10%;
            margin-top:-30%
            }
    
    .grid_xxx .image_section_container { order: 2; }
    .grid_xxx .text_section { order: 1; }
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