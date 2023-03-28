<template>
  <div class="card" @click="showData">
    <p class="content__1">
      Название: {{ release.app_name }}
    </p>
    <p class="content__1">
      Даты: {{ date }}
    </p>
    <p class="content__1">Статус: {{ release.status }}</p>
    <p class="content__1">Ответственный: {{ release.on_duty }}</p>
    <p class="content__1">Автотесты: {{autotests}}</p>
    <card-button class="edit__button" @click="editRelease">
      <img src="@/assets/buttons/edit.png" class="img">
    </card-button>
    <card-button @click="deleteRelease" class="delete__button">
      <img src="@/assets/buttons/delete.png" class="img">
    </card-button>
  </div>
</template>

<script>
import App from "@/App";
import api from "@/api/Api";

export default {
  name: "ReleaseCard",
  props: {
    release: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      date: "",
      autotests: ""
    }
  },
  methods: {
    unnormalizeDate(date) {
      date = date.substring(0, 10)
      const day = date.substring(8, 10)
      const month = date.substring(5, 7)
      const years = date.slice(0, 4)
      return day + '.' + month + '.' + years
    },
    showData(){

    },
    parseDate() {
      const start_date = this.unnormalizeDate(this.release.start_date)
      const finish_date = this.unnormalizeDate(this.release.finish_date)
      this.date = start_date + " - " + finish_date
    },
    async deleteRelease() {
      const url = new URL(App.data().link)
      url.pathname = "api/v1/cancel"
      const data = {
        app_name: this.release.app_name,
        on_duty: this.release.on_duty
      }
      let response
      await (async () => {
        response = await api.methods.deleteRelease(data)
      })()
      if (response.status === 200) {
        alert("Релиз удален")
        location.reload()
      } else {
        alert("Ошибка")
      }
    },
    editRelease(){
      alert("EDITING")
    },
    parseAutotests() {
      if (this.release.auto_tests_required){
        this.autotests = "нужны"
      }
      else {
        this.autotests = "не нужны"
      }
    }
  },
  mounted() {
    this.parseDate()
    this.parseAutotests()
  },

}
</script>

<style scoped>
.content__1 {
  font-family: Montserrat;
  font-size: 20px;
  text-align: center;
}

.edit__button:hover{
  background-color: #F5F5F5;
}

.img{
  height: 28px;
  width: 30px;
  align-self: center;
}

.delete__button{
  background-color: rgba(255, 0, 0, 0.5) !important;
  float: right;
}

.delete__button:hover{
  background-color: rgba(255, 0, 0, 0.8) !important;
}

.card {
  padding: 20px;
  border-radius: 15px;
  width: 26%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}
</style>