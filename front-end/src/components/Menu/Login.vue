<template>
  <div>
    <div class="container">  
            <div class="row">               
               <div class="col-lg-4 col-md-4 col-12 "></div>           
                   <div class="col-lg-4 col-md-4 col-12 boxes mt-4">
                     <h4 class="text-center family"><b>WELCOME TO MYTV ERP</b></h4> <hr>
                     <form  @submit.prevent="Login">
                        <div class="form-row">
                            <div class="col-md-12 col-lg-12 col-12">
                            <input type="text" class="form-control" v-model="login.eid" required placeholder="Employee ID">
                            <br>
                            </div>
                            <div class="col-md-12 col-lg-12 col-12">
                            <input type="password" class="form-control" v-model="login.password" required placeholder="Password">
                            <br>
                            </div>                           
                            <div class="col-3"></div>
                            <div class="col-6"><button class="login btn-block">LOGIN</button></div>
                            <div class="col-3"></div>
                            <br><br>
                        </div>
                    </form>
                  </div>  
                  <div class="col-lg-4 col-md-4 col-12 "></div>         
            </div>
       </div>
  </div>
</template>
<script>
import axios from 'axios';
 import config from '@/config'
export default {
    data() {
        return {
        login:{}
      }
    },
     methods: {
        Login() {
             axios.post(`${config.BASE_URL}/api/login`, this.login)
                .then( (response) => {            
                  this.flashMessage.success({
                            message: 'Login Successfully',
                            time: 5000,
                  }); 
                   localStorage.setItem('token', response.data.access_token)                  
                   this.login = ''
                   this.$router.push('/home') 
                 }).catch((error)=> {
                   this.flashMessage.error({              
                            message: error.response.data.message,
                            time: 5000,
                     });
              })
        }
    },

}
</script>

<style scoped>
.bn{
   padding: 0px!important;
}
.family{
font-family:Comic Sans MS;
}
.boxes{
box-shadow: -6px -10px 15px rgba(255,255,255,0.5),
            10px 10px 15px rgba(70,70,70,0.12);
            margin-top: 15% !important;
            padding: 20px;
}
.login{
   
   display: inline-block;
   outline: 0;
   border: 0;
   cursor: pointer;
   font-weight: 600;
   color: rgb(72, 76, 122);
   font-size: 14px;
   height: 38px;
   padding: 8px 24px;
   border-radius: 50px;
   background-image: linear-gradient(180deg,#fff,#f5f5fa);
   box-shadow: 0 4px 11px 0 rgb(37 44 97 / 15%), 0 1px 3px 0 rgb(93 100 148 / 20%);
   transition: all .2s ease-out;
                
}


</style>