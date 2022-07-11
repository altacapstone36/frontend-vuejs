<template>
   <div class="card-container">
    <div class="card-head">
        <img class="img1" src="../assets/list.svg">
       
            USER LIST
            
    </div>
    <div class="search">
    <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search Name" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon2"><img class="img11" src="../assets/search.png"></span>
    </div>
</div>

    <div class="card-body">
        <table class="table">
  <thead>
    <tr>
     
      <th scope="col">Nama User</th>
      <th scope="col">Email</th>
      <th scope="col">Jenis Kelamin</th>
      <th scope="col">Role</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>

      <td></td>
      <td></td>
      <td></td>
      <td><router-link to="/userdata" class="btn btn-primary me-md-2" type="button">EDIT</router-link></td>
      <td></td>

    </tr>
    
    
  </tbody>
</table>
    </div>
    <div class="d-flex my-2 ">
<p class="mx-4">Page {{currentPage}} of {{totalPage}}</p>    
<b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      aria-controls="my-table"
      label-next-page="nextPage"
      label-prev-page="prevPage"
    >
    </b-pagination>        
    </div>

    </div> 
    
</template>

<script>
export default {
    name: "manageUser"
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

.input-group{
    width: 300px;
}

.search{
    margin-left:41rem ;
}

.img11{
    height:15px;
    width:15px; 
}
</style>