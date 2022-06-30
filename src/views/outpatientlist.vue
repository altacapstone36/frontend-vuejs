<template>
    <div class="container">
        <div class="d-flex mt-2">
          <img src="../assets/Icon/outpatient list.svg" width="40px"/>
            <h3 class="titlehero">OUTPATIENT LIST</h3>
        </div>
        <div class="d-flex justify-content-end">
          <p class="mx-2 mt-2">Sort Tanggal Kontrol From :</p>
          <!-- <b-button @click="mindateA()">test</b-button> -->
          <div class="d-flex justify-content-end">
          <b-form-datepicker  id="example-datepicker" placeholder="mm/dd/yy" v-model="minDate" aria-controls="my-table" right class="mb-2 hdrop"></b-form-datepicker>
          </div>
          <h2 class="mx-3">-</h2>
          <div class="d-flex justify-content-end">
          <b-form-datepicker id="example-datepicker" placeholder="mm/dd/yy" v-model="maxDate" aria-controls="my-table" right class="mb-2 hdrop"></b-form-datepicker>
          <!-- <p>Value: '{{ value }}'</p> -->
        </div>
        </div>
        <div class="d-block cardinput lightdark-b tablelong">
    <b-table
    :id="my-table"    
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :per-page="perPage"
      :current-page="currentPage"
      :sort-compare="mysortCompare"
      

      class="text-center lightdark-b"
    >
    </b-table>
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
    name: "outpatientList",
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

    data() {
      return {
        value: '',
        fields: [
                { key: 'nomor_antrian', label: 'Nomor Antrian', thStyle: {background: '#DDDDDD', color: 'black'} }, 
                { key: 'kode_pasien', label: 'Kode Pasien', thStyle: {background: '#DDDDDD', color: 'black'} },
                { key: 'nama_pasien', label: 'Nama Pasien', thStyle: {background: '#DDDDDD', color: 'black'} },
                { key: 'tanggal_daftar', label: 'Tanggal Daftar', thStyle: {background: '#DDDDDD', color: 'black',} },
                { key: 'jenis_poli', label: 'Jenis Poli', thStyle: {background: '#DDDDDD', color: 'black'} }, 
                { key: 'nama_dokter', label: 'Nama Dokter', thStyle: {background: '#DDDDDD', color: 'black'} },
                { key: 'tanggal_kontrol', label: 'Tanggal Kontrol', thStyle: {background: '#DDDDDD', color: 'black'} },
                // { key: 'show_detail', label: 'Action', thStyle: {background: '#DDDDDD', color: 'black'} },                
                
                ],
        items: [
        { nomor_antrian: '1', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '14/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-20' },
        { nomor_antrian: '2', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-21' },
        { nomor_antrian: '3', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-22' },
        { nomor_antrian: '4', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '14/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-23' },
        { nomor_antrian: '5', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-24' },
        { nomor_antrian: '6', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-25' },
        { nomor_antrian: '7', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '14/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-26' },
        { nomor_antrian: '8', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-27' },
        { nomor_antrian: '9', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-28' },        
        { nomor_antrian: '10', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '14/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-29' },
        { nomor_antrian: '11', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-30' },
        { nomor_antrian: '12', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-21' },
        { nomor_antrian: '13', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '14/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-22' },
        { nomor_antrian: '14', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-23' },
        { nomor_antrian: '15', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-24' },
        { nomor_antrian: '16', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-25' },
        { nomor_antrian: '17', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '14/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-26' },
        { nomor_antrian: '18', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-27' },
        { nomor_antrian: '19', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-28' },
        { nomor_antrian: '20', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-29' },
        { nomor_antrian: '21', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '14/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-30' },
        { nomor_antrian: '22', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '13/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '2022-06-21' },
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
        minDate: '',
        maxDate: '',

        
}
    },

    methods: {
        mindateA() {

          console.log(this.minDate)
          console.log(this.maxDate)
        },    
        mySortCompare(maxDate, minDate, key) {
      if (key === 'tanggal_kontrol') {
        // Assuming the date field is a `Date` object, subtraction
        // works on the date serial number (epoch value)
        return maxDate[key] - minDate[key]
      } else {
        // Let b-table handle sorting other fields (other than `date` field)
        return false
      }
    },
    }

}
</script>

<style scoped>
.titlehero {
  margin-top: 10px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px;
}
.unguprimary {
    background-color: #50266A;
}

.btnset {
  margin: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 24px;
  padding-right: 24px;
}

.tablelong {
  padding-bottom: 30px;
}

tr {
    
   text-align:left; 
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
.hdrop {
  height: 38px;
  margin-top: 5px;
  margin-bottom: 5px;
 border-radius: 5px; 
 border: 1px solid #1b1515;
 background: #F3F3F3;
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
