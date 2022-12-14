<template>
  <section class="container-fluid">
    <div class="section-title">
            <h2 class="section-title-h2">
                {{ title }}
            </h2>
        </div>
  </section>
</template>

<script>
export default {
    props : ["title"],
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
    .section-title {
    text-align: center;
    padding-bottom: 20px;
}

.section-title-h2 {
    font-size: 32px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    color: #587135;
}

.section-title-h2::before {
    content: "";
    position: absolute;
    display: block;
    width: 120px;
    height: 1px;
    background: #587135;
    bottom: 1px;
    left: calc(50% - 60px);
}

.section-title-h2::after {
    content: "";
    position: absolute;
    display: block;
    width: 40px;
    height: 4px;
    background: #587135;
    bottom: 0;
    left: calc(50% - 20px);
}
</style>