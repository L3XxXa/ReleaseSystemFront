<template>
  <div v-show="releases.length > 0">
    <release-card
      v-for="release in releases"
      :release="release"
      :key="release.id"
      @click="showInfoAboutRelease"
    />
  </div>
  <h3 v-show="releases.length === 0" class="no__releases">Нет запланированных релизов</h3>
</template>

<script>
import ReleaseCard from "@/components/UI/card/ReleaseCard";
export default {
  name: "CardsList",
  components: {ReleaseCard},
  props:{
    releases:{
      type: Array,
      required: true
    }
  },
  methods:{
    showInfoAboutRelease(data){
      console.log(this.releases + " " + data)
    },
  },
}
</script>

<style scoped>
.no__releases{
  font-family: Montserrat;
  font-weight: normal;
  margin-left: 29%;
}


</style>