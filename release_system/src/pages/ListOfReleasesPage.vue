<template>
  <div>
    <div class="nav__menu">
      <navigation-menu></navigation-menu>
    </div>
    <div class="content">
      <h1 class="heading">
        Список релизов
      </h1>
      <h3 v-show="releases.length === 0" class="no__releases">Нет запланированных релизов</h3>
      <div v-show="releases.length > 0">
        <cards-list :releases="approveRequestedReleases"></cards-list>
      </div>
    </div>
  </div>
</template>

<script>
import App from "@/App.vue";
import api from "@/api/Api";

export default {
  name: "ListOfReleasesPage",
  data() {
    return {
      releases: [],
      approveRequestedReleases: [],
      plannedReleases: [],
      inProgressReleases: [],
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
      } else {
        alert("Ошибка")
      }
      this.divideReleasesByStatus(response.data.Message)
    },

    divideReleasesByStatus(releases) {
      for (let i = 0; i < releases.length; i++) {
        switch (releases[i].status) {
          case "approval_requested":
            this.approveRequestedReleases.push(releases[i])
            break
          case "planned":
            this.plannedReleases.push(releases[i])
            break
          case "in_progress":
            this.inProgressReleases.push(releases[i])
            break
        }
      }
    }
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

.no__releases {
  font-family: Montserrat;
  font-weight: normal;
  margin-left: 29%;
}
</style>