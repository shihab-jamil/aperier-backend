<template >
  <div class="container-fluid footer">
    <span>©2022 Aperier Publishing. All Rights Reserved.</span>
    <div class="d-flex gap-3">
      <a href="https://www.linkedin.com/company/aperier/" target="_blank"> <i class="fa-brands fa-linkedin fa-xl"></i>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100087286333883" target="_blank"> <i
          class="fa-brands fa-facebook fa-xl"></i> </a>
      <a href="https://twitter.com/aperierpublish" target="_blank"> <i class="fa-brands fa-twitter fa-xl"></i> </a>
    </div>
    <span>
      <router-link :to="{ name: 'Policy and Condition' }" style=" text-decoration: none; color: white; ">Terms &
        Conditions | Privacy policy </router-link> | FQA
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    padding: 20px;
    gap: 10px;
  }
}

a {
  text-decoration: none;
  color: unset;
}

.footer {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  color: white;
  background: #536F2E;
}
</style>