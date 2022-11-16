<template>
  <div>
    <div class="nav__menu">
      <navigation-menu ></navigation-menu>
    </div>
    <div class="content">
      <h1 class="heading">Запланировать релиз</h1>
      <input-field class="input__field" v-model="releaseName.body" placeholder="Название релиза"></input-field>
      <input-date class=input__field v-model="releaseStartDate.body" placeholder="Дата начала релиза"> </input-date>
      <input-date class=input__field v-model="releaseEndDate.body" placeholder="Дата конца релиза"> </input-date>
      <input-field class="input__field" v-model="responsible.body" placeholder="Ответственный за релиз"></input-field>
      <input-field class="input__field" v-model="interested.body" placeholder="Заинтересованные в релизе"></input-field>
      <input-field class="input__field" v-model="link.body" placeholder="Ссылка на задачу"></input-field>
    </div>
  </div>

</template>

<script>

import InputField from "@/components/UI/inputs/InputField";
export default {
  name: "CreateReleasePage",
  components: {InputField},
  data(){
    return{
      releaseName:{
        body: ''
      },
      releaseStartDate:{
        body: ''
      },
      releaseEndDate:{
        body: ''
      },
      responsible:{
        body: ''
      },
      interested:{
        body: ''
      },
      link:{
        body: ''
      }
    }
  }
}
</script>

<style scoped>
.heading{
  font-family: Montserrat;
  font-weight: normal;
  margin-left: 30%;

}

.input__field{
  margin-left: 10%;
  margin-bottom: 15px;
}

.nav__menu {
  height: 100%; /* 100% Full-height */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  float: left;
  width: 17%;
}
.content{
  float: right;
  width: 83%;
}
</style>