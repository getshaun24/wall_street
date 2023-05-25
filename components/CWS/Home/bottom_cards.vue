<template>

    <div class="grid">
   
    
    <div class="image_section_1">
    <div>
        <h6 class="card_title">Investments</h6>
        <p class="sub_text">Our mission is to streamline your deals.</p>
        <div class="button_style" style="margin-top:50px">
        <CWSButtonsSignupLoginButton v-bind="invest_props"/>
    </div>
        </div>
    </div>
    <div class="image_section_2">
        <div>
        <h6 class="card_title">Learn More</h6>
        <p class="sub_text">Speak With Us.</p>
        <div class="button_style">
        <CWSButtonsSignupLoginButton v-bind="contact_props"/>
    </div>
        </div>
    </div>
    <div class="image_section_3">
        <div>
        <h6 class="card_title">Take Action</h6>
        <p class="sub_text">Get Up To Date Offers.</p>
        <div class="button_style">
        <CWSButtonsArrowButton/>
    </div>
        </div>
    </div>
        
    </div>
        </template>
        
        <script setup>
    
    const invest_props = {
  button_text: 'Deals',
  background_color: '#fff',
  color: '#000',
  link_to: '/investments'
}

const contact_props = {
  button_text: 'Contact',
  background_color: '#fff',
  color: '#000',
  link_to: '/contact'
}



        </script>
        
        
        
        
        
        
        
        <style scoped>
    
    .grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
width:90%;
margin:5%;
box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
border-radius:25px
}

.sub_text{
    width:70%;
    margin-left:10%;
    margin-top:240px;
}

.card_title{
    margin-top:-70px;
    margin-left:2%;
    transition: all 1s ease;
    position: absolute;
}

.button_style{
    margin-top:80px; 
    margin-left: 5%;
}


.image_section_1:hover  .card_title{
    margin-top:-85px;
}

.image_section_2:hover  .card_title{
    margin-top:-85px;
}

.image_section_3:hover  .card_title{
    margin-top:-85px;
}

.image_section_1{
    background-color:rgba(174, 238, 170, 0.5);
        width:100%;
        height:500px;
        transition: all 2s ease;
        border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
    }



    .image_section_2{
        background-color:rgba(174, 238, 170, 0.5);
        width:100%;
        height:500px;
        border-left: solid 1px rgba(121, 121, 121, 0.258);
        transition: all 2s ease;
    }

    .image_section_3{
        background-color:rgba(174, 238, 170, 0.5);
        width:100%;
        height:500px;
        border-left: solid 1px rgba(121, 121, 121, 0.258);
        transition: all 2s ease;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
    }

    .image_section_1:hover{
background-color:rgb(232, 216, 255);
border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
}

.image_section_2:hover{
background-color:rgb(255, 250, 203);
}

.image_section_3:hover{
background-color:rgb(201, 230, 255);
border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
}



@media only screen and (min-width: 0px) and (max-width: 576px) {
    .grid {
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 50px;
grid-row-gap: 0px;
width:90%;
margin:5%;
box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
}


.image_section_1{
        height:275px;
        border-radius: 25px;
        margin-bottom:30px
    }

    .image_section_2{
        height:275px;
        border-radius: 25px;
    }

    .image_section_3{
        height:275px;
        border-radius: 25px;
    }

    .image_section_1:hover  .card_title{
    margin-top:-65px;
}

.image_section_2:hover  .card_title{
    margin-top:-65px;
}

.image_section_3:hover  .card_title{
    margin-top:-65px;
}
    .card_title{
    margin-top:-50px;
    margin-left:5%;
    line-height: 0;
}

.sub_text{
    width:70%;
    margin-top:110px;
}

.button_style{
    margin-top:30px; 
    margin-left: 5%;
}


}

@media only screen and (min-width: 576px) and (max-width: 768px) {
    .grid {
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 50px;
grid-row-gap: 0px;
width:90%;
margin:5%;
box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
}


.image_section_1{
        height:260px;
        border-radius: 25px;
        margin-bottom:30px
    }

    .image_section_2{
        height:260px;
        border-radius: 25px;
    }

    .image_section_3{
        height:260px;
        border-radius: 25px;
    }

    .image_section_1:hover  .card_title{
    margin-top:-65px;
}

.image_section_2:hover  .card_title{
    margin-top:-65px;
}

.image_section_3:hover  .card_title{
    margin-top:-65px;
}
    .card_title{
    margin-top:-50px;
    margin-left:5%;
    line-height: 0;
}

.sub_text{
    width:70%;
    margin-top:110px;
}

.button_style{
    margin-top:30px; 
    margin-left: 5%;
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