<template>
  <button class="button">
    <img src="@/assets/img/delete.png" class="img">
  </button>
</template>

<script>
export default {
  name: "DeleteReleaseButton"
}
</script>

<style scoped>
.img{
  height: 30px;
  width: 30px;
  align-self: center;
}
.button{
  border-radius: 10px;
  background-color: white;
  border-width: 0;
  padding: 5px;
  box-shadow: 0 0 0 3px #F5F5F5;
}
.button:hover{
  background-color: #F5F5F5;
}
</style>