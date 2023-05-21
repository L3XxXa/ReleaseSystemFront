<template>
  <div class="wrapper">
    <h3 class="heading">
      Поменять время релиза {{ release_name }}
    </h3>
    <Form>
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
    </Form>
  </div>
</template>

<script>
import {ErrorMessage, Field, Form} from "vee-validate";
import store from "@/store";
export default {
  name: "ChangeTime",
  components:{
    Form, Field, ErrorMessage
  },
  data(){
    return{
      release_name: '',
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
      let release = store.getters.getData
      release.start_date = this.normalizeDate(this.start_date)
      release.finish_date = this.normalizeDate(this.finish_date)
      store.commit('setFields', this.release)
      return true
    },

    parseDate(value) {
      const [year, month, day] = value.split('-');
      return new Date(+year, month - 1, +day);
    },

    normalizeDate(value) {
      return value += "T00:00:00.0339226+07:00"
    },
    unnormalizeDate(date) {
      date = date.substring(0, 10)
      const day = date.substring(8, 10)
      const month = date.substring(5, 7)
      const years = date.slice(0, 4)
      return day + '.' + month + '.' + years
    },
    getData(){
      let release = store.getters.getData
      this.release_name = release.app_name
      this.start_date = this.unnormalizeDate(release.start_date)
      this.finish_date = this.unnormalizeDate(release.finish_date)
      // this.start_date = (release.start_date)
      // this.finish_date = (release.finish_date)
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>
.heading{
  font-family: Montserrat;
  font-weight: normal;
  text-align: center;
}
.error__field {
  border: solid red 2px !important;
  color: red;
}

.input__field {
  margin-top: 15px;
  border: solid #F5F5F5 2px;
  background-color: #F5F5F5;
  width: 95%;
  height: 50px;
  border-radius: 10px;
  font-family: Montserrat;
  font-size: 20px;
}

.error__field::placeholder{
  color: red;
}

.wrapper{
  padding: 10px;
  border-radius: 15px;
  width: 100%;
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