<template>
  <div >
    <div class="container">  
            <div class="row "> 

                <div class="col-lg-3 col-md-3 col-12 boxes mt-4 ml-2 text-center">
                      <router-link class="nav-link color" :to="{ path: '/' }">
                          <i class="fas fa-id-card fa-5x"></i>
                          <h3 class="family mt-2">CONTACT</h3>
                      </router-link>
                 </div> 

                <div class="col-lg-3 col-md-3 col-12 boxes mt-4 text-center">
                      <router-link class="nav-link color" :to="{ path: '/' }">
                         <i class="fa fa-users fa-5x"></i>
                          <h3 class="family mt-2">HRM</h3>
                       </router-link>
                 </div> 

                <div class="col-lg-3 col-md-3 col-12 boxes mt-4 text-center">
                     <router-link class="nav-link color" :to="{ path: '/' }">
                         <i class="fas fa-ad fa-5x"></i>
                          <h3 class="family mt-2">MARKETING</h3>
                      </router-link>
                 </div> 

                <div class="col-lg-3 col-md-3 col-12 boxes mt-4 text-center">
                      <router-link class="nav-link color" :to="{ path: '/' }">
                          <i class="fa fa-tv fa-5x"></i>
                          <h3 class="family mt-2">PROGRAM</h3>
                      </router-link>
                 </div> 

                <div class="col-lg-3 col-md-3 col-12 boxes mt-4 text-center">
                     <router-link class="nav-link color" :to="{ path: '/' }">
                       <i class="fas fa-newspaper fa-5x"></i>
                       <h3 class="family mt-2">NEWS</h3>
                    </router-link>
                 </div>

                <div class="col-lg-3 col-md-3 col-12 boxes mt-4 text-center">
                      <router-link class="nav-link color" :to="{ path: '/' }">
                        <i class="fas fa-calculator fa-5x"></i>
                         <h3 class="family mt-2">ACCOUNTING</h3>
                      </router-link>
                 </div> 

                <div class="col-lg-3 col-md-3 col-12 boxes mt-4 text-center">
                  <router-link class="nav-link color" :to="{ path: '/' }">
                    <i class="fas fa-camera fa-5x"></i>
                    <h4 class="family mt-2">CAMERA & STUDIO</h4>
                  </router-link>
                 </div> 

                <div class="col-lg-3 col-md-3 col-12 boxes mt-4 text-center">
                  <router-link class="nav-link color" :to="{ path: '/' }">
                     <i class="fas fa-broadcast-tower fa-5x"></i>
                     <h3 class="family mt-2">BROADCAST</h3>
                   </router-link>
                 </div>

                 <div class="col-lg-3 col-md-3 col-12 boxes mt-4 text-center">
                     <router-link class="nav-link color" :to="{ path: '/' }">
                       <i class="fa fa-database fa-5x"></i>
                       <h3 class="family mt-2">INVENTORY</h3>
                    </router-link>
                 </div> 
                 
                   <div class="col-lg-3 col-md-3 col-12 boxes mt-4 text-center">
                      <router-link class="nav-link color" :to="{ path: '/' }">
                         <i class="fas fa-credit-card fa-5x"></i>
                         <h3 class="family mt-2">PURCHASE</h3>
                     </router-link>
                  </div> 
                 
                <div class="col-lg-3 col-md-3 col-12 boxes mt-4 text-center">
                  <router-link class="nav-link color" :to="{ path: '/' }">
                     <i class="fas fa-file-invoice fa-5x"></i>
                     <h3 class="family mt-2">REPORT </h3>
                   </router-link>
                 </div> 
                 
            </div>
            <br> <br> <br> <br>
       </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      
    }
  },
  // computed: {
  //   myAppName(){
  //      return this.$store.getters.getAppName;
  //   }
  // }

}
</script>

<style scoped>
.boxes{
box-shadow: -6px -10px 15px rgba(255,255,255,0.5),
            10px 10px 15px rgba(70,70,70,0.12);
            margin-top: 5% !important;
            margin-left: 6% !important;
            padding: 10px;
}
.boxes:hover {
   transform: scale(1.2, 1.2);
}
.boxes:hover::after {
  opacity: 1;
}
.family{
font-family:Sanskrit Text;
}
.color{
  color: rgb(16, 136, 157);
}

</style>
