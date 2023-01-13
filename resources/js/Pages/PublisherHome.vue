<template>
  <HomeComponent />
  <NewsComponent :news="news" />
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
import axios from "axios";
import config from "../Data/config";
export default {
    components: { HomeComponent, NewsComponent, JournalsComponent, AwardComponent, AboutComponent, ContactComponent },
    data(){
      return{
          news : [],
      }
    },
    async mounted(){
      this.news = (await axios.get(`${config.domain}/api/news`)).data.data
      if(this.news.length > 2){
          this.news = this.news.slice(0,3)
      }
      this.news.map(item => {
          item.content = item.content.replace(/<br>/g,'').substring(0, 330)+".....";
          return item;
      })

    }
}
</script>

<style>

</style>
