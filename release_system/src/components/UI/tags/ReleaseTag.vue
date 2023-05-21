<template>
  <div class="container">
    <p class="text">{{ tag }}</p>
  </div>
</template>

<script>
export default {
  name: "ReleaseTag",
  props:{
    tag: {
      required: true
    }
  },
  data(){
    return{
      statusText: ''
    }
  },
}

</script>

<style scoped>
.container{
  width: max-content;
  background-color: #62DF8D;
  font-size: medium;

  border-radius: 30px;
  text-align: center;
}
</style>