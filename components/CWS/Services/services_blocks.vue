<template>
    
<div class="service_blocks" data-speed="1.2">

<div class="upper_block">


        <div class="upper_inner_block" data-lag="0.02">
            <img class="icon" src="~/assets/content/wallstreet/services/icon_1.png" alt="">
            <h6 class="block_title">A.I. Assisted Selections</h6>
            <p class="block_description">WSN utilizes Artificial Intelligence to enhance its selection of prominent private equity firms and green tech investments. Our proprietary A.I. assisted program sifts through vast amounts of data, identifying complex trends to provide us with accurate, data-driven recommendations, thus facilitating informed, sustainable investment decisions.</p>
        </div>

        <div class="upper_inner_block" style="grid-column:1; grid-column-start: span 2;">
            <div class="big_block_grid_outer">
                <div class="flex_it">
            <img class="profile_img" src="~/assets/content/wallstreet/services/services_2.jpg" alt="">
            </div>
            <div class="big_block_grid_inner">
                <h6 class="big_block_text">Manage And Organize All Your Deals And Investments</h6>
                <h6 class="big_block_text">Instant Payments On Chosen Deals</h6>
                <h6 class="big_block_text">Full Transparency For Your Funds</h6>
                
                </div>
        </div>
    </div>


</div>

<div class="lower_block">

    <div class="lower_inner_block" data-lag="0.005">
        <img class="rocket" src="~/assets/content/wallstreet/services/rocket_1.png" alt="">
    </div>

    <div class="lower_inner_block" data-lag="0.01">
        <p class="block_description" style="margin-top:12%">WSN prioritizes transparency through regular audits and comprehensive reporting. Our audits verify the accuracy of transactions and funds, while our reports disclose this information openly to customers. This two-pronged approach is essential to our reliable operations.</p>
</div>

<div style="background-color:#449f4f; display:flex; justify-content: center; align-items: center; flex-direction: column;" class="lower_inner_block" data-lag="0.02">
    <h6 class="block_title_white" style="margin:0">Streamline Your Investments</h6>
    <p style="color:#fff; width:80%; text-align:center; margin-top:5%">Get your curated information now.</p>
    <div style="margin-left:-10%; margin-top:5%">
    <CWSButtonsSignupLoginButton v-bind="sign_up_props"/>
</div>
</div>

</div>


</div>


</template>

<script setup>

const sign_up_props = {
  button_text: 'Sign Up',
  background_color: '#fafdff',
  color: '#000'
}

</script>

<style scoped>

.service_blocks{
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 20px;
margin-top:10%;
width:90%;
margin-left:5%;
}

.upper_block{
    height:450px;
    grid-column: span 3;
    display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 20px;
grid-row-gap:20px;
}

.lower_block{
    height:350px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
}

.lower_inner_block{
    border-radius: 30px;
    background-color: #a7e8af61;
    border: #27c73a 1px solid;
}

.upper_inner_block{
    border-radius: 30px;
    background-color: #a7e8af61;
    border: #27c73a 1px solid;
}

/* .upper_inner_block:first-child {
  grid-column: 1 / 3; 
} */

.icon{
    width:90px;
    margin-left:30px;
    margin-top:30px;
}


.profile_img{
    width:65%;
    border-radius:100%;
    margin-top:75px;
    margin-left:-10%;
}


.block_title{
    font-size:250%;
    text-align: center;
    margin-top:-85px;
    margin-left:90px;
    margin-bottom:70px;
}

.block_title_white{
    font-size:250%;
    text-align: center;
    margin-top:25px;
    margin-left:0px;
    margin-bottom:70px;
    color:#fff
}
.block_description{
    font-size:100%;
    text-align: center;
    margin-left:10%;
    margin-right:10%;
    margin-top:3%;
}

.big_block_grid_outer{
    display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.big_block_grid_inner{
    display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
height:200px;
margin-top:70px
}

.big_block_text{
    font-size:25px;
    border-bottom: 1px solid #000;
    margin-left:-15%;
    width:100%;
    padding-bottom:10px;
    margin-top:-10px;
    line-height: 1.5;
}


.flex_it{
    display:flex;
    justify-content:center;
    align-items:center;
}


.rocket{
    width:50%;
    margin-left:25%;
    margin-top:25%
}


@media only screen and (min-width: 0px) and (max-width: 576px) {

    .service_blocks{
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 20px;
margin-bottom:100%;
width:90%;
margin-left:5%;
}
.upper_block{
    height:450px;
    grid-column: span 3;
    display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap:20px;
}

.big_block_grid_outer{
    display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.profile_img{
    width:150px;
    border-radius:100%;
    margin-top:0px;
    margin-left:4%;
}

.big_block_text{
    font-size:15px;
    border-bottom: 1px solid #000;
    margin-left:10%;
    width:70%;
    padding:20px;
    padding-top:0px;
    padding-bottom:10px;
    margin-top:-20px;
    line-height: 1.5;
}

.big_block_grid_inner{
    display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
height:200px;
margin-top:15px
}

}

@media only screen and (min-width: 0px) and (max-width: 400px) {
    .lower_block{
    height:350px;
    display: grid;
    grid-template-columns:  1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin-top:320px
}
}

@media only screen and (min-width: 400px) and (max-width: 445px) {
    .lower_block{
    height:350px;
    display: grid;
    grid-template-columns:  1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin-top:280px
}
}

@media only screen and (min-width: 445px) and (max-width: 500px) {
    .lower_block{
    height:350px;
    display: grid;
    grid-template-columns:  1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin-top:280px
}
}

@media only screen and (min-width: 500px) and (max-width: 576px) {
    .lower_block{
    height:350px;
    display: grid;
    grid-template-columns:  1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin-top:235px
}
}

@media only screen and (min-width: 576px) and (max-width: 768px) {


    .service_blocks{
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 20px;
margin-top:5%;
margin-bottom:100%;
width:90%;
margin-left:5%;
}
.upper_block{
    height:450px;
    grid-column: span 3;
    display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap:20px;
}
.lower_block{
    height:350px;
    display: grid;
    grid-template-columns:  1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin-top:210px
}
.big_block_grid_outer{
    display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.profile_img{
    width:150px;
    border-radius:100%;
    margin-top:0px;
    margin-left:0%;
}

.big_block_text{
    font-size:15px;
    border-bottom: 1px solid #000;
    margin-left:10%;
    width:70%;
    padding:20px;
    padding-top:0px;
    padding-bottom:10px;
    margin-top:-10px;
    line-height: 1.25;
    text-align: center;
}

.big_block_grid_inner{
    display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
height:180px;
margin-top:15px
}

}

@media only screen and (min-width: 768px) and (max-width: 992px) {
    .service_blocks{
grid-row-gap: 20px;
}

.big_block_text{
    font-size:20px;
    margin-left:-6%;
    width:90%;
    padding-bottom:10px;
    margin-top:5px;
}

.profile_img{
    width:250px;
    border-radius:100%;
    margin-top:100px;
    margin-left:4%;
}

.icon{
    width:70px;
    margin-left:15px;
    margin-top:30px;
}

.block_title{
    font-size:190%;
    text-align: center;
    margin-top:-65px;
    margin-left:65px;
    margin-bottom:40px;
}

.profile_img{
    width:65%;
    border-radius:100%;
    margin-top:75%;
    margin-left:-10%;
}



}

@media only screen and (min-width: 768px) and (max-width: 810px) {
    .service_blocks{
grid-row-gap: 30px;
}

.block_description{
    font-size:70%;
}
.big_block_text{
    font-size:15px;
}

.profile_img{
    width:65%;
    border-radius:100%;
    margin-top:60%;
    margin-left:-10%;
}



}

@media only screen and (min-width: 810px) and (max-width: 900px) {
    .service_blocks{
grid-row-gap: 75px;
}
.block_description{
    font-size:90%;
}
.big_block_text{
    font-size:20px;
}

}

@media only screen and (min-width: 900px) and (max-width: 992px) {
    .service_blocks{
grid-row-gap: 45px;
}
.block_description{
    font-size:90%;
}

}


@media only screen and (min-width: 992px) and (max-width: 1200px) {

    .big_block_text{
    font-size:20px;
    margin-left:-6%;
    width:90%;
    padding-bottom:10px;
    margin-top:5px;
}

.profile_img{
    width:65%;
    border-radius:100%;
    margin-top:100px;
    margin-left:-10%;
}

.icon{
    width:70px;
    margin-left:15px;
    margin-top:30px;
}

.block_title{
    font-size:190%;
    text-align: center;
    margin-top:-65px;
    margin-left:65px;
    margin-bottom:40px;
}

}

@media only screen and (min-width: 992px) and (max-width: 1040px) {

    .service_blocks{
grid-row-gap: 90px;
}

}

@media only screen and (min-width: 1040px) and (max-width: 1120px) {

.service_blocks{
grid-row-gap: 60px;
}

}

@media only screen and (min-width: 1120px) and (max-width: 1170px) {

    .service_blocks{
grid-row-gap: 40px;
}

}

@media only screen and (min-width: 1170px) and (max-width: 1200px) {

.service_blocks{
grid-row-gap: 20px;
}

}

@media only screen and (min-width: 1200px) and (max-width: 1400px) {
    .big_block_text{
    font-size:23px;
    border-bottom: 1px solid #000;
    margin-left:-10%;
    width:100%;
    padding-bottom:10px;
    margin-top:-5px;
    line-height: 1.5;
}

.profile_img{
    width:65%;
    border-radius:100%;
    margin-top:100px;
    margin-left:-10%;
}

.block_title{
    font-size:220%;
    text-align: center;
    margin-top:-85px;
    margin-left:100px;
    margin-bottom:70px;
}



}

@media only screen and (min-width: 1200px) and (max-width: 1250px) {
    .service_blocks{
grid-row-gap: 40px;
}
}

@media only screen and (min-width: 1250px) and (max-width: 1400px) {
    .service_blocks{
grid-row-gap: 20px;
}
}

@media only screen and (min-width: 1400px) and (max-width: 1600px) {

    .big_block_text{
    font-size:22px;
    border-bottom: 1px solid #000;
    margin-left:-10%;
    width:100%;
    padding-bottom:10px;
    margin-top:0px;
    line-height: 1.5;
}

.profile_img{
    width:65%;
    border-radius:100%;
    margin-top:80px;
    margin-left:-10%;
}

.block_title{
    font-size:220%;
    text-align: center;
    margin-top:-85px;
    margin-left:100px;
    margin-bottom:70px;
}


}

@media only screen and (min-width: 1600px) and (max-width: 1700px) {
}

@media only screen and (min-width: 1700px) and (max-width: 1800px) {

}

@media only screen and (min-width: 1800px) and (max-width: 1900px) {

}

@media only screen and (min-width: 1900px) and (max-width: 2000px) {
    .service_blocks{
grid-row-gap: 30px;
}

}

@media only screen and (min-width: 2000px) and (max-width: 5600px) {
    .service_blocks{
grid-row-gap: 30px;
}

}


@media only screen and (min-width: 1600px) and (max-width: 1900px) {

    .profile_img{
    width:65%;
    border-radius:100%;
    margin-top:80px;
    margin-left:-10%;
}
}

@media only screen and (min-width: 1900px) and (max-width: 5600px) {

.profile_img{
width:65%;
border-radius:100%;
margin-top:30px;
margin-left:-10%;
}
}


</style>