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
export default {
  name: "NavigationMenu",
}
</script>

<style scoped>
.img {
  height: 30px;
  width: 30px;
  padding-right: 10px;
  align-self: center;
}
</style>