<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light" id="nav">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../Assets/logo.svg" alt="" width="80" height="50" style="margin-top : -15px ">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{ name: 'Home' }" class="nav-link active" aria-current="page">Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About Us</a>
                    </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Journals
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><router-link :to="{name:'Journal Details', params:{id:1}}" class="dropdown-item" >Sustainability Studies</router-link></li>
                      <li><router-link :to="{name:'Journal Details', params:{id:2}}" class="dropdown-item" >Business Studies</router-link></li>
                      <li><router-link :to="{name:'Journal Details', params:{id:3}}" class="dropdown-item" >Bibliomatric and Systematic Reviews</router-link></li>
                      <li><router-link :to="{name:'Journal Details', params:{id:4}}" class="dropdown-item" >Marketing Studies</router-link></li>
                      <li><router-link :to="{name:'Journal Details', params:{id:5}}" class="dropdown-item" >Finance Studies</router-link></li>
                      <li><router-link :to="{name:'Journal Details', params:{id:6}}" class="dropdown-item" >Tourism Studies</router-link></li>
                    </ul>
                  </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Publishing Policies' }" class="nav-link">Publishing Policies
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Editorial Policies' }" class="nav-link">Editorial Policies
                        </router-link>
                    </li>
                </ul>
                <ul class="navbar-nav w-50 mb-2 mb-lg-0">
                    <li class="nav-item w-100">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Login' }" class="nav-link">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Sign Up' }" class="nav-link">Signup</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    background-color: #F3F3F3 !important;
}

#nav_ul a.router-link-active,
.router-link-exact-active {
    background-color: #536F2E;
    color: white !important;
    border-radius: 8px;
}
</style>
