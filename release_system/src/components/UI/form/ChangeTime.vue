<template>
  <div class="wrapper">
    <h3 class="heading">
      Поменять время релиза
    </h3>
    <Form @submit="submittingForm">
      <Field name="start_date" class="input__field" placeholder="Дата начала релиза" @blur="checkInput('start_date')"
             :class="{'error__field' : empty_start_date}"
             onfocus="(this.type='date')" onblur="(this.type='date')" :rules="validate_date"
             v-model="start_date"/>
      <ErrorMessage name="start_date" class="error__message"/>
      <Field name="finish_date" class="input__field" placeholder="Дата конца релиза" @blur="checkInput('finish_date')"
             :class="{'error__field' : empty_end_date}"
             onfocus="(this.type='date')" onblur="(this.type='date')" :rules="validate_date" :validateOnBlur="true"
             v-model="finish_date"/>
      <ErrorMessage name="finish_date" class="error__message"/>
      <release-button class="create__release__button" type="submit" @click="checkFields"></release-button>
    </Form>

  </div>
</template>

<script>
import {ErrorMessage, Field, Form} from "vee-validate";
//import api from "@/api/Api";
export default {
  name: "ChangeTime",
  components:{
    Form, Field, ErrorMessage
  },
  data(){
    return{
      start_date: '',
      finish_date: '',
      empty_start_date: false,
      empty_end_date: false,
    }
  },
  methods:{
    checkInput(event) {
      switch (event) {
        case "start_date":
          this.empty_start_date = true
          break
        case "finish_date":
          this.empty_end_date = true
          break
      }
    },
    validate_field_not_empty(value) {
      if (!value) {
        return "Обязательное поле"
      }
      return true
    },
    checkFields() {
      if (this.start_date === "") {
        this.empty_start_date = true;
      }
      if (this.finish_date === "") {
        this.empty_end_date = true;
      }
    },

    validate_date(value, field) {
      if (!value) {
        return "Обязательное поле"
      }
      const before = this.parseDate(this.start_date)
      const after = this.parseDate(this.finish_date)
      if ((before > after && this.start_date !== "" && this.finish_date !== "") || Math.floor(before.getTime()) + 86400000 < Date.now()) {
        return "Установите правильные даты релиза"
      }
      switch (field.field) {
        case "start_date":
          this.empty_start_date = false
          break
        case "finish_date":
          this.empty_end_date = false
          break
      }
      return true
    },

    parseDate(value) {
      const [year, month, day] = value.split('-');
      return new Date(+year, month - 1, +day);
    },

    normalizeDate(value) {
      return value += "T00:00:00.0339226+07:00"
    },
    submittingForm(){
      alert("Submitting form")
    }
  }
}
</script>

<style scoped>
.heading{
  font-family: Montserrat;
  font-weight: normal;
  margin-left: 29%;
}
.error__field {
  border: solid red 2px !important;
  color: red;
}

.input__field {
  margin-left: 26%;
  margin-top: 15px;
  border: solid #F5F5F5 2px;
  background-color: #F5F5F5;
  width: 40%;
  height: 50px;
  border-radius: 10px;
  font-family: Montserrat;
  font-size: 20px;
  padding-left: 15px;
}

.error__field::placeholder{
  color: red;
}

.wrapper{
  border: 2px solid black;
  padding: 10px;
  border-radius: 15px;
  width: 50%;
}

.create__release__button {
  margin-top: 30px;
  margin-left: 30%;
  margin-bottom: 20px;
}

.error__message {
  color: red;
  font-family: Montserrat;
  font-size: 20px;
  margin-left: 15px;
}
</style>