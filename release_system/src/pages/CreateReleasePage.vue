<template>
  <div>
    <div class="nav__menu">
      <navigation-menu></navigation-menu>
    </div>
    <div class="content">
      <h1 class="heading">Запланировать релиз</h1>
      <Form @submit="submittingForm">
        <Field name="app_name" type="string" :rules="validate_field_not_empty" class="input__field"
               :validateOnBlur="true" placeholder="Название релиза" v-model="app_name"/>
        <ErrorMessage name="app_name"/>
        <Field name="start_date" class="input__field" placeholder="Дата начала релиза"
               onfocus="(this.type='date')" onblur="(this.type='text')" :rules="validate_date"
               v-model="start_date"/>
        <ErrorMessage name="start_date"/>
        <Field name="finish_date" class="input__field" placeholder="Дата конца релиза"
               onfocus="(this.type='date')" onblur="(this.type='text')" :rules="validate_date" :validateOnBlur="true"
               v-model="finish_date"/>
        <ErrorMessage name="finish_date"/>
        <Field name="ver" class="input__field" placeholder="Версия релиза"
               :rules="validate_field_not_empty" :validateOnBlur="true" v-model="ver"/>
        <ErrorMessage name="ver"/>
        <Field name="on_duty" class="input__field" placeholder="Ответственный за релиз"
               :rules="validate_field_not_empty" :validateOnBlur="true" v-model="on_duty"/>
        <ErrorMessage name="on_duty"/>
        <Field name="followers" class="input__field" placeholder="Заинтересованный в релизе"
               :rules="validate_field_not_empty" :validateOnBlur="true" v-model="followers"/>
        <ErrorMessage name="followers"/>
        <Field name="task_link" class="input__field" placeholder="Ссылка на задачу"
               :rules="validate_field_not_empty" :validateOnBlur="true" v-model="task_link"/>
        <ErrorMessage name="task_link"/>
        <div class="input__field">
          <div class="toggle__button__field">
            <p class="autotests__text">Нужно согласование?</p>
            <button type="button" class="button__toggle" :class="{'active':approve_required}" @click="toggleButtonApprove">
              {{ approve_required ? "Да" : "Нет" }}
            </button>
          </div>
        </div>
        <div class="input__field">
          <div class="toggle__button__field">
            <p class="autotests__text">Нужны автотесты?</p>
            <button type="button" class="button__toggle" :class="{'active':auto_tests_required}" @click="toggleButtonAutotests">
              {{ auto_tests_required ? "Да" : "Нет" }}
            </button>
          </div>
        </div>
        <release-button class="create__release__button" type="submit"></release-button>
      </Form>
    </div>
  </div>

</template>

<script>

import {ErrorMessage, Field, Form} from "vee-validate";
import ReleaseButton from "@/components/UI/buttons/ReleaseButton";
import axios from "axios";

export default {
  name: "CreateReleasePage",
  components: {
    Form,
    Field,
    ErrorMessage,
    ReleaseButton
  },
  data() {
    return {
      app_name: '',
      start_date: '',
      finish_date: '',
      on_duty: '',
      followers: '',
      task_link: '',
      approve_required: false,
      auto_tests_required: false,
      ver: '',
    }
  },
  methods: {
    validate_field_not_empty(value) {
      if (!value) {
        return "Обязательное поле"
      }
      return true
    },
    validate_date(value) {
      if (!value) {
        return "Обязательное поле"
      }
      const before = this.parseDate(this.start_date)
      const after = this.parseDate(this.finish_date)
      console.log(before)
      console.log(after)
      console.log("date now " + Date.now())
      if ((before > after && before !== "" && after !== "") || Math.floor(before.getTime()) + 86400000 < Date.now()) {
        return "Установите правильные даты релиза"
      }
      return true
    },
    parseDate(value) {
      const [year, month, day] = value.split('-');
      return new Date(+year, month - 1, +day);
    },
    toggleButtonApprove() {
      this.approve_required = !this.approve_required;
    },
    toggleButtonAutotests() {
      this.auto_tests_required = !this.auto_tests_required;
    },
    validURL(str) {
      if (!str) {
        return "Обязательное поле"
      }
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

      if (!pattern.test(str)) {
        return "Введите правильный формат ссылки"
      } 
      return true
    },
    submittingForm() {
      var request = { 
        "app_name": "test", 
        "task_link": "asdf", 
        "start_date":  "2023-10-13T16:39:17.0339226+07:00", 
        "finish_date": "2024-01-02T17:04:05.0339226+07:00", 
        "ver": "0.8", 
        "auto_tests_required": false, 
        "approve_required": false, 
        "on_duty": "a.sartakov1", 
        "followers": ["a.sartakov1"] 
      }
        axios.options('http://localhost:8080/api/v1/plan',{
            request
        }).then(function(response){
          alert(response);
        }).catch(function (error){
          console.log(typeof(request))
          alert(error);
        })
    },
  },

}
</script>

<style scoped>
.heading {
  font-family: Montserrat;
  font-weight: normal;
  margin-left: 30%;

}

.toggle__button__field {
  background-color: #F5F5F5;
  border: none;
  width: 41.1%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  position: relative;
}

.active {
  background-color: rgba(0, 255, 56, 0.40);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.active:hover {
  background-color: #00FF38;
}

.button__toggle {
  position: absolute;
  left: 510px;
  margin-top: 5px;
  height: 40px;
  font-family: Montserrat;
  color: black;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  width: 110px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}


.autotests__text {
  font-family: Montserrat;
  font-size: 20px;
  margin-top: 13px;
  float: left;
  position: absolute;
  transition-duration: 1s;
}

.input__field {
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

.create__release__button {
  margin-top: 30px;
  margin-left: 34%;
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

.content {
  float: right;
  width: 83%;
  margin-top: 30px;
}
</style>