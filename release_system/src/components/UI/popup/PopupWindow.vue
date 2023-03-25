<template>
  <div class="popup__window">
    <p class="content__1">
      <slot>
      </slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "PopupWindow"
}
</script>

<style scoped>
.content__1 {
  font-family: Montserrat;
  font-size: 20px;
  text-align: center;
}

.popup__window{
  border: 2px solid black;
  padding: 20px;
  border-radius: 15px;
  height: 80px;
  width: 20%;
  margin-bottom: 20px;
}

</style>