<template>
    <div class="top-hero-image">

    </div>
    <section-title-component title="All Awards" class="mt-3" />
    <div class="container p-5">
        <div class="row g-4">
            <div class="col-12" v-for="item in awardList" :key="item.id">
                <AwardListCardComponent :title="item.title" :date="item.date" :id="item.id" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AwardListCardComponent from '../../Components/Award/AwardListCardComponent.vue';
import SectionTitleComponent from '../../Components/SectionTitleComponent.vue';
import config from "@/Data/config";
export default {
    components: { AwardListCardComponent, SectionTitleComponent },
    data() {
        return {
            awardList: {}
        }
    },
    async mounted() {
        this.awardList = (await axios.get(`${config.domain}/storage/json/award.json`)).data
    }
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