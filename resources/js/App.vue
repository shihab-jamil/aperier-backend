<template>
  <component :is='layout'></component>
</template>

<script>
import PublisherLayout from "./Layout/PublisherLayout.vue"
import AuthorLayout from "./Layout/AuthorLayout.vue"
export default {
  components: { PublisherLayout, AuthorLayout },
  data() {
    return {
      layout: 'PublisherLayout',
    }
  },
  methods: {
    layoutGenerator(){
      if(localStorage.getItem("userEmail")){
        this.layout = "AuthorLayout"
        if(this.$router.currentRoute.value.name === 'Home' || this.$router.currentRoute.value.name === 'Login' || this.$router.currentRoute.value.name === 'Sign Up'){
          this.$router.push({name : 'Author Dashboard'})
        }
      }else{
        this.layout = "PublisherLayout"

      }
      return this.layout
    }
  },
  mounted() {
    this.layoutGenerator()
  },
  watch: {
    '$route' (to, from) {
      this.layoutGenerator()
    }
  }
}
</script>

<style>

</style>