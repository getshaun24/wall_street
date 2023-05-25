<template>
    


<Teleport to="body">
    <MainTransition ref="main_tansition"/>
<div class="modal_container" :class="{modal_hide_anim: modal_exit_anim, modal_hide_disp: modal_exit_display}">
        <div class="modal_popup" :class="{modal_bix_hide_anim: modal_exit_anim}" ref="modal">
            <div @click="modal_leave" class="modal_exit">
            <div class="horizontal_line"></div>
            <div class="vertical_line"></div>
        </div>

        <div v-if="email_or_password == 'email'" class="modal_info">
            <h6 class="modal_text">Update Email</h6>

            <div class="input_wrap">
            <input v-model="email_1" type="text" class="input_white input_edit" placeholder=' ' required/>
            <label class="label_white label_edit" >Email</label>
          </div>
<br>
            <div class="input_wrap">
            <input v-model="email_2" type="text" class="input_white input_edit" placeholder=' ' required/>
            <label class="label_white label_edit" >Re-enter Email</label>
          </div>

          <div @click="submit_form" class="modal_submit_button">Update</div>

        </div>

        <div v-if="email_or_password == 'password'" class="modal_info">

            <h6 class="modal_text">Update Password</h6>

               <div class="input_wrap">
            <input v-model="pass_1" type="text" class="input_white input_edit" placeholder=' ' required/>
            <label class="label_white label_edit" >Password</label>
          </div>
<br>
            <div class="input_wrap">
            <input v-model="pass_2" type="text" class="input_white input_edit" placeholder=' ' required/>
            <label class="label_white label_edit" >Re-enter Password</label>
          </div>
          <div @click="submit_form" class="modal_submit_button">Update</div>
        </div>

        </div>
    </div>

    <div class="plaid_blur" v-if="plaid_blur"></div>
    <div class="loader_container" v-if="start_loader"></div>

</Teleport>

</template>


<script setup>



const config = useRuntimeConfig()
const csrf_cookie = useCookie('csrf_access_token')
const notification_count = useCookie('notification_count')
const modal_exit_anim = ref(true)
const modal_exit_display = ref(true)

const email_or_password = ref('email')
const pass_1 = ref('')
const pass_2 = ref('')
const email_1 = ref('')
const email_2 = ref('')

    
    
    // sleep time expects milliseconds
    function sleep (time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    
function open_modal(em_or_ps){
    email_or_password.value = em_or_ps
    modal_exit_display.value = false
        sleep(100).then(() => {
        modal_exit_anim.value = false
        });
}

function modal_leave(){
        modal_exit_anim.value = true
        sleep(1100).then(() => {
        modal_exit_display.value = true
        start_loader.value = false;
        plaid_blur.value = false;
        });
    }


    defineExpose({
        open_modal,
        modal_leave
})



function check_email(){
    if (email_1.value != email_2.value || email_1.value == '' || email_2.value == ''){
        alert("Emails do not match. Please try again.")
    } else{
      submit_form()
    }
}

function check_password(){
  if ( pass_1.value != pass_2.value || pass_1.value == '' || pass_2.value == '') {
        alert("Passwords do not match. Please try again.")
        pass_1.value = ''
        pass_2.value = ''
    } else if (email_or_password.value == 'password' && pass_1.value.length < 6) {
        alert("Your password is too short. Minimum length is 8 characters")
    } else{
      submit_form()
    }
}


function submit_form(){
    


fetch(`${config.flask_url}/api/user_dashboard/update_email_and_pass/`, {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrf_cookie.value
      },
      body: JSON.stringify({email_or_password: email_or_password.value.toLowerCase(), password:pass_1.value, email:email_1.value})
  })
  .then((response) => response.json())
  .then((data) => {
       notification_count.value = data.notification_count;

       alert(data.msg)
       if (data.status == 'email_or_password_updated'){
        notification_count.value = data.notification_count;
        modal_leave()
       } 

  })
  .catch(error => {
      //  alert("Error")
      console.error('There was an error!', error);
    //   navigateTo('/login_pages/login')
  });

    }








</script>



<style scoped>



.input_edit{
  color:#fff;
  border-bottom: #fff 1px solid;
}

 .input_edit:focus~ .label_edit,
  .input_edit:valid ~ .label_edit{
    top: -1.75vw;
    left: 4vw;  
    font-size: 1vw;
    color: #deae00df;
  }

.label_edit{
  margin-left:3%
}
/* 
// ------------------------------- Modal  ---------------
// ------------------------------- Modal  ---------------
// ------------------------------- Modal  --------------- 
*/




.plaid_blur{
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    background-color:rgba(25, 120, 237 , 0.08);
    z-index:100;
    backdrop-filter: blur(v-bind(blur_amount));
    transition:all 2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: v-bind(plaid_opacity);
}




.modal_hide_anim{
        transition: all 1s ease-in-out !important;
        opacity: 0 !important;
    }
    
    .modal_bix_hide_anim{
        transition: all .6s ease-in-out !important;
        transform: scale(0) !important;
    }
    
    .modal_hide_disp{
        display:none !important;
    }
    
    
    
    
    
    
    
    .modal_container{
        width:100vw;
        height:100vh;
        background-color:rgba(0, 0, 0, 0.5);
        position:fixed;
        top:0;
        left:0;
        z-index:200;
        display:flex;
        justify-content:center;
        align-items:center;
        backdrop-filter: blur(10px);
        transition: all 1s ease-in-out;
        opacity: 1;
    
    }
    .modal_popup{
        width:65%;
        height:65vh;
        background-color:rgb(6, 100, 162);
        z-index:210;
        border-radius:20px;
        margin-top:0px;
        border: #fff solid 2px;
        transition: all 1s ease-in-out;
        overflow-y: scroll;
        overflow-x:hidden
    }

    .modal_popup::-webkit-scrollbar {
  width: 5px !important;
  border-radius: 10px !important;
}

.modal_popup::-webkit-scrollbar-thumb {
  background: rgba(0, 149, 255, 1) !important;
  border-radius: 10px !important;
}

    
    .modal_info{
        font-size:30px;
        font-weight:600;
        color:#fff;
        margin-left:10%;
        margin-top:3%;
        width:80%;
        text-align:center
    }
    
    .modual_buttons{
        width:40%;
        height:35px;
        background-color:rgb(25, 120, 237) ;
        margin-left: 30%;
        margin-top:3.5%;
        border-radius:100px;
        border:#fff solid 0px;
        cursor:pointer;
        font-size:12px;
        color:#fff;
          box-shadow: 0px 7px 10px rgb(25, 120, 237, .3);
      transition: outline 12s ease 1s;
    }
    
    .modual_buttons:hover{
      box-shadow: 0px 10px 15px rgb(25, 120, 237, .5);
      transform: translateY(-3px);
      outline: 3px solid rgba(19, 218, 218, 0.6);
      transition: outline 12s ease 1s;
    } 

    .select_button{
        width:40%;
        height:35px;
        background-color:rgb(25, 120, 237) ;
        margin-left: 30%;
        margin-top:5%;
        margin-bottom:20%;
        border-radius:100px;
        border:#fff solid 0px;
        cursor:pointer;
        font-size:12px;
        color:#fff;
          box-shadow: 0px 7px 10px rgb(25, 120, 237, .3);
      transition: outline 12s ease 1s;
    }

    .select_button:hover{
      box-shadow: 0px 10px 15px rgb(25, 120, 237, .5);
      transform: translateY(-3px);
      outline: 3px solid rgba(19, 218, 218, 0.6);
      transition: outline 12s ease 1s;
    } 


    .modal_submit_button{
    width:50%;
    height:40px;
    background-color:#deae00df;
    margin-left: 25%;
    margin-top:17%;
    border-radius:100px;
    border:#fff solid 0px;
    cursor:pointer;
    font-size:25px;
    line-height:40px;
    color:#fff;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.2);
    outline: 0px solid rgba(19, 218, 218, 0.6);
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
    text-align: center;
}


.modal_submit_button:hover{
  box-shadow: 0px 10px 15px rgb(25, 120, 237, .5);
  transform: translateY(-3px);
  outline: 3px solid rgba(19, 218, 218, 0.6);
  transition: outline 12s ease 1s;
} 




    .back_arrow{
        font-size:50px;
        color:#fff;
        position:relative;
        top:-60px;
        left:20px;
        margin-bottom:-7%;
        cursor: pointer;
    }
    
    
    .modal_exit{
        margin-top:0px;
        margin-left:93%;
        cursor:pointer;
        z-index: 10;
        position: relative;
        width:50px;
        height:50px;
    }
    
    .modal_exit:hover .horizontal_line{
        transform: rotate(180deg);
        transition: all 0.2s ease-in-out;
    }
    
    .modal_exit:hover .vertical_line{
        transform: rotate(-90deg);
        transition: all 0.5s ease-in-out;
    }
    .horizontal_line{
        height:1px;
        width:30px;
        background-color:rgb(255, 255, 255);
        top:25px;
        left:10px;
        transform: rotate(45deg);
        z-index:1000;
        position: absolute;
    }
    
    .vertical_line{
        width:1px;
        height:30px;
        top:11px;
        left:25px;
        background-color:#fff;
        transform: rotate(45deg);
        position: absolute;
    }
    

    .modal_text{
        font-size:140%;
        color:#fff;
        margin-left:5%;
        margin-top:5%;
        width:90%;
        text-align:center;
        line-height:1.3
    }
    
    
    
    @media only screen and (min-width: 0px) and (max-width: 576px) {
    
        .modal_popup{
        width:350px;
        height:400px;
    }
    
    .modal_exit{
        margin-top:10px;
        margin-left:290px;
        width:40px;
        height:40px;
    }
    
    }





    .loader_container{
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    background-color:rgba(25, 120, 237 , 0.125);
    z-index:100;
    backdrop-filter: blur(20px);
    transition:all 1s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
      border: 50px solid #ffffff;
      border-top: 50px solid #3498db;
      border-radius: 50%;
      width: 240px;
      height: 240px;
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }









</style>