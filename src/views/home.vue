<template>
<div class="">
    <div class="hero ungusecondary">
        <div class="imageprofile">
        <b-img rounded="circle" src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
        </div>
        <div class="nameprofile">
        <h3>Nama User</h3>
        <p>administrator</p>
        </div>
        <div class="icon">
            <img src = "../assets/Illu/illus2.svg" width="170" alt="My Happy SVG" class="bgbanner"/>

            <svg height="250" width="600">
              
  <ellipse cx="300" cy="110" rx="300" ry="230"
  class="elips" />
</svg>
        </div>
    </div>

    <div id="page-content-wrapper">
                <!-- Page content-->
                <div class="d-flex justify-content-center">
        <b-card bg-variant="light" class="card text-center mx-2 my-2 text-purple">
        <b-card-text>Manage Patient Data</b-card-text>
      </b-card>
      <b-card bg-variant="light" class="text-center mx-2 my-2 text-purple">
        <b-card-text>Manage Outpatient Report</b-card-text>
      </b-card>
      <b-card bg-variant="light" class="text-center mx-2 my-2 text-purple">
        <b-card-text>Manage User</b-card-text>
      </b-card>
                </div>
        <div class="d-flex justify-content-center">
        <b-card bg-variant="light" class="text-center mx-2 my-2 text-purple">
        <b-card-text>Display Employee Schedule</b-card-text>
      </b-card>
      <b-card bg-variant="light" class="text-center mx-2 my-2 text-purple">
        <b-card-text>Change Password</b-card-text>
      </b-card>
      <b-card bg-variant="light" class="text-center mx-2 my-2 text-purple">
        <b-card-text>Logout</b-card-text>
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

.hero {
    display: flex;
    height: 250;
}
.imageprofile {
    margin-left: 105px;
}
.nameprofile {
    margin-left: 50px;
    color: white;
    margin-top: 100px;
}
.icon {
  display: flex;
  align-content: center;
margin-left: 180px;
align-self: flex-end;
}
.elips {
    fill:#D09DEB;
    stroke:purple;
    stroke-width:2;
}
.bgbanner {
  margin-left: 180px;
  margin-top: 30px;
  position: absolute;
  align-content: center;
  
}

</style>