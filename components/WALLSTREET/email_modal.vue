<template>
    


    <Teleport to="body">
        <MainTransition ref="main_tansition"/>
    <div class="modal_container" :class="{modal_hide_anim: modal_exit_anim, modal_hide_disp: modal_exit_display}">
            <div class="modal_popup" :class="{modal_bix_hide_anim: modal_exit_anim}" ref="modal">
                <div @click="modal_leave" class="modal_exit">
                <div class="horizontal_line"></div>
                <div class="vertical_line"></div>
            </div>


            <div class="modal_grid">

                <div style="overflow:hidden">
               <img class="modal_img" :style="{ transform: `scale(${img_scale})` }" src="~/assets/content/wallstreet/modal_img.jpg">
            </div>
    
            <div class="modal_info">
                <h6 class="modal_text">Get Started</h6>
    
    
                    <br>
                <div class="input_wrap">
                <input v-model="email_2" type="text" class="input_white input_edit" placeholder=' ' required/>
                <label class="label_white label_edit" >Name</label>
              </div>

              <div class="input_wrap">
                <input v-model="email_1" type="text" class="input_white input_edit" placeholder=' ' required/>
                <label class="label_white label_edit" >Email</label>
              </div>
    
              <div @click="submit_form" class="modal_submit_button">Submit</div>
    
            </div>

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
    
    const email_1 = ref('')
    const email_2 = ref('')

    const img_scale = ref(2)
    
        
        
        // sleep time expects milliseconds
        function sleep (time) {
          return new Promise((resolve) => setTimeout(resolve, time));
        }
        
    function open_modal(){
        modal_exit_display.value = false
            sleep(100).then(() => {
                img_scale.value = 1
            modal_exit_anim.value = false
            });
    }
    
    function modal_leave(){
            modal_exit_anim.value = true
            sleep(1100).then(() => {
                img_scale.value = 2
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
    

    
    function submit_form(){
        
    
    
    // fetch(`${config.flask_url}/api/user_dashboard/update_email_and_pass/`, {
    //       method: 'post',
    //       mode: 'cors',
    //       credentials: 'include',
    //       headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json',
    //           'X-CSRF-TOKEN': csrf_cookie.value
    //       },
    //       body: JSON.stringify({email_or_password: email_or_password.value.toLowerCase(), password:pass_1.value, email:email_1.value})
    //   })
    //   .then((response) => response.json())
    //   .then((data) => {
    //        notification_count.value = data.notification_count;
    
    //        alert(data.msg)
    //        if (data.status == 'email_or_password_updated'){
    //         notification_count.value = data.notification_count;
    //         modal_leave()
    //        } 
    
    //   })
    //   .catch(error => {
    //       //  alert("Error")
    //       console.error('There was an error!', error);
    //     //   navigateTo('/login_pages/login')
    //   });
    
    //     }
    
    
    
    }
    
    
    
    
    </script>
    
    
    
    <style scoped>
    
    
    
    .input_edit{
      color:#000;
      border-bottom: #000 1px solid;
    }
    
     .input_edit:focus~ .label_edit,
      .input_edit:valid ~ .label_edit{
        top: -1.75vw;
        left: 3.3vw;  
        font-size: 1vw; 
        color: green;
      }
    
    .label_edit{
      margin-left:-3%
    }
    /* 
    // ------------------------------- Modal  ---------------
    // ------------------------------- Modal  ---------------
    // ------------------------------- Modal  --------------- 
    */
    


    .modal_grid{
        display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
margin-top:-50px
    }

    .modal_img{
        width:100%;
        height:65vh;
        object-fit: cover;
        object-position: 50% 50%;
        transition: all 1s ease-in-out .25s;
    }
    
    
    
    .plaid_blur{
        position:fixed;
        top:0;
        left:0;
        height:100vh;
        width:100vw;
        background-color:rgba(193, 255, 237, 0.08);
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
            background-color:rgba(111, 151, 140, 0.2);
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
            background-color:#fff;
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
            background-color:green;
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
        width:70%;
        height:40px;
        background-color:green;
        margin-left: 15%;
        margin-top:25%;
        border-radius:100px;
        border:#fff solid 0px;
        cursor:pointer;
        font-size:16px;
        line-height:40px;
        color:#fff;
        box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.2);
        outline: 0px solid rgba(19, 218, 218, 0.6);
        transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
        text-align: center;
    }
    
    
    .modal_submit_button:hover{
      box-shadow: 0px 10px 15px rgba(0, 128, 0, 0.501);
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
        
    
        .modal_text{
            font-size:140%;
            color:#000;
            margin-left:5%;
            margin-top:25%;
            width:90%;
            text-align:center;
            line-height:1.3;
            margin-bottom:0
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