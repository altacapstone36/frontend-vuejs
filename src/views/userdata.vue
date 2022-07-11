<template>
<div class="card-container">
    <div class="card-head">
<img class="img1" src="../assets/list.svg">
       
            USER DATA
    </div>

    <div class="card-body">
<form>
  <div class="row mb-3">
    <label for="inputName3" class="col-sm-2 col-form-label">Nama User</label>
    <div class="col-sm-10">
      <input type="name" v-model="newsData.full_name" class="form-control" id="inputName3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" v-model="newsData.email" class="form-control" id="inputEmail3">
    </div>
  </div>
 
  <div class="row mb-3">
    <label for="inputGender3" class="col-sm-2 col-form-label">Jenis Kelamin</label>
    <div class="col-sm-10">
      <input type="gender" v-model="newsData.gender" class="form-control" id="inputGender3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputRole3" class="col-sm-2 col-form-label">Role</label>
    <div class="col-sm-10">
     <select class="form-select" aria-label="Default select example">
  <option selected>Pilih Role</option>
  <option value="Doctor">Dokter</option>
  <option value="Nurse">Perawat</option>
  <option value="Apoteker">Apoteker</option>
</select>
      
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputFacility3" class="col-sm-2 col-form-label">Fasilitas</label>
    <div class="col-sm-10">
      <select class="form-select" aria-label="Default select example">
  <option selected>Pilih Fasilitas</option>
  <option value="General">Dokter Umum</option>
  <option value="Pedeatrician">Dokter Anak</option>
  <option value="3">Dokter Gigi</option>
  <option value="General">Perawat Umum</option>
  <option value="Pedeatrician">Perawat Anak</option>
  <option value="3">Perawat Gigi</option>
  <option value="3">-</option>
</select>
    </div>
  </div>
<br><br>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
   <router-link to="/manageuser" class="btn btn-primary me-md-2" type="button">UPDATE</router-link>
  
</div>
</form>
    </div>
</div>
</template>

<script>
export default {
    name: "userData",
    computed: {
   index () { 
       return this.$route.params.id
   },
   newsData() {
        return this.$store.state.auth.user[this.index];
    },
  },
  mounted() {
      console.log(this.newsData)
      console.log(this.index)
    
  },
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