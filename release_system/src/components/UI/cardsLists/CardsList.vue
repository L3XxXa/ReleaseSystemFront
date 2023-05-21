<template>
    <div class="list__container" :class="{'list__container__no__overflow':releases.length <= 2}">
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
    props: {
        releases: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.list__container {
    overflow-y: scroll;
    width: 100%;
    position: relative;
    height: 90%;
    bottom: 0;
}

.list__container__no__overflow {
    overflow-y: hidden !important;
}
</style>