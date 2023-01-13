<template>
    <div class="top-hero-image">
    </div>
    <div class="container">
        <div class="row p-5">
            <div class="col-12">
                <div class="news-title">
                    <span>{{ data.title }}</span>
                    <span>{{ data.date }}</span>
                </div>
                <br><br>
                <span v-html="data.content" ></span>
                <br>
                <img :src="`${domain}/storage/upload/news/${data.image}`" class="img-fluid" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import config from "../../Data/config";

export default {
    data(){
        return{
            data : [],
            domain : config.domain
        }
    },
    async mounted(){
        this.data = (await axios.get(`${config.domain}/api/news/${this.$route.params.id}`)).data.data
    },
}
</script>

<style scoped>
.top-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 260px;
    margin-top: 60px;
    background: url(../../Assets/glasses.png);
    background-size: cover;
}

.top-hero-image p:nth-child(1) {
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: rgba(0, 0, 0, 0.8);
}

.top-hero-image p:nth-child(2) {
    font-weight: 400;
    font-size: 24px;
    color: #000000;
}

.news-title {
    display: flex;
    flex-direction: column;
    gap: 5px;

}

.news-title span:first-child {
    font-weight: 600;
    font-size: 24px;
    /* identical to box height, or 167% */
    color: #000000;
}

.news-title span:last-child {
    font-weight: 600;
    font-size: 20px;
    color: #999999;
}
</style>
