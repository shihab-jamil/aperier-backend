<template>
    <section class="container-fluid gray-color p-lg-5 p-md-4" id="about">
        <section-title title="About" />
        <div class="container">
            <div class="about-card p-md-4 p-3">
                <p>Aperier Publishing</p>
                <p>A pioneer in scholarly, open access publishing, Aperier has supported academic communities since
                    2018. Based in Palestine, Aperier has the mission to foster open scientific exchange in all forms,
                    across all disciplines. <br><br>

                    Our new diverse and open access journals, are supported by many academic experts who share our
                    mission, values, and commitment to providing high-quality service for our authors. We serve scholars
                    from around the world to ensure the latest research is freely available and all content is
                    distributed under a Creative Commons Attribution License (CC BY). <br><br>

                    Aperier have target to publish journal articles that are ranked as high impact within their fields.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.about-card {
    width: 100%;
    background: #F6F8F9;
    box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.about-card p:nth-child(1) {
    font-weight: 600;
    font-size: 20px;
    line-height: 40px;
    /* identical to box height, or 200% */

    text-align: center;

    color: rgba(0, 0, 0, 0.6);
}
</style>
