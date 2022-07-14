<template>
   <div class="container">
     <b-alert
      v-model="showTop"
      class="position-fixed fixed-top m-0 rounded-0"
      style="z-index: 2000;"
      variant="secondary"
    >
      {{message}}
    </b-alert>
    <div class="card-head">
        <img class="img1" src="../assets/Icon/add patient data.svg">
       
            PATIENT DATA 
            
    </div>
    <!-- <div class="card-body"> -->
        <table class="table lightdark-b">
  <thead class="lightdark-a text-center">
    <tr>
      <th scope="col">Kode Pasien</th>
      <th scope="col">Nama Pasien</th>
      <th scope="col">NIK</th>
      <th scope="col">Jenis Kelamin</th>
      <!-- <th scope="col">Golongan Darah</th> -->
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody class="text-center">
    <tr v-for="(item, id) in items" :key="id">
      <td scope="row">{{item.code}}</td>
      <td scope="row">{{item.full_name}}</td>
      <td scope="row">{{item.national_id}}</td>
      <td scope="row">{{item.gender}}</td>
      <!-- <td scope="row">{{item.blood_type}}</td> -->
      <td><button @click="redirect(id)" class="btn btn-primary me-md-2" type="button">EDIT</button></td>
      

    </tr>
    
    
  </tbody>
</table>

    <!-- </div> -->
</div> 
</template>

<script>
import axios from 'axios';
export default {
    name: "patientData",
    data(){
      return{
        items: [],
        message: '',
        showTop: false,
      }
    },
    methods: {
      redirect(id) {
              const index = id+1
              this.$router.push('editpatient/' + index);
              console.log(id)

              }
    },
    async mounted(){
         try {
    const response1 = await axios.get('patient');
   this.items = response1.data.data;
    console.log(response1.data)
  } catch(e) {
    console.log(e);
  }
  const message = this.$localStorage.get('messagePatient')
    if(message){
                this.message = message
               this.showTop = true
              setTimeout(() => {
            this.showTop = false;
                  }, 2000);
    }
  }
}
</script>

<style scoped>
.lightdark-a {
  background-color: #DDDDDD;
;

;
}
.lightdark-b {
background-color: #F3F3F3;

;
}
.img1{
    height:50px;
    width:50px;

}
.card-head{
     margin-left: 60px;
    font-size: 20px;
    margin-top: 1.5rem;
}

.card-body{
    width: auto;
    height:auto;
    margin: 2rem auto;
    background:#F3F3F3;;
    padding-bottom: 3px;
}
.btn{
    
    height: 33px;
    width: 55px;
    background: #794B93;
}

</style>

