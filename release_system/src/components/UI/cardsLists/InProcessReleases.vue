<template>
    <div class="in__process">
        <div class="status__container">
            <p class="status__text">В процессе</p>
        </div>
    <cards-list :releases="releases"/>
    </div>
</template>

<script>
export default {
    name: "InProcessReleases",
    props: {
        releases: {
            type: Array,
            required: true
        }
    },
}
</script>

<style scoped>
.in__process {
    border-radius: 20px;
    background-color: #E4E4E4;
    width: 25%;
    height: 100%;
}

.status__container {
    position: relative;
    background-color: #62DF8D;
    font-size: medium;
    width: 35%;
    border-radius: 30px;
    text-align: center;
    margin-left: 5%;
}

.status__text {
    font-family: Montserrat;
}
</style>