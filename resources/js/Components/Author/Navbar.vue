<template>
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <!-- Left navbar links -->
        <ul class="navbar-nav d-flex align-items-center" style="gap: 20px">
            <li class="nav-item">
                <span class="nav-link" data-widget="pushmenu" role="button"><i class="fas fa-bars"></i></span>
            </li>
            <li class="nav-item">
                <span class="text-lg font-weight-bold">{{ fullName }}</span>
            </li>
        </ul>
    </nav>
    <!-- /.navbar -->
</template>

<script>
export default {
    data(){
        return {
            fullName : null
        }
    },
    mounted(){
        this.fullName = localStorage.getItem("userName");
    }
}
</script>

<style>

</style>
