<template>
  <div class="card">
    <p class="content__1">
      {{name}}
    </p>
    <p class="content__1" >
      {{date}}
    </p>
  </div>
</template>

<script>
export default {
  name: "ReleaseCard",
  data(){
    return{
      name: "Lorem ipsum",
      date: "12.01.2022 - 14.02.2024"
    }
  }
}
</script>

<style scoped>
  .content__1{
    font-family: Montserrat;
    font-size: 20px;
    text-align: center;

  }
  .card{
    border: 2px solid black;
    padding: 20px;
    border-radius: 15px;
    width: 20%;

  }
</style>