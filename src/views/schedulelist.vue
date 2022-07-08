<template>
    <div class="container my-2">
        <div class="d-flex">
            <img src="@/assets/Icon/schedule list.svg" width="70"/>
            <h3 class="textmargin">SCHEDULE LIST</h3>
        </div>
        <div class="d-block">
            <b-card bg-variant="light" class="card text-center mx-2 my-2 text-purple">
            <div class="d-flex">
            <p class="m-0 p-2">Tanggal</p>
            <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2 hdrop"></b-form-datepicker>
            </div>
            <div>
                <div class="cardlist" >
                    <b-card-text class="d-flex justify-content-start" >Perawat (08.00 - 16.00) </b-card-text>
                    <img src="../assets/Icon/drop downblack.svg" @click="togglescheduleSus()" width="30px" class="ddown d-flex justify-content-end"/>
            </div>
            <div v-if="togglejadwalSus">
                    <div class="cardlist" v-for="schedule in schedules" :key="schedule.id" >
                        <p>{{schedule}}</p>
                    </div>
                </div>
                <div class="cardlist" >
                    <b-card-text class="d-flex justify-content-start" >Dokter Pagi (08.00 - 16.00) </b-card-text>
                    <img src="../assets/Icon/drop downblack.svg" @click="toggleschedulePagi()" width="30px" class="ddown d-flex justify-content-end"/>
            </div>
            <div v-if="togglejadwalPagi">
                    <div class="cardlist" v-for="pagi in dokpagis" :key="pagi.id" >
                        <p>{{pagi}}</p>
                    </div>
                </div>
                <div class="cardlist" >
                    <b-card-text class="d-flex justify-content-start" >Dokter Siang (08.00 - 16.00) </b-card-text>
                    <img src="../assets/Icon/drop downblack.svg" @click="togglescheduleSiang()" width="30px" class="ddown d-flex justify-content-end"/>
            </div>
            <div v-if="togglejadwalSiang">
                    <div class="cardlist" v-for="pagi in dokpagis" :key="pagi.id" >
                        <p>{{pagi}}</p>
                    </div>
                </div>
                <div class="cardlist" >
                    <b-card-text class="d-flex justify-content-start" >Dokter Sore (08.00 - 16.00) </b-card-text>
                    <img src="../assets/Icon/drop downblack.svg" @click="togglescheduleSore()" width="30px" class="ddown d-flex justify-content-end"/>
            </div>
            <div v-if="togglejadwalSore">
                    <div class="cardlist" v-for="pagi in dokpagis" :key="pagi.id" >
                        <p>{{pagi}}</p>
                    </div>
                </div>

                </div>
            </b-card>

        </div>
        
    </div></template>

<script>
export default {
    name: 'scheduleList',
    data() {
      return {
        value: '',
        togglejadwalSus: false,
        togglejadwalPagi: false,
        togglejadwalSiang: false,
        togglejadwalSore: false,
        
        schedules: [
            'NR00001','NR00002',
            'NR00003','NR00004',
        ],
        dokpagis: [
            'DR00001 (Dokter Umum)',
            'NR00002 (Dokter Umum)',
            'NR00003 (Dokter Gigi)',
            'NR00004 (Dokter Gigi)',
        ]
      }
    },
    methods: {
        togglescheduleSus(){
            if(!this.togglejadwalSus){
                this.togglejadwalSus = true
            }else{
                this.togglejadwalSus = false
            }
        },
        toggleschedulePagi(){
            if(!this.togglejadwalPagi){
                this.togglejadwalPagi = true
            }else{
                this.togglejadwalPagi = false
            }
        },
        togglescheduleSiang(){
            if(!this.togglejadwalSiang){
                this.togglejadwalSiang = true
            }else{
                this.togglejadwalSiang = false
            }
        },
        togglescheduleSore(){
            if(!this.togglejadwalSore){
                this.togglejadwalSore = true
            }else{
                this.togglejadwalSore = false
            }
        }


    }
}
</script>

<style scoped>

.lightdark-a {
  background-color: #DDDDDD;
;

;
}
.lightdark-b {
background-color: #F3F3F3;

;
}

.hdrop {
  height: 38px;
  margin-top: 5px;
  margin-bottom: 5px;
 border-radius: 5px; 
 border: 1px solid #1b1515;
 background: #F3F3F3;
}

.textmargin {
    margin-top: 20px;
}
.ddown {
    justify-items: end;
    justify-content: end;
    display: flex;
}
.cardlist{
    padding: 15px;
    margin: 5px;
    background-color:white;
;
    display: flex;
    justify-content: space-between;
}
</style>