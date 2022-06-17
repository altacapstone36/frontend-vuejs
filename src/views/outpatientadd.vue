<template>
    <div class="container">
        <div class="d-flex">

            <h3>OUTPATIENT DATA FORM</h3>
        </div>
        <div class="d-block cardinput">
            <b-card bg-variant="light" class="card text-center mx-2 my-2 text-purple">
                
 <b-form @submit="onSubmit" @reset="onReset">
    <table class="table table-borderless">
        <tbody>
            <tr class="tablerow">
                <td><p class="textmargin">Kode Pasien</p></td>
                <td>
                <b-form-input v-model="kodepasien" class="inputdata"></b-form-input>
                </td>
            </tr>
             <tr class="tablerow">
                <td><p class="textmargin">Nama Pasien</p></td>
                <td>
                <b-form-input v-model="kodepasien" class="inputdata"></b-form-input>
                </td>
            </tr>
             <tr class="tablerow">
                <td><p class="textmargin">Tanggal Kontrol</p></td>
                <td>
                <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                </td>
            </tr>
            <tr class="tablerow">
                <td><p class="textmargin">Keluhan</p></td>
                <td>
                <b-form-input v-model="kodepasien" class="inputdata"></b-form-input>
               </td>
            </tr>
            <tr class="tablerow">
                <td><p class="textmargin">Jenis Poli</p></td>
                <td>
                <b-form-select
                        id="input-3"
                        v-model="food"
                        :options="poli"
                        required
                        class="w-100"
                      ></b-form-select>
                </td>
            </tr>
            <tr class="tablerow">
                <td><p class="textmargin">Jadwal Sesi</p></td>
                <td>
                <b-form-select
                        id="input-3"
                        v-model="food"
                        :options="sesi"
                        required
                        class="w-100"
                      ></b-form-select>
                </td>
            </tr>
            <tr class="tablerow">
                <td><p class="textmargin">Nama Dokter</p></td>
                <td>
                <b-form-select
                        id="input-3"
                        v-model="food"
                        :options="dokter"
                        required
                        class="w-100"
                      ></b-form-select>
                </td>
            </tr>
            <tr class="tablerow">
                <td><p class="textmargin">Nomor Antrian</p></td>
                <td>
                <b-form-input v-model="kodepasien" class="inputdata"></b-form-input>
               </td>
            </tr>

                    </tbody>

    </table>
    <div class="d-flex mx-2 justify-content-end">
    <b-button type="submit"  class="unguprimary btnset">Submit</b-button>
    <b-button disabled type="reset" class="unguprimary btnset">Reset</b-button>
    </div>
    </b-form>
    </b-card>

        </div>
        
    </div>
</template>

<script>
export default {
    name: "outpatientAdd",
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
        name: '',
        food: null,
      poli: [{ text: 'Pilih Poli', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      sesi: [{ text: 'Pilih Sesi', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      dokter: [{ text: 'Pilih Dokter', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],


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
