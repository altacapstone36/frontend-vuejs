<template>
   <div class="container">
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
      <th scope="col">Golongan Darah</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody class="text-center">
    <tr v-for="item in items" :key="item">
      <td scope="row">{{item.code}}</td>
      <td scope="row">{{item.full_name}}</td>
      <td scope="row">{{item.national_id}}</td>
      <td scope="row">{{item.gender}}</td>
      <td scope="row">{{item.code}}</td>
      <td><button class="btn btn-primary me-md-2" type="button">EDIT</button></td>
      

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
      }
    },
    async mounted(){
         try {
    const response1 = await axios.get('http://localhost:8080/api/patient');
   this.items = response1.data.data;
//    const dataOne = response1.data.data
    console.log(response1.data)
//    console.log(response1.data.data.id)
    // const response2 = await axios.get(`http://localhost:8080/api/outpatient/:id/process`);
    // this.arrayTwo = response2.data.data;
    // console.log(this.arrayTwo)
  } catch(e) {
    console.log(e);
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
