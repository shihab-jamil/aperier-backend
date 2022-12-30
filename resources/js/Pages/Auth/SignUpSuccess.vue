<template>
    <section style=" margin-top: 60px; height: 84vh;">
        <div class="container p-5">
            <div class="row gy-2">
                <div class="col-12 form-title">
                    <span>Aperier</span>
                    <span>Submission System</span>
                </div>
                <div class="col-12">
                    <div class="col-12 bg-custom-gray p-5 d-flex flex-column justify-content-center align-items-center">
                        <p>You have successfully created an account.</p>
                        <p>You may now <router-link :to="{ name: 'Login' }">log in.</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
import axios from "axios";
import config from "@/Data/config";

export default {
    methods: {

    }

}
</script>
  
<style scoped>
.login-form {
    display: flex;
    flex-direction: column;
}

.form-header {
    width: 100%;
    height: 120px;
    background: #536F2E;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 400;
    font-size: 20px;
    line-height: 48px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    position: relative;
}

.form-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    height: 85px;
    background-color: #536E2E;
    color: white;
}

.form-title span:first-child {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.07em;
}

.form-title span:last-child {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.07em;
}

.form-body {
    background-color: #797979;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
}

.custom-input-group {
    display: flex;
    align-items: center;
}

.bg-custom-gray {
    background-color: #E1E1E1 !important;
}
</style>