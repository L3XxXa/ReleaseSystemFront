<template>
  <div class="logo">
    <img src="@/assets/logo.png" class="logo__img">
    Release system
  </div>
  <navigation-menu-button @click="$router.push('/createRelease')">
    <img src="@/assets/navigationMenuImages/plus-symbol.png" class="img">
    Запланировать релиз
  </navigation-menu-button>
  <navigation-menu-button @click="$router.push('/releasesList')">
    <img src="@/assets/navigationMenuImages/list-symbol.png" class="img" >
    Список релизов
  </navigation-menu-button>
  <navigation-menu-button @click="$router.push('/settings')">
    <img src="@/assets/navigationMenuImages/settings-symbol.png" class="img">
    Настройки
  </navigation-menu-button>
  <navigation-menu-button @click="$router.push('/logout')">
    <img src="@/assets/navigationMenuImages/log-out-symbol.png" class="img">
    Выйти
  </navigation-menu-button>
</template>

<script>
import NavigationMenuButton from "@/components/UI/buttons/NavigationMenuButton";
export default {
  name: "NavigationMenu",
  components: {NavigationMenuButton},
}
</script>

<style scoped>
.logo__img{
  height: 50px;
  width: 50px;
  padding-right: 10px;
}

.logo{
  display: flex;
  font-family: Montserrat,serif;
  font-size: 30px;
  text-align: center;
}
.img{
  height: 30px;
  width: 30px;
  padding-right: 10px;
  align-self: center;
}
</style>