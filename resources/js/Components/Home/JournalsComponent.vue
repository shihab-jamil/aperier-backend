<template>
    <section class="container-fluid gray-color p-md-5 p-3">
        <section-title title="Journals" />
        <div class="container">
            <div class="row g-md-3 g-5 justify-content-center">
                <div class="col-md-3 col-6 d-flex flex-column align-items-center">
                    <router-link :to="{ name: 'Journal Details', params: { id: 1 } }">
                        <img src="../../Assets/journal_1.png" class="img-fluid">
                        <p class="journal-title">Sustainability Studies</p>
                    </router-link>
                </div>
                <div class="col-md-3 col-6 d-flex flex-column align-items-center">
                    <router-link :to="{ name: 'Journal Details', params: { id: 2 } }">
                        <img src="../../Assets/journal_2.png" class="img-fluid">
                        <p class="journal-title">Business Studies</p>
                    </router-link>
                </div>
                <div class="col-md-3 col-6 d-flex flex-column align-items-center">
                    <router-link :to="{ name: 'Journal Details', params: { id: 3 } }">
                        <img src="../../Assets/journal_3.png" class="img-fluid">
                        <p class="journal-title">Bibliometric and Systematic Reviews</p>
                    </router-link>
                </div>
                <div class="col-md-3 col-6 d-flex flex-column align-items-center">
                    <router-link :to="{ name: 'Journal Details', params: { id: 4 } }">
                        <img src="../../Assets/journal_4.png" class="img-fluid">
                        <p class="journal-title">Marketing Studies</p>
                    </router-link>
                </div>
                <div class="col-md-3 col-6 d-flex flex-column align-items-center">
                    <router-link :to="{ name: 'Journal Details', params: { id: 5 } }">
                        <img src="../../Assets/journal_5.png" class="img-fluid">
                        <p class="journal-title">Finance Studies</p>
                    </router-link>
                </div>
                <div class="col-md-3 col-6 d-flex flex-column align-items-center">
                    <router-link :to="{ name: 'Journal Details', params: { id: 6 } }">
                        <img src="../../Assets/journal_6.png" class="img-fluid">
                        <p class="journal-title">Tourism Studies</p>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.journal-title {
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    /* or 147% */

    text-align: center;

    color: #000000;
    padding: 20px 0px;
}
</style>