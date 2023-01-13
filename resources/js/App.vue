<template>
  <component :is='layout'></component>
</template>

<script>
import PublisherLayout from "./Layout/PublisherLayout.vue"
import AuthorLayout from "./Layout/AuthorLayout.vue"
import AdminLayout from "./Layout/AdminLayout.vue"

export default {
  components: { PublisherLayout, AuthorLayout, AdminLayout },
  data() {
    return {
      layout: 'PublisherLayout',
    }
  },
  methods: {
    layoutGenerator() {
      if (localStorage.getItem("userEmail")) {
        if (this.$router.currentRoute.value.name === 'Home' || this.$router.currentRoute.value.name === 'Login' || this.$router.currentRoute.value.name === 'Sign Up') {
          if (localStorage.getItem("isAdmin") === 'true') {
            this.$router.push({ name: 'Admin Dashboard' })
          } else {
            this.$router.push({ name: 'Author Dashboard' })
          }
        }

        if (localStorage.getItem("isAdmin") === 'true') {
          this.layout = "AdminLayout"
        } else {
          this.layout = "AuthorLayout"
        }

      } else {
        this.layout = "PublisherLayout"
      }
      return this.layout
    }
  },
  mounted() {
    this.layoutGenerator()
  },
  watch: {
    '$route'(to, from) {
      this.layoutGenerator()
    }
  }
}
</script>

<style>
.ck-editor__editable {
    min-height: 300px;
}
</style>
