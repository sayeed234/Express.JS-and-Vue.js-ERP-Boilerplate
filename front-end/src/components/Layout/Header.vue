<template>
<div>
        <nav class="navbar f  navbar-expand-lg navbar-light bg-light navsa fixed-top">
            <div class="container">      
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse float-pull" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item active hl">
                    <!-- <router-link to="{{name: 'Index'}}"  class="nav-link">Home <span class="sr-only">(current)</span></router-link> -->
                    <router-link class="nav-link" :to="{ path: '/home' }"> <i class="fa fa-home" aria-hidden="true"></i> Home</router-link>
                </li>
                <li class="nav-item dropdown active">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     <i class="fa fa-plus-square" aria-hidden="true"></i> Management
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <router-link to="/user"  class="dropdown-item"> <i class="fa fa-user" aria-hidden="true"></i> User </router-link>
                    <router-link to="/home_report"  class="dropdown-item"> <i class="fa fa-h-square" aria-hidden="true"></i> Home Report Delivery</router-link>
                    <router-link to="/online_report"  class="dropdown-item"> <i class="fa fa-stethoscope" aria-hidden="true"></i> Online Report</router-link>
                   
                    </div>
                </li>
                  <li class="nav-item active">
                    <router-link to="/contact"  class="nav-link"> <i class="fa fa-address-book" aria-hidden="true"></i> Contact Us</router-link>
                </li>
                </ul>
             </div>
             </div>                         
            </nav> 
            <br>
            </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.kj{
  color:white
}
.hi{
    color:#bb2124;
    height:30px;
}
.g{
    height:60px;
    width:70px;
}
.jkh{
    text-align:left;
    color: ghostwhite;
}
.footer{
color:white;
background-color: #4BB543

}

.jjh a{
    color:ghostwhite;
}
.jjh a:hover{
    text-decoration: none;
    color:#030504;
}
.l{
       color:#ffffff;
       font-weight:bold;
}

</style>