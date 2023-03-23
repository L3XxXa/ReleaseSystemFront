<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      link: 'http://localhost:8080' // Поменять ссыль на нужную
    }
  }
}
</script>

<style>
@font-face {
  font-family: "Cairo";
  src: local("Cairo"), url("@/fonts/Cairo/Cairo-VariableFont_wght.ttf") format("truetype");
}



</style>
