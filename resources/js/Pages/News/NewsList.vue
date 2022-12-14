<template>
    <div class="top-hero-image">

    </div>
    <section-title-component title="All News" class="mt-3" />
    <div class="container p-5">
        <div class="row g-4">
            <div class="col-12">
                <NewsListCardComponent src="../src/Assets/Trophy.png" title="News 1" date="25 Nov" id="1" />
            </div>
            <div class="col-12">
                <NewsListCardComponent src="../src/Assets/Trophy.png" title="News 2" date="25 Nov" id="2" />
            </div>
            <div class="col-12">
                <NewsListCardComponent src="../src/Assets/Trophy.png" title="News 3" date="25 Nov" id="3" />
            </div>
            <div class="col-12">
                <NewsListCardComponent src="../src/Assets/Trophy.png" title="News 4" date="25 Nov" id="4" />
            </div>
            <div class="col-12">
                <NewsListCardComponent src="../src/Assets/Trophy.png" title="News 5" date="25 Nov" id="5" />
            </div>
            <div class="col-12">
                <NewsListCardComponent src="../src/Assets/Trophy.png" title="News 6" date="25 Nov" id="6" />
            </div>
        </div>
    </div>
</template>

<script>
import NewsListCardComponent from '../../Components/News/NewsListCardComponent.vue';
import SectionTitleComponent from '../../Components/SectionTitleComponent.vue';

export default {
    components: { NewsListCardComponent, SectionTitleComponent }
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