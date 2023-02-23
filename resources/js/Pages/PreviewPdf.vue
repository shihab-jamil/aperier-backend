<template>
    <iframe class="pdf" :src="url" frameborder="0"></iframe>
</template>

<script>
export default {
    name: "PreviewPdf",
    props : ["url"],
    mounted() {
        console.log(this.url)
    }
}
</script>

<style scoped>
.pdf{
    width: 100%;
    height: 810px;
}
</style>
