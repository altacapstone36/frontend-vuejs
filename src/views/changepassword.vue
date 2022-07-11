<template>
    <div class="container">
        <div class="d-flex">
            <img src="../assets/Icon/change password.svg" width="100"/>
            <h3>Password</h3>
        </div>
        <div class="d-block cardinput">
            <b-card bg-variant="light" class="card text-center mx-2 my-2 text-purple">
            <div class="d-flex my-2 mx-2">
            <p class="m-0">Password Baru</p>
            <b-form-input :id="`type-${type}`" :type="type" class="inputpass" v-model="password"></b-form-input>
            </div>
            <div class="d-flex justify-content-end submit">
            <b-button type="submit" class="ungusecondary">SUBMIT</b-button>
            </div>
            </b-card>

        </div>
        
    </div>
</template>

<script>
export default {
    name: "changePassword",
    data() {
        return{
            type: 'password',
            password: '',
        }
    }
}
</script>

<style scoped>
.ungusecondary {
    background-color: #794B93;
}
.submit {
    margin-top: 10px;
    margin-right: 20px;
}
.inputpass {
    width: 85%;
    margin-left: 20px;
}
</style>