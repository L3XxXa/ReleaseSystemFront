<template>
  <input class="input" type="text"  @input="updateInput" :value="modelValue">
</template>

<script>
export default {
  name: "InputField",
  props:{
    modelValue:String
  },
  methods:{
    updateInput(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }

}
</script>

<style scoped>
  .input{
    background-color: #F5F5F5;
    border: none;
    width: 60%;
    height: 50px;
    border-radius: 10px;
    font-family: Montserrat;
    font-size: 20px;
    padding-left: 15px;
  }
</style>