<template>
  <div>
    <button class="button">
      <img src="@/assets/logo.png" class="logo__img">
      Release system
    </button>
  </div>
</template>

<script>
export default {
  name: "LogoButton"
}
</script>

<style scoped>
.logo__img {
  height: 50px;
  width: 50px;
  padding-right: 10px;
  float: left;
}

.button{
  font-family: Montserrat, serif;
  border: none;
  font-size: 30px;
  align-self: center;
  background-color: white;
}
</style>