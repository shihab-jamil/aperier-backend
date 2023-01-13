<template>
    <section class="container-fluid mb-5">
        <section-title title="News" />
        <div class="container">
            <div class="row" v-for="item in news" :key="item.id">
                <div class="col-md-3 col-12">
                    <img :src="`${domain}/storage/upload/news/${item.image}`" class="img-fluid" alt="">
                </div>
                <div class="col-md-9 col-12 px-md-5 px-3 mb-4 d-flex flex-column">
                    <p class="news-title">{{ item.title }}</p>
                    <p class="news-date">{{ item.date }}</p>
                    <p class="news-description">
                        <span v-html="item.content"></span>
                        <router-link :to="{ name: 'News Details', params: { id: item.id } }">Read More</router-link>
                    </p>
                </div>
                <hr class="col-md-11 col-11">
            </div>

            <div class="row text-end pr-2">
                <p>
                    <router-link :to="{ name: 'News List' }">More News</router-link>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
import config from "../../Data/config";

export default {
    props : ["news"],
    data(){
        return{
            domain : config.domain
        }
    }
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
