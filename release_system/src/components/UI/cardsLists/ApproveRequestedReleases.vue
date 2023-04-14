<template>
    <div class="approve__requested">
        <div class="status__container">
            <p class="status__text">Ожидают подтверждения</p>
        </div>
        <cards-list :releases="releases"/>
    </div>
</template>

<script>
export default {
    name: "ApproveRequestedReleases",
    props: {
        releases: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.approve__requested {
    border-radius: 20px;
    background-color: #E4E4E4;
    width: 25%;
    height: 100%;
}

.status__container {
    width: max-content;
    background-color: #DFB562;
    font-size: medium;
    border-radius: 30px;
    text-align: center;
    margin-left: 5%;
}

.status__text {
    font-family: Montserrat;
    padding: 5px;
}
</style>