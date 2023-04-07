<template>
  <div class="in__process">
    <div class="status">
      <div class="status__wrapper">
        <p class="status__text">В процессе</p>
      </div>
      <div class="amount__wrapper">
        <p class="amount">{{ amount }}</p>
      </div>
    </div>
    <release-card
        v-for="release in releases"
        :release="release"
        :key="release.id"
        @click="showInfoAboutRelease"
    />
  </div>
</template>

<script>
import ReleaseCard from "@/components/UI/card/ReleaseCard";

export default {
  name: "CardsList",
  components: {ReleaseCard},
  props: {
    releases: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      amount: 0
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
  width: 21%;
  height: 80%;
  position: absolute;
}

.amount {
  font-family: Montserrat;
}

.amount__wrapper {
  width: 5%;
  display: table-cell;
}

.status {
  height: 1%;
  display: table;
  position: relative;
}

.status__wrapper {
  background-color: #62DF8D;
  border-radius: 30px;
  text-align: center;
  display: table-cell;
  margin-left: 5%;
}

.status__text {
  font-family: Montserrat;
}
</style>