<template>
  <div>
    <!-- <div class="modal_container" :class="{modal_hide_anim: modal_exit_anim, modal_hide_disp: modal_exit_display}">
      <div class="modal_popup" :class="{modal_bix_hide_anim: modal_exit_anim}" ref="modal">
        <div @click="modal_leave" class="modal_exit">
          <div class="horizontal_line"></div>
          <div class="vertical_line"></div>
        </div>
      </div>
    </div> -->
    <!--  ----------   Inner Modal   --------------------------  -->
    
    <CWSMainHeader/>
    <CWSGSAPScrollSmoother>
      <div style="background-color: #fff; padding-bottom:10%; border-bottom: 1px solid rgb(167, 211, 232, 0.4); padding-top:10%">
        <h4 class="login_title">Hi {{ name }}, please complete the form to continue</h4>      
        <div class="login_container">      
          <div class="form_container"> 
            <div class="label_move" :class="{is_hidden:message_hidden}">
              <p>{{ login_content }}</p>
            </div>
            <div class="input_wrap">
              <input v-model="first_name" type="text" name="firm_name" class="input_white" placeholder=' ' required/>
              <label class="label_white label_move" >First Name</label>
            </div>    
            <div class="input_wrap">
              <input v-model="last_name" type="text" name="firm_name" class="input_white" placeholder=' ' required/>
              <label class="label_white label_move" >Last Name</label>
            </div>    
            <div class="input_wrap">
              <input v-model="email" type="text" name="email" class="input_white" placeholder=' ' required/>
              <label class="label_white label_move" >email</label>
            </div>  
            <div class="input_wrap">
              <input v-model="firm_name" type="text" name="firm_name" class="input_white" placeholder=' ' required/>
              <label class="label_white label_move" >Firm Name</label>
            </div>    
            <div class="input_wrap">
              <input v-model="job_title" type="text" name="job_title" class="input_white" placeholder=' ' required/>
              <label class="label_white label_move" >Job Title</label>
            </div> 
            <div class="input_wrap">
              <input @keyup="remove_chrs_phone" @keypress="onPhoneKeyPress" maxlength="12" v-model="phone_number" type="text" name="phone" class="input_white" placeholder=' ' required/>
              <label class="label_white label_move" >Phone Number</label>
            </div>      
            <div class="input_wrap">
              <input v-model="number_of_open" type="text" name="number_of_open" class="input_white" placeholder=' ' required/>
              <label class="label_white label_move" >Current number of open settlements on your desk</label>
            </div>        
            <div class="input_wrap">
              <input v-model="login_pass_1_value" type="password" class="input_white" placeholder=' ' required/>
              <label class="label_white label_move" >Password</label>
            </div>
            <div class="input_wrap">
              <input v-model="login_pass_2_value" type="password" class="input_white" placeholder=' ' required/>
              <label class="label_white label_move" >Verify Password</label>
            </div>
            <div class="button_container">
              <button class="submit_form" type="submit" @click="user_signup">Sign Up</button> 
            </div>
            
            <!-- 
              <button class="submit_form" type="submit" @click="api_data">Get Restricted Data</button>
              <p class="api_response">Restricted Data: {{ data_content }}</p>
              <button class="submit_form" type="submit" @click="api_logout">Logout</button>
              <p class="api_response">Logout: {{ logout_content }}</p> -->
              
              
            </div>
          </div>
          <div style="padding-bottom:30vh"></div>        
        </div>
        <CWSFooterMain/>  
        <div class="paperOverlay"></div>
      </CWSGSAPScrollSmoother>
    </div> 
  </template>
  
  
  <script setup>
  import { dash_images } from '~/stores/dashboard_images';
  const cookie_options = {default:()=> '', watch:true}
  const email = useCookie('email', cookie_options)
  const user_ID = useCookie('user_ID', cookie_options)
  const settlement_ID = useCookie('settlement_ID', cookie_options)
  const name = useCookie('name', cookie_options)
  const receiver_name =  useCookie('receiver_name', cookie_options)
  const first_name = ref('')
  const last_name = ref('')
  // receiver_name.value = route.receiver_name
  // settlement_ID.value = route.settlement_ID

  const login_pass_1_value = ref('')
  const login_pass_2_value = ref('')
  const login_content = ref('') 
  
  const message_hidden = ref(true)
  const config = useRuntimeConfig()  
  
  const modal_exit_anim = ref(true)
  const modal_exit_display = ref(true)

  const route = useRoute()
  
  const phone_number = ref('')
  const firm_name = ref('')
  const job_title = ref('')
  const number_of_open = ref('')

  const profile_image_sesh = useSessionStorage('profile_image_sesh')
  const profile_img = dash_images();
  const profile_image = ref(profile_img.profile_img)

  
  // sleep time expects milliseconds
  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  
  fetch(`${config.flask_url}/api/user_dashboard/receiver_load_sign_up/`, {
    method: 'post',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({'token': route.query.token})
  })
  .then((response) => response.json())
  .then((data) => {
    settlement_ID.value = data.settlement_ID
    user_ID.value = data.receiver_ID
    first_name.value = data.receiver_first_name
    last_name.value = data.receiver_last_name
    email.value = data.receiver_email
    if (data.account_status == 'complete') {
      navigateTo('/user_dashboard/reciever_entry/')
    }
  })
  .catch(error => {
    console.error(error);
  });

  function user_signup() {

    const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

if (!email.value.match(email_regex)) {
    alert("Please enter a valid email")
    return
}
    
    if (login_pass_1_value.value != login_pass_2_value.value || login_pass_1_value.value == '' || login_pass_2_value.value == '') {
      alert("Passwords do not match. Please try again.")
      login_pass_1_value.value = ''
      login_pass_2_value.value = ''
    } else if (login_pass_1_value.value.length < 6) {
      alert("Your password is too short. Minimum length is 8 characters")
    } else {
      
      
      
      
      fetch(`${config.flask_url}/api/user_dashboard/receiver_finish_sign_up/`, {
        method: 'post',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_ID: user_ID.value, first_name:first_name.value, last_name:last_name.value, email: email.value.toLowerCase(), password: login_pass_1_value.value, firm_name: firm_name.value, job_title: job_title.value, phone_number: phone_number.value, number_of_open: number_of_open.value})
      })
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem('profile_image_sesh', 'data:image/jpeg;base64, ' + data.profile_image)
        profile_img.update_profile_img('data:image/jpeg;base64, ' + data.profile_image);
        profile_image.value = 'data:image/jpeg;base64, ' + data.profile_image
        const cookie = useCookie('auth_cookie')
        cookie.value = new Date().getTime()+30*60*1000
        if (data.status == 'signup_complete') {
          navigateTo('/user_dashboard/reciever_entry/')
        } else {
          navigateTo('/user_dashboard/dashboard_home')
        }
      })
      .catch(error => {
        console.error(error);
        // navigateTo('/investor_dashboard/investor_expire')
      });
      
    }
  }
  
  
function remove_chrs_phone() {
    phone_number.value = phone_number.value.toString().replace(/[^0-9-()-+ ]/g, '');
}

function onPhoneKeyPress(e) {
    const key = e.keyCode || e.charCode;
    const len_phone = phone_number.value.length

    if (key !== 8 || key !==  46) {
    if(len_phone == 3 || len_phone == 7){
        phone_number.value = phone_number.value + '-'
        }
    }
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // ------ already commented ----------
  
  
  // function api_data() {
    //   fetch('http://127.0.0.1:5000/api/v1/who_am_i', {
      //     method: 'GET',
      //     mode: 'cors',
      //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json',
        //       'X-CSRF-TOKEN': getCookie('csrf_access_token')
        //     }
        //   })
        //   .then(async response => {
          //     const data = await response.json();
          //     if (!response.ok) {
            //       const error = (data && data.message) || response.status
            //       return Promise.reject(error)
            //     }
            //     data_content.value = data.msg
            //   })
            //   .catch(error => {
              //     errorMessage.value = error;
              //     console.error('There was an error!', error);
              //   });
              // }
              
              // function api_login(){ (async () => {
                //   const rawResponse = await fetch('http://127.0.0.1:5000/api/v1/login', {
                  //     method: 'POST',
                  //     mode: 'cors',
                  //     headers: {
                    //       'Accept': 'application/json',
                    //       'Content-Type': 'application/json'
                    //     },
                    //     body: JSON.stringify({email: email.value, password: login_pass_value.value})
                    //   });
                    //   api_content.value = await rawResponse.json()['access_token'];
                    
                    //   console.log(api_content.value);
                    // })();
                    // }
                    
                    
                    
                    
                    
                    // const { session, refresh, update, reset } = await useSession()
                    
                    
                    
                    
                    
                    
                    
                    // Reactive session object that updates after methods calls below
                    // session.value
                    
                    // Refresh the session
                    // await refresh()
                    
                    // // Update the session with arbitrary data
                    // await update({ shaun: 'thisisshaun' })
                    
                    // // // Get a new session, all data will be lost, the session id and creation time will change
                    // // await reset()
                    
                    
                    // const sesh = session.value
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    function forgot_the_ps() {
                      
                      forgot_password.value = true
                      modal_exit_display.value = false
                      sleep(100).then(() => {
                        modal_exit_anim.value = false
                      });
                      
                      
                    }
                    
                    
                    
                    function open_modal(){
                      modal_exit_display.value = false
                      sleep(100).then(() => {
                        modal_exit_anim.value = false
                      });
                      
                    }
                    
                    
                    
                    
                    function modal_leave(){
                      forgot_password.value = false
                      modal_exit_anim.value = true
                      sleep(1100).then(() => {
                        modal_exit_display.value = true
                      });
                    }
                    
                    
                    
                    
                    // open modal on load
                    
                    
                    
                  </script>
                  
                  
                  
                  <style scoped>
                  
                  
                  .is_hidden{
                    display:none;
                  }
                  
                  
                  .hide_modal{
                    display:none !important
                  }
                  .login_container{
                    width:100%;
                    display:flex;
                    justify-content: center;
                  }
                  
                  .form_container{
                    width:60%;
                    margin-left:10%;
                  }
                  
                  .input_wrap{
                    margin-top:10%;
                    width:80%
                  }
                  
                  .label_move{
                    margin-left:3%
                  }
                  
                  
                  .label_move_two_factor{
                    margin-left:-5%
                  }
                  
                  
                  .two_factor_modal{
                    background-color: rgba(255, 255, 255, 0.349);
                    z-index:10;
                    width:100vw;
                    height:100vh;
                    position:fixed;
                    top:0;
                    backdrop-filter: blur(50px);
                  }
                  
                  .login_title{
                    margin-top:5%;
                    margin-left:5%;
                    margin-bottom:0%
                  }
                  
                  .submit_form{
                    background-color:#a7d3e8;
                    border:1px solid #a7d3e8;
                    width:30%;
                    margin-left:12%;
                    padding:10px;
                    border-radius:100px;
                    color:#fff;
                    margin-top:5%;
                    cursor: pointer;
                    transition: all 1s ease;
                  }
                  
                  .submit_form:hover{
                    background-color: #fff;
                    transition: all 1s ease;
                    border:1px solid #a7d3e8;
                    color:#a7d3e8;
                  }
                  
                  .two_factor_container{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left:-5%
                    
                  }
                  
                  .api_response{
                    margin-top: 10%;
                  }
                  
                  
                  
                  
                  
                  
                  .two_factor_text{
                    margin-top: 5%;
                    margin-left: 20%;
                    width:60%;
                    text-align:center
                  }
                  
                  
                  .two_factor_submit{
                    background-color:rgb(85, 210, 241);
                    width:30%;
                    margin-left:5%;
                    padding:10px;
                    border:0px;
                    border-radius:100px;
                    color:#fff;
                    margin-top:10%;
                    cursor: pointer;
                    transition: all 1s ease;
                    height:35px
                  }
                  
                  
                  
                  
                  .two_factor_submit:hover{
                    background-color: blue;
                    transition: all 1s ease;
                  }
                  
                  
                  
                  .input_wrap_two_factor{
                    width:50%
                  }
                  
                  
                  
                  .button_container{
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    width:70%;
                    margin-top:3%
                  }
                  
                  .forgot_password{
                    color:#fff;
                    cursor: pointer;
                    margin-top:4%
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
                    z-index:10;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    backdrop-filter: blur(20px);
                    transition: all 1s ease-in-out;
                    
                  }
                  .modal_popup{
                    width:600px;
                    height:375px;
                    background-color:rgb(0, 0, 0);
                    z-index:10;
                    border-radius:20px;
                    margin-top:-100px;
                    border: #fff solid 2px;
                    transition: all 1s ease-in-out;
                  }
                  
                  .modal_info{
                    font-size:30px;
                    font-weight:600;
                    color:#fff;
                    margin-left:10%;
                    margin-top:10%;
                    width:80%;
                    text-align:center
                  }
                  
                  .login_redirect{
                    width:40%;
                    height:50px;
                    background-color:rgb(25, 120, 237) ;
                    margin-left: 30%;
                    margin-top:7%;
                    border-radius:100px;
                    border:#fff solid 0px;
                    cursor:pointer;
                    font-size:20px;
                    color:#fff
                  }
                  .modal_exit{
                    margin-top:0px;
                    margin-left:540px;
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
                    
                    .label_move_two_factor{
                      margin-left:-1%
                    }
                    
                    
                    
                  }
                  
                  @media only screen and (min-width: 576px) and (max-width: 768px) {
                    
                    .label_move_two_factor{
                      margin-left:2%
                    }
                    
                    
                  }
                  
                  @media only screen and (min-width: 768px) and (max-width: 992px) {
                    
                    .label_move_two_factor{
                      margin-left:0%
                    }
                    
                    
                  }
                  
                  @media only screen and (min-width: 992px) and (max-width: 1200px) {
                  }
                  
                  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
                    
                  }
                  
                  @media only screen and (min-width: 1400px) and (max-width: 1600px) {
                    
                    
                    .label_move_two_factor{
                      margin-left:-7%
                    }
                    
                  }
                  
                  @media only screen and (min-width: 1600px) and (max-width: 5600px) {
                    
                    
                    .label_move_two_factor{
                      margin-left:-13%
                    }
                    
                    
                  }
                  
                  
                  
                </style>