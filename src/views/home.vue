<template>
<div class="">
    <div class="hero ungusecondary">
        <div class="imageprofile">
        <b-img rounded="circle" src="https://picsum.photos/200/200/?image=54" alt="Image 1"></b-img>
        </div>
        <div class="nameprofile">
        <h3>{{nama}}</h3>
        <p>{{roles}}</p>
        </div>
        <div class="icon">
            <img src = "../assets/Illu/illus2.svg" width="180" alt="My Happy SVG" class="bgbanner"/>

            <svg height="250" width="600">
              
  <ellipse cx="350" cy="110" rx="300" ry="230"
  class="elips" />
</svg>
        </div>
    </div>
    <div id="page-content-wrapper">
                <!-- Page content-->
                <div class="d-flex justify-content-center">
        <b-card bg-variant="light" class="card text-center mx-2 my-2 text-purple">
        <a href="/patientdata" class="btn btn-light stretched-link">
        <img src="../assets/Icon/patient.svg" width="100px" class="svgmx" />
        </a>
        <b-card-text>Manage Patient Data</b-card-text>
        
      </b-card>
      <b-card bg-variant="light" class="card text-center mx-2 my-2 text-purple">
        <a href="/outpatientreport" class="stretched-link">
        <img src="../assets/Icon/outpatient.svg" width="100px" class="svgmx"/>
        </a>
        <b-card-text>Manage Outpatient Report</b-card-text>
      </b-card>
      
      <b-card bg-variant="light" class="card text-center mx-2 my-2 text-purple">
        <a href="/user" class="stretched-link">
        <img src="../assets/Icon/user.svg" width="100px" class="svgmx"/>
        </a>
      <b-card-text>Manage User</b-card-text>
      </b-card>
      
                </div>
        <div class="d-flex justify-content-center">
        <b-card bg-variant="light" class=" card text-center mx-2 my-2 text-purple">
        <a href="/schedulelist" class="btn btn-light stretched-link">
        <img src="../assets/Icon/schedule.svg" width="100px" class="svgmx"/>
        </a>
        <b-card-text>Display Employee Schedule</b-card-text>
      </b-card>
      <b-card bg-variant="light" class="card text-center mx-2 my-2 text-purple">
        <a href="/changepassword" class="btn btn-light stretched-link">
        <img src="../assets/Icon/change password.svg" width="100px" class="svgmx"/>
        </a>
        <b-card-text>Change Password</b-card-text>
      </b-card>
      <b-card bg-variant="light" class="card text-center mx-2 my-2 text-purple">
        <a @click="logout()" class="btn btn-light stretched-link">
        <img src="../assets/Icon/logout.svg" width="100px" class="svgmx"/>
        </a>
        <b-card-text>Logout</b-card-text>
      </b-card>
                </div>
            </div>
</div>
</template>

<script>

export default {
    name: "homePage",
    data(){
      return{
        nama: null,
        roles: null
      }
    },
    methods: {
            logout() {
          this.$store.dispatch("logout").then(() => {
          this.$router.push("/");
        });
              },

    },  mounted(){
    const tokenlocal = this.$localStorage.get('nama')
    const tokenroles = this.$localStorage.get('roles')
  if (tokenlocal){
    console.log(tokenlocal)
    this.roles = tokenroles
    this.nama = tokenlocal
  }
  }
  
}
</script>


<style scoped>
.unguprimary {
    background-color: #50266A;
}
.ungusecondary {
    background-color: #794B93;
}

.hero {
    display: flex;
    height: 250;
}
.imageprofile {
    margin-left: 105px;
    margin-top: 20px;
}
.nameprofile {
    margin-left: 60px;
    color: white;
    margin-top: 70px;
}
.icon {
  display: flex;
  align-content: center;
margin-left: 180px;
align-self: flex-end;
}
.elips {
    fill:#D09DEB;
    stroke:purple;
    stroke-width:2;
}
.bgbanner {
  margin-left: 180px;
  margin-top: 30px;
  position: absolute;
  align-content: center;
  
}
.card {
  width: 300px;
}

</style>