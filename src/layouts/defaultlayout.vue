<template>
<div class="row">
<navbar-vue></navbar-vue>
<div class="col-3">    
<navdraw-vue></navdraw-vue>
</div>
<div class="col-9">
    <slot></slot>
</div>
<div class="d-flex">
</div>

</div>
</template>

<script>
import navbarVue from '../components/navbar.vue'
import navdrawVue from '../components/navdraw.vue'
export default {
    name: "defaultLayout",
    components: {
        navbarVue,
        navdrawVue,
    }
}
</script>