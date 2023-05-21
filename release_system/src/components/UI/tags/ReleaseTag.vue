<template>
  <div class="container" :class="{'tag_in_process':tag==='В процессе', 'tag_planned': tag ==='Запланирован', 'tag_approve_requested' : tag === 'Ожидает подтверждения'}">
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
.tag_in_process{
  width: max-content;
  background-color: #62DF8D;
  border-radius: 30px;
}

.tag_planned{
  width: max-content;
  background-color: #8D98FF;
  border-radius: 30px;
}


.tag_approve_requested{
  width: max-content;
  background-color: #DFB562;
  border-radius: 30px;
}


.text{
  font-family: Montserrat;
  margin: 0;
}
</style>