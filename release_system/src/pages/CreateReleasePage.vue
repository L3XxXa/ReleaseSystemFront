<template>
  <div>
    <div class="nav__menu">
      <navigation-menu ></navigation-menu>
    </div>
    <div class="content">
      <h1 class="heading">Запланировать релиз</h1>
      <Form>
        <Field name="release_name" type="string" :rules="validate_name" class="input__field" placeholder="Введите название релиза"/>
        <ErrorMessage name="release_name"/>
        <Field name="release_start_date" class="input__field" placeholder="Введите дату начала релиза" onfocus="(this.type='date')" onblur="(this.type='text')"/>
        <ErrorMessage name="release_start_date"/>
        <Field name="release_end_date" class="input__field" placeholder="Введите дату конца релиза" onfocus="(this.type='date')" onblur="(this.type='text')"/>
        <ErrorMessage name="release_end_date"/>
      </Form>
      <field-with-toggle-button class="input__field"></field-with-toggle-button>
      <release-button class="create__release__button" @click="createRelease"></release-button>
    </div>
  </div>

</template>

<script>

import ReleaseButton from "@/components/UI/buttons/ReleaseButton";
import {ErrorMessage, Field, Form} from "vee-validate";
export default {
  name: "CreateReleasePage",
  components: {
    ReleaseButton,
    Form,
    Field,
    ErrorMessage,
    },
  data(){
    return{
      releaseName:{
        body: ''
      },
      releaseStartDate:{
        body: ''
      },
      releaseEndDate:{
        body: ''
      },
      responsible:{
        body: ''
      },
      interested:{
        body: ''
      },
      link:{
        body: ''
      },
      autotests:{
        body: false
      }
    }
  },
  methods:{
    createRelease(){
      alert("Релиз создан " + "\nRelease name: " + this.releaseName.body
          + "\nRelease start date: " + this.releaseStartDate.body
          + "\nRelease end date: " + this.releaseEndDate.body
          + "\nResponsible for release: " + this.responsible.body
          + "\nInterested in release: " + this.interested.body
          + "\nLink for task: " + this.link.body
          + "\nAutotests: " + this.autotests.body )
      this.releaseName.body = '';
      this.releaseStartDate.body = '';
      this.releaseEndDate.body = '';
      this.responsible.body = '';
      this.interested.body = '';
      this.link.body = '';
    },
    validate_name(value){
      if (!value){
        return "Введите название релиза"
      }
      return true
    },
    validate_date_before(value){
      if (!value){
        return "Введите дату релиза"
      }
      if ()
    }
  },

}
</script>

<style scoped>
.heading{
  font-family: Montserrat;
  font-weight: normal;
  margin-left: 30%;

}

.input__field{
  margin-left: 22%;
  margin-top: 15px;
  background-color: #F5F5F5;
  border: none;
  width: 40%;
  height: 50px;
  border-radius: 10px;
  font-family: Montserrat;
  font-size: 20px;
  padding-left: 15px;
}


.create__release__button{
  margin-top: 30px;
  margin-left: 32%;
}

.nav__menu {
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  float: left;
  width: 17%;
  margin-left: 4px;
  margin-top: 4px;
}
.content{
  float: right;
  width: 83%;
  margin-top: 30px;
}
</style>