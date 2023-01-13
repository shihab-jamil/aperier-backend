<template>
    <div class="top-hero-image">

    </div>
    <section-title-component title="All News" class="mt-3" />
    <div class="container p-5">
        <div class="row g-4">
            <div class="col-12" v-for="item in data" :key="item.id">
                <NewsListCardComponent :news="item" />
            </div>
        </div>
    </div>
</template>

<script>
import NewsListCardComponent from '../../Components/News/NewsListCardComponent.vue';
import SectionTitleComponent from '../../Components/SectionTitleComponent.vue';
import config from "../../Data/config";
import axios from "axios";

export default {
    components: { NewsListCardComponent, SectionTitleComponent },
    data(){
        return{
            data : [],
            domain : config.domain
        }
    },
    async mounted(){
        this.data = (await axios.get(`${config.domain}/api/news`)).data.data
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
</style>
