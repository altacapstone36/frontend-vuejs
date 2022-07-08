<template>
    <div>
  <div class="row">
    <div class="col-sm-4">
        <div class="global-container">
      <div class="card login-form">
        

            <div class="card-text">
                <form @submit.prevent="submitEmail()">
                        <div class=" mb-7">
                        <div class="d-flex justify-content-center m-2">
                        <img src="../assets/Icon/reset password.svg" width="50px" />
                        </div>
                      <label for="exampleInputEmail1" class="form-label my-2">Enter Registered Email</label>
                        <input type="email" v-model="email" class="form-control my-2" placeholder="Email Address">
                        <div class="d-grid gap-2 m-2">
                          <button type="submit" class="btn btn-primary">SEND RECOVERY EMAIL</button></div>
                          </div>
                </form>
            </div>
            <br><br>
            <p class=" text-center">Back to<a href="/login" class="text2 text-decoration-none"> Login</a></p>
        </div>
       
    </div>
    </div>
    <div class="col-sm-8">
      <img class="img2" src="../assets/amico.svg"><br>
      <center><h4>Manage All Hospital Data Easily</h4></center><br>
      <center><h6 class="paragraph">
        This Hospital Management System there are 3 features<br>
that can be used to make it easier for admins to manage<br>
Patient data, manage employee schedules, and view all<br>
report.
      </h6></center>
    </div>
    
  </div>
</div>
    


</template>

<script>
import axios from 'axios'
export default {
    name: "findEmail",
    data(){
      return{
        email: '',
      }
    },
    methods: {
    async submitEmail(){
      const response = await axios.post('find_email',{
        email: this.email
      })
      console.log(response)
     
    }
      },
    
}
</script>

<style scoped>
.global-container{
    height:100%;
    display:flex;
    align-items:center;
    justify-content: center;
}

.login-form{
    height:330px;
    width: 330px;
    padding:20px;
    background: #F3F3F3;
/* Nonjol/22 */

box-shadow: 0px 7px 22px rgba(0, 0, 0, 0.25);
border-radius: 5px;
top: 50pxpx;
}

.col-sm-8{
    background:#794B93 ;
    height: 100vh;
}

.img2{
    height: 350px;
    width:350px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
}

.img3{
  height: 60px;
  width: 60px;
  margin-top:0px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  
}

input[type="name"],
input[type="email"],
input[type="password"]{
    background: #F3F3F3;
    
}

.btn{
  background:#794B93;
}

a{
  font-size: 13px;
  color: #794B93;
  font-weight: bolder;
}

p{
  font-size: 13px;
  color: #794B93;
}

h4, h6{
  color: white;
  font-weight:600;
  
}

.form-label{
  color:gray;
}

.imglogin{
    width: 16px;
    height: 18px;
}

.img5{
    width:50px;
    height: 60px;
    display: block;
  margin-left: auto;
  margin-right: auto;
}


</style>