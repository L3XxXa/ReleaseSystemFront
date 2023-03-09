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
export default {
  name: "ListOfReleasesPage",
  components: {ReleaseCard}
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

.content{
  float: right;
  width: 83%;
  margin-top: 30px;
}

.heading{
  font-family: Montserrat;
  font-weight: normal;
  margin-left: 30%;
}
</style>