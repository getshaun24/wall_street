<template>
    

<div v-if="privacy_banner_show" class="banner_box">
 <p class="privacy_text">You must agree to be bound by the terms of our Privacy Policy to use our site. We also use cookies to ensure our site runs smoothly. Our Privacy Policy can be found <span @click="navigateTo('/privacy')" style="color:green; cursor:pointer">here</span>. Last updated June 5, 2023.</p>
 <div @click="privacy_banner_toggle" class="agree_button">Agree</div>
</div>

</template>


<script setup>

const cookie_options = {default:()=> true, watch:true, maxAge:86400}
const privacy_banner_show = useCookie('privacy_banner_show', cookie_options)

const bottom_position = ref("-120px")

onMounted(() => {
    sleep(3000).then(() => { 
    bottom_position.value = "10px"
    })
})


        // sleep time expects milliseconds
        function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
        }


function privacy_banner_toggle(){
    bottom_position.value = "-120px"
    privacy_banner_show.value = "false"
}

</script>

<style scoped>

.banner_box{
    width:90%;
    margin-left:5%;
    height:100px;
    background-color:#fff;
    border: green solid 1px;
    border-radius:10px;
    position:fixed;
    bottom:v-bind(bottom_position);
    left:0;
    z-index: 1000;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: all 1s ease-in-out;
}

.privacy_text{
    font-size:11px;
    width:60%
}

.agree_button{
    padding:20px 40px;
    color:#fff;
    background-color:green;
    border-radius:10px;
    cursor: pointer;
}

.agree_button:hover{
    background-color:#2196f3;
    transition: all ease .8s;
}

</style>