<template>
<div>
<div class="d-flex justify-content-end">
            <b-btn @click="myCompare()">test</b-btn>
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
        
<b-table :items="items" :fields="fields" :sort-compare="myCompare">
  </b-table>
  </div>
</template>

<script>
export default {
    name: "loginPage",

    data() {
    return {
        name: '',
      fields: [
        { key: 'nama', label: 'Name', sortable: false },
        { key: 'date', label: 'Date', sortable: true }
      ],
      items: [
        { name: 'Jack', date: '29/12/2001' },
        { name: 'Jill', date: '14/04/2012' },
        { name: 'Bob', date: '07/07/2009' }
      ],

      minDate: '',
      maxDate: '',
    }
  },
  methods: {
    myCompare() {
        if (this.minDate == '' || this.maxDate == '') {
            return false
        }else {
            
            console.log(this.minDate)
            console.log(this.maxDate)
        }
  },
}
}
</script>