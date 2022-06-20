<template>
    <div class="container">
        <div class="d-flex">

            <h3>OUTPATIENT DATA FORM</h3>
        </div>
        <div class="d-flex justify-content-end">
            <b-button variant="light" @click="sortnew()">SORT BY OLDEST TO NEWEST</b-button>
        </div>
        <div class="d-block cardinput">

    <b-table
    :id="my-table"
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :items="items"
      :fields="fields"
      :head-variant="headVariant"
      :table-variant="tableVariant"
      :sort-by.sync="sortBy"
      :per-page="perPage"
      :current-page="currentPage"
    >

        <template #cell(show_details)="row">
        <b-button size="sm" variant="success" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Report
        </b-button>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        
      </template>

      <template #row-details="row">
                    <b-row class="mb-2">
            <b-col cols="3" class="text-sm-right"><b>Resep Obat:</b></b-col>
            <b-col cols="9"><b-card class="">{{ row.item.jenis_poli }}</b-card></b-col>
          </b-row>

                    <b-row class="mb-2">
            <b-col cols="3" class="text-sm-right"><b>Resep Obat:</b></b-col>
            <b-col cols="9"><b-card class="">{{ row.item.jenis_poli }}</b-card></b-col>
          </b-row>

                    <b-row class="mb-2">
            <b-col cols="3" class="text-sm-right"><b>Resep Obat:</b></b-col>
            <b-col cols="9"><b-card class="">{{ row.item.jenis_poli }}</b-card></b-col>
          </b-row>
            <b-button variant="success" class="justify-content-end">Submit</b-button>
      </template>

      
    </b-table>
<b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "outpatientReport",
    computed: {
        totalRows() {
        return this.items.length
        }, 
    },
    data() {
      return {
        fields: ['nomor_antrian', 'kode_pasien', 'nama_pasien', 'tanggal_daftar', 'jenis_poli', 'nama_dokter', 'tanggal_kontrol', 'show_details'],
        items: [
        { nomor_antrian: '1', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '14/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },
        { nomor_antrian: '2', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },
        { nomor_antrian: '3', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },
        { nomor_antrian: '4', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '14/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },
        { nomor_antrian: '5', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },
        { nomor_antrian: '6', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },
        { nomor_antrian: '7', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '14/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },
        { nomor_antrian: '8', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },
        { nomor_antrian: '9', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },        
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
        bordered: true,
        hover: true,
        headVariant: 'light',
        tableVariant: 'light',
        sortBy: '',
        perPage: 5,
        //totalRows: 0,
        currentPage: 1,
}
    },
    methods: {
        sortnew() {
            if (this.sortBy == ''){
                this.sortBy = 'tanggal_daftar'
            }
            else {
                this.sortBy = ''
            }


}
    }
  
}
</script>

<style scoped>
.unguprimary {
    background-color: #50266A;
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

tr {
    
   text-align:left; 
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

</style>

<!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group> -->
