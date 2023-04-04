<template>
  <div>
    <button class="button">
      <img src="@/assets/logo.png" class="logo__img">
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
  height: 100px;
  width: 230px;
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