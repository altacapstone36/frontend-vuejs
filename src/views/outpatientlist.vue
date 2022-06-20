<template>
    <div class="container">
        <div class="d-flex">

            <h3>OUTPATIENT DATA FORM</h3>
        </div>
        <div>

        </div>
        <div class="d-block cardinput">

    <b-table
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :items="items"
      :fields="fields"
      :head-variant="headVariant"
      :table-variant="tableVariant"
    ></b-table>


        </div>
        
    </div>
</template>

<script>
export default {
    name: "outpatientList",
    computed: {
      state() {
        return this.name.length >= 4
      },
      invalidFeedback() {
        if (this.name.length > 0) {
          return 'Enter at least 4 characters.'
        }
        return 'Please enter something.'
      }
    },
    data() {
      return {
        fields: ['nomor_antrian', 'kode_pasien', 'nama_pasien', 'tanggal_daftar', 'jenis_poli', 'nama_dokter', 'tanggal_kontrol'],
        items: [
        { nomor_antrian: '1', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },
        { nomor_antrian: '2', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },
        { nomor_antrian: '3', kode_pasien: 'rm40', nama_pasien: 'Dickerson', tanggal_daftar: '12/12/12', jenis_poli: 'umum', nama_dokter: "dr.seno", tanggal_kontrol: '13/12/10' },
        
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
}
    }
  
}
</script>

<style scoped>
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
