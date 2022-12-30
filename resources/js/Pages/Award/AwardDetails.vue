<template>
    <div class="top-hero-image">
    </div>
    <div class="container">
        <div class="row p-5">
            <div class="col-12">
                <div class="news-title">
                    <span>{{ award.title }}</span>
                    <span>{{ award.date }}</span>
                </div>
                <br><br>
                <p>{{ award.description }}</p>
                <br>
                <strong>The Judging Process</strong>
                <p>{{ award.judging_process }}</p>
                <br>
                <strong>Eligibility for the Award</strong>
                <ul>
                    <li v-for="item in award.eligibility" :key="item">{{ item }}</li>
                </ul>
                <br>
                <strong>Award Winning Criteria</strong>
                <ul>
                    <li v-for="item in award.criteria" :key="item">{{ item }}</li>
                </ul>
                <br>
                <p>{{ award.criteria_text }}</p>
                <br>
                <strong>The Prize </strong>
                <ul>
                    <li v-for="item in award.prize" :key="item">{{ item }}</li>
                </ul>
                <br><br>
                <img src="../../Assets/Trophy.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import award from "@/Data/award";

export default {
    data() {
        return {
            award: {}
        }
    },
    async mounted() {
        this.award = award[`award-${this.$route.params.id}`]
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