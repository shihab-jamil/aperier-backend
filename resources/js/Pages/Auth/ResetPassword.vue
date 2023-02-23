<template>
    <section style=" margin-top: 60px;">
        <div class="container p-5">
            <div class="row gy-2">
                <div class="col-12 form-title">
                    <span>Aperier</span>
                    <span>Reset Password</span>
                </div>
                <div class="col-12 p-md-5 p-1">
                    <div class="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12 login-form">
                        <div class="form-header">
                            <p class="pt-3">Reset your password</p>
                            <div class="logo-background"></div>
                            <img src="../../Assets/bird.png" alt="" class="bird-img">
                        </div>
                        <div class="form-body">
                            <form method="post">
                                <div class="form-left h-100">
                                    <form action="" class="row g-4">
                                        <div class="col-12">
                                            <div class="input-group">
                                                <div class="input-group-text"><i class="fa-solid fa-lock"></i></div>
                                                <input type="password" class="form-control" placeholder="New Password"
                                                       v-model="formData.newPassword" required>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="input-group">
                                                <div class="input-group-text"><i class="fa-solid fa-lock"></i></div>
                                                <input type="password" class="form-control" placeholder="Confirm Password"
                                                       v-model="formData.confirmPassword" required>
                                            </div>
                                        </div>
                                        <button class="btn btn-default w-25 ml-auto" @click="handleForm()" type="button" >
                                            Confirm
                                        </button>
                                    </form>
                                </div>

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
                newPassword : "",
                confirmPassword : "",
                token : ""
            },
        }
    },

    async mounted() {
        if(this.$route.query.email && this.$route.query.token){
            this.formData.email = await this.$route.query.email
            this.formData.token = await this.$route.query.token
        }else{
            this.$router.push({name : 'Login'})
        }
    },
    methods: {
        async handleForm() {
            if(this.formData.newPassword !== this.formData.confirmPassword){
                this.$swal({
                    text: "Both password need to be same to continue",
                    icon: "error"
                });
                return;
            }
            await axios.post(`${config.domain}/api/reset-password`, this.formData).then(response => {
                if (response.data.success) {
                    this.$swal({
                        text: "Try to log in with new password",
                        icon: "success"
                    });
                    this.$router.push({ name: 'Login' })
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
