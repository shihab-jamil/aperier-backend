<template>
    <section class="home">
        <div class="top-hero-image">
            <p class="welcome-header">Welcome to</p>
            <p class="gree-heading">Aperier Publishing</p>
            <div class="what-are-we">
                <p>Open Research</p>
                <p>Speed</p>
                <p>Quality</p>
                <p>Impact</p>
                <p>Visibility</p>
            </div>
        </div>
        <div class="join-us container-fluid p-lg-5 p-md-2">
            <div class="row align-items-center">
                <div class="col-lg-8 col-md-6 col-12 mt-md-0 my-4 d-flex flex-column">
                    <p class="underline-title mt-lg-5">Interested in Joining Our Global Network?</p>
                    <p>We pride ourselves on providing a supportive and accessible service for our authors throughout
                        the
                        publishing process. We offer fast publication while providing rigorous peer review to maintain
                        the
                        integrity of information. We are committed to the highest standards of peer review. We’re
                        committed
                        to promoting your research as widely as we can and providing as much visibility and exposure for
                        your article as possible.
                        Join US</p>
                    <router-link :to="{ name: 'Sign Up' }" class="align-self-md-end align-self-start green-button">Join
                        us</router-link>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <img src="../../Assets/books.png" class="img-fluid" alt="">
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
.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 0px;

}

.top-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 260px;
    background: url(../../Assets/welcome_background.png);
    background-size: cover;
}

.welcome-header {
    font-weight: 700;
    font-size: 2em;
}

.gree-heading {
    height: 39px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    letter-spacing: 0.02em;

    color: #587135;

}


.what-are-we {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 0px;
    font-weight: 500;
    height: 24px;
    width: inherit;
}

.join-us {
    background-color: #F3F3F3;
}

.underline-title {
    font-weight: 700;
    font-size: 2rem;
    /* line-height: 39px;
    letter-spacing: 0.05em; */
    text-decoration-line: underline;
}
</style>
