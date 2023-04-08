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
    methods: {
        showInfoAboutRelease(data) {
            console.log(this.releases + " " + data)
        },
    },

}
</script>

<style scoped>
.in__process {
    border-radius: 20px;
    background-color: #E4E4E4;
    width: 25%;
    height: 100%;
    position: absolute;
}

.list__container {
    overflow-y: scroll;
    width: 100%;
    position: relative;
    height: 94%;
    bottom: 0;
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

.list__container__no__overflow {
    overflow-y: hidden !important;
}


.status__text {
    font-family: Montserrat;
}
</style>