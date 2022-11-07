<template>
  <div class="app">
    <navigation-menu></navigation-menu>
    <router-view></router-view>
  </div>
</template>

<script>

import NavigationMenu from "@/components/navigationMenu/NavigationMenu";
export default {
  name: 'App',
  components: {NavigationMenu},

}
</script>

<style>
  @font-face {
    font-family: "Cairo";
    src: local("Cairo"), url("@/fonts/Cairo/Cairo-VariableFont_wght.ttf") format("truetype");
  }


</style>
