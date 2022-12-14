<template>
    <div class="top-hero-image">
    </div>
    <div class="container">
        <div class="row p-5">
            <div class="col-12">
                <div class="news-title">
                    <span>News Title {{ this.$route.params.id }}</span>
                    <span>15 Nov</span>
                </div>
                <br><br>
                <p>&ldquo;Business Perspectives&rdquo; issues the journals, founded by the universities and
                    organizations, and where the company itself is a founder. At the same time the &ldquo;Editorial
                    policies&rdquo; are equal and independent for all the journals without
                    exception.<br><br>Journal&rsquo;s management works closely with the publisher based on clear
                    assignment of duties and responsibility following the defined &ldquo;Publishing
                    policies&rdquo;.<br><br>We understand &ldquo;еditorial independence&rdquo; as full freedom of
                    journals&rsquo; editors when making decisions on whether or not to publish, as well as make
                    corrections in the papers or withdraw them, only based on their scientific value and without
                    intervention of the founders and the publisher of this journal, the authors and their sponsors,
                    any other institutions and persons. Also these institutions or persons cannot affect the
                    timelines of papers&rsquo; publication.<br><br>Not any commercial interests can be of priority
                    over the policy of creating high-quality reviewed journals and cannot be considered in the
                    journal.<br><br>Pursuing the independent editorial policies by the editors and members of the
                    Editorial boards cannot be a reason for their dismissal or replacement. The journals&rsquo;
                    editors obtain the unconditional right to publish the editorial paper with the aim to promote
                    their voice concerning the journal&rsquo;s editorial policy as a whole and defining the opinion
                    in every certain case to the academic circles. The publisher has no right to judge the
                    editor&rsquo;s wish to express their opinion on this matter in mass media and on the Internet.
                    The founders and employees of the publishing company cannot comment the decisions of
                    journals&rsquo; Editorial boards anywhere and under any conditions.<br><br>Under any conditions,
                    not any founder of the company &ldquo;Business Perspectives&rdquo; and its employees cannot be
                    the editors or reviewers in the journals it publishes. Now it is established that the
                    &ldquo;Business Perspectives&rdquo; founders cannot submit their manuscripts for publication in
                    the journals the company publishes.<br><br>All the decisions of the Editorial boards are made
                    independently, without any external pressure or influence, and are fully independent from the
                    publisher and any other persons. The journals operate in compliance with the Code of Conduct for
                    Journal Publishers.</p>
                <br>
                <img src="../../Assets/Trophy.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

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