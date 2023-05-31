<template>

<MainTransition ref="main_tansition"/>

<div style="width:100%; overflow:hidden">

    <CWSMainHeader/>

<CWSGSAPScrollSmoother>


<div ref="top_line" class="top_line"></div>

    <div class="contact_img_container">
<img ref="contact_image" class="contact_img" src="../assets/content/contact/map.png">
</div>


<div class="form_container">
<div class="grid_container">

    <div class="col_1">
        <h4 class="content_title">Contact</h4>
        <div class="contact_info">
    <!-- <p class="contact_elm">404-513-3348</p> -->
    <p class="contact_elm">295 Madison Ave FL 22,<br>New York, NY 10017</p>
<p class="contact_elm email_contact">michelle@thewallstreetnetwork.com</p>
</div>
    </div>
    <div class="col_2">
        <h6 class="form_title">Let's Talk.<br>We Are Here For You.</h6>


        <div class="inner_form_grid">
        <input type="text" class="form_input" v-model="first_name" placeholder="First Name">
        <input type="text" class="form_input" v-model="contact_email" placeholder="Email">



        <input type="text" class="form_input" v-model="last_name" placeholder="Last Name">

        <div>
        <input ref="phone_focused" @keyup="remove_chrs" @keypress="onPhoneKeyPress" maxlength="17" type="text" class="form_input" v-model="phone" placeholder="Phone">
        <span v-if="show_international" class="international_toggle" @click="international_toggle"> {{ inter_text }}</span>
    </div>
    

    </div>

<div class="form_bottom_container">
<textarea style="z-index:5" class="form_input_area" placeholder="Message" v-model="message" ></textarea>

<button @click="submit_contact_message" class="submit_button">Submit</button>

</div>
    </div>
 

    




</div>

</div>





<div class="mobile_grid">

    <h3 class="content_title">Contact</h3>


        <p class="form_title">Talk to Us. We Can Help.</p>

     
    <div class="mobile_form_background">

        <div class="form_input_container">
        <input type="text" class="form_input" v-model="first_name" placeholder="First Name">
        <input type="text" class="form_input" v-model="last_name" placeholder="Last Name">
        <input type="text" class="form_input" v-model="contact_email" placeholder="Email">
        <input ref="phone_focused" @keyup="remove_chrs" @keypress="onPhoneKeyPress" maxlength="17"  type="text" class="form_input" v-model="phone" placeholder="Phone">
        <span v-if="show_international" class="international_toggle" @click="international_toggle"> {{ inter_text }}</span>
        <textarea class="form_input_area" placeholder="Message" v-model="message" ></textarea>

        <button @click="submit_contact_message" class="submit_button">Submit</button>


        <div class="contact_info">
    <!-- <p class="contact_elm">404-513-3348</p> -->
    <p class="contact_elm">295 Madison Ave FL 22,
        <br>New York, NY 10017</p>
    <p class="contact_elm">michelle@thewallstreetnetwork.com</p>
    </div>
    </div>





    </div>


</div>







<div class="scrub_container">
<CWSContactScrubText v-bind="scrub_text_1"/>
</div>



<div ref="map_button" class="map_button"></div>

<div class="body_video">
    <h1 class="contact_message">Investments Made Easy</h1>

            <div class="paperOverlay"></div>
</div>


<CWSFooterContact/>


</CWSGSAPScrollSmoother>


</div>

</template>


<script setup>

import { gsap } from 'gsap'
        import { ScrollTrigger } from 'gsap/ScrollTrigger'
        import { useWindowSize } from '@vueuse/core'

        if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const config = useRuntimeConfig()

const first_name = ref('')
        const last_name = ref('')
        const contact_email = ref('')
        const phone = ref('')
        const message = ref('')


        function submit_contact_message (){
           
            if (first_name.value == '' || last_name.value == '' || contact_email.value == '' || phone.value == '' || message.value == ''){
                alert('Please fill out all fields')
                return
            }


            fetch(`${config.flask_url}/api/WALLSTREET_conatcat_and_sub/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({first_name:first_name.value, last_name:last_name.value, contact_email:contact_email.value, phone:phone.value, message:message.value})
    })
    .then((response) => response.json())
    .then((data) => {


        if (data.status == 'success_contact_sent') {
            alert(data.message)
        } else {
            alert(data.message)
        }

    })
    .catch(error => {
        alert('Error')
        start_loader.value = false;
        console.error('There was an error!', error);
    });



        }






        function onPhoneKeyPress(e) {
    const key = e.keyCode || e.charCode;
    const len_phone = phone.value.length

    if (!is_international.value){
    if (key !== 8 || key !==  46) {
    if(len_phone == 12){
        phone.value = phone.value + '-'
        }
    else if (len_phone == 7){   
        phone.value = phone.value + ') '
        }
    else if (len_phone == 0){   
        phone.value = '+1 ('
        }}

    }else{
        if (len_phone == 0){   
        phone.value = '+'
        }
}



}

function remove_chrs() {
    phone.value = phone.value.toString().replace(/[^0-9-()-+ ]/g, '');
}




const is_international = ref(false)
const is_international_color = ref('#1b91ebb3')
const inter_text = ref('International ?')
const inter_margin = ref('-32%')
const show_international = ref(false)


function international_toggle() {
    is_international.value = !is_international.value
    if (is_international.value) {
        is_international_color.value = '#06ae46'
        phone.value = '+' + phone.value.toString().replace(/[^0-9]/g, '').substring(1);
        inter_text.value = 'U.S. ?'
        phone_focused.value.focus()
        sleep(1110).then(() => {show_international.value = true})
        sleep(800).then(() => { inter_opacity.value = 1, inter_margin.value = '-27%' })
} else{
        is_international_color.value = '#1b91ebb3'
        phone.value = '+1 ('
        inter_text.value = 'International ?'
        phone_focused.value.focus()
        sleep(1110).then(() => {show_international.value = true})
        sleep(800).then(() => { inter_opacity.value = 1, inter_margin.value = '-32%' })
}
}


const inter_opacity = ref(1)
const phone_focused = ref()
const { focused } = useFocus(phone_focused)

watch(focused, (focused) => {
  if (focused) {
    show_international.value = true
    sleep(10).then(() => { inter_opacity.value = 1, inter_margin.value = '-27%' })
  }
  else{
    sleep(1100).then(() => {show_international.value = false})
    sleep(800).then(() => { inter_opacity.value = 0, inter_margin.value = '-32%' })
  }
})

    









        
        const scrub_text_1 = {text:"Contact Us", duration:50}



        // sleep time expects milliseconds
        function sleep (time) {
          return new Promise((resolve) => setTimeout(resolve, time));
        }

        const { width, height } = useWindowSize()


        onMounted(() => {
            sleep(600).then(() => { 


                
        ScrollTrigger.create({
        trigger: ".contact_img",
        start: "top top", 
        end: "bottom top",
        endTrigger:"html",
        pin: ".contact_img",
      });




      if(width.value < 576){

      ScrollTrigger.create({
        trigger: ".map_button",
        start: "center 71%", 
        end: "bottom top",
        endTrigger:"html",
        pin: ".map_button",
      });

      ScrollTrigger.create({
        trigger: ".top_line",
        start: "top top", 
        end: "bottom -15px",
        pin: ".top_line",
      });

    }else if(width.value < 650){
      
      ScrollTrigger.create({
        trigger: ".map_button",
        start: "center 80%", 
        end: "bottom top",
        endTrigger:"html",
        pin: ".map_button",
      });

      ScrollTrigger.create({
        trigger: ".top_line",
        start: "top top", 
        end: "bottom -15px",
        pin: ".top_line",
      });
      
    }

  else if(width.value < 768){
      
      ScrollTrigger.create({
        trigger: ".map_button",
        start: "center 90%", 
        end: "bottom top",
        endTrigger:"html",
        pin: ".map_button",
      });

      ScrollTrigger.create({
        trigger: ".top_line",
        start: "top top", 
        end: "bottom -10px",
        pin: ".top_line",
      });
      
    }

    else if(width.value < 992){
      
      ScrollTrigger.create({
        trigger: ".map_button",
        start: "center 78%", 
        end: "bottom top",
        endTrigger:"html",
        pin: ".map_button",
      });

      ScrollTrigger.create({
        trigger: ".top_line",
        start: "top top", 
        end: "bottom 8px",
        pin: ".top_line",
      });
      
    }

    else if(width.value < 1200){
      
      ScrollTrigger.create({
        trigger: ".map_button",
        start: "center 68%", 
        end: "bottom top",
        endTrigger:"html",
        pin: ".map_button",
      });

      ScrollTrigger.create({
        trigger: ".top_line",
        start: "top top", 
        end: "bottom -15px",
        pin: ".top_line",
      });
      
    }
    
    else{

      ScrollTrigger.create({
        trigger: ".map_button",
        start: "center 65%", 
        end: "bottom top",
        endTrigger:"html",
        pin: ".map_button",
      });

      ScrollTrigger.create({
        trigger: ".top_line",
        start: "top top", 
        end: "bottom -15px",
        pin: ".top_line",
      });

    }


})
        })

    
      

</script>




<style scoped>



.grid_container{
    display: grid;
    grid-template-columns: 1fr 3fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
    width: 100vw;
    z-index:1;
    position:absolute;
    top:0;
    z-index:5;

}

.col_1{
    border-right:rgba(0, 0, 0, 0.15) solid 1px;
    background-color: #ffffff34;
    backdrop-filter: blur(15px);
}

.col_2{
    background-color: #ffffff34;
    backdrop-filter: blur(15px);
}

.col_3{
    grid-column: 3 / span 2;
}

.inner_form_grid{
    display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
margin-top:40%;
}

.form_bottom_container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.contact_img_container{
  position: absolute;
 height: 100vh;
 width: 100%;
 object-fit: cover;
 top:0;
 z-index:-2;
 opacity:.175
}
.contact_img{
  position: absolute;
  height: 90vw;
  top:0;
  left:-10%;
  object-fit: cover;
  object-position: center;
  z-index:-1
}

.top_line{
    height:120px;
    border-bottom:rgba(255, 255, 255, 0.15) solid 1px;
    z-index:10
}

.content_title{
    margin-top:40%;
    margin-left:10%;
    position:absolute;
    font-size:250%
}

.form_title{
    margin-top:19%;
    margin-left:2%;
    position:absolute;
    font-size:170%;
    line-height:1.45;
}

.form_input{
    border-bottom:#000 solid 1px;
    margin-top:25%;
    color:#000;
    padding:10px;
    margin-left:8%;
    background-color: #18181800;
    width:75%;
    margin-right: 25px;
}

.form_input_container{
    margin-top:95%;
    position:relative;
}

.form_input_area{
    border-bottom:#000 solid 1px;
    margin-top:7%;
    color:#000;
    padding:10px;
    margin-left:-2.5%;
    background-color: #18181800;
    width:85%;
    height:75px;
    border:none;
    border-bottom:#000 solid 1px;
    z-index:10
}

.submit_button{
    background-color: #fff;
    border:#000 solid 1px;
    margin-top:15%;
    color:rgb(0, 0, 0);
    padding:10px;
    margin-left:2.5%;
    font-size:25px;
    background-color: #18181800;
    width:45%;
    height:60px;
    cursor:pointer;
    z-index:10;
    border-radius:100px;
    margin-bottom:10%
}

.submit_button:hover{
    color:#fff;
    border: green solid 2px;
    background-color:rgba(0, 84, 0, 0.2);
    transition: all 0.5s ease;
}

.body_video{
    height:50vh;
    background-color: #fff;
    margin-top:185%;
    z-index:100;
    position:relative;
    width:100%;
    overflow:hidden;
    border-top: 3px solid green;
    border-bottom: 3px solid green;
    display: flex;
    justify-content: center;
    align-items: center;

}


.map_button{
    height:80px;
    background-color: green;
    border:#fff solid 2px;
    margin-top:-52%;
    z-index:100;
    position:absolute;
    width:80px;
    margin-left:49%;
    border-radius:100%;
    z-index:-1;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
}



.contact_video{
    width:55%;
    margin-left:22.5%;
    margin-top:7.5%
}

.video_overlay{
    width:100%;
    height:100vh;
    margin-top:0%;
    background-color: rgb(0, 0, 0);
    opacity:0.85;
    position:absolute;
    z-index:10;
    top:0;
    left:0
}

.contact_message{
    margin-top:-0%;
    font-size:7vw;
    position:absolute;
    color:#000;
    z-index:100;
    text-align: center;
    width:100%;
    font-weight: 500;
}

.contact_info{
    margin-top:340px;
    width:75%;
    margin-left:15%;
    padding-right:10%
    }



.scrub_container{
    margin-left:43%;
    position:relative;
    z-index:3
}


.contact_elm{
    color:green;
    font-size:16px
}


.email_contact{
    font-size:12px
}






@media only screen and (min-width: 0px) and (max-width: 576px) {

    .grid_container{
        display:none
    }


.contact_img{
  height: 180vw;
  left:-80%;
}

.map_button{
    height:50px;
    width:50px;
    margin-left:50%;
}

.mobile_form_background{
    background-color:#fff;
    min-height: 510px;
    position: absolute;
    top:0;
    width:60%;
    z-index:1;
    border:1px solid green;
    padding-bottom:8%;
    padding-right:10%
}

.top_line{
    height:70px;
    background-color:#fff;
    z-index:50;
}



.content_title{
    margin-top:-25px;
    margin-left:30px;
    font-size:25px;
    position:absolute;
    z-index:10
}

.form_title{
    margin-top:20px;
    margin-left:30px;
    z-index:2;
    font-size:14px
}

.form_input_container{
    margin-top:195px;
    position:relative;
    z-index:2;
}


.form_input{
    margin-top:20px;
    padding:10px;
    margin-left:25px;
    font-size:10px;
    width:70%
}

.form_input_area{
    margin-top:70px;
    margin-left:-85%;
    font-size:10px;
    width:70%;
    height:20px;
    position: absolute;
}




.contact_elm{
    font-size:12px;
    color:green;
}


.body_video{
    height:35vh;
    
}

.contact_video{
    margin-top:5%
}


.contact_message{
    margin-top:5%;
}

.form_container{
    display: none;
}

.submit_button{
    margin-top:150px;
    margin-left:5%;
    font-size:11px;
    width:40%;
    height:30px;
    border-radius:50px;
}

}


@media only screen and (min-width: 0px) and (max-width: 387px) {
    .submit_button{
    margin-top:30px;
    margin-left:5%;
    font-size:11px;
    width:40%;
    height:30px;
    border-radius:50px;
    position: absolute;
}

.contact_info{
    margin-top:55%;
    width:50%;
    margin-left:10%;
    }

}

@media only screen and (min-width: 387px) and (max-width: 576px) {
    .submit_button{
    margin-top:150px;
    margin-left:-85%;
    font-size:11px;
    width:40%;
    height:30px;
    border-radius:50px;
    position: absolute;
}

.contact_info{
    margin-top:65%;
    width:50%;
    margin-left:10%;
    }

}



@media only screen and (min-width: 576px) and (max-width: 768px) {

    .form_container{
    display: none;
}
  
    .grid_container{
        display:none
    }


.contact_img{
  height: 150vw;
  left:-60%;
}

.map_button{
    height:50px;
    width:50px;
    margin-left:57%;
}

.mobile_form_background{
    background-color:#fff;
    min-height: 530px;
    position: absolute;
    top:0;
    width:60%;
    z-index:1;
    padding-bottom:5%;
    padding-left:5%;
    border:green 1px solid
}

.top_line{
    height:70px;
    background-color:#fff;
    z-index:50
}




.content_title{
    margin-top:-35px;
    margin-left:30px;
    font-size:25px;
    position:absolute;
    z-index:10
}

.form_title{
    margin-top:25px;
    margin-left:30px;
    z-index:2;
    font-size:14px
}

.form_input_container{
    margin-top:215px;
    position:relative;
    z-index:2;
}


.form_input{
    margin-top:20px;
    padding:10px;
    margin-left:30px;
    font-size:10px;
    width:70%
}

.form_input_area{
    margin-top:70px;
    margin-left:-83%;
    font-size:10px;
    width:70%;
    height:20px;
    position: absolute;
}


.submit_button{
    margin-top:140px;
    margin-left:-83%;
    font-size:11px;
    width:40%;
    height:30px;
    border-radius:50px;
    position: absolute;
}

.contact_info{
    margin-top:55%;
    width:50%;
    margin-left:10%;
    }

.contact_elm{
    font-size:15px;
    color:green
}


.body_video{
    height:50vh;
}

.contact_video{
    margin-top:5%
}


.contact_message{
    margin-top:5%;
}
}




@media only screen and (min-width: 768px) and (max-width: 992px) {

    .mobile_grid{
        display:none
    }


    .top_line{
    height:90px;
    border-bottom:rgba(255, 255, 255, 0.15) solid 1px;
    z-index:10
}

.content_title{
    margin-top:50%;
    margin-left:10%;
    position:absolute;
    font-size:250%
}

.form_title{
    margin-top:30%;
    margin-left:15px;
    position:absolute;
}


.form_input_container{
    margin-top:145%;
}

.form_input{
    border-bottom:#000 solid 1px;
    margin-top:40px;
    padding:10px;
    margin-left:10%;
    font-size:15px;
    width:70%
}






.contact_img{
  height: 120vw;
  left:-50%;
}




.contact_info{
    margin-top:150%;
    margin-left:10%;
    }

    .contact_elm{
    font-size:16px;
    color:green
}

.email_contact{
    font-size:10px
}



.map_button{
    height:80px;
    width:80px;
    margin-left:45%;
}

.contact_video{
    margin-top:5%
}


.contact_message{
    margin-top:15%;
}


.body_video{
    height:50vh;
    margin-top:100%;
}
.inner_form_grid{

margin-top:50%;
}

}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
    .mobile_grid{
        display:none
    }





.contact_img{
  height: 110vw;
  left:-40%;
}


.inner_form_grid{

margin-top:30%;
}




}

@media only screen and (min-width: 1200px) and (max-width: 1400px) {
    .mobile_grid{
        display:none
    }

    .inner_form_grid{

margin-top:30%;
}


.contact_video{
    width:55%;
    margin-left:22.5%;
    margin-top:0%
}

.contact_message{
    margin-top:7%;
}

.grid_container{
    height:105vh;

}


}

@media only screen and (min-width: 1400px) and (max-width: 1600px) {
    .mobile_grid{
        display:none
    }


.contact_message{
    margin-top:10%;
}

.grid_container{
    height:110vh;

}
.inner_form_grid{

margin-top:25%;
}

}

@media only screen and (min-width: 1600px) and (max-width: 5600px) {
    .mobile_grid{
        display:none
    }



    .inner_form_grid{

margin-top:20%;
}

.contact_video{
    width:45%;
    margin-left:27.5%;
    margin-top:0%
}

.contact_message{
    margin-top:15%;
}

.grid_container{
    height:130vh;

}

}













</style>
