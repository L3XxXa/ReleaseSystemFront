<template>
    <div class="list__container" :class="{'list__container__no__overflow':releases.length <= 3}">
        <release-card
                v-for="release in releases"
                :key="release.id"
                :release="release"
        />

    </div>
</template>

<script>
export default {
    name: "CardsList",
    props:{
        releases: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

</style>