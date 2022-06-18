<template>
    <div class="row">
    <div class="col-4">
        
        
        <div class="register-form">
            <div class="card-title">
                <img class="img3" src="../assets/Group.png"/>
            </div>
        <form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="name" class="form-control" id="name"   placeholder="Name" required>
    

    
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Email Address" required>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password" required>
  </div>
  <div class="d-grid gap-2">
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  
  
</form>
<br><br>
<p class="text1">Already have an account? <router-link  class="router-link" to="/login">Sign In</router-link></p>
        </div>
        
        

    </div>

   
   
    <div class="col-8">
<img class="img2" src="../assets/amico.svg"/>
<br>
<h4>Manage All Data Hospital Easily</h4>
<br>
<p class="text2">This Hospital Management System there are 3 features<br>
that can be used to make it easier for admins to manage<br>
Patient data, manage employee schedules, and view all<br>
report.</p>
    </div>
  </div>

       
</template>

<script>
export default {
    name: "registerPage"
}
</script>

<style>
.col-4{
    display: flex;
    align-items:center;
    justify-content: center;
    height: 97vh;
}

.img2{
    width: 350px;
    height: 300px;
    align-items:center;
    justify-content: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:90px;


}

.col-8{
    background: #64387E;
    height: 97vh;
    width: 100%;
    
    
}


.text2{
    font-size: 14px;
    align-items:center;
    justify-content: center;
    text-align: center;
    color: white;
    
    
    
}

h4{
    text-align: center;
    color: white;
}

.text1{
    font-size: 11px;
    color: #64387E;
    text-align: center;
}

.register-form{
    background-color:#F3F3F3; 
    width:300px;
    height: 395px;
    padding:20px;
    box-shadow: 0px 7px 22px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}

.card-title{
    text-align: center;
}

input[type="name"],
input[type="email"],
input[type="password"]{
    background:#F3F3F3;
    border:1px solid #64387E
}

input[type="name"]:focus,
input[type="email"]:focus,
input[type="password"]:focus{
   outline:none;
   border:none;
   background:#F3F3F3;
   margin:0px;
}

.btn{
    background-color:#64387E !important;
    
}

.img3{
    width: 50px;
    height: 50px;
}

.router-link{
    text-decoration: none;
    color: #64387E;
    font-weight: bolder;
}








</style>
