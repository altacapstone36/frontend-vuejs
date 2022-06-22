<template>
    <div class="container">
        <div class="d-flex">

            <h3>OUTPATIENT DATA FORM</h3>
        </div>
        <div class="d-block cardinput">
        <b-card bg-variant="light" class="card text-center mx-2 my-2 text-purple">
          <b-row class="my-3">
            <b-col cols="2">
              <label class="mt-2" aria-controls="fieldset-1">kodepasien</label>
            </b-col>
              <b-col cols="10">
              <b-form-group
                id="fieldset-1"
                :invalid-feedback="invalidFeedback"
                :state="state"
              >
          <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
        </b-form-group>
              </b-col>
          </b-row>

          <b-row class="my-3">
            <b-col cols="2">
              <label class="mt-2" aria-controls="fieldset-1">kodepasien</label>
            </b-col>
              <b-col cols="10">
              <b-form-group
                id="fieldset-2"
                :invalid-feedback="invalidFeedback"
                :state="state"
              >
          <b-form-input id="input-2" v-model="name" :state="state" trim></b-form-input>
        </b-form-group>
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
      state() {
        return this.name.length >= 4
      },
      invalidFeedback() {
        if (this.name.length > 0) {
          return 'Minimal 4 huruf characters.'
        }
        return 'Harap masukan nama.'
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
