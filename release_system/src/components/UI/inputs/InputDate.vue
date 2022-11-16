<template>
  <input class="input" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" :value="modelValue" @input="updateInput"/>
</template>

<script>
export default {
  name: "InputDate",
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
  width: 40%;
  height: 50px;
  border-radius: 10px;
  font-family: Montserrat;
  font-size: 20px;
  padding-left: 15px;
}

</style>