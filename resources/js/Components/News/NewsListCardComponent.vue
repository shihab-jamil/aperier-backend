<template>
    <div class="news-card">
        <img :src="`/storage/upload/news/${news.image}`" class="img-fluid" alt="">
        <div class="news-card-body">
            <div class="news-title">
                <span>{{ news.title }}</span>
                <span>{{ news.date }}</span>
            </div>
            <div class="px-4">
                <router-link :to="{ name: 'News Details', params: { id: news.id } }"><i
                        class="fa-solid fa-arrow-right bg-secondary p-2 rounded-pill text-white"></i></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import config from "../../Data/config";

export default {
    props: ["news"],
    data(){
        return{
            domain : config.domain
        }
    }
}
</script>

<style scoped>
img {
    width: 150px !important;
}

.news-card {
    display: flex;
    gap: 30px;
    background-color: #F3F3F3;
    border-radius: 10px;
}

.news-card:hover {
    cursor: pointer;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.38);
    transform: scale(1.01);
    transition: .3s ease;
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

.news-card-body {
    display: flex;
    width: 100%;
    align-items: center;
    ;
    justify-content: space-between;
}
</style>
