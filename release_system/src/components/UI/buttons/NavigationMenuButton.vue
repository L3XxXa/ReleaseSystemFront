<template>
    <button class="button">
      <slot>

      </slot>
    </button>
</template>

<script>
export default {
  name: "NavigationMenuButton"
}
</script>

<style scoped>
.button{
  display: flex;
  padding: 5px;
  background-color: white;
  font-family: "Cairo", Montserrat, serif;
  font-size: 20px;
  border-radius: 10px;
  width: 300px;
  border: 0;
}

.button:hover{
  background-color: #E1E1E1;
}

</style>