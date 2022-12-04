<template>
    <section class="home">
      <div class="top-hero-image">
        <h2 class="welcome-header">Welcome to</h2>
        <p class="gree-heading">Aperier Publishing</p>
        <div class="what-are-we">
            <p>Open Research</p>
            <p>Speed</p>
            <p>Quality</p>
            <p>Impact</p>
            <p>Visibility</p>
        </div>
      </div>
      <div class="join-us container-fluid p-5">
            <div class="row">
                <div class="col-8 mt-5 d-flex flex-column">
                    <p class="underline-title mt-5">Interested in joining our global network?</p>
                    <p>We pride ourselves on providing a supportive and accessible service for our authors throughout the
                        publishing process. We offer fast publication while providing rigorous peer review to maintain the
                        integrity of information. We are committed to the highest standards of peer review. We’re committed
                        to promoting your research as widely as we can and providing as much visibility and exposure for
                        your article as possible.
                        Join US</p>
                    <button class="align-self-end green-button">Join us</button>
                </div>
                <div class="col-4">
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
    padding: 65px 0px;

}

.top-hero-image{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 260px;
  background: url(../../Assets/welcome_background.png) ;
  background-size: cover;
}

.welcome-header {
    font-weight: 700;
    font-size: 48px;
}

.gree-heading {
    width: 302px;
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
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 124px;

    width: 1274px;
    height: 24px;
}

.join-us {
    background-color: #F3F3F3;
}

.underline-title{
    font-weight: 700;
font-size: 32px;
line-height: 39px;
letter-spacing: 0.05em;
text-decoration-line: underline;
}


</style>