<template>


    <CWSMainHeader/>
        <CWSGSAPScrollSmoother>
    <div style="background-color: #fff; padding-bottom:10%; border-bottom: 1px solid rgb(167, 211, 232, 0.4);">
      


    
<h4 class="inv_title"><br><br>Privacy Policy</h4>


        


<embed :src="privacy_doc" class="privacy_agreement">












<WALLSTREETScrubTextInvestments />



    
           
   
      <!-- <CWSButtonsStickyButton/>
      <CWSHomeBottomCards/> -->
      <div class="paperOverlay"></div>
    </div>
    <CWSFooterMain/>
    </CWSGSAPScrollSmoother>
    
    
    </template>
    
   
<script setup>
 import privacy_doc from "~/assets/content/wallstreet/privacy.pdf";


</script>

<style scoped>

.inv_title{
    margin-left:5%;
    margin-top: 5%;
}

.privacy_agreement{
    width:80%;
    margin-left:10%;
    height:80vh;
    margin-top:10%;
    margin-bottom:10%;
}

</style>