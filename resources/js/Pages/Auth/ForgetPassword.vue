<template>
    <section style=" margin-top: 60px;">
        <div class="container p-5">
            <div class="row gy-2">
                <div class="col-12 form-title">
                    <span>Aperier</span>
                    <span>Forget Password</span>
                </div>
                <div class="col-12 p-md-5 p-1">
                    <div class="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12 login-form">
                        <div class="form-header">
                            <p class="pt-3">Enter your email to get link</p>
                            <div class="logo-background"></div>
                            <img src="../../Assets/bird.png" alt="" class="bird-img">
                        </div>
                        <div class="form-body">
                            <form action="" method="post" @submit.prevent="handleForm()">
                                <div class="form-left h-100">
                                    <form action="" class="row g-4">
                                        <div class="col-12">
                                            <div class="input-group">
                                                <div class="input-group-text"><i class="fa-solid fa-envelope"></i></div>
                                                <input type="email" class="form-control" autocomplete="false" placeholder="Enter Username" v-model="formData.email">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <p class="align-self-end mt-2 text-white"></p>
                                <button class="btn-login" type="submit">
                                    <span v-if="sendMail" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Send
                                </button>
<!--                                <button type="submit" class="">Login</button>-->
                            </form>
                        </div>
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
    data() {
        return {
            formData: {
                email: "",
            },
            sendMail : false
        }
    },
    methods: {
        async handleForm() {
            this.sendMail = true;
            await axios.post(`${config.domain}/api/forget-password`, this.formData).then(response => {
                if (response.data.success) {

                    this.$swal({
                        text: "Link has been sent to your email to reset password",
                        icon: "success"
                    });
                    // this.$router.push({ name: 'Login' })
                }
                else {
                    this.$swal({
                        text: response.data.message,
                        icon: "error"
                    });
                    this.$router.push({ name: 'Login' })
                }
            }).catch(error => {
                console.log(error)
            });
            this.sendMail = false
        }

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

.logo-background {
    position: absolute;
    top: 0%;
    left: 50%;
    width: 55px;
    height: 55px;
    background-color: aqua;
    transform: translate(-50%, -50%) rotate(45deg) !important;
}

.bird-img {
    position: absolute;
    top: 0%;
    left: 51%;
    transform: translate(-50%, -50%) !important;
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

.btn-login {
    align-self: flex-start;
    padding: 10px 60px;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    letter-spacing: 0.1em;
}
</style>
