<template>
    <div class="planned__releases">
        <div class="status__container">
            <p class="status__text">Запланированы</p>
        </div>
        <cards-list :releases="releases"/>
    </div>
</template>

<script>
export default {
    name: "PlannedReleases",
    props: {
        releases: {
            type: Array,
            required: true
        }
    },
}
</script>

<style scoped>
.planned__releases {
    border-radius: 20px;
    background-color: #E4E4E4;
    width: 25%;
    height: 100%;
}
.status__container{
    width: max-content;
    background-color: #8D98FF;
    font-size: medium;
    border-radius: 30px;
    text-align: center;
    margin-left: 5%;
}
.status__text {
    padding: 5px;
    font-family: Montserrat;

}
</style>