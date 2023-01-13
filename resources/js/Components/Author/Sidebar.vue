<template>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <span class="brand-link">
            <img src="../../Assets/bird.png" alt="AdminLTE Logo"
                class="brand-image bg-success px-2 py-1 img-circle elevation-3" style="opacity: 0.8" />
            <span class="brand-text font-weight-light">Aperier</span>
        </span>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                    data-accordion="false" id="nav_ul">
                    <!-- Add icons to the links using the .nav-icon class
                      with font-awesome or any other icon font library -->
                    <li class="nav-item">
                        <router-link :to="{ name: 'Author Dashboard' }" class="nav-link">
                            <i class="nav-icon fas fa-home mr-2"></i>
                            <p>Author Dashboard</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Author Update Profile' }" class="nav-link">
                            <i class="nav-icon fas fa-users mr-2"></i>
                            <p>Update Profile</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Author Instruction' }" class="nav-link">
                            <i class="nav-icon fas fa-plus mr-2"></i>
                            <p>Instruction to Authors</p>
                        </router-link>
                    </li>
                    <li class="nav-item" @click="logout()">
                        <a @click="logout()" class="nav-link">
                            <i class="nav-icon fa-solid fa-right-from-bracket"></i>
                            <p>Logout</p>
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>
  
<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem("userEmail");
            localStorage.removeItem("isAdmin");
            this.$router.push({ name: 'Home' });
        }
    },
};
</script>
  
<style scoped>
#nav_ul a.router-link-active,
.router-link-exact-active {
    background-color: #536E2E;
    color: #fff;
}
</style>