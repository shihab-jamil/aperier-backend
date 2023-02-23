<template>
    <HeaderComponent v-if="this.$route.name !== 'Preview Pdf'" />
    <router-view :key="$route.path" />
    <FooterComponent v-if="this.$route.name !== 'Preview Pdf'" />
</template>

<script>
import HeaderComponent from '../Components/HeaderComponent.vue';
import FooterComponent from '../Components/FooterComponent.vue';
export default {
    components: { HeaderComponent, FooterComponent }
}
</script>

<style>
.gray-color {
    background-color: #F3F3F3;
}

.white-color {
    background-color: #FFFFFF;
}

.green-button {
    padding: 9px 30px;
    background: #536F2E;
    border-radius: 50px;
    letter-spacing: 0.07em;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 15px;
    border: none;
}
</style>
