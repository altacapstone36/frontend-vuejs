<template>
<div class="card-container">
    <div class="card-head">
<img class="img1" src="../assets/Icon/add patient data.svg">
       
            NEW PATIENT DATA FORM
    </div>

    <div class="card-body">
<form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Nama Pasien</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputNik3" class="col-sm-2 col-form-label">NIK</label>
    <div class="col-sm-10">
      <input type="nik" class="form-control" id="inputNik3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputAlamat3" class="col-sm-2 col-form-label">Alamat</label>
    <div class="col-sm-10">
      <input type="alamat" class="form-control" id="inputAlamat3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputGender3" class="col-sm-2 col-form-label">Jenis Kelamin</label>
    <div class="col-sm-10">
      <input type="gender" class="form-control" id="inputGender3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputDate3" class="col-sm-2 col-form-label">Tanggal Lahir</label>
    <div class="col-sm-10">
      <input type="date" class="form-control" id="inputDate3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputBlood3" class="col-sm-2 col-form-label">Golongan Darah</label>
    <div class="col-sm-10">
      <input type="blood" class="form-control" id="inputBlood3">
    </div>
  </div>
<br><br>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
   <button class="btn btn-primary me-md-2" type="button">UPDATE</button>
  
</div>
</form>
    </div>
</div>
</template>

<script>
export default {
    name: "editPatient"
}
</script>

<style scoped>
.card-body{
    width: 900px;
    height:450px;
    margin: 2rem auto;
    background:#F3F3F3;;
    padding-bottom: 3px;
}

.card-head{
     margin-left: 60px;
    font-size: 20px;
    margin-top: 1.5rem;
}

.btn{
    padding-bottom:1px;
    width: 200px;
    background: #794B93;
}

.img1{
    height:50px;
    width:50px;

}
</style>