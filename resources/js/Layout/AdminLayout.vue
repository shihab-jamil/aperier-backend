<template >
    <Navbar />
    <Sidebar />
    <router-view :key="$route.path"></router-view>
    <Footer />
</template>

<script>
import Sidebar from '../Components/Admin/Sidebar.vue';
import Navbar from '../Components/Admin/Navbar.vue';
import Footer from '../Components/Admin/Footer.vue';
export default {
    components: { Sidebar, Navbar, Footer }
}
</script>

<style>

</style>