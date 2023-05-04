<template>
  <div>
    <div class="nav__menu">
      <navigation-menu></navigation-menu>
    </div>
    <div class="content">
      <h1 class="heading">Запланировать релиз</h1>
      <Form @submit="submittingForm">
        <Field name="app_name" type="string" :rules="validate_field_not_empty" class="input__field"
               @blur="checkInput('app_name')" :class="{'error__field' : empty_app_name}"
               placeholder="Название релиза" v-model="app_name"/>
        <ErrorMessage name="app_name" class="error__message"/>
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
        <Field name="ver" class="input__field" placeholder="Версия релиза" @blur="checkInput('ver')"
               :class="{'error__field' : empty_ver}"
               :rules="validate_field_not_empty" :validateOnBlur="true" v-model="ver"/>
        <ErrorMessage name="ver" class="error__message"/>
        <Field name="on_duty" class="input__field" placeholder="Ответственный за релиз"
               :rules="validate_field_not_empty" :validateOnBlur="true" v-model="on_duty" @blur="checkInput('on_duty')"
               :class="{'error__field' : empty_on_duty}"/>
        <ErrorMessage name="on_duty" class="error__message"/>
        <Field name="followers" class="input__field" placeholder="Заинтересованный в релизе"
               :rules="validate_field_not_empty" :validateOnBlur="true" v-model="followers"
               @blur="checkInput('followers')" :class="{'error__field' : empty_followers}"/>
        <ErrorMessage name="followers" class="error__message"/>
        <Field name="task_link" class="input__field" placeholder="Задача"
               :rules="validURL" :validateOnBlur="true" v-model="task_link"
               @blur="checkInput('task_link')" :class="{'error__field' : empty_task_link}"/>
        <ErrorMessage name="task_link" class="error__message"/>
        <div class="toggle__button__field">
          <p class="autotests__text">Нужно согласование?</p>
          <button type="button" class="button__toggle" :class="{'active':approve_required}"
                  @click="toggleButtonApprove">
            {{ approve_required ? "Да" : "Нет" }}
          </button>

        </div>
        <div class="toggle__button__field">
          <p class="autotests__text">Нужны автотесты?</p>
          <button type="button" class="button__toggle" :class="{'active':auto_tests_required}"
                  @click="toggleButtonAutotests">
            {{ auto_tests_required ? "Да" : "Нет" }}
          </button>
        </div>
        <release-button class="create__release__button" type="submit" @click="checkFields">Запланировать релиз</release-button>
      </Form>
      <popup-window id="popup_window" class="popup__window">{{ pop_up_text }}</popup-window>
    </div>
  </div>

</template>

<script>
import {ErrorMessage, Field, Form} from "vee-validate";
import api from "@/api/Api";

export default {
  name: "CreateReleasePage",
  components: {
    Form,
    Field,
    ErrorMessage,
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
      empty_app_name: false,
      empty_start_date: false,
      empty_end_date: false,
      empty_on_duty: false,
      empty_followers: false,
      empty_task_link: false,
      empty_ver: false,
      pop_up_text: '',
      pop_up_visible: false
    }
  },
  methods: {
    checkInput(event) {
      switch (event) {
        case "app_name":
          this.empty_app_name = true
          break
        case "ver":
          this.empty_ver = true
          break
        case "start_date":
          this.empty_start_date = true
          break
        case "finish_date":
          this.empty_end_date = true
          break
        case "on_duty":
          this.empty_on_duty = true
          break
        case "followers":
          this.empty_followers = true
          break
        case "task_link":
          this.empty_task_link = true
          break
      }
    },

    validate_field_not_empty(value, field) {
      if (!value) {
        return "Обязательное поле"
      }
      switch (field.field) {
        case "app_name":
          this.empty_app_name = false
          break
        case "ver":
          this.empty_ver = false
          break
        case "on_duty":
          this.empty_on_duty = false
          break
        case "followers":
          this.empty_followers = false
          break
        case "task_link":
          this.empty_task_link = false
          break
      }
      return true
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
    toggleButtonApprove() {
      this.approve_required = !this.approve_required;
    },

    toggleButtonAutotests() {
      this.auto_tests_required = !this.auto_tests_required;
    },

    checkFields() {
      if (this.app_name === "") {
        this.empty_app_name = true;
      }
      if (this.ver === "") {
        this.empty_ver = true;
      }
      if (this.start_date === "") {
        this.empty_start_date = true;
      }
      if (this.finish_date === "") {
        this.empty_end_date = true;
      }
      if (this.on_duty === "") {
        this.empty_on_duty = true;
      }
      if (this.followers === "") {
        this.empty_followers = true;
      }
      if (this.task_link === "") {
        this.empty_task_link = true;
      }
    },

    validURL(str) {
      if (!str) {
        return "Обязательное поле"
      }
      try {
        const patternOfPathname = new RegExp('[A-Z]+-+[1-9]+', 'i')
        if (!patternOfPathname.test(str)) {
          return "Неправильное название задачи"
        }
      } catch (err) {
        return "Не является ссылкой"
      }
      this.empty_task_link = false;
      return true
    },

    unsetData() {
      this.app_name = ""
      this.task_link = ""
      this.start_date = ""
      this.finish_date = ""
      this.ver = ""
      this.auto_tests_required = false
      this.approve_required = false
      this.on_duty = ""
      this.followers = ""
    },

    parseFollowers(followers) {
      if (followers.includes(",")) {
        return followers.split(",")
      } else if (followers.includes(" ")) {
        return followers.split(" ")
      } else if (followers.includes(", ")) {
        return followers.split(", ")
      } else {
        return followers.split()
      }
    },
    openPopup() {
      document.getElementById("popup_window").style.display = "block"
      setTimeout(this.closePopup, 5000)
    },
    closePopup() {
      document.getElementById("popup_window").style.display = "none"
    },
    async submittingForm() {
      const parsedFollowers = this.parseFollowers(this.followers)
      const normalizedStartDate = this.normalizeDate(this.start_date)
      const normalizedFinishDate = this.normalizeDate(this.finish_date)
      const data = {
        app_name: this.app_name,
        task_link: this.task_link,
        start_date: normalizedStartDate,
        finish_date: normalizedFinishDate,
        ver: this.ver,
        auto_tests_required: this.auto_tests_required,
        approve_required: this.approve_required,
        on_duty: this.on_duty,
        followers: parsedFollowers
      }
      let response
      await (async () => {
        response = await api.methods.planRelease(data)
      })()
      if (response.status === 200) {
        this.pop_up_text = "Релиз успешно запланирован"
        this.unsetData()
      } else {
        console.log(response.message)
        if (response.status >= 500) {
          this.pop_up_text = "Внутренняя ошибка на сервере"
        }
        else if (response.status === 400){
          this.pop_up_text = "Данный релиз уже существует"
        }
        else {
          this.pop_up_text = response.text
        }
      }
      this.openPopup()
    },
  },

}
</script>

<style scoped>
.heading {
  font-family: Montserrat;
  font-weight: normal;
  margin-left: 28%;

}

.error__field {
  border: solid red 2px !important;
  color: red;
}

.error__field::placeholder{
  color: red;
}

.error__message {
  color: red;
  font-family: Montserrat;
  font-size: 20px;
  margin-left: 15px;
}

.popup__window {
  display: none;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  opacity: 0;
  animation: fadein 4s;
}

@keyframes fadein {
  0%, 30%, 70%, 100% {
    opacity: 0
  }
  30%, 70% {
    opacity: 1;
  }
}


.toggle__button__field {
  margin-left: 22%;
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

.active {
  background-color: rgba(0, 255, 56, 0.40) !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.active:hover {
  background-color: #00FF38 !important;
}

.button__toggle {
  margin-top: 5px;
  margin-right: 10px;
  float: right;
  height: 40px;
  font-family: Montserrat;
  color: black;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  width: 110px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 0, 0, 0.5);
}

.button__toggle:hover {
  background-color: rgba(255, 0, 0, 0.8);
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
  border: solid #F5F5F5 2px;
  background-color: #F5F5F5;
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
