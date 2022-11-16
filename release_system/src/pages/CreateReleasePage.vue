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
      <field-with-toggle-button class="input__field"></field-with-toggle-button>
    </div>
  </div>

</template>

<script>

export default {
  name: "CreateReleasePage",
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
  margin-left: 22%;
  margin-top: 15px;
}

.nav__menu {
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  float: left;
  width: 17%;
}
.content{
  float: right;
  width: 83%;
}
</style>