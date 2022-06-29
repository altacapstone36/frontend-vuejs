<template>
<div class="container my-2">
        <div class="d-flex text-center">
            <!-- <img src="@/assets/Icon/add doctor schedule.svg" width="70"/> -->
            <h3 class="textmargin">ADD DOCTOR SCHEDULE</h3>
        </div>
        <div class="d-block">
            <b-card bg-variant="light" class="card text-center mx-2 my-2 text-purple">
            <!-- <b-form @submit="onSubmit" @reset="onReset"> -->
<b-row class="my-3">
            <b-col cols="2">
              <label class="mt-2" aria-controls="fieldset-1">Jenis Poli</label>
                </b-col>
                <b-col cols="10">
                        <b-form-select
                        id="input-3"
                        v-model="jenis_poli"
                        :options="poli"
                        required
                        plain
                        class="w-100"
                      ></b-form-select>

              </b-col>
          </b-row>
          <b-row class="my-3">
            <b-col cols="2">
              <label class="mt-2" aria-controls="fieldset-1">Nama Dokter</label>
            </b-col>
              <b-col cols="10">
                        <b-form-select
                        id="input-3"
                        v-model="nama_dokter"
                        :options="dokter"
                        required
                        plain
                        class="w-100"
                      ></b-form-select>

              </b-col>
          </b-row>
          <b-row class="my-3">
            <b-col cols="2">
              <label class="mt-2" aria-controls="fieldset-1">Jenis Perawatan</label>
            </b-col>
              <b-col cols="10">
                            <b-form-group
                                id="fieldset-1"
                                :invalid-feedback="invalidfeedbackJP"
                                :state="stateJP"
                            >
                        <b-form-input id="input-1" v-model="jenis_perawatan" :state="stateJP" trim></b-form-input>
                        </b-form-group>

              </b-col>
          </b-row>
          <b-row class="my-3">
            <b-col cols="2">
              <label class="mt-2" aria-controls="fieldset-1">Pilih Hari</label>
            </b-col>
              <b-col cols="10">
               <b-form-datepicker id="example-datepicker" v-model="hari" class="mb-2"></b-form-datepicker>

              </b-col>
          </b-row>
                <b-row class="my-3">
                            <b-col cols="2">
                            <label class="mt-2" aria-controls="fieldset-1">Pilih Sesi</label>
                            </b-col>
                            <b-col cols="10">
                        <b-form-select
                        id="input-3"
                        v-model="jadwal_sesi"
                        :options="sesi"
                        required
                        plain
                        class="w-100"
                      ></b-form-select>
                            </b-col>
                        </b-row>
    <div class="d-flex mx-2 justify-content-end">
    <b-button @click="onSubmit()"  class="unguprimary btnset">Submit</b-button>
    </div>
    <!-- </b-form> -->
        </b-card>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'adddoctorSchedule',
    computed: {
      stateJP() {
        return this.jenis_perawatan.length >= 4
      },
      invalidfeedbackKP() {
        if (this.jenis_perawatan.length > 0) {
          return 'Minimal 4 huruf characters.'
        }
        return 'Harap masukan Kode Pasien.'
      },

    },
    data() {
      return {
        jenis_perawatan: '',
        hari: '',
        jadwal_sesi: null,
        nama_dokter: null,
        jenis_poli: null,
        food: null,
      poli: [{ text: 'Pilih Poli', value: null }, 'Umum', 'Anak', 'Gigi'],
      sesi: [{ text: 'Pilih Sesi', value: null }, 'Pagi', 'Siang', 'Sore'],
      dokter: [{ text: 'Pilih Dokter', value: null }, 'Dr. Alshad Ahmad', 'Dr. Seno'],
   }
    },
    methods: {
        onSubmit() {
            console.log(this.hari)
            console.log(this.jenis_perawatan)
            console.log(this.jadwal_sesi)
            console.log(this.nama_dokter)
            console.log(this.jenis_poli)
        }
    }
}
</script>