<template>

<WALLSTREETEmailModal ref="open_it"/>

<div @click="open_popup_modal()" class="arrow_button">
    Act Now <img class="arrow" src="https://uploads-ssl.webflow.com/62d51dedb3f501ad1d54047c/62fa0319dac3955065e9a8b0_button_arrow.svg" loading="lazy" alt="" />
</div>
</template>

<script setup>


const open_it = ref(null);
function open_popup_modal() {
  open_it.value.open_modal();
}



</script>

<style scoped>

.arrow_button{
    padding:5px;
    border-bottom: 2px solid #000;
    width:120px;
    margin-left:5%;
    margin-top:50px;
    transition: all ease 300ms;
    transition: color .2s ease;
    position: relative;
  transition: color .2s ease;
  cursor: pointer;
}

.arrow{
    margin-left:8px;
    transition: all ease 300ms;
}



.arrow_button:hover .arrow{
    margin-left:20px
}


.arrow_button:hover::after,
    .arrow_button:hover::before {
      width: 100%;
      left: 0;
    }

.arrow_button::after,
  .arrow_button::before {
    content: ''; 
    position: absolute;
    top: calc(100% + 5px);
    width: 0;
    right: 0;
    height: 3px;
  }

.arrow_button::before {
    transition: width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s;
    background: #2196f3;
  }

.arrow_button::after {
    transition: width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
    background: green;
  }




</style>