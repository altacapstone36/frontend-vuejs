<template>
    <div class="container my-2">
        <div class="d-flex text-center">
            <img src="@/assets/Icon/schedule list.svg" width="70"/>
            <h3 class="textmargin">SCHEDULE LIST</h3>
        </div>
        <div class="d-block">
            <b-card bg-variant="light" class="card text-center mx-2 my-2 text-purple">
            <div class="d-flex">
            <p class="m-0 p-2">Tanggal</p>
            <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            </div>
            <div>
                 <p>Value: '{{ value }}'</p>
            </div>
            </b-card>

        </div>
        
    </div></template>

<script>
export default {
    name: 'scheduleList',
    data() {
      return {
        value: ''
      }
    }
}
</script>

<style scoped>
.textmargin {
    margin-top: 20px;
}
</style>