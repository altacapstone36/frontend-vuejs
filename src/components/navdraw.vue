<template>
<b-col cols="3">

                <div class="d-flex border-end list-group list-group-flush">
                    <a class="list-group-item list-group-item-action  p-3" @click="togglepatient = !togglepatient" @dblclick="togel()">Patient</a>        
<!-- toggle -->                   
                        <div class="sub-menu" v-if="togglepatient">
                            <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Events</a>
                        </div>
<!-- ENDtoggle -->
                    <a class="list-group-item list-group-item-action p-3" @click="toggleoutpatient = !toggleoutpatient" @dblclick="togel()">Outpatient</a>        
<!-- toggle -->                   
                        <div class="sub-menu" v-if="toggleoutpatient">
                            <a class="list-group-item list-group-item-action  p-3" href="#!">Events</a>
                        </div>
<!-- ENDtoggle -->
                    <a class="list-group-item list-group-item-action  p-3" @click="toggleschedule = !toggleschedule" @dblclick="togel()">Schedule</a>        
<!-- toggle -->                   
                        <div class="sub-menu" v-if="toggleschedule">
                            <a class="list-group-item list-group-item-action  p-3" href="#!">Events</a>
                        </div>
<!-- ENDtoggle -->

                </div>
    </b-col>
</template>

<script>
export default {
    name: "navdrawVue",
    data() {
        return {
            togglepatient: false,
            toggleoutpatient: false,
            toggleschedule: false,
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
</style>