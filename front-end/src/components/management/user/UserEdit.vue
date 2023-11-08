
<template>
  <div>
    <div class="card-header">
      <div class="row">
        <div class="col-md-6"><h5 class="m-0 font-weight-bold">Edit This User</h5></div>
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
              required
              placeholder="User Name"
             v-model="user[0].name"
             
            />
         
          </div>
             <input
              class="form-control"
              type="hidden"
              required
              placeholder="User Name"
             v-model="user[0].id"
             
            />
            <div class="col-sm-4 form-group">
            <label>Employee ID *</label>
            <input
              class="form-control"
             required
              type="text"
              placeholder="Official Employee ID"
            v-model="user[0].nid"
            />
          </div>
          <div class="col-sm-4 form-group">
            <label>Phone No. *</label>
            <input
              class="form-control"
              required
              min="0"
              type="number"
              placeholder="Primary Phone No."
              v-model="user[0].phone"
            />
          </div>
          <div class="col-sm-4 form-group">
            <label>Email </label>
            <input
              class="form-control"         
              type="email"
              placeholder=" Email Address"
            v-model="user[0].email"
            />
          </div>

          <div class="col-sm-4 form-group">
            <label>Address *</label>
            <input
              class="form-control"
              required          
              type="text"
              placeholder="Present Address"
           v-model="user[0].address"
            />
          </div>
          <div class="col-sm-4 form-group">
            <label>Image </label>
            <input class="form-control" name="image"  type="file"    @change="onFileChange" />
          </div>
          <div class="col-sm-4 form-group">
            <label>Status</label>
            <select class="form-control select2bs4" v-model="user.status">
              <option value="0">Enable</option>
              <option value="0">Disable</option>
            </select>
          </div>

 <select v-model="data.selected" class="form-control sl">\
    <option v-for="option in data.options" v-bind:value="option.id">\
      {{ option.value }}\
    </option>\
  </select>\



          <div class="col-sm-4 form-group">
            <label>Password *</label>
            <input
              class="form-control"
              type="text"
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
        user: {},
   
      }
  },
  mounted() {
      const id=this.$route.params.id
      axios.get(`${config.BASE_URL}/api/user-edit/`+id)
      .then(response => {
        this.user = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    },
  methods: {
          onFileChange(e) {
             const selectedFile = e.target.files[0]; 
              this.selectedFile = selectedFile;
    }, 
        
      async addUser() {
           const formData =new FormData();
           formData.append("file", this.selectedFile); 
           formData.append("id",this.user[0].id); 
           formData.append("name",this.user[0].name); 
           formData.append("phone",this.user[0].phone); 
           formData.append("email",this.user[0].email); 
           formData.append("nid",this.user[0].nid); 
           formData.append("address",this.user[0].address); 
           formData.append("status",this.user[0].status); 
           formData.append("password",this.user.password); 
         await axios.put(`${config.BASE_URL}/api/user-update`,formData)      
            .then((response) => {                      
                      this.flashMessage.success({
                          message: response.data.message,
                          time: 5000,
                          flashMessageStyle: {
                            backgroundColor: 'linear-gradient(#e66465, #9198e5)'
                          }
                      });
                  this.appointments=''
                  this.success = true;          
            }).catch((error)=> {
                   this.flashMessage.error({              
                            message: error.response.data.message,
                            time: 5000,
                   });
               })
            }
          }
     }
</script>
<style></style>
