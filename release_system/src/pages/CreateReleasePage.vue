<template>
  <div>
    <div class="nav__menu">
      <navigation-menu></navigation-menu>
    </div>
    <div class="content">
      <h1 class="heading">Запланировать релиз</h1>
      <Form @submit="submittingForm">
        <Field name="release_name" type="string" :rules="validate_field_not_empty" class="input__field"
               :validateOnBlur="true" placeholder="Название релиза" v-model="release_name"/>
        <ErrorMessage name="release_name"/>
        <Field name="release_start_date" class="input__field" placeholder="Дата начала релиза"
               onfocus="(this.type='date')" onblur="(this.type='text')" :rules="validate_date"
               v-model="release_start_date"/>
        <ErrorMessage name="release_start_date"/>
        <Field name="release_end_date" class="input__field" placeholder="Дата конца релиза"
               onfocus="(this.type='date')" onblur="(this.type='text')" :rules="validate_date" :validateOnBlur="true"
               v-model="release_end_date"/>
        <ErrorMessage name="release_end_date"/>
        <Field name="version" class="input__field" placeholder="Версия релиза"
               :rules="validate_field_not_empty" :validateOnBlur="true" v-model="version"/>
        <ErrorMessage name="version"/>
        <Field name="responsible" class="input__field" placeholder="Ответственный за релиз"
               :rules="validate_field_not_empty" :validateOnBlur="true" v-model="responsible"/>
        <ErrorMessage name="responsible"/>
        <Field name="interested" class="input__field" placeholder="Заинтересованный в релизе"
               :rules="validate_field_not_empty" :validateOnBlur="true" v-model="interested"/>
        <ErrorMessage name="interested"/>
        <Field name="link" class="input__field" placeholder="Ссылка на задачу"
               :rules="validate_field_not_empty" :validateOnBlur="true" v-model="link"/>
        <ErrorMessage name="link"/>
        <div class="input__field">
          <div class="toggle__button__field">
            <p class="autotests__text">Нужно согласование?</p>
            <button class="button__toggle" :class="{'active':approve_required}" @click="toggleButton">
              {{ approve_required ? "Да" : "Нет" }}
            </button>
          </div>
        </div>
        <release-button class="create__release__button"></release-button>
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
      release_name: '',
      release_start_date: '',
      release_end_date: '',
      responsible: '',
      interested: '',
      link: '',
      approve_required: false,
      version: '',
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
      const before = this.parseDate(this.release_start_date)
      const after = this.parseDate(this.release_end_date)
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
    toggleButton() {
      this.autotests = !this.autotests;
    },

    async submittingForm() {
      setTimeout(async () => {
        const response = await axios.post("http://192.168.13.1/api/plan", {
          app_name: this.release_name,
          start_date: this.release_start_date,
          finish_date: this.release_end_date,
          ver: this.version,
          approve_required: this.approve_required,
          on_duty: this.responsible,
          followers: this.interested
        })
        if (response.status === 200) {
          alert("Релиз успешно запланирован")
        } else {
          alert("Ошибка при создании релиза.\nКод: " + response.status)
        }
      })
    }
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
  margin-left: 15px;
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