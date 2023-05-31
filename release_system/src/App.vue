<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import router from "@/router/router";

export default {
  name: 'App',
  data() {
    return {
      link: 'http://localhost:8080' // Поменять ссыль на нужную
    }
  },
  methods:{
    checkCookies(){
      let loginCookie = this.getCookie('login')
      let passwordCookie = this.getCookie('password')
      if (loginCookie == null || passwordCookie == null){
        router.push("/login")
      }
      else{
        router.push("/releases")
      }
    },
     getCookie(cName) {
      const name = cName + "=";
      const cDecoded = decodeURIComponent(document.cookie); //to be careful
      const cArr = cDecoded.split('; ');
      let res;
      cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
      })
      return res
    }
  },
  mounted() {
    this.checkCookies()
  },
}
</script>

<style>
@font-face {
  font-family: "Montserrat" !important;
  src: local("Montserrat"), url("@/fonts/Montserrat/Montserrat-VariableFont_wght.ttf") format("truetype");
}
</style>
