<template>
    

    <!-- <UserDashCompleteProfileSlider/> -->
  <div class="light_mode" style="overflow-x:hidden">
      <UserDashDashboardHeader v-bind="active_page" />
      <UserDashLeftSidebar v-bind="active_page"/>
      <CWSGSAPScrollSmoother>
          
          <div class="navigation_header">
              <div class="nav_menu_title">All Settlement Payments</div>
              <!-- <div class="header_menu">
                  <div class="navigation_menu is-active" href="#">xxx</div>
                  <div class="navigation_menu" href="#">xxx</div>
                  <div class="navigation_menu" href="#">xxx</div>
              </div> -->
          </div>
          <div class="dashboard_inner_section" ref="el">
              <div class="main_content_container">
                <div class="paperOverlay"></div>

      

                <div v-if="account_creation_needed" @click="start_stripe_flow" class="add_stripe_button">Connect Payments</div>


                <UserDashInfoTable :table_name="table_name" :table_headers="table_headers" 
                  :table_buttons="table_buttons"  :record_count="record_count" :table_row_style="table_row_style" />


     



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


      
const cookie_options = {default:()=> '', watch:true, maxAge:1800}
const user_ID = useCookie('user_ID', cookie_options)

const first_name = useCookie('first_name', cookie_options)

const notification_count = useCookie('notification_count', cookie_options)

const account_creation_needed = useCookie('account_creation_needed', {default:()=> false, watch:true})




const message = ref('')
const active_page = {is_active: "payments"}

const csrf_cookie = useCookie('csrf_access_token')
const more_info = useCookie('more_info', cookie_options)

const route = useRoute().query
const session_id = ref(route.session_id)




// ---------------------  Table Component Data --------------------- //
const table_name = ref('All Payments')
const table_row_style = ref('payments_table')
const table_headers = ref(['Amount', 'Date', 'Currency', 'Description'])
const table_buttons = ref({})
const record_count = ref('')
const table_data = ref([])
provide('table_data', table_data)
// ---------------------  Table Component Data --------------------- //





onMounted(() => {
    if (session_id.value != undefined) {
            start_stripe_flow2(session_id.value)
    }
})


function start_stripe_flow() {
  
  fetch(`${config.flask_url}/api/user_dashboard/stripe_create_account/`, {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrf_cookie.value
      },
      body: JSON.stringify({user_ID: user_ID.value})
  })
  .then((response) => response.json())
  .then((data) => {
    notification_count.value = data.notification_count
    if (data.status == 'session_link_created') {
      window.location.href = data.session_url;
    } else {
        account_creation_needed.value = false;
    }
  })
  .catch(error => {
       alert("Error")
      console.error('There was an error!', error);
  });

}




function start_stripe_flow2(session_ID) {

  fetch(`${config.flask_url}/api/user_dashboard/stripe_create_account/`, {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrf_cookie.value
      },
      body: JSON.stringify({session_ID: session_ID})
  })
  .then((response) => response.json())
  .then((data) => {
    notification_count.value = data.notification_count
    if (data.status == 'payment_method_created') {
      alert('Success')
      navigateTo('/user_dashboard/payments');
      account_creation_needed.value = false;
    } else {
        account_creation_needed.value = false;
    }
  })
  .catch(error => {
       alert("Error")
      console.error('There was an error!', error);
  });

}





fetch(`${config.flask_url}/api/user_dashboard/stripe_account_info/`, {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrf_cookie.value
      },
      body: JSON.stringify({user_ID: user_ID.value})
  })
  .then((response) => response.json())
  .then((data) => {

    if (data.status == 'account_creation_needed') {
        account_creation_needed.value = true;
    } else {
        table_data.value = data.charges_array
        record_count.value = data.charges_array.length
        account_creation_needed.value = false;
    }
  })
  .catch(error => {
      //  alert("Error")
      console.error('There was an error!', error);
  });













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
  
  





.add_stripe_button{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: rgb(0, 119, 203);
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 20%;
    margin-bottom: 20px;
    margin-left:30%;
    padding: 20px;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
}

.add_stripe_button:hover{
    background-color: rgb(0, 142, 244);
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 30%);
}







  /* // ----------- dashboard css ---------------- */


    iframe {
  border: 1px solid #f2f9ff;
  border-top:1px solid #fff;
  border-radius:20px;
  width:100%;
    height:80vh;
    margin-bottom:10%;
}


iframe::-webkit-scrollbar {
      width: 3px;
      border-radius: 10px;
  }
  
  iframe::-webkit-scrollbar-thumb {
      background: rgba(0, 149, 255, 0.676);
      border-radius: 10px;
  }
  







  .header_menu {
      display: flex;
      align-items: center;
  }
  
  .is-active {
      color: var(--header_menu_hover) !important;
      border-bottom: 3.5px solid var(--header_menu_hover) !important;
  }
  
  
  
  
  .navigation_menu {
      padding: 20px 30px;
      padding-bottom: 18px;
      text-decoration: none;
      color: var(--inactive-color);
      border-bottom: 2px solid transparent;
      transition: 0;
      cursor: pointer;
  }
  
  .navigation_menu:hover {
      color: var(--header_menu_hover);
      font-weight: bold;
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
  
  
  
  
  
  
</style>











