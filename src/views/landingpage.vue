<template>
    <div class="bodyimage">
        <b-container>
        <div class="row">
            <b-row align-v="center">
            <b-col cols="1"></b-col>
            <b-col cols="10" align-self="center">
        <b-card img-src="https://placekitten.com/400/300" img-alt="Card image" img-left class="text-center">
            <b-card-title>Holy Hospital</b-card-title>
            <div class="my-4">
            <b-button block class="ungubutton" to="/login">Login</b-button>
            </div>
            <div class="my-4">
            <b-button block variant="light" class="ungu">Get Username</b-button>
            </div>
    </b-card>
    </b-col>
    <b-col cols="1"></b-col>
    </b-row>
  </div>
  <div></div>
  </b-container>
    </div>
</template>

<script>
export default {
    name: "landingPage"
}
</script>

<style scoped>
.bodyimage {
    background-image: url("/src/assets/bglp.jpg");
    height: auto;
    padding-top: 20%;
    padding-bottom: 20%;
}
.ungubutton {
    background-color: #8E5FA8;
}
.ungu {
    color: #8E5FA8;
}
</style>