<template>
  <div>
    <div class="nav__menu">
      <navigation-menu></navigation-menu>
    </div>
    <div class="content">
      <h1 class="heading">
        Список релизов
      </h1>
      <release-card>

      </release-card>
    </div>
  </div>
</template>

<script>
import ReleaseCard from "@/components/ReleaseCard";
import axios from "axios";
import App from "@/App.vue";

export default {
  name: "ListOfReleasesPage",
  components: {ReleaseCard},
  methods: {
    async getData() {
      const url = new URL(App.data().link)
      url.pathname = "api/v1/releases"
      await axios.get(url.href).then(response => {
        console.log(response.data.Message[0])
      }).catch(error => {
        console.log(error)
      })
    },

  },
  mounted() {
    this.getData()
  }

}

</script>

<style scoped>
.nav__menu {
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  float: left;
  width: 17%;
  margin-left: 4px;
  margin-top: 4px;
}

.content {
  float: right;
  width: 83%;
  margin-top: 30px;
}

.heading {
  font-family: Montserrat;
  font-weight: normal;
  margin-left: 30%;
}
</style>