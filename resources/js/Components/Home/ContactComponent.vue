<template>
    <section class="container-fluid white-color p-md-5 p-1">
        <section-title title="Contact Us" />
        <div class="container">
            <div class="row g-5">
                <div class="col-md-4 col-12">
                    <div class="card-1 p-md-3 p-lg-4 p-4">
                        <p>Aperier Publishing <br>
                            P785 Hebron <br>
                            West Bank, Palestine. <br><br>

                            Phone : +970 02 227 1074 <br>
                            Email : head@aperier.com <br>
                            Office Hours : Sun – Thu (8:00 am – 10:00 pm) <br>
                            Friday (8:00 am – 3:30 pm) <br><br>

                            Website : aperier.com</p>
                    </div>
                </div>
                <div class="col-md-8 col-12 pl-md-4">
                    <div class="card-2">
                        <form ref="form" @submit.prevent="sendEmail">
                            <div class="row px-5 py-3">
                                <div class="col-md-6 col-12">
                                    <div class="form-group">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="from_name" placeholder="John Doe">
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="form-group">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" name="email_id" class="form-control" id="email" aria-describedby="emailHelp"
                                            placeholder="someone@gmail.com">
                                    </div>
                                </div>
                                <div class="col-12 mb-2">
                                    <div class="form-group">
                                        <label for="message" class="form-label">Message</label>
                                        <textarea name="message" id="message" cols="10" rows="3" class="form-control"
                                            placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-12 text-end mb-2">
                                    <button class="green-button" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import emailjs from '@emailjs/browser';
export default {
    data(){
        return{
            form:{
                from_name : "",
                email_id : "",
                message : ""
            }
        }
    },
    methods:{
        sendEmail() {
            emailjs.sendForm('service_3rg0t6u', 'template_ywfnu0a', this.$refs.form, '2ZgodGTTVZlxB4m5q')
                .then((result) => {
                    this.$refs.form.reset();
                    this.$swal({
                        text: "Email has been sent successfully",
                        icon: "success"
                    });
                }, (error) => {
                    this.$swal({
                        text: "Please try again",
                        icon: "error"
                    });
                });
        }
    }
}
</script>

<style scoped>
.card-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;

    background: #F6F8F9;
    box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
}

.card-2 {
    width: 100%;
    height: fit-content;
    left: 474px;
    top: 0px;

    background: #F6F8F9;
    box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
}
</style>
