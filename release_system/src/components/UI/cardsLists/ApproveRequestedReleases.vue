<template>
    <div class="approve__requested">
        <div class="status__container">
            <p class="status__text">Ожидают подтверждения</p>
        </div>
        <cards-list :releases="releases" @changeVisible="updateVisible" @errorChange="errorChangeEmit"/>
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
    },
  methods:{
    updateVisible(value){
      console.log(value + " approve requested releases")
      this.$emit('changeVisible', value)
    },
    errorChangeEmit(value){
      this.$emit('errorChange', value)

    }
  }
}
</script>

<style scoped>
.approve__requested {
    border-radius: 20px;
    background-color: #E4E4E4;
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
    margin-left: 5px;
    margin-right: 5px;
}
</style>