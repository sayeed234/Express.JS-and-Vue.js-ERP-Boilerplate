
<template>
  <div>
    <div class="container-fluid">
  <div class="card-header ">
    <div class="row">
        <div class="col-md-6"><h5 class="m-0 font-weight-bold ">User List</h5></div>  
        <div class="col-md-6">      
             <router-link to="/user-create"  > <button class="btn btn-outline-secondary btn-sm fa-pull-right">Add New User</button> </router-link>
         </div>
    </div> 
    </div> 
    <div class="card-body">
      <div class="table-responsive">  
       <table class="table table-bordered table-hover table-sm text-center" id="myUser" >
          <thead>
            <tr>
              <th>#</th>            
              <th>Name</th>                     
              <th>ID</th>                     
              <th>Phone</th>                     
              <th>Email</th>             
              <th>Created</th>    
              <th>Status</th>             
              <th>Photo</th>             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(users,index) in user" :key="users.id" >
             <td>{{ index + 1 }}</td>
              <td>{{users.name}}</td>
              <td>{{users.nid}}</td>
              <td>{{users.phone}}</td>
              <td>{{users.email}}</td>
              <td> {{ moment(users.created_at).format('DD-MM-YYYY') }} </td>
              <td  v-if="users.status==1"><i class="fas fa-user-check"></i></td>
              <td  v-else=""><i class="fas fa-times-circle"></i></td>
              <td> <img :src="`http://127.0.0.1:3000/uploads/${users.image}`"></td>
              <td>     
                <div class="dropdown">
                      <i class="fas fa-ellipsis-h"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>           
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                     
                          <router-link to="#" class="dropdown-item">View</router-link>
                          <router-link :to="{name:'UserEdit',params:{id:users.id} }" class="dropdown-item">Edit</router-link>                                          
                          <a class="dropdown-item" href="" >Delete</a>
                 
                        </div>
                    </div>
              </td>
            </tr>
       
          </tbody> 
        </table>
      </div>
    </div>    
     </div>     
 </div>
</template>

<script>
import moment from 'moment';
import axios from 'axios';
import config from '@/config'
// import $ from "jquery";
export default {
 data() {
      return {
        user: [],
        errors: [],
        myPath: config.My_url,
        moment: moment,
      }
  },
    mounted() {
      axios.get(`${config.BASE_URL}/api/user`)
      .then(response => {
        this.user = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    }

}
</script>

<style>
.samplec{
  background-color:#e6f5ed;
}
.smc{
  color:green;
}



</style>