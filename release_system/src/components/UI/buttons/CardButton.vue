<template>
  <button class="button">
    <slot class="img">

    </slot>
  </button>
</template>

<script>
export default {
  name: "CardButton"
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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
.button:hover{
  box-shadow: 0 0 0 0;
}
</style>