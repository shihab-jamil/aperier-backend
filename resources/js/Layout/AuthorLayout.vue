<template >
    <Navbar />
    <Sidebar />
    <router-view :key="$route.path"></router-view>
    <Footer />
</template>

<script>
import Sidebar from '../Components/Author/Sidebar.vue';
import Navbar from '../Components/Author/Navbar.vue';
import Footer from '../Components/Author/Footer.vue';
export default {
    components: { Sidebar, Navbar, Footer }
}
</script>

<style>

</style>