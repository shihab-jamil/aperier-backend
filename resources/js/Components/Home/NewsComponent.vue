<template>
    <section class="container-fluid mb-5">
        <section-title title="News" />
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <img src="../../Assets/news_1.png" class="img-fluid" alt="">
                </div>
                <div class="col-9 px-5 mb-4 d-flex flex-column">
                    <p class="news-title">Announce best paper award</p>
                    <p class="news-date">Nov 25, 2021</p>
                    <p class="nes-description">Ten years ago, Tiger Aviation helped to complete a bespoke training
                        programme for the Kuwait Police Department and qualified sixteen young Police Officers. This
                        course allowed them to commence their careers as operational Helicopter Pilots. The Tiger
                        Aviation team struggled hard to win the contract, offering, not only a bespoke foundation Police
                        Training programme, but a promise!.. <a href="#">Read More</a></p>
                </div>
                <hr>
            </div>
            <div class="row">
                <div class="col-3">
                    <img src="../../Assets/news_2.png" class="img-fluid" alt="">
                </div>
                <div class="col-9 px-5 mb-4 d-flex flex-column">
                    <p class="news-title">Launch CGJ Journal</p>
                    <p class="news-date">Nov 25, 2021</p>
                    <p class="nes-description">Ten years ago, Tiger Aviation helped to complete a bespoke training
                        programme for the Kuwait Police Department and qualified sixteen young Police Officers. This
                        course allowed them to commence their careers as operational Helicopter Pilots. The Tiger
                        Aviation team struggled hard to win the contract, offering, not only a bespoke foundation Police
                        Training programme, but a promise!.. <a href="#">Read More</a></p>
                </div>
                <hr>
            </div>
            <div class="row">
                <div class="col-3">
                    <img src="../../Assets/news_3.png" class="img-fluid" alt="">
                </div>
                <div class="col-9 px-5 mb-4 d-flex flex-column">
                    <p class="news-title">Kuwait Police Pilot Safety Update</p>
                    <p class="news-date">Nov 25, 2021</p>
                    <p class="nes-description">Ten years ago, Tiger Aviation helped to complete a bespoke training
                        programme for the Kuwait Police Department and qualified sixteen young Police Officers. This
                        course allowed them to commence their careers as operational Helicopter Pilots. The Tiger
                        Aviation team struggled hard to win the contract, offering, not only a bespoke foundation Police
                        Training programme, but a promise!.. <a href="#">Read More</a></p>
                </div>
            </div>
            <div class="row text-end">
                <p>
                    <router-link :to="{ name: 'News List' }">More News</router-link>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.news-col-gap {
    gap: 0px;
}

.news-title {
    font-weight: 600;
    font-size: 24px;
    line-height: 40px;
    /* identical to box height, or 167% */


    color: #000000;
}

.news-date {
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    /* identical to box height, or 200% */


    color: #999999;
}

.news-description {
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    /* or 125% */


    color: #777777;
}

.text-end p {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: underline;

    color: #494747;
}
</style>