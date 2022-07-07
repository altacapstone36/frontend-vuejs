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
          <input type="date" v-model="startDate">
          </div>
          <h2 class="mx-3">-</h2>
          <div class="d-flex justify-content-end">
          <input type="date" v-model="endDate">
          </div>
        </div>
        <div class="d-block cardinput lightdark-b tablelong">
    <!-- <b-table
    :id="my-table"    
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :per-page="perPage"
      :current-page="currentPage"
      :sort-compare="mysortCompare"
      

      class="text-center lightdark-b"
    >
    </b-table> -->

            <table>
  <tr>
    <th>Nomor Antrian</th>
    <th>Kode Pasien</th>
    <th>Nama Pasien</th>
    <th>Tanggal Daftar</th>
    <th>Jenis Poli</th>
    <th>Nama Dokter</th>
    <th>Tanggal Kontrol</th>

    
  </tr>
  <tr v-for="item in filterItem" :key="item">
    <td>{{item.queue}}</td>
    <td>{{item.serial_number}}</td>
    <td>{{item.patient_name}}</td>
    <td>{{item.date_check}}</td>
    <td>{{item.facility}}</td>
    <td>{{item.doctor}}</td>
    <td>{{item.id}}</td>

  </tr>
  </table>


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
//import Vue from 'vue'
import axios from 'axios'
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
filterItem() {
      let filterType = this.selectedType;
      let startDate = this.localizeDate(this.startDate);
      let endDate = this.localizeDate(this.endDate);
      console.log(startDate)
      console
      
      const itemsByType = filterType ? this.items.filter(item => item.type === filterType) : this.items
      return itemsByType
        .filter(item => {
          const itemDate = new Date(item.date_check)
          if (startDate && endDate) {
            return startDate <= itemDate && itemDate <= endDate;
          }
          if (startDate && !endDate) {
            return startDate <= itemDate;
          }
          if (!startDate && endDate) {
            return itemDate <= endDate;
          }
          return true;
        })
    }

    },

    data() {
      return {
        selectedType: '',
        startDate:null,
        endDate:null,
        value: '',
        // fields: [
        //         { key: 'id', label: 'Nomor Antrian', thStyle: {background: '#DDDDDD', color: 'black'} }, 
        //         { key: 'serial_number', label: 'Kode Pasien', thStyle: {background: '#DDDDDD', color: 'black'} },
        //         { key: 'patient_name', label: 'Nama Pasien', thStyle: {background: '#DDDDDD', color: 'black'} },
        //         { key: 'date_check', label: 'Tanggal Daftar', thStyle: {background: '#DDDDDD', color: 'black',} },
        //         { key: 'facility', label: 'Jenis Poli', thStyle: {background: '#DDDDDD', color: 'black'} }, 
        //         { key: 'doctor', label: 'Nama Dokter', thStyle: {background: '#DDDDDD', color: 'black'} },
        //         { key: 'date_check', label: 'Tanggal Kontrol', thStyle: {background: '#DDDDDD', color: 'black'} },
        //         // { key: 'show_detail', label: 'Action', thStyle: {background: '#DDDDDD', color: 'black'} },                
                
        //         ],
        items: [],
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
      localizeDate(date) {
      // Date picker uses ISO format (yyyy-mm-dd), which is UTC. The data
      // contains locale specific date strings (mm/dd/yyyy), which `Date`
      // parses with local time-zone offset instead of UTC. Normalize the
      // ISO date so we're comparing local times.
      if (!date || !date.includes('-')) return date
      const [yyyy, mm, dd] = date.split('-')
      return new Date(`${mm}/${dd}/${yyyy}`)
    },
    formatDate(date) {
      return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(date))
    }
    },
 async mounted(){
         try {
    const response1 = await axios.get('http://localhost:8080/api/outpatient/report');
   this.items = response1.data.data;
//    const dataOne = response1.data.data
    console.log(response1.data)
//    console.log(response1.data.data.id)
    // const response2 = await axios.get(`http://localhost:8080/api/outpatient/:id/process`);
    // this.arrayTwo = response2.data.data;
    // console.log(this.arrayTwo)
  } catch(e) {
    console.log(e);
  }

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
