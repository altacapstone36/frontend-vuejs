<template>
    <div class="d-flex my-2">
        <div class="mx-2">
<b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
        </div>
        <div class="mx-2">    
            <h1>Nama User</h1>
            <h1>Administrtor</h1>
        </div>
    <div id="page-content-wrapper">
                <!-- Page content-->
                <div class="d-flex justify-center">
        <b-card text-variant="white" class="text-center mx-2 my-2 ungusecondary">
        <b-card-text>Manage Patient Data</b-card-text>
      </b-card>
      <b-card text-variant="white" class="text-center mx-2 my-2 ungusecondary">
        <b-card-text>Manage Outpatient Report</b-card-text>
      </b-card>
      <b-card text-variant="white" class="text-center mx-2 my-2 ungusecondary">
        <b-card-text>Report Log</b-card-text>
      </b-card>
                </div>
            </div>
            </div>
</template>

<script>

export default {
    name: "homePage",
    components: {

    }
}
</script>


<style scoped>
.unguprimary {
    background-color: #50266A;
}
.ungusecondary {
    background-color: #794B93;
}
</style>