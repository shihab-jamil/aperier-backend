<template>
  <HomeComponent />
  <NewsComponent />
  <JournalsComponent />
  <AwardComponent />
  <AboutComponent />
  <ContactComponent />
</template>

<script>
import HomeComponent from '../Components/Home/HomeComponent.vue';
import NewsComponent from '../Components/Home/NewsComponent.vue';
import JournalsComponent from '../Components/Home/JournalsComponent.vue';
import AwardComponent from '../Components/Home/AwardComponent.vue';
import AboutComponent from '../Components/Home/AboutComponent.vue';
import ContactComponent from '../Components/Home/ContactComponent.vue';
export default {
  components: { HomeComponent, NewsComponent, JournalsComponent, AwardComponent, AboutComponent, ContactComponent }
}
</script>

<style>

</style>
