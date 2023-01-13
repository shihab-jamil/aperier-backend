<template >
    <footer class="main-footer">
        <div class="footer ">
            <span>©2022 Aperier Publishing. All Rights Reserved.</span>
            <div class="d-flex gap-3">
                <i class="fa-brands fa-linkedin fa-xl"></i>
                <i class="fa-brands fa-facebook fa-xl"></i>
                <i class="fa-brands fa-twitter fa-xl"></i>
            </div>
            <span>
                <router-link :to="{ name: 'Policy and Condition' }" style=" text-decoration: none; color: white; ">Terms
                    &
                    Conditions | Privacy policy </router-link> | FQA
            </span>
        </div>
    </footer>
</template>
<script>
export default {

}
</script>

<style scoped>
.main-footer {
    background: #536F2E;
}

.footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

}
</style>