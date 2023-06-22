<template>
    


    <Teleport to="body">
        <MainTransition ref="main_tansition"/>
    <div class="modal_container" :class="{modal_hide_anim: modal_exit_anim, modal_hide_disp: modal_exit_display}">
            <div class="modal_popup" :class="{modal_bix_hide_anim: modal_exit_anim}" ref="modal">
                <div @click="modal_leave" class="modal_exit cursor_hover">
                <div class="horizontal_line"></div>
                <div class="vertical_line"></div>
            </div>


            <div class="modal_grid">

                <div style="overflow:hidden">
               <img class="modal_img" :style="{ transform: `scale(${img_scale})` }" src="~/assets/content/wallstreet/download_img.jpg">
            </div>
    
            <div class="modal_info">
                <h6 class="modal_text">Get Access</h6>
    
    
                    <br>
                <div class="input_wrap cursor_hover">
                <input v-model="subscribe_name" type="text" class="input_white input_edit" placeholder=' ' required/>
                <label class="label_white label_edit" >Name</label>
              </div>

              <div class="input_wrap cursor_hover">
                <input v-model="subscribe_email" type="text" class="input_white input_edit" placeholder=' ' required/>
                <label class="label_white label_edit" >Email</label>
              </div>
    
              <div @click="submit_form" class="modal_submit_button cursor_hover">Download</div>
    
            </div>

        </div>

        <div class="modal_info_2" v-if="download_clicked">
            <h6 class="info_2_title">Your Download will start in <span class="count_down_timer">{{ count }}</span> seconds <br><br>You will also be re-directed to the GET Resources Group's Fund Offering Pages</h6>

            </div>
    

    
            </div>
        </div>
    
        <div class="plaid_blur" v-if="plaid_blur"></div>
        <div class="loader_container" v-if="start_loader"></div>
    
    </Teleport>
    
    </template>
    
    
    <script setup>
    
    import { gsap } from 'gsap'
    
    const config = useRuntimeConfig()
    const csrf_cookie = useCookie('csrf_access_token')
    const notification_count = useCookie('notification_count')
    const modal_exit_anim = ref(true)
    const modal_exit_display = ref(true)
    
    const subscribe_name = ref('')
    const subscribe_email = ref('')

    const img_scale = ref(2)
    
    const download_clicked = ref(false)
        
        
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
        gsap.to('.modal_grid', 1, {
                xPercent: 0,
            });
            download_clicked.value = false
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
    
    
    


    
    function submit_form(){
        
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(subscribe_email.value).toLowerCase())) {
        alert('Email is not valid!');
    } else {

    
    
    fetch(`${config.flask_url}/api/WALLSTREET_conatcat_and_sub/`, {
      method: 'POST',
        mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
          body: JSON.stringify({subscribe_name:subscribe_name.value, subscribe_email: subscribe_email.value})
      })
      .then((response) => response.json())
      .then((data) => {

           if (data.status != 'success_email_added'){
            alert(data.message)
           } else {
            move_form() 
           }
    
      })
      .catch(error => {
          console.error('There was an error!', error);
      });
    
        }

    }
    
    

    function move_form(){
      submit_form()
        timer()
        download_clicked.value = true
        gsap.to('.modal_grid', 1, {
    xPercent: -100,
  });
  sleep(100).then(() => {
  gsap.to('.modal_info_2', .5, {
    opacity: 1,
    delay: 1
  });
});
    }
    
    
  ``

    const count = ref(10);

function timer() {
           // Redirect to a new page with a slight delay
           sleep(13000).then(() => {
        window.open("https://thisisget.com/fund_pages/fund_landing_pages/next_ai_landing", '_blank').focus();
    });

  const intervalId = setInterval(() => {
    count.value -= 1;
    if (count.value <= 0) {
      clearInterval(intervalId); // Stop the timer

      // Download PDF
      downloadPdf('https://thewallstreetnetwork.com/decks/Next_AI_Fund_Deck.pdf');

      modal_leave()
    }
  }, 1000); // decrement the count every second
}

function downloadPdf(fileUrl) {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.target = '_blank';
  link.download = 'file.pdf';
  link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
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
    
    .modal_info_2{
        opacity:.5;
        position:absolute;
        top:25%;
        width:60%;
        margin-left:0%
    }

    .info_2_title{
        font-size:30px;
        text-align: center;
    }

    .count_down_timer{
        color:rgba(0, 149, 255, 1)
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
        font-size:16px;
        line-height:40px;
        color:#fff;
        box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.2);
        outline: 0px solid rgba(19, 218, 218, 0.6);
        transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
        text-align: center;
        cursor:none
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
        }
        
        
        .modal_exit{
            margin-top:0px;
            margin-left:93%;
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