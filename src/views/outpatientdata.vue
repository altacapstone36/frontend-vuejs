<template>
    <div class="container">
        <div class="d-flex mt-2">
          <img src="../assets/Icon/outpatient report.svg" width="40px"/>
            <h3 class="titlehero">OUTPATIENT REPORT</h3>
        </div>
        <div class="d-flex justify-content-end  my-3">
            <b-button class="lightdark-a text-black"  dark @click="sortnew()">SORT BY OLDEST TO NEWEST</b-button>
        </div>
        <div class="d-block">

    <b-table
    :id="my-table"
    
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :per-page="perPage"
      :current-page="currentPage"

      class="text-center lightdark-b"
    >

        <template #cell(show_detail)="row">
        <div class="d-flex" v-if="row.detailsShowing" >
        <b-button size="sm"  @click="row.toggleDetails" class="mr-2  lightdark">
        View Report <b-icon icon="caret-up-fill"></b-icon>
        </b-button>
        </div>
        <div v-if="!row.detailsShowing" class="d-flex">
        <b-button size="sm" variant="success" @click="row.toggleDetails" class="mr-2">
        View Report <b-icon icon="caret-down-fill"></b-icon>
        </b-button>
        </div>
        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        
      </template>

      <template #row-details="row">
      <b-card class="textdetail lightdark-a">      
                    <b-row class="mb-2">
            <b-col cols="2" class="text-sm-right"><b>Keluhan</b></b-col>
            <b-col cols="1" class="d-flex justify-content-end">:</b-col>
            <b-col cols="9"><b-card class="">{{ row.item.jenis_poli }}</b-card></b-col>
          </b-row>

                    <b-row class="mb-2">
            <b-col cols="2" class="text-sm-right"><b>Hasil Diagnosa</b></b-col>
            <b-col cols="1" class="d-flex justify-content-end">:</b-col>
            <b-col cols="9"><b-card class="">{{ row.item.jenis_poli }}</b-card></b-col>
          </b-row>

                    <b-row class="mb-2">
            <b-col cols="2" class="text-sm-right"><b>Resep Obat</b></b-col>
            <b-col cols="1" class="d-flex justify-content-end">:</b-col>
            <b-col cols="9"><b-card class="">{{ row.item.jenis_poli }}</b-card></b-col>
          </b-row>
      </b-card>
      </template>

      
    </b-table>
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
      <!-- <b-button aria-label="nextPage" aria-controls="my-table">&lsaquo;</b-button>
      <b-button aria-label="prevPage" aria-controls="my-table">&rsaquo;</b-button> -->
      
    </div>
</template>

<script>
export default {
    name: "outpatientReport",
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
    //     listPokemon() {
    //   return this.$store.state.pokemon.items;
    // },
    // infoPokemon() {
    //   return this.$store.state.pokemon.info;
    // },
},

    data() {
      return {
        fields: [
                { key: 'nomor_antrian', label: 'Nomor Antrian', thStyle: {background: '#DDDDDD', color: 'black'} }, 
                { key: 'kode_pasien', label: 'Kode Pasien', thStyle: {background: '#DDDDDD', color: 'black'} },
                { key: 'nama_pasien', label: 'Nama Pasien', thStyle: {background: '#DDDDDD', color: 'black'} },
                { key: 'tanggal_daftar', label: 'Tanggal Daftar', thStyle: {background: '#DDDDDD', color: 'black'} },
                { key: 'jenis_poli', label: 'Jenis Poli', thStyle: {background: '#DDDDDD', color: 'black'} }, 
                { key: 'nama_dokter', label: 'Nama Dokter', thStyle: {background: '#DDDDDD', color: 'black'} },
                { key: 'tanggal_kontrol', label: 'Tanggal Kontrol', thStyle: {background: '#DDDDDD', color: 'black'} },
                { key: 'show_detail', label: 'Action', thStyle: {background: '#DDDDDD', color: 'black'} },                
                
                ],
        items: [
        { nomor_antrian: '1', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '14/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '11/12/10' },
        { nomor_antrian: '2', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '12/12/10' },
        { nomor_antrian: '3', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },
        { nomor_antrian: '4', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '14/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '11/12/10' },
        { nomor_antrian: '5', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '12/12/10' },
        { nomor_antrian: '6', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },
        { nomor_antrian: '7', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '14/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '11/12/10' },
        { nomor_antrian: '8', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '12/12/10' },
        { nomor_antrian: '9', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },        
        { nomor_antrian: '10', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '14/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '11/12/10' },
        { nomor_antrian: '11', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '12/12/10' },
        { nomor_antrian: '12', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },
        { nomor_antrian: '13', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '14/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '11/12/10' },
        { nomor_antrian: '14', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '12/12/10' },
        { nomor_antrian: '15', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },
        { nomor_antrian: '16', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '11/12/10' },
        { nomor_antrian: '17', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '14/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '12/12/10' },
        { nomor_antrian: '18', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },
        ],
        tableVariants: [
          'primary',
          'secondary',
          'info',
          'danger',
          'warning',
          'success',
          'light',
          'dark'
        ],
        striped: false,
        hover: true,
        headVariant: 'light',
        tableVariant: 'secondary',
        sortBy: '',
        perPage: 10,
        currentPage: 1,
        
}
    },
    methods: {
        sortnew() {
            if (this.sortBy == ''){
                this.sortBy = 'tanggal_daftar'
              console.log(this.currentPage)
            }
            else {
                this.sortBy = ''
            }
},
    // fetchPokemon() {
    //   this.$store.dispatch("pokemon/fetchList");
    // },

    },

  //     mounted() {
  //   this.fetchPokemon();
  // },
  
}
</script>

<style scoped>


.unguprimary {
    background-color: #50266A;
}
.textdetail {
  text-align: start;
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

.cardpadding {
    padding: 8px;
}
.btnset {
  margin: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 24px;
  padding-right: 24px;
}


/* td {
    text-align:left;
} */
.inputdata {
    border-color: black;
}
.tablerow {
    margin: 10px;
}
.textmargin {
    margin-top: 8px;
    margin-bottom: 16px;
    margin-left: 24px;
    margin-right: 0px;
}
.titlehero {
  margin-top: 10px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px;
}

</style>

