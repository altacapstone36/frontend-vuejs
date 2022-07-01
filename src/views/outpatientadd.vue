<template>
    <div class="container">
        <div class="d-flex">
              <img src="../assets/Icon/outpatient data form.svg" width="40px"/>

            <h3 class="mt-1 m-1">OUTPATIENT DATA FORM</h3>
        </div>
        <div class="d-block cardinput">
        <b-card bg-variant="light" class="card text-center mx-2 my-2 text-purple">
          <b-row class="my-3">
            <b-col cols="2" class="d-flex justify-content-start">
              <label class="mt-2" aria-controls="fieldset-1">Kode Pasien</label>
            </b-col>
              <b-col cols="10">
              <b-form-group
                id="fieldset-1"
                :invalid-feedback="invalidfeedbackKP"
                :state="state"
              >
          <b-form-input id="input-1" v-model="kode_pasien" :state="stateKP" trim class="hdrop"></b-form-input>
        </b-form-group>
              </b-col>
          </b-row>

          <b-row class="my-3">
            <b-col cols="2" class="d-flex justify-content-start">
              <label class="mt-2" aria-controls="fieldset-2">Nama Pasien</label>
            </b-col>
              <b-col cols="10">
              <b-form-group
                id="fieldset-2"
                :invalid-feedback="invalidfeedbackNP"
                :state="stateNP"
              >
          <b-form-input id="input-2" v-model="nama_pasien" :state="stateNP" trim class="hdrop"></b-form-input>
        </b-form-group>
              </b-col>
          </b-row>

        <b-row class="my-3">
            <b-col cols="2" class="d-flex justify-content-start">
              <label class="mt-2" aria-controls="fieldset-5">Tanggal Kontrol</label>
            </b-col>
              <b-col cols="10">
           <b-form-datepicker id="example-datepicker" v-model="tanggal_kontrol" class="mb-2 hdrop"></b-form-datepicker>
              </b-col>
          </b-row>
          <b-row class="my-3">
            <b-col cols="2" class="d-flex justify-content-start">
              <label class="mt-2" aria-controls="fieldset-3">Keluhan</label>
            </b-col>
              <b-col cols="10">
              <b-form-group
                id="fieldset-3"
                :invalid-feedback="invalidfeedbackKel"
                :state="stateKel"
              >
          <b-form-input id="input-3" v-model="keluhan" :state="stateKel" trim class="hdrop"></b-form-input>
        </b-form-group>
              </b-col>
          </b-row>

          <b-row class="my-3">
            <b-col cols="2" class="d-flex justify-content-start">
              <label class="mt-2" aria-controls="fieldset-6">Jenis Poli</label>
            </b-col>
              <b-col cols="10">
                <b-form-select
                          id="input-6"
                          v-model="jenis_poli"
                          :options="poli"
                          required
                          plain
                           class="hdrop"
                        ></b-form-select>
              </b-col>
          </b-row>

          <b-row class="my-3">
            <b-col cols="2" class="d-flex justify-content-start">
              <label class="mt-2" aria-controls="fieldset-6">Jadwal Sesi</label>
            </b-col>
              <b-col cols="10">
                <b-form-select
                          id="input-6"
                          v-model="jadwal_sesi"
                          :options="sesi"
                          required
                          plain
                           class="hdrop"
                        ></b-form-select>
              </b-col>
          </b-row>

          <b-row class="my-3">
            <b-col cols="2" class="d-flex justify-content-start">
              <label class="mt-2" aria-controls="fieldset-6">Nama Dokter</label>
            </b-col>
              <b-col cols="10">
                <b-form-select
                          id="input-6"
                          v-model="nama_dokter"
                          :options="dokter"
                          required
                          plain
                           class="hdrop"
                        >
                        </b-form-select>
              </b-col>
          </b-row>

          <b-row class="my-3">
            <b-col cols="2" class="d-flex justify-content-start">
              <label class="mt-2" aria-controls="fieldset-4">Nomor Antrian</label>
            </b-col>
              <b-col cols="10">
              <b-form-group
                id="fieldset-4"
                :invalid-feedback="invalidfeedbackNA"
                :state="stateNA"
              >
          <b-form-input id="input-4" v-model="nomor_antrian" :state="stateNA" trim class="hdrop"></b-form-input>
        </b-form-group>
        <div class="d-flex justify-content-end">
        <b-btn @click="testapi()">Submit</b-btn>
                <b-btn @click="onReset()">Reset</b-btn>
              </div>
              </b-col>
          </b-row>

          
        </b-card>

        </div>
        
    </div>
</template>

<script>
export default {
    name: "outpatientAdd",
    computed: {
      stateKP() {
        return this.kode_pasien.length >= 4
      },
      invalidfeedbackKP() {
        if (this.kode_pasien.length > 0) {
          return 'Minimal 4 huruf characters.'
        }
        return 'Harap masukan Kode Pasien.'
      },
      stateNP() {
        return this.nama_pasien.length >= 4
      },
      invalidfeedbackNP() {
        if (this.nama_pasien.length > 0) {
          return 'Minimal 4 huruf characters.'
        }
        return 'Harap masukan Nama Pasien.'
      },
      stateKel() {
        return this.keluhan.length >= 4
      },
      invalidfeedbackKel() {
        if (this.keluhan.length > 0) {
          return 'Minimal 4 huruf characters.'
        }
        return 'Tuliskan Keluhan anda.'
      },
      stateNA() {
        return this.nomor_antrian.length >= 1
      },
      invalidfeedbackNA() {
        if (this.nomor_antrian.length > 0) {
          return 'Minimal 1 nomor.'
        }
        return 'Nomor antriAn.'
      }
    },
    data() {
      return {
        name: '',
        kode_pasien: '',
        nama_pasien: '',
        keluhan: '',
        nomor_antrian: '',
        tanggal_kontrol: '',
        jenis_poli: null,
        jadwal_sesi: null,
        nama_dokter: null,

      poli: [{ text: 'Pilih Poli', value: null }, 'Umum', 'Anak', 'Gigi'],
      sesi: [{ text: 'Pilih Sesi', value: null }, 'Pagi (08.00 - 11.00)', 'Siang (13.00 - 15.00)', 'Sore (16.00 - 18.00)'],
      dokter: [{ text: 'Pilih Dokter', value: null }, 'dr. Alshad Ahmad', 'dr. Adira Putri', 'dr. Seno', 'dr. Christie'],
    
}
    },
    methods: {
      testapi() {
        
        console.log(this.nama_dokter)
        console.log(this.nama_pasien)
        console.log(this.jadwal_sesi)
        console.log(this.jenis_poli)
        console.log(this.kode_pasien)
        console.log(this.nomor_antrian)
        console.log(this.tanggal_kontrol)
        console.log(this.keluhan)
      },
      onReset() {
      this.nama_dokter = '',
      this.nama_pasien = null,
      this.jadwal_sesi = null
      
      },
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

.hdrop {
  height: 38px;
  margin-top: 5px;
  margin-bottom: 5px;
 border-radius: 5px; 
 border: 1px solid #1b1515;
 background: #F3F3F3;
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

</style>

<!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group> -->
