<template>
    <section class="container-fluid white-color p-5">
        <section-title title="Awards" />
        <div class="container">
            <div class="row" >
                <div class="col-4">
                    <div class="custom-card">
                        <p class="custom-card-title">Best Article Award 2023</p>
                        <p class="custom-card-text">We are pleased to announce the “Best Paper Award” for research and
                            review articles published in Aperier in 2023. One review and one research article will
                            receive an award each. The papers will be selected after thorough evaluation by the Award
                            Committee.</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="custom-card">
                        <p class="custom-card-title">Best Reviewer Award 2023</p>
                        <p class="custom-card-text">We wish to acknowledge our reviewers who so generously offer their
                            time to review the papers submitted to Aperier journals by presenting an award to the
                            reviewers who have demonstrated their dedication, professionalism, and timeliness in
                            reviewing manuscripts.</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="custom-card">
                        <p class="custom-card-title">Travel Award 2023</p>
                        <p class="custom-card-text">This award provides financial support for the winners to attend an
                            international conference in the field of cardiovascular development and disease to be held
                            in 2023, in order to hold a presentation, present a poster, or both.</p>
                    </div>
                </div>
            </div>
            <div class="row text-end mt-4">
                <p>
                    <router-link :to="{ name: 'Award List' }">Read more</router-link>
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
.custom-card {
    width: 395px;
    height: 230px;
    background: #F6F8F9;
    box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ;
    padding: 30px;

}

.custom-card-title {
    font-weight: 600;
    font-size: 20px;
    line-height: 40px;
}

.custom-card-text {
    font-weight: 400;
    font-size: 13px;
    line-height: 160%;
    /* or 21px */

    text-align: center;
}

.text-end p {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: underline;

    color: #494747;
}
</style>