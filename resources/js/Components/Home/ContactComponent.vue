<template>
    <section class="container-fluid white-color p-5">
        <section-title title="Contact Us" />
        <div class="container">
            <div class="row gx-5">
                <div class="col-4">
                    <div class="card-1">
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
                <div class="col">
                    <div class="card-2">
                        <div class="row px-5 py-3">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="John Doe">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="someone@gmail.com">
                                </div>
                            </div>
                            <div class="col-12 mt-3 mb-3">
                                <div class="form-group">
                                    <label for="message" class="form-label">Message</label>
                                    <textarea name="message" id="message" cols="10" rows="3" class="form-control" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div class="col-12 text-end">
                                <button class="green-button">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.card-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;

    width: 100%;
    height: 286px;

    background: #F6F8F9;
    box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
}

.card-2 {
    width: 100%;
    height: 286px;
    left: 474px;
    top: 0px;

    background: #F6F8F9;
    box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
}
</style>