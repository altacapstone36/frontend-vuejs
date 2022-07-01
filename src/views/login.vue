<template>
<<<<<<< Updated upstream
<div>
<div class="d-flex justify-content-end">
            <b-btn @click="myCompare()">test</b-btn>
          <p class="mx-2 mt-2">Sort Tanggal Kontrol From :</p>
          <!-- <b-button @click="mindateA()">test</b-button> -->
          <div class="d-flex justify-content-end">
          <b-form-datepicker  id="example-datepicker" placeholder="mm/dd/yy" v-model="minDate" aria-controls="my-table" right class="mb-2 hdrop"></b-form-datepicker>
          </div>
          <h2 class="mx-3">-</h2>
          <div class="d-flex justify-content-end">
          <b-form-datepicker id="example-datepicker" placeholder="mm/dd/yy" v-model="maxDate" aria-controls="my-table" right class="mb-2 hdrop"></b-form-datepicker>
          <!-- <p>Value: '{{ value }}'</p> -->
        </div>
=======
    <div>
  <div class="row">
    <div class="col-sm-4">
        <div class="global-container">
      <div class="card login-form">
        <div class="card-body">
            <img class="img5" src="../assets/login.png">

            </div>

            <div class="card-text">
                <form @submit.prevent="userLogin">    
                    <div class="input-group flex-nowrap mb-3">
                    <span class="input-group-text" id="addon-wrapping">
                      <img class="imglogin" src="../assets/login2.png">
                  </span>
                  <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
                  {{ error[0] }}
                  </div>
                
                    <input type="email" v-model="form.email" class="form-control" placeholder="Email">
                  </div>
                    
                    <div class="input-group flex-nowrap mb-3">
                    <span class="input-group-text" id="addon-wrapping"><img class="imglogin" src="../assets/password2.png"></span>
                    <input type="password" v-model="form.password" class="form-control" placeholder="Password">
                  </div>
                    
  
                    <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary">ADMIN LOGIN</button>
                    </div>
                  </form>
            </div>
            <br><br>
            <a href="/lupapassword" class="text-center text-decoration-none">FORGOT PASSWORD</a>
            <br><br>
            <p class=" text-center">Don't have an account yet?<a href="/register" class="text2 text-decoration-none"> Sign Up</a></p>
>>>>>>> Stashed changes
        </div>
        
<b-table :items="items" :fields="fields" :sort-compare="myCompare">
  </b-table>
  </div>
</template>

<script>
export default {
    name: "loginPage",
<<<<<<< Updated upstream
<<<<<<< Updated upstream

    data() {
    return {
        name: '',
      fields: [
        { key: 'nama', label: 'Name', sortable: false },
        { key: 'date', label: 'Date', sortable: true }
      ],
      items: [
        { name: 'Jack', date: '29/12/2001' },
        { name: 'Jill', date: '14/04/2012' },
        { name: 'Bob', date: '07/07/2009' }
      ],

      minDate: '',
      maxDate: '',
    }
  },
  methods: {
    myCompare() {
        if (this.minDate == '' || this.maxDate == '') {
            return false
        }else {
            
            console.log(this.minDate)
            console.log(this.maxDate)
        }
  },
}
}
</script>
=======
=======
>>>>>>> Stashed changes
    data(){
      return{
        form: {
          email: '',
          password: '',
        },
        errors: null
      }
    },
    methods: {
      userLogin() {
        this.$store.dispatch('login', this.form)
        .then(response => {
          console.log(response)
          this.$router.push({name: 'homePage'})
        }).catch(error => {
          this.errors = error.response.data.errors
        })
      }
    }

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
    height:350px;
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
>>>>>>> Stashed changes
