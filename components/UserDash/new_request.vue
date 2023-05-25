<template>


<Teleport to="body" class="loader_container" v-if="start_loader">
<div class="loader_container" v-if="start_loader">
        <div class="loader"></div>
        </div>
</Teleport>


<Teleport to="body">
    <MainTransition ref="main_tansition"/>
<div class="modal_container" :class="{modal_hide_anim: modal_exit_anim, modal_hide_disp: modal_exit_display}">
        <div class="modal_popup" :class="{modal_bix_hide_anim: modal_exit_anim}" ref="modal">
            <div @click="modal_leave" class="modal_exit">
            <div class="horizontal_line"></div>
            <div class="vertical_line"></div>
        </div>

        <div v-if="request_success" class="modal_info">
            <h6 class="modal_text">Settlement Request Successful</h6>
        </div>

        <div v-if="payment_confirm_modal" class="modal_info">
            <h6 class="modal_text">Confirm charge of $19.99 and send settlement request</h6>
            <div @click="initiate_payment" class="modal_submit_button">Send Request</div>
        </div>

        </div>
    </div>

    <div class="plaid_blur" v-if="plaid_blur"></div>

</Teleport>



    
<div class="request_grid">

    <div class="upper_block">

        <h6 class="email_title">Enter Settlement Case Info</h6>

        <div class="form_grid">
        <div class="input_wrap input_wrap_edit">
            <input v-model="receiver_email" type="text" class="input_white input_edit" placeholder=' ' required/>
            <label class="label_white label_move" >Opposing Council Email</label>
          </div>

          <div class="input_wrap input_wrap_edit">
            <input v-model="receiver_first_name" type="text" class="input_white input_edit" placeholder=' ' required/>
            <label class="label_white label_move" >Opposing Council First Name</label>
          </div>

          <div class="input_wrap input_wrap_edit">
            <input v-model="receiver_last_name" type="text" class="input_white input_edit" placeholder=' ' required/>
            <label class="label_white label_move" >Opposing Council Last Name</label>
          </div>

          <div class="input_wrap input_wrap_edit">
            <input v-model="case_number" type="text" class="input_white input_edit" placeholder=' ' required/>
            <label class="label_white label_move">Case Number</label>
          </div>

          <div class="input_wrap input_wrap_edit">
            <input v-model="filing_state" type="text" class="input_white input_edit" placeholder=' ' required/>
            <label class="label_white label_move" >Filing State</label>
          </div>

          <div class="input_wrap input_wrap_edit">
            <input v-model="brief_description" type="text" class="input_white input_edit" placeholder=' ' required/>
            <label class="label_white label_move" >Brief Description</label>
          </div>

        <div class="input_wrap input_wrap_edit_button">
            <button class="button_move" type="button" @click="open_file_box_1.open">Choose file</button>
            <label class="label_white label_move_button">Document Upload <span style="font-size:9px">(Optional)</span></label>
          </div>
          <div class="file_info">
            <p style="color:#fff; font-size:13px; margin-top:5%; margin-bottom:-5%; width:85%; overflow-wrap: break-word;" @click="remove_file">{{ select_file_1 }}</p>
          </div>




        </div>
        
        <div class="input_wrap input_wrap_edit_additional_info">
            <textarea v-model="additional_info" type="textarea" class="input_white input_edit_additional_info" cols="50" placeholder=' ' required></textarea>
            <label class="label_white label_move_additional_info">Add Additional Relevant Info<span style="font-size:9px"> (Optional)</span></label>
          </div>

    </div>


    <div class="lower_block">

        <div class="form_move">

            <div class="form_box">
        <div>
        <p class="form_text">Ideal Amount</p>
        <p class="form_subtext">This is the amount you would like to receive</p>
        </div>
        <div class="input_wrap input_wrap_edit_2">
            <input @keyup="update_ideal_val" v-model="ideal_value" type="text" class="input_white input_edit_2" placeholder=' ' required/>
            <label class="label_white label_move_2" >Ideal Amount</label>
          </div>
        </div>


          <div class="form_box">
            <div>
        <p class="form_text">Acceptable Amount</p>
        <p class="form_subtext">This is the meadian value of what you settle for</p>
        </div>
          <div class="input_wrap input_wrap_edit_2">
            <input @keyup="update_acceptable_val" v-model="acceptable_value" type="text" class="input_white input_edit_2" placeholder=' ' required/>
            <label class="label_white label_move_2" >Acceptable Amount</label>
          </div>
        </div>


          <div class="form_box">
            <div>
        <p class="form_text">Lowest Amount</p>
        <p class="form_subtext">This is the absolute lowest terms you would accept</p>
        </div>
          <div class="input_wrap input_wrap_edit_2">
            <input @keyup="update_lowest_val" v-model="lowest_value" type="text" class="input_white input_edit_2" placeholder=' ' required/>
            <label class="label_white label_move_2" >Lowest Amount</label>
          </div>
        </div>


        <div @click="payment_confirmation" class="submit_button">Send Request</div>


        </div>
</div>


</div>





</template>





<script setup>
import { useFileDialog } from '@vueuse/core'
const config = useRuntimeConfig()

const notification_count = useCookie('notification_count')
const csrf_cookie = useCookie('csrf_access_token')

const cookie_options = {default:()=> '', watch:true, maxAge:1800}
const receiver_email = useCookie('receiver_email', cookie_options)
const receiver_first_name = useCookie('receiver_first_name', cookie_options)    
const receiver_last_name = useCookie('receiver_last_name', cookie_options)
const case_number = useCookie('case_number', cookie_options)
const filing_state = useCookie('filing_state', cookie_options)
const brief_description = useCookie('brief_description', cookie_options)
const additional_info = useCookie('additional_info', cookie_options)
const ideal_value = useCookie('ideal_value', cookie_options)
const acceptable_value = useCookie('acceptable_value', cookie_options)
const lowest_value = useCookie('lowest_value', cookie_options)

const plaid_blur = ref(false)
const payment_confirm_modal = ref(true)
const request_success = ref(false)
const start_loader = ref(false);

function update_ideal_val(){
    ideal_value.value  = '$' + ideal_value.value.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function update_acceptable_val(){
    acceptable_value.value  = '$' + acceptable_value.value.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function update_lowest_val(){
    lowest_value.value  = '$' + lowest_value.value.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}







function payment_confirmation(){
    payment_confirm_modal.value = true
    request_success.value = false
    
    const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!receiver_email.value.match(email_regex)) {
        alert("Please enter a valid email")
        return
    }

    // if (parseInt(acceptable_value.value.replace(/\D/g, "")) < parseInt(lowest_value.value.replace(/\D/g, ""))) {
    //     alert("Acceptable Amount cannot be less than or equal to the Lowest Amount");
    //     return
    // }
    // if (parseInt(lowest_value.value.replace(/\D/g, "")) >= parseInt(ideal_value.value.replace(/\D/g, ""))) {
    //     alert("Lowest Amount cannot be greater than Ideal Amount" );
    //     return
    // }
    // if (parseInt(acceptable_value.value.replace(/\D/g, "")) >= parseInt(ideal_value.value.replace(/\D/g, ""))) {
    // alert("Ideal Amount cannot be less than or equal to the Acceptable Amount");
    // return
    // }
    // if (parseInt(ideal_value.value.replace(/\D/g, "")) <= parseInt(lowest_value.value.replace(/\D/g, ""))) {
    //     alert("Ideal Amount cannot be less than or equal to the Lowest Amount");
    //     return
    // }

    open_modal()
}


function initiate_payment(){

    start_loader.value = true;
    fetch(`${config.flask_url}/api/user_dashboard/stripe_initiate_payment/`, {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrf_cookie.value
      },
      body: JSON.stringify({})
  })
  .then((response) => response.json())
  .then((data) => {

    notification_count.value = data.notification_count
    if (data.status == 'add_method'){
        alert('Please Add a Payment Method')
        transition_and_route('/user_dashboard/payments')
    } else{
    send_new_request()
    }

  })
  .catch(error => {
      //  alert("Error")
      start_loader.value = false;
      console.error('There was an error!', error);
  });


}

function send_new_request(){



    const upload_data = new FormData()
    upload_data.append('file_1', uploaded_file_1.value)
    upload_data.append('receiver_email', receiver_email.value.toLowerCase())
    upload_data.append('receiver_first_name', receiver_first_name.value)
    upload_data.append('receiver_last_name', receiver_last_name.value)
    upload_data.append('case_number', case_number.value)
    upload_data.append('filing_state', filing_state.value)
    upload_data.append('brief_description', brief_description.value)
    upload_data.append('additional_info', additional_info.value)
    upload_data.append('ideal_value', ideal_value.value)
    upload_data.append('acceptable_value', acceptable_value.value)
    upload_data.append('lowest_value', lowest_value.value)


fetch(`${config.flask_url}/api/user_dashboard/new_request/`, {

    method: 'POST',
    credentials: 'include',
    headers: {
        'Accept': 'application/json',
        'X-CSRF-TOKEN': csrf_cookie.value
    },
    body: upload_data
})
.then((response) => response.json())
.then((data) => {



if (data.status == 'recipient_requested'){
    payment_confirm_modal.value = false
    request_success.value = true
    open_modal(),

    // reset all values
    receiver_email.value = null,
    receiver_first_name.value = null,
    receiver_last_name.value = null,
    case_number.value = null,
    filing_state.value = null,
    brief_description.value = null,
    additional_info.value = null,
    ideal_value.value = null,
    acceptable_value.value = null,
    lowest_value.value = null,
    start_loader.value = false;
}


})
.catch(error => {
    start_loader.value = false;
    alert('Error')
});
}



// ------------------------------- Document Upload  ---------------
// ------------------------------- Document Upload  ---------------
// ------------------------------- Document Upload  ---------------




const select_file_1 = ref('')
const drop_success_border_1 = ref("black")
const drop_success_1 = ref(false)
const uploaded_file_1 = ref(null)
const open_file_box_1 = useFileDialog()


watch(open_file_box_1.files, (newfiles) => {
    if (newfiles[0].type == "image/jpeg" || newfiles[0].type == "image/png" ||  newfiles[0].type == "application/pdf") {
        if(newfiles[0].size < 10000000) {
        uploaded_file_1.value = newfiles[0]
        select_file_1.value = newfiles[0].name
        drop_success_border_1.value = "green"
        drop_success_1.value = true
        } else {
        alert("Filesize must be less then 10MB")
        }
    } else {
        alert("Filetype Not Supported")
    }
})


function remove_file(){
    if (confirm("Remove file?")){
    uploaded_file_1.value = null
    select_file_1.value = ''
    drop_success_border_1.value = "black"
    drop_success_1.value = false
    }
}

// ------------------------------- Document Upload  ---------------
// ------------------------------- Document Upload  ---------------
// ------------------------------- Document Upload  ---------------


const main_tansition = ref(null);
function transition_and_route(route_to) {
    main_tansition.value.animation_and_route(route_to);
}





// ------------------------------- Modal  ---------------
// ------------------------------- Modal  ---------------
// ------------------------------- Modal  ---------------


const modal_exit_anim = ref(true)
const modal_exit_display = ref(true)
    
    
    // sleep time expects milliseconds
    function sleep (time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    
function open_modal(){
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



</script>



<style scoped>

.file_info{
    margin-top:0px;
    margin-left:12.5%;
    cursor:pointer
}
.request_grid{
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 20px;
width:100%;
margin-top:10%;
margin-bottom: 15%;
}


.upper_block{
    height:600px;
    border-radius: 30px;
    background-color:rgb(6, 100, 162);
    border: #a7d3e8 1px solid;
}

.lower_block{
    height:600px;
    border-radius: 30px;
    background-color: #a7d3e861;
    border: #a7d3e8 1px solid;
    margin-top:-0px
}

.form_move{
    margin-top:-10px
}

.form_grid{
    display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
width:90%;
margin-left:3%;
}
.email_title{
    color:#fff;
    margin-left:4%;
    margin-top:40px;
    font-size:300%;
    margin-bottom:40px
}


.input_wrap_edit{
    margin-top:40px
}

.input_edit{
    border-bottom: 1px solid #fff;
    color:#fff
}

.label_move{
    margin-top:-1px;
    margin-left:-3PX;
    color:#ffffffaf
}

.label_move_button{
    margin-top:-1px;
    margin-left:-5PX;
    color:#ffffffaf
}



.input_wrap_edit .input_edit:focus~ .label_white,
  .input_wrap_edit .input_edit:valid ~ .label_white{
    top: -1.25vw;
    left: 4vw;  
    font-size: 1vw;
    color: #70c1ff;
  }


.input_wrap_edit_2{
    width:100%;
    margin:0%;
    margin-top:7px;

}

.label_move_2{
    color:rgba(6, 100, 162, 0.566);
    margin-top:3px;
    margin-left:-10px
}

.input_edit_2{
    border-bottom: 1px solid rgb(6, 100, 162);
    color:rgb(6, 100, 162)
}

.form_text{
    color:rgb(5, 77, 124);
    margin:0%;
    font-size:200%
}
.form_subtext{
    font-size:80%;
    margin:0;
    color:#deae00b9;
}
.form_box{
    display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
width:90%;
margin-left:5%;
margin-top:80px
    }



    .submit_button{
    width:50%;
    height:40px;
    background-color:rgb(6, 100, 162) ;
    margin-left: 25%;
    margin-top:75px;
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


.submit_button:hover{
  box-shadow: 0px 10px 15px rgb(25, 120, 237, .5);
  transform: translateY(-3px);
  outline: 3px solid rgba(19, 218, 218, 0.6);
  transition: outline 12s ease 1s;
} 




.button_move{
    margin-left:70%;
    margin-top:2px;
    border: 1px solid #022181;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    background-color: #fff;
    font-size:10px;
    border-radius:20px;
    transition: all 0.3s ease-in-out;
}

.button_move:hover{
 background-color:rgb(6, 100, 162);
 border: 1px solid #fff;
 color:#fff
}

.label_move_button{
    margin-top:-1px;
    margin-left:-13%;
    color:#ffffffaf
}

.input_wrap_edit_button{
    margin-top:40px;
    padding-bottom:5px;
    border-bottom: 1px solid #fff;
    width:85%;
    margin-left:10%
}


.input_wrap_edit_additional_info{
    width:100%;
    margin-left:-2%;
    margin-top:30px
}

.input_edit_additional_info{
    color:#fff;
    height:50px;
    border:1px rgb(255, 255, 255, 0) solid;
    border-bottom: 1px solid #fff;
}

.label_move_additional_info{
    margin-top:20px;
    margin-left:5%;
    color:#ffffffaf
}

.input_edit_additional_info:focus~ .label_move_additional_info,
  .input_edit_additional_info:valid ~ .label_move_additional_info{
    top: -3.25vw;
    left: 4vw;  
    font-size: 1vw;
    color: #70c1ff;
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
        width:60%;
        height:40vh;
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
    margin-top:-8%;
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
    z-index:300;
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
      z-index: 400;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }



</style>