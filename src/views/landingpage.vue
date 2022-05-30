<template>
    <div class="bodyimage">
        <b-container>
        <div class="row">
            <b-row align-v="center">
            <b-col cols="1"></b-col>
            <b-col cols="10" align-self="center">
        <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="center text-center">
            <b-card-title>Holy Hospital</b-card-title>
            <div class="my-4">
            <b-button block variant="primary">Login</b-button>
            </div>
            <div class="my-4">
            <b-button block variant="primary">Get Username</b-button>
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
}
.center {
  margin-top: 50%;
  margin-bottom:50%;
}
</style>