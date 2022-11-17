<template>
  <div class="field">
    <p class="text">Автотесты</p>
    <button class="button__toggle" :class="{'active':isActive}" @click="toggleButton">{{isActive ? "Включены" : "Выключены"}}</button>
  </div>
</template>

<script>
export default {
  name: "fieldWithToggleButton",
  data(){
    return{
      isActive: false
    }
  },
  methods: {
    toggleButton(){
      this.isActive = !this.isActive;
    }
  },
}
</script>

<style scoped>
.field {
  background-color: #F5F5F5;
  border: none;
  width: 41.1%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  position: relative;

}
.active{
  background-color: rgba(0, 255, 56, 0.40);
  box-shadow: 0 2px 10px rgba(0,0,0, 0.2);
}

.active:hover{
  background-color: #00FF38;
}

.text {
  font-family: Montserrat;
  font-size: 20px;
  margin-left: 15px;
  margin-top: 13px;
  float: left;
  position: absolute;
  transition-duration: 1s;
}

.button__toggle {
  position: absolute;
  right: 10px;
  margin-top: 5px;
  height: 40px;
  font-family: Montserrat;
  color: black;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  width: 110px;
  box-shadow: 0 2px 10px rgba(0,0,0, 0.2);
}

</style>