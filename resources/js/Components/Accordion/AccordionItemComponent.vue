<template>
    <div class="accordion-item">
        <h2 class="accordion-header" :id="heading_id">
            <button class="accordion-button" :class="heading_id != 'headingOne' ? 'collapsed' : ''" type="button"
                data-bs-toggle="collapse" :data-bs-target="'#' + collapse_id" aria-expanded="true"
                :aria-controls="collapse_id">
                <strong>{{ title }}</strong>
            </button>
        </h2>
        <div :id="collapse_id" class="accordion-collapse collapse" :class="heading_id == 'headingOne' ? 'show' : ''"
            :aria-labelledby="heading_id" data-bs-parent="#accordionExample">
            <!-- <div class="accordion-body" v-html="description"></div> -->
            <div class="accordion-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["heading_id", "collapse_id", "title"]
}
</script>

<style>

</style>