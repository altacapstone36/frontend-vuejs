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
    <!-- <div class="bTable"> -->
    <b-table
      id="my-table"
      :items="items"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      sort-desc

      class="text-center w100 lightdark-b"
    >
    <template #cell(show_detail)>
      <button @click="redirect(id)" class="btn btn-primary me-md-2" type="button">EDIT</button>
    </template>
    </b-table>
    <!-- </div> -->
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
import axios from 'axios';
export default {
    name: "patientData",
    computed: {
        totalRows() {
        return this.items.length
        }, 
        totalPage() {
            const x = this.perPage
            const y = this.totalRows
            const z = y / x  
            return Math.floor(z) + 1       
            },
    },
    data(){
      return{
        fields: [
                { key: 'code', label: 'Kode Pasien', thStyle: {background: '#DDDDDD', color: 'black'} },
                { key: 'full_name', label: 'Nama Pasien', thStyle: {background: '#DDDDDD', color: 'black'} },
                { key: 'national_id', label: 'NIK', thStyle: {background: '#DDDDDD', color: 'black'} }, 
                { key: 'gender', label: 'Nama Dokter', thStyle: {background: '#DDDDDD', color: 'black'} },
                { key: 'show_detail', label: 'Action', thStyle: {background: '#DDDDDD', color: 'black'} },                
                ],
        items: [],
        message: '',
        showTop: false,
        perPage: 10,
        currentPage: 1,
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

.w100 {
  width: 100%;
}

.bTable {
  
    border:solid black 5px;
    border-radius:10px;
    }
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

