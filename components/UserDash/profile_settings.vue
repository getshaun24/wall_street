<template>
    

    <Teleport to="body">
        <MainTransition ref="main_tansition"/>


        <UserDashModalsNewEmailPasswordModal ref="email_password"/>

<div class="modal_container" :class="{modal_hide_anim: modal_exit_anim, modal_hide_disp: modal_exit_display}">
        <div ref="profile_slide" class="modal_popup" :class="{modal_box_hide_anim: modal_exit_anim_container}" >
            <div class="modal_paper"></div>
            <div @click="modal_leave_slide" class="modal_exit">
            <div class="horizontal_line"></div>
            <div class="vertical_line"></div>
        </div>

        <div class="modal_info">
            <!-- <img class="profile_img" src="~/assets/content/dashboard/default_user.png" alt=""> -->
            <img class="profile_img" @click="open_file_box_1.open" :src="profile_image" alt="">

            <div v-if="image_lader" class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            <div class="name_text">{{ first_name }} {{ last_name }}</div>
        </div>

            <div class="settings_grid">

                <p class="settings_title">Settings</p>

                <h6 @click="open_popup_modal('email')" class="settiings_elm">Update Email</h6>

                <h6 @click="open_popup_modal('password')" class="settiings_elm">Change Password</h6>

                <p class=""></p>

                <p class=""></p>



<div @click="logout()" class="logout">Logout</div>
            </div>






      
        </div>
</div>

</Teleport>




</template>


<script setup>
import { onClickOutside } from '@vueuse/core'
import { useFileDialog } from '@vueuse/core'
import { useSessionStorage, useStorage } from '@vueuse/core'
import { dash_images, deleteDatabase } from '~/stores/dashboard_images';

const config = useRuntimeConfig()
const phone_number = ref('')
const number_of_open = ref('')
const csrf_cookie = useCookie('csrf_access_token')
const first_name = useCookie('first_name')
const last_name = useCookie('last_name')


    // sleep time expects milliseconds
    function sleep (time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }



  

// ------------------------------- Modal  ---------------
// ------------------------------- Modal  ---------------
// ------------------------------- Modal  ---------------


const props = defineProps(['open_profile'])
const profile_slide = ref(null)
const enable_click_outside = ref(false)

watch(()=>props.open_profile, (newVal) => {
    // alert(newVal)
    if(newVal == true){
        sleep(2000).then(() => {enable_click_outside.value = true})
        open_modal_slide()
    }})


    

    onClickOutside(profile_slide, (event) => {
  if (enable_click_outside.value == true) {
    modal_leave_slide();
  }
});

const modal_exit_anim = ref(true)
const modal_exit_display = ref(true)
const modal_exit_anim_container = ref(true)
    


    
    
function open_modal_slide(){
    modal_exit_display.value = false
        sleep(100).then(() => {
        modal_exit_anim.value = false
        sleep(600).then(() => {modal_exit_anim_container.value = false})
        });
}

function modal_leave_slide(){
        enable_click_outside.value = false
        modal_exit_anim_container.value = true
        sleep(400).then(() => {
        modal_exit_anim.value = false
        });
        sleep(1100).then(() => {
        modal_exit_display.value = true
        });
    }





// ------------------------------- Profile Img  ---------------
// ------------------------------- Profile Img  ---------------
// ------------------------------- Profile Img  ---------------

const profile_image_sesh = useSessionStorage('profile_image_sesh')
const profile_img = dash_images();
const profile_image = ref(profile_img.profile_img)

onMounted(() => {
    if (profile_image_sesh.value) {
  profile_image.value = profile_image_sesh.value
}
})

const file_name = ref('')
const drop_success_border_1 = ref("black")
const drop_success_1 = ref(false)
const uploaded_file_1 = ref(null)
const open_file_box_1 = useFileDialog()



watch(open_file_box_1.files, (newfiles) => {
    if (newfiles[0].type == "image/jpeg" || newfiles[0].type == "image/png") {
        if(newfiles[0].size < 5000000) {
        uploaded_file_1.value = newfiles[0]
        file_name.value = newfiles[0].name
        drop_success_border_1.value = "green"
        drop_success_1.value = true
        new_profile_upload()
        } else {
        alert("Filesize must be less then 5MB")
        }
    } else {
        alert("Filetype Not Supported")
    }
})




const image_lader = ref(false)

function new_profile_upload(){

    if (uploaded_file_1.value == null) {
        alert("Please Upload File")
        return
    }


    image_lader.value = true

    const upload_data = new FormData()
    upload_data.append('file_1', uploaded_file_1.value)
    upload_data.append('file_name', file_name.value)


    fetch(`${config.flask_url}/api/user_dashboard/dashboard_config/upload_profile/`, {
      method: 'post',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'X-CSRF-TOKEN': csrf_cookie.value
        },
        body: upload_data
    })
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem('profile_image_sesh', 'data:image/jpeg;base64, ' + data.profile_image)
      profile_img.update_profile_img('data:image/jpeg;base64, ' + data.profile_image);
      profile_image.value = 'data:image/jpeg;base64, ' + data.profile_image

      image_lader.value = false

    })
    .catch(error => {
        image_lader.value = false
          alert("Error")
        console.error('There was an error!', error);
    });
}



// ------------------------------- Transition  ---------------
// ------------------------------- Transition  ---------------
// ------------------------------- Transition  ---------------

const main_tansition = ref(null);
function transition_and_route(route_to) {
    main_tansition.value.animation_and_route(route_to);
}


// ------------------------------- Email_Pass_Modal  ---------------
// ------------------------------- Email_Pass_Modal  ---------------
// ------------------------------- Email_Pass_Modal  ---------------


const email_password = ref(null);
function open_popup_modal(em_or_ps) {
    email_password.value.open_modal(em_or_ps);
}



// ------------------------------- Logout  ---------------
// ------------------------------- Logout  ---------------
// ------------------------------- Logout  ---------------
 

const rocket_chat_auth_token = useCookie('rocket_chat_auth_token')
function logout() {

    // logout of rocket chat
  fetch(`${config.flask_url}/api/login/logout/`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrf_cookie.value
      },
      credentials: 'include',
      body: JSON.stringify({rocket_chat_auth_token:rocket_chat_auth_token.value})
  })
  .then((response) => response.json())
  .then((data) => {
    delete_info()
    transition_and_route('/login_pages/login')
  })
  .catch(error => {
    delete_info()
      alert("There was an error when attempting to log out")
      transition_and_route('/login_pages/login')
  });
}

function delete_info(){
    deleteDatabase()
    const auth_cookie = useCookie('auth_cookie')
    const csrf_cookie = useCookie('csrf_access_token')
    const access_cookie = useCookie('access_token_cookie')
    const user_ID = useCookie('user_ID')
    const email = useCookie('email')
    const account_creation_needed = useCookie('account_creation_needed')
    const active_fetch_timer = useSessionStorage('active_fetch_timer')
    access_cookie.value = null
    auth_cookie.value = null
    csrf_cookie.value = null
    user_ID.value = null
    email.value = null
    account_creation_needed.value = null
    rocket_chat_auth_token.value = null
    profile_image_sesh.value = null
    active_fetch_timer.value = null
}



</script>



<style scoped>

.name_text{
  color:#000;
  font-size: 25px;
  margin-top:10%;
  margin-bottom:10%;
  margin-left:10px
}

.settings_grid{
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
height:62vh
}


.settings_title{
    font-size: 25px;
    color: #000;
    margin-left: 80px;
    margin-top:15px;
}

.settiings_elm{
    font-size: 32px;
    color: #000;
    margin-left: 50px;
    margin-top: -10px;
    cursor: pointer;
    border: 2px solid #198de6;
    margin-left: 80px;
    border-radius:20px;
    height:60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width:400px;
    transition: all .5s ease-in-out;
}

.settiings_elm:hover{
    margin-left:100px
}


.profile_img {
width: 120px;
height: 120px;
-o-object-fit: cover;
object-fit: cover;
border: 2px solid #198de6;
margin-left: 22px;
border-radius: 100%;
cursor: pointer;
}




.logout{
    width: 80%;
    margin-left:10%;
    height: 50px;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 20px;
    border-radius:20px;
    border: #198de6 1px solid;
    transition: all .5s ease-in-out;
}

.logout:hover{
    background-color: #198de6;
    color: #fff;
}



/* 
// ------------------------------- Modal  ---------------
// ------------------------------- Modal  ---------------
// ------------------------------- Modal  --------------- 
*/





.modal_hide_anim{
        transition: all 1s ease-in-out !important;
        opacity: 0 !important;
    }
    
    .modal_box_hide_anim{
        transition: all .6s ease-in-out !important;
        transform: translateX(100%) !important;
    }
    
    .modal_hide_disp{
        display:none !important;
    }
    
    
    
    
    
    
    
    .modal_container{
        width:100vw;
        height:100vh;
        background-color:rgba(255, 255, 255, 0.1);
        position:fixed;
        top:0;
        left:0;
        z-index:200;
        display:flex;
        justify-content:right;
        align-items:center;
        backdrop-filter: blur(8px);
        transition: all 1s ease-in-out;
        opacity: 1;
    
    }
    .modal_popup{
        width:60vw;
        height:100vh;
        background-color:#fff;
        z-index:210;
        margin-top:0px;
        border: 1px solid rgb(6, 100, 162);
        transition: all 1s ease-in-out;
        overflow-y: scroll;
        overflow-x:hidden;
        border-top-left-radius:20px;
    border-bottom-left-radius:20px;
    }

    .modal_paper{
        height:100vh;
        width:60vw;
        top:0;
        position: absolute;
        background-size: 50%;
    opacity:.5;
  background-repeat: repeat;
  background-image: url("~/assets/content/paper/paper_overlay_3.jpg");
  mix-blend-mode: multiply;
  z-index:-1;
  border-top-left-radius:20px;
    border-bottom-left-radius:20px;
    border: 1px solid rgb(6, 100, 162);
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
        margin-top:0%;
        text-align:center;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
  
    
    .modal_exit{
        margin-top:30px;
        margin-left:90%;
        cursor:pointer;
        z-index: 1000;
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
        background-color:#000;
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
        background-color:#000;
        transform: rotate(45deg);
        position: absolute;
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




@media only screen and (min-width: 576px) and (max-width: 768px) {
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
  

}

@media only screen and (min-width: 992px) and (max-width: 1100px) {

    
}

@media only screen and (min-width: 1100px) and (max-width: 1200px) {

}

@media only screen and (min-width: 992px) and (max-width: 1200px) {

    
}

@media only screen and (min-width: 1200px) and (max-width: 1400px) {
}

@media only screen and (min-width: 1400px) and (max-width: 1600px) {
}

@media only screen and (min-width: 1600px) and (max-width: 5600px) {
}




/* ------------------ ellipse Loader ------------------ */



.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-left:30px
}
.lds-ellipsis div {
  position: absolute;
  top: 15px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: rgba(0, 149, 255, .7);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}




</style>