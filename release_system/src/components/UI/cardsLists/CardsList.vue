<template>
    <div class="list__container" :class="{'list__container__no__overflow':releases.length <= 2}">
        <release-card
                v-for="release in sortedReleases"
                :key="release.id"
                :release="release"
                @changeVisible="updateVisible"
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
    },
    data(){
      return{
        sortedReleases: this.releases
      }
    },
    methods:{
        updateVisible(value){
          console.log(value + " cards list")
          this.$emit('changeVisible', value)
        },
        sortReleases(){
          this.sortedReleases = this.sortedReleases.sort(this.compareReleases)
          console.log(this.sortedReleases)
        },
        compareReleases(a, b){
          let date1 = new Date(a.finish_date)
          let date2 = new Date(b.finish_date)
          console.log(date1 + " is DATE1")
          console.log(date2 + " IS DATE2")
          if (date1<date2){
            return -1
          }
          if (date1>date2){
            return 1
          }
          return 0
        }
    },
    mounted() {
        this.sortReleases()
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