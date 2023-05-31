<template>
  <logo-button @click="$router.push('/releases')"/>
  <navigation-menu-button @click="$router.push('/createRelease')">
    <img src="@/assets/navigationMenuImages/plus-symbol.png" class="img">
    Запланировать релиз
  </navigation-menu-button>
  <navigation-menu-button @click="$router.push('/releases')">
    <img src="@/assets/navigationMenuImages/list-symbol.png" class="img">
    Список релизов
  </navigation-menu-button>
  <navigation-menu-button @click="logout">
    <img src="@/assets/navigationMenuImages/log-out-symbol.png" class="img">
    Выйти
  </navigation-menu-button>
</template>

<script>
import router from "@/router/router";

export default {
  name: "NavigationMenu",
    methods:{
        logout(){
            router.push("/login")
            document.cookie = "password="
            document.cookie= "logged=false"
        }
    }
}
</script>

<style scoped>
.img {
  height: 25px;
  width: 25px;
  padding-right: 10px;
  align-self: center;
}
</style>