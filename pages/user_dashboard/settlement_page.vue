<template>

    <div class="light_mode" style="overflow-x:hidden">
        <UserDashDashboardHeader v-bind="active_page" />
        <UserDashLeftSidebar v-bind="active_page"/>
        <CWSGSAPScrollSmoother>
            
            <div class="navigation_header">
                <div class="nav_menu_title">Settlement Page</div>
                <!-- <div class="header_menu">
                    <div class="navigation_menu is-active" href="#">xxx</div>
                    <div class="navigation_menu" href="#">xxx</div>
                    <div class="navigation_menu" href="#">xxx</div>
                </div> -->
            </div>
            <div class="dashboard_inner_section" ref="el">
                <div class="main_content_container">
                  <div class="paperOverlay"></div>
                  <div style="padding-top:50px"></div>
                  

<div class="consensus_block" :style="borderStyle" v-if="settlement_status != 'incoming'">
  <div v-if="settlement_status == 'settlement_reached'">
  <h6 class="page_title_consensus">Agreement Reached</h6>
  <p class="consensus_text">A settlement has been reached. Please contact each other via email or any other communication channel to remit payment.
    <span v-if="settlement_ideal_value != 'N/A'"><br><br>Your settlement value is {{ settlement_ideal_value }}</span>
  </p>
  </div>
  <div v-if="settlement_status == 'open' || settlement_status == 'expiring_soon'">
  <h6 class="page_title_consensus">No Agreement Reached</h6>
  <p class="consensus_text">There has been no successfull agreement, please use our chat feature below to negotiate a solution.</p>
  </div>
  <div v-if="settlement_status == 'requested'">
  <h6 class="page_title_consensus">Settlement Requested</h6>
  <p class="consensus_text">Your settlement request has been sent.</p>
  </div>
</div>







                  <div class="info_block">

                    <h6 class="page_title">Settlement Info</h6>


                    <div class="info_container">

                    <div class="info_left">
                    <p class="info_text_intro">This is a settlement between you and {{  counter_party_name  }}</p>
                    <!-- <p class="intro_subtext" v-if="settlement_status == 'open' || settlement_status == 'expiring_soon'">Based on our mathcing algorithm, we believe that you have a XX % probability in coming to a mutally beneficial agreement. 
                    </p> -->


                    <br>

                    <p class="info_text"><span class="underline_it">Counter Party:</span> {{  counter_party_name  }}</p>
                    <p class="info_text"><span class="underline_it">Firm:</span> {{  counter_party_firm_name  }}</p>
                    <p class="info_text"><span class="underline_it">Email:</span> {{  counter_party_email  }}</p>
                    <br>
                    </div>

                    <div class="info_right">
                    <p class="info_text_id"><span style="color:#fff">CWS Settlement ID: {{  settlement_ID  }}</span></p>
                    <p class="info_text"><span class="underline_it">Request Datetime:</span> <span style="font-size: 14px; line-height: 0;"> {{  request_date  }}</span></p>
                    <p class="info_text"><span class="underline_it">Case Number:</span> {{  case_number  }}</p>
                    <p class="info_text"><span class="underline_it">Filing State:</span> {{  filing_state  }}</p>
                    <p class="info_text"><span style="line-height: 0;" class="underline_it">Brief Description:</span> {{  brief_description  }}</p>
                    <p class="info_text"><span class="underline_it">Additional Info:</span></p>
                    <div class="add_info">{{  additional_info  }}</div>

                    <!-- <div class="attatched_docs">Attateched Documents</div> -->
                    </div>


                    </div>

                    </div>






                    <div v-if="settlement_status == 'incoming'">
                      <UserDashReceiverEntryComp/>
                        </div>









                    <div  v-if="settlement_status == 'open' || settlement_status == 'expiring_soon'" >

                      <iframe v-if="channel_url" :class="{iframe_hidden:!rc_logged_in}" :src="channel_url"></iframe>
                      <div  v-if="!rc_logged_in"  class="load_cont">
                      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>


     

                  <div @click="settlement_reached" class="consensus_reached_button">Agreement Reached</div>

                </div>


                <div v-else>
                <div v-if="settlement_status != 'incoming'" @click="settlement_transcript" class="chat_transcript_button">Download Chat Transcript & All Files</div>
                </div>








                </div>
            </div>
            
            <!-- div for footer scroll over -->
            <div style="padding-bottom:1px"></div>
            <CWSFooterDash/>
        </CWSGSAPScrollSmoother>
        <!-- <UserDashDashboardFooter/> -->
  
        
    </div>
    
    
    
    
    
  </template>
  
  
  
  
  
  
  <script setup>
  import { useResizeObserver } from '@vueuse/core'
  import { useWindowSize } from '@vueuse/core'
  
  
  // onBeforeMount(() => { if (authCookieRefresh()) {CWS_investor_overview()} })
  
  const config = useRuntimeConfig()
  const csrf_cookie = useCookie('csrf_access_token')
  const notification_count = useCookie('notification_count')
  const user_ID = useCookie('user_ID')

  const route = useRoute()
  const settlement_ID = route.query.settlement_ID
  

  const counter_party_email = ref('')
  const counter_party_name = ref('')
  const counter_party_firm_name = ref('')
  const counter_party_phone = ref('')
  const request_date = ref('')
  const case_number = ref('')
  const filing_state = ref('')
  const brief_description = ref('')
  const additional_info = ref('')
  const settlement_ideal_value = ref('')
  const settlement_status = ref('')
  const channel_url = ref(null)

  const rocket_chat_auth_token = useCookie('rocket_chat_auth_token')


fetch(`${config.flask_url}/api/user_dashboard/settlement_page/`, {
  method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrf_cookie.value
      },
    body: JSON.stringify({settlement_ID: settlement_ID, rocket_chat_auth_token: rocket_chat_auth_token.value})
}).then((response) => response.json())
    .then((data) => {
         counter_party_email.value = data.counter_party_email
          counter_party_name.value = data.counter_party_name
          counter_party_firm_name.value = data.counter_party_firm_name
          counter_party_phone.value = data.counter_party_phone
          request_date.value = data.request_date
         case_number.value = data.case_number
         filing_state.value = data.filing_state
         brief_description.value = data.brief_description
         additional_info.value = data.additional_info
         rocket_chat_auth_token.value = data.rocket_chat_auth_token
        //  settlement_ideal_value.value = data.settlement_ideal_value
        if (data.settlement_ideal_value != null) {
         settlement_ideal_value.value = '$' + data.settlement_ideal_value.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else{ settlement_ideal_value.value = 'N/A'}
         settlement_status.value = data.settlement_status
         channel_url.value = data.channel_url
         iframe_new_login(data.rocket_chat_auth_token)

    })
    .catch(error => {
        console.error('Error');
    });







function settlement_reached() {

if (confirm("Confirm Settlemnt Agreement") == true){

  fetch(`${config.flask_url}/api/user_dashboard/settlement_reached/`, {
  method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrf_cookie.value
      },
    body: JSON.stringify({settlement_ID: settlement_ID})
}).then((response) => response.json())
    .then((data) => {
      notification_count.value = data.notification_count
         settlement_status.value = data.settlement_status
    })
    .catch(error => {
        console.error('Error');
    });
}
}




function settlement_transcript() {


  fetch(`${config.flask_url}/api/user_dashboard/settlement_transcript/`, {
  method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrf_cookie.value
      },
    body: JSON.stringify({settlement_ID: settlement_ID})
}).then((response) => response.json())
    .then((data) => {
      notification_count.value = data.notification_count
      if(data.status == 'success'){
        alert('email sent')
      }
      else{
        alert('Error')
      }
         
    })
    .catch(error => {
        console.error('Error');
    });
}






        // sleep time expects milliseconds
        function sleep (time) {
          return new Promise((resolve) => setTimeout(resolve, time));
        }

  

  // ---- rocketchat login -----------


const rc_iframe = ref()
const rc_logged_in = ref(false)

onMounted(() => {
  iframe_new_login(rocket_chat_auth_token.value)
})



function iframe_new_login(rc_auth) {
    if (rocket_chat_auth_token.value != null && (settlement_status.value == 'open' || settlement_status.value == 'expiring_soon')) {
      sleep(4500).then(() => {  rc_logged_in.value = true })
        rc_iframe.value.addEventListener('load', () => {
            rc_iframe.value.contentWindow.postMessage({
                event: 'login-with-token',
                loginToken: rocket_chat_auth_token.value
            }, '*');

            iframe_navigate_to();
        });
    }
}

function iframe_navigate_to() {
      rc_iframe.value.contentWindow.postMessage({
        externalCommand: 'go',
        path: channel_url.value
    }, '*');
}






const borderStyle = computed(() => {
      if (settlement_status.value === 'open') {
        return '2px solid #fb8068ab';
      } else if (settlement_status.value === 'requested') {
        return '2px solid blue';
      } else {
        return '2px solid #0cbb00';
      }
    });

    
  
        
  const cookie_options = {default:()=> '', watch:true, maxAge:1800}
  const active_page = {is_active: "demo"}
  


    const el = ref()
    const inner_height = ref()

  
  const dashboard_inner_section_padding = ref('0px')

  useResizeObserver(el, (entries) => {
        const entry = entries[0]
        const { width, height } = entry.contentRect
          inner_height.value = height
          console.log('inner_height x -- ', height)
          const window_size = useWindowSize()
          console.log('window_height -- ', window_size.height.value)
          if (inner_height.value < window_size.height.value) {
          dashboard_inner_section_padding.value = (window_size.height.value - inner_height.value) - 130 + 'px'
          }
  
      })
  
  </script>
    
    
    
    
    
    
    
    
    <style scoped>
    
    .iframe_hidden{
  width:1px;
  height:1px;
  opacity:0;
  margin-bottom:0
}


    iframe {
  border: 1px solid #f2f9ff;
  border-top:1px solid #fff;
  border-radius:20px;
  width:100%;
    height:70vh;
    margin-bottom:20%
}


iframe::-webkit-scrollbar {
      width: 3px;
      border-radius: 10px;
  }
  
  iframe::-webkit-scrollbar-thumb {
      background: rgba(0, 149, 255, 0.676);
      border-radius: 10px;
  }
  
    
    
    
    .dashboard_inner_section{
        margin-bottom: 81px; 
        padding-bottom:v-bind(dashboard_inner_section_padding);
        width:calc(100vw - 250px); 
        margin-left:250px;
        border-bottom: 1px solid rgb(167, 211, 232, 0.4);
        /* background-color:var(--inner_background); */
          background-color:#fff;
        z-index:1
    }
    
    .main_content_container{
        width:80%; 
        margin-right:10%;
        margin-left:10%;
        z-index:1
    }
    
    
    
    
    
    
    .navigation_header {
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
        height: 58px;
        flex-shrink: 0;
        margin-top:80px;
        width:calc(100vw - 250px); 
        margin-left: 250px;
        background-color: #ffffff;
    }
    
    
    
    .nav_menu_title {
        text-decoration: none;
        color: var(--theme-color);
        padding: 0 30px;
        margin-left:25px;
        padding-right:50px;
    }
    
    
    
    ::-webkit-scrollbar {
        width: 3px;
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: rgba(0, 149, 255, 0.676);
        border-radius: 10px;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    @media only screen and (min-width: 0px) and (max-width: 576px) {
        .dashboard_inner_section{
            width:calc(100vw - 20px); 
            margin-left:20px;
        }
        
        .navigation_header {
            width:100vw;
            margin-left:20px;
        }
        
    }
    
    @media only screen and (min-width: 576px) and (max-width: 768px) {
        .dashboard_inner_section{
            width:calc(100vw - 20px); 
            margin-left:20px;
        }
        
        .navigation_header {
            width:100vw;
            margin-left:20px;
        }
        
    }
    
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        
        .dashboard_inner_section{
            width:100vw;
            margin-left:180px;
        }
        
        .navigation_header {
            width:100vw;
            margin-left:150px;
        }
        
    }
    
    @media only screen and (min-width: 992px) and (max-width: 1200px) {
    }
    
    @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    }
    
    @media only screen and (min-width: 1400px) and (max-width: 1600px) {
    }
    
    @media only screen and (min-width: 1600px) and (max-width: 5600px) {
    }
    
    
    
    



  
  .info_block{
      height:500px;
      border-radius: 30px;
      background-color:rgb(6, 100, 162);
      border: #a7d3e8 1px solid;
      margin-bottom: 100px;
      margin-top:40px;
  }
  
  /* .middle_block{
      height:500px;
      border-radius: 30px;
      background-color:rgba(0, 89, 178, 0.75);
      border: rgb(6, 100, 162) 1px solid;
  } */

  .consensus_block{
      height:300px;
      border-radius: 30px;
      background-color: #a7d3e861;
      padding:15px
  }

  .chat_transcript_button{
      width:300px;
      text-align: center;
      padding:10px;
      border-radius: 30px;
      border:#deae00cd solid 1px;
      color:#fff;
      background-color: #a7d3e8;
      cursor: pointer;
      transition: all .4s ease-in-out;
      margin-bottom:100px
  }

  .chat_transcript_button:hover{
      background-color: #deae00;
      transition: all .4s ease-in-out;
      border:#a7d3e8b1 solid 1px;
  }

  .consensus_reached_button{
    width:60%;
    margin-left:20%;
    margin-top:-100px;
    margin-bottom:100px;
      text-align: center;
      padding:10px;
      border-radius: 30px;
      border:#0cbb00 solid 1px;
      color:#fff;
      background-color: #a7d3e8;
      cursor: pointer;
      transition: all .4s ease-in-out;
  }

  .consensus_reached_button:hover{
      background-color: #0a9500b6;
      transition: all .4s ease-in-out;
      border:rgba(0, 149, 255, 0.676) solid 1px;
  }


  .info_container{
    width:90%;
    margin-left:5%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 0px;
  }

  .info_right{
    margin-left:5%;
    margin-top:-70px;
    padding:20px;
    border-radius: 30px;
    border:#a7d3e861 solid 1px;
    height:400px;
  }

  .add_info{
    height:100px;
    overflow: hidden;
    overflow-y: scroll;
    color: #fff;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .add_info::-webkit-scrollbar {
        width: 3px !important;
        border-radius: 10px !important;
    }
    
    .add_info::-webkit-scrollbar-thumb {
        background: rgba(0, 149, 255, 0.8) !important;
        border-radius: 10px !important;
    }
    

.attatched_docs{
    padding:8px;
    border-radius: 30px;
    border:#a7d3e861 solid 1px;
    color:#fff;
    font-size:12px;
    width:160px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
}

.attatched_docs:hover{
    background-color:#a7d3e861;
}

  .info_text_intro{
    color:#fff;
    margin:10px 0px;
    font-size:25px
  }

  .intro_subtext{
    color:#deae00;
    margin:10px 0px;
    font-size:15px
  }
  .info_text{
    color:#fff;
    margin:10px 0px;
    font-size:20px;
  }
  
  .info_text_id{
    color:#deae00;
    font-size:9px;
    margin-bottom:0
  }

  
  .page_title{
      color:#fff;
      margin-left:4%;
      margin-top:40px;
      font-size:250%;
      margin-bottom:20px;
      text-decoration: underline;
      text-decoration-color:#deae00b9;
      text-decoration-thickness: 3px;
      text-underline-offset: 3px;
  }

  .page_title_consensus{
    color:rgb(6, 100, 162);
      margin-left:4%;
      margin-top:40px;
      font-size:250%;
      margin-bottom:20px;
      text-decoration: underline;
      text-decoration-color:#deae00b9;
      text-decoration-thickness: 3px;
      text-underline-offset: 3px;
  }

  .consensus_text{
    width:80%;
    margin-left:10%;
    margin-top:30px;
  }


  .underline_it{
    text-decoration: underline;
      text-decoration-color:#deae00b9;
      text-decoration-thickness: 1px;
      text-underline-offset: 3px;
  }
  

.designation_hover{
    font-size:10px;
    padding:2px 5px;
    border: 1px solid #ffffff80;
    color: #fff;
    border-radius:100%;
    cursor:pointer;
    transition: all .35s ease-in-out;
}

.designation_hover:hover{
    background-color:#deae00b9;
    color:#fff;
    transition: all .35s ease-in-out;
}

    









/* ------------------ ellipse Loader ------------------ */


.load_cont{
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom:10%;
  margin-top:-5%
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
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
  
  
  
  
  
  
  
  
  
  
  
  