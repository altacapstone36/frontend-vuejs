<template>

                <div class="ungusecondary sidebar m-0 pl1">
                    <a class="d-flex justify-content-between align-items-center border-bottom list-group-item ungusecondary text-white p-3 " @click="togglepatient = !togglepatient" @dblclick="togel()"> Patient <b-icon icon="chevron-down"></b-icon></a>        
<!-- toggle -->                   
                        <div class="sub-menu" v-if="togglepatient">
                            <a class="list-group-item ungusecondary border-bottom text-white p-3" href="#!">Add Patient</a>
                            <a class="list-group-item ungusecondary border-bottom text-white p-3" href="#!">Patient Data</a>
                        </div>
<!-- ENDtoggle -->
                    <a class="d-flex justify-content-between align-items-center border-bottom list-group-item ungusecondary text-white p-3" @click="toggleoutpatient = !toggleoutpatient" @dblclick="togel()">Outpatient <b-icon icon="chevron-down"></b-icon></a>        
<!-- toggle -->                   
                        <div class="sub-menu" v-if="toggleoutpatient">
                            <a class="list-group-item  ungusecondary border-bottom text-white p-3" href="#!">Add Outpatient</a>
                            <a class="list-group-item ungusecondary border-bottom text-white p-3" href="#!">Outpatient Report</a>
                            <a class="list-group-item ungusecondary border-bottom text-white p-3" href="#!">Outpatient List</a>
                        </div>
<!-- ENDtoggle -->
                    <a class="d-flex justify-content-between align-items-center border-bottom list-group-item ungusecondary text-white p-3" @click="toggleschedule = !toggleschedule" @dblclick="togel()">Schedule <b-icon icon="chevron-down"></b-icon></a>        
<!-- toggle -->                   
                        <div class="sub-menu" v-if="toggleschedule">
                            <a class="list-group-item ungusecondary border-bottom text-white p-3" href="#!">Add Schedule</a>
                            <a class="list-group-item ungusecondary border-bottom text-white p-3" href="#!">Schedule List</a>
                        </div>
<!-- ENDtoggle -->
                    <a class="d-flex justify-content-between align-items-center border-bottom list-group-item ungusecondary text-white p-3" @click="toggleusers = !toggleusers" @dblclick="togel()">User Menu <b-icon icon="chevron-down"></b-icon></a>        
<!-- toggle -->                   
                        <div class="sub-menu" v-if="toggleusers">
                            <a class="list-group-item ungusecondary border-bottom text-white p-3" href="#!">Manage User</a>

                        </div>
<!-- ENDtoggle -->

                </div>
</template>

<script>
export default {
    name: "navdrawVue",
    data() {
        return {
            togglepatient: false,
            toggleoutpatient: false,
            toggleschedule: false,
            toggleusers:false,
        }
    
    },
}
</script>

<style scoped>
.unguprimary {
    background-color: #50266A;
}
.ungusecondary {
    background-color: #794B93;
}
.sidebar {
   min-height: 100vh;
}
.pl1 {
    padding-left: 10px;
}
.ml1 {
    margin-left: 10px;
}
.w100 {
    width: 100%;
}
.w10px {
    width: 10px;
}
</style>