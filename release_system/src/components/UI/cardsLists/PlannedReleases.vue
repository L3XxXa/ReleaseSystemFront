<template>
    <div class="planned__releases">
        <div class="status__container">
            <p class="status__text">Запланированы</p>
        </div>
        <cards-list class="list__container" :releases="releases" @changeVisible="updateVisible"/>
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
  methods:{
    updateVisible(value){
      console.log(value + " approve requested releases")
      this.$emit('changeVisible', value)
    }
  }
}
</script>

<style scoped>
.planned__releases {
    border-radius: 20px;
    background-color: #E4E4E4;
}

.status__container {
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
    margin-left: 5px;
    margin-right: 5px;
}
</style>