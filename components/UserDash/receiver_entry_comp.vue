<template>


    
    
              <div class="request_grid">
      

        
    
    
    
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
    
    
          <div @click="send_new_submit" class="submit_button">Send Request</div>
    
    
          </div>
    </div>
    
    
    </div>
    
    
        

    
    
    
    
      
        
      
      
      
      
      </template>
      
      
      
      
      
      <script setup>
      import { useFileDialog } from '@vueuse/core'
      const config = useRuntimeConfig()
      
      const route = useRoute().query
      console.log(route.receiver_name)
      console.log(route.settlement_ID)
      const cookie_options = {default:()=> '', watch:true}
    
      const notification_count = useCookie('notification_count', cookie_options)
      const user_ID = useCookie('user_ID', cookie_options)
      const settlement_ID = route.settlement_ID
      const name = useCookie('name', cookie_options)
      const start_loader = ref(false);

      const csrf_cookie = useCookie('csrf_access_token')
    
      // const reciever_entry_done = useCookie('reciever_entry_done', cookie_options)

    
    
      // --------------------------------------------------------------------------
      // --------------------------------------------------------------------------
    
 
    
    
    
      const email = ref('')
      const ideal_value = ref('')
      const acceptable_value = ref('')
      const lowest_value = ref('')
      
      
      
      function update_ideal_val(){
          ideal_value.value  = '$' + ideal_value.value.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
      
      function update_acceptable_val(){
          acceptable_value.value  = '$' + acceptable_value.value.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
      
      function update_lowest_val(){
          lowest_value.value  = '$' + lowest_value.value.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
      
      
      
      function send_new_submit(){
    
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

      
        // reciever_entry_done.value = 'true'
    
      fetch(`${config.flask_url}/api/user_dashboard/receiver_entry_submit/`, {
        method: 'post',
          mode: 'cors',
          credentials: 'include',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-CSRF-TOKEN': csrf_cookie.value
          },
          body: JSON.stringify({settlement_ID: settlement_ID, ideal_value: ideal_value.value, acceptable_value: acceptable_value.value, lowest_value: lowest_value.value})
      })
      .then((response) => response.json())
      .then((data) => {
      
        notification_count.value = data.notification_count
        location.reload();
        // transition_and_route('/user_dashboard/settlement_page/?settlement_ID=' + settlement_ID.value)
     
      
      })
      .catch(error => {
          alert('Error')
      });
      }
      
      
    
    
    
      const main_tansition = ref(null);
    function transition_and_route(route_to) {
        main_tansition.value.animation_and_route(route_to);
    }
    
      
      
      

      
      </script>
      
      
      
      <style scoped>
      
      
      .request_grid{
      width:100%;
      margin-bottom:10%;
      margin-top:-5%
      }
      
      
    
      .lower_block{
          height:600px;
          border-radius: 30px;
          background-color: #a7d3e861;
          border: #a7d3e8 1px solid;
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
    
      .info_text_case_num{
        color:#fff;
        font-size:18px;
        margin-top:10px
      }
    
      .form_move{
          margin-top:-10px
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
    
      .case_info_section_title{
        color:#fff;
          margin-left:4%;
          margin-top:40px;
          font-size:250%;
          margin-bottom:20px;
          text-decoration: underline;
          text-decoration-color:rgb(1, 84, 140);
          text-decoration-thickness: 3px;
          text-underline-offset: 3px;
      }
      
      .underline_it{
        text-decoration: underline;
          text-decoration-color:#deae00b9;
          text-decoration-thickness: 1px;
          text-underline-offset: 3px;
      }
      
      .input_wrap_edit_2{
          width:100%;
          margin:0%;
          margin-top:7px;
      
      }
      
      .label_move_2{
          color:rgba(6, 100, 162, 0.566);
          margin-top:3px;
          margin-left:1px
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
      
      
      
    
    
    
    
    
    
    
    
    
    .designation_box{
        width:75%;
        margin-left:7.5%;
        margin-top:30%;
        opacity:0;
        position:absolute;
        background-color:#fff;
        z-index:5;
        padding:5%;
        border-radius:10px;
        border: 4px solid rgba(25, 120, 237, 0.7);
        display: inline-block;
        transition: all .35s ease-in-out;
        visibility: hidden;
    }
    
    .designation_text{
        color:rgb(6, 100, 162);
        font-size:110% 
    }
    .desig_underline{
        border-bottom: 2px solid #deae008c;
        padding-bottom:10px;
        text-align:center;
        margin-top:-3%;
        width:80%;
        margin-left:10%;
        margin-bottom:5%
    }
    
    .designation_show{
        margin-top:10%;
        opacity:1;
        visibility: visible;
        transition: all .35s ease-in-out;
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
    
    
    
      
      
      </style>