<template>
    <div>
        <div>
            <navbarVue/>
            </div>
            <b-row>
<navdrawVue/>
<b-col cols="9">
            <h1>HOME</h1>
            <div id="page-content-wrapper">
                <!-- Page content-->
                <div class="container-fluid">
                    <h1 class="mt-4">Simple Sidebar</h1>
                    <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                    <p>
                        Make sure to keep all page content within the
                        <code>#page-content-wrapper</code>
                        . The top navbar is optional, and just for demonstration. Just create an element with the
                        <code>#sidebarToggle</code>
                        ID which will toggle the menu when clicked.
                    </p>
                </div>
            </div>
</b-col>        
</b-row>
    </div>
</template>

<script>
import navbarVue from '../components/navbar.vue'
import navdrawVue from '../components/navdraw.vue'
export default {
    name: "homePage",
    components: {
        navbarVue,
        navdrawVue,
    }
}
</script>

