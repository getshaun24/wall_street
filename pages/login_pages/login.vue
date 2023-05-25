<template>


  <CWSMainHeader/>
      <CWSGSAPScrollSmoother>
        <div class="scroll_page" style="background-color: #fff; padding-bottom:20%; border-bottom: 1px solid rgb(167, 211, 232, 0.4);">
     
        

<h2 class="login_title">Login</h2>


<div class="login_container">
        <div class="input_wrap wrap_move">
              <input v-model="email" type="email" name="email" class="input_white" placeholder=' ' required/>
              <label class="label_white label_move" >Email</label>
            </div>          
            <div class="input_wrap wrap_move">
              <input v-model="login_pass_1_value" type="password" class="input_white" placeholder=' ' required/>
              <label class="label_white label_move" >Password</label>
            </div>

          </div>

            
          <div @click="submit_form" class="modal_submit_button">Submit</div>

  </div>
  <CWSFooterMain/>
  <div class="paperOverlay"></div>
  </CWSGSAPScrollSmoother>
  
  
  </template>
  
  <script setup>
  
  import { useResizeObserver } from '@vueuse/core'
import { useWindowSize } from '@vueuse/core'
  


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


    function submit_form(){
      alert('Email or Password Incorrect. If you forgot it, please send us an email to update it.')
    }


  </script>
  
  
  
  
  
  
  
  
  <style scoped>
  
  
  .login_title{
    margin-left:10%;
    margin-top:20%;
    font-weight: 400;
  }

  .login_container{
    width:50%;
    margin-left:25%;
    margin-top:10%;
    margin-bottom:20%
  }
  
  .label_move{
    margin-left:4%;
  }

  .wrap_move{
    margin-bottom:80px
  }


  .modal_submit_button{
        width:40%;
        height:40px;
        background-color:green;
        margin-left: 30%;
        margin-top:-10%;
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
    
    
  
  
  
  </style>
  
  
  
  
  