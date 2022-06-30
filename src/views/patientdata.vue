<template>
   <div class="card-container">
    <div class="card-head">
        <img class="img1" src="../assets/Icon/add patient data.svg">
       
            PATIENT DATA 
            
    </div>

    <div class="card-body">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Kode Pasien</th>
      <th scope="col">Nama Pasien</th>
      <th scope="col">NIK</th>
      <th scope="col">Jenis Kelamin</th>
      <th scope="col">Golongan Darah</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><button class="btn btn-primary me-md-2" type="button">EDIT</button></td>
      <td></td>

    </tr>
    
    
  </tbody>
</table>
    </div>
    </div> 
</template>

<script>
export default {
    name: "patientData"
}
</script>

<style scoped>
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
    width: 900px;
    height:450px;
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
