<template>
  <div>
    <div class="nav__menu">
      <navigation-menu></navigation-menu>
    </div>
    <div class="content">
      <h1 class="heading">
        Список релизов
      </h1>
      <cards-list :releases="releases"></cards-list>
    </div>
  </div>
</template>

<script>
import App from "@/App.vue";
import CardsList from "@/components/UI/cardsList/CardsList";
import api from "@/api/Api";

export default {
  name: "ListOfReleasesPage",
  components: {CardsList},
  data() {
    return {
      releases: []
    }
  },
  methods: {
    async getData() {
      const url = new URL(App.data().link)
      url.pathname = "api/v1/releases"
      let response
      await (async () => {
        response = await api.methods.getReleases()
      })()
      console.log(response)
      if (response.status === 200) {
        this.releases = [...this.releases, ...response.data.Message]
      }
      else {
        alert("Ошибка")
      }
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