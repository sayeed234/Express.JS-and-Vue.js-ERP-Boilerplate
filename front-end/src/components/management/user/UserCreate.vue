
<template>
  <div>
    <div class="card-header">
      <div class="row">
        <div class="col-md-6"><h5 class="m-0 font-weight-bold">Make A New User</h5></div>
        <div class="col-md-6">
          <router-link to="/user">
            <button class="btn btn-outline-secondary btn-sm fa-pull-right">
              User List
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <form enctype="multipart/form-data"   @submit.prevent="addUser">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-4 form-group">
            <label>Name *</label>
            <input
              class="form-control"
              type="text"
              value=""
              required
              placeholder="User Name"
             v-model="user.name"
            />
          </div>
            <div class="col-sm-4 form-group">
            <label>Employee ID *</label>
            <input
              class="form-control"
             required
              type="text"
              value=""
              placeholder="Official Employee ID"
            v-model="user.nid"
            />
          </div>
          <div class="col-sm-4 form-group">
            <label>Phone No. *</label>
            <input
              class="form-control"
              required
              min="0"
              type="number"
              value=""
              placeholder="Primary Phone No."
              v-model="user.phone"
            />
          </div>
          <div class="col-sm-4 form-group">
            <label>Email </label>
            <input
              class="form-control"         
              type="email"
              value=""
              placeholder=" Email Address"
            v-model="user.email"
            />
          </div>

          <div class="col-sm-4 form-group">
            <label>Address *</label>
            <input
              class="form-control"
              required          
              type="text"
              value=""
              placeholder="Present Address"
           v-model="user.address"
            />
          </div>
          <div class="col-sm-4 form-group">
            <label>Image </label>
            <input class="form-control" name="image"  type="file"    @change="onFileChange" />
          </div>
          <div class="col-sm-4 form-group">
            <label>Status</label>
            <select class="form-control select2bs4" v-model="user.status">
              <option value="1">Enable</option>
              <option value="0">Disable</option>
            </select>
          </div>

          <div class="col-sm-4 form-group">
            <label>Password *</label>
            <input
              class="form-control"
              type="text"
             required
              placeholder="Enter Password"
             v-model="user.password"
            />
          </div>
        </div>
      </div>
      <hr />
      <div class="card-body text-center">
        <button class="btn btn-outline-success">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
 import axios from 'axios';
 import config from '@/config'
export default {
 data() {
      return {
        user:{},
      }
    },
  methods: {
          onFileChange(e) {
             const selectedFile = e.target.files[0]; 
              this.selectedFile = selectedFile;
    }, 
               
      async addUser() {
           const formData =new FormData();
           formData.append("file", this.selectedFile); 
           formData.append("name",this.user.name); 
           formData.append("phone",this.user.phone); 
           formData.append("email",this.user.email); 
           formData.append("nid",this.user.nid); 
           formData.append("address",this.user.address); 
           formData.append("status",this.user.status); 
           formData.append("password",this.user.password); 
         await axios.post(`${config.BASE_URL}/api/user`,formData)      
            .then(res => {            
                    console.log(res.data)             
                      this.flashMessage.success({
                          title: 'User Created Successfully',
                          message: 'We Are Happy to you',
                          time: 5000,
                          flashMessageStyle: {
                            backgroundColor: 'linear-gradient(#e66465, #9198e5)'
                          }
                      });
                  this.appointments=''
                  this.success = true;          
            })
            }
          }
     }
</script>
<style></style>
