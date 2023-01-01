<template>
    <section class="container-fluid mb-5">
        <section-title title="News" />
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-12">
                    <img src="../../Assets/news_1.png" class="img-fluid" alt="">
                </div>
                <div class="col-md-9 col-12 px-md-5 px-3 mb-4 d-flex flex-column">
                    <p class="news-title">Recruiting Editorial Board Members – All Journals</p>
                    <p class="news-date">Jun 10, 2020</p>
                    <p class="nes-description">Editorial board members must be peers whose judgement is highly regarded
                        within the journal’s main discipline; or their decisions may not be regarded as valid.
                        Publication number and academic aptitude are the top factors for editorial board membership. All
                        potential board members, will provide with a brief description of the role, outlining the
                        responsibilities, and clearly stating that this is a voluntary position. <router-link
                            :to="{ name: 'News Details', params: { id: 1 } }">Read More</router-link></p>
                </div>
                <hr class="col-md-11 col-11">
            </div>
            <div class="row">
                <div class="col-md-3 col-12">
                    <img src="../../Assets/news_2.png" class="img-fluid" alt="">
                </div>
                <div class="col-md-9 col-12 px-md-5 px-3 mb-4 d-flex flex-column">
                    <p class="news-title">Publish Your Book</p>
                    <p class="news-date">Nov 01, 2021</p>
                    <p class="nes-description">Work with a publisher with the reach, reputation and relationship skills
                        to guide you through your first (or fiftieth) book.
                        Whether you’re considering publishing a textbook in your field or have been asked to contribute
                        to an essential handbook, our vision for your work is simple: create the highest quality
                        publication and make it widely accessible. <router-link
                            :to="{ name: 'News Details', params: { id: 2 } }">Read More</router-link></p>
                </div>
                <hr class="col-md-11 col-11">
            </div>
            <div class="row">
                <div class="col-md-3 col-12">
                    <img src="../../Assets/news_3.png" class="img-fluid" alt="">
                </div>
                <div class="col-md-9 col-12 px-md-5 px-3 mb-4 d-flex flex-column">
                    <p class="news-title">Call for Seminar and Workshop Proposals</p>
                    <p class="news-date">Jan 01, 2022</p>
                    <p class="nes-description">Aperier keen on enhancing young researcher skills and capability in
                        various academic and research aspects. This is a great way to teach hands-on skills because it
                        offers participants a chance to understand new methods/concepts in the academia.
                        We therefore invite you to submit proposals for one-day or two-day workshops in any area related
                        to your field of expertise. In particular, workshops on challenging, emerging areas related to
                        the hot topics or methodological practices are.. <router-link
                            :to="{ name: 'News Details', params: { id: 3 } }">Read More</router-link></p>
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
