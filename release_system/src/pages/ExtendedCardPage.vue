<template>
  <div class="nav__menu">
    <navigation-menu></navigation-menu>
  </div>
  <div class="content">
    <div class="container">
      <release-tag :tag="release.status" class="tag"></release-tag>
      <h1 class="heading">
        Релиз {{ release.app_name}}
      </h1>
      <p class="field__name">
        Дата начала релиза
      </p>
      <div class="field__container">
        <p class="field__data">{{ release.start_date}}</p>
      </div>
      <p class="field__name">
        Дата конца релиза
      </p>
      <div class="field__container">
        <p class="field__data">{{ release.finish_date}}</p>
      </div>
      <p class="field__name">
        Задача
      </p>
      <div class="field__container">
        <p class="field__data">{{ release.task_link}}</p>
      </div>
      <p class="field__name">
        Ответственный за релиз
      </p>
      <div class="field__container">
        <p class="field__data">{{ release.on_duty}}</p>
      </div>
      <p class="field__name">
        Заинтересованные в релизе
      </p>
      <div class="field__container">
        <p class="field__data">{{ release.followers}}</p>
      </div>
      <p class="field__name">
        Автотесты
      </p>
      <div class="field__container">
        <p class="field__data">{{ release.auto_tests_required}}</p>
      </div>
      <p class="field__name">
        Логи
      </p>
      <div class="field__container">
        <p class="field__data">{{ release.logs}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default ({
    name: "ExtendedCardPage",
    data(){
        return{
            release: Object
        }
    },
    methods:{
        unnormalizeDate(date) {
            date = date.substring(0, 10)
            const day = date.substring(8, 10)
            const month = date.substring(5, 7)
            const years = date.slice(0, 4)
            return day + '.' + month + '.' + years
        },
        parseStatus(status){
          switch (status){
            case "approval_requested":
              return "Ожидает подтверждения"
            case "planned":
              return "Запланирован"
            case "in_progress":
              return  "В процессе"
          }
        },
        parseFollowers(followers) {
          return followers.join(', ')
        },
        getData(){
            this.release = store.getters.getData
            this.release.status = this.parseStatus(this.release.status)
            this.release.followers = this.parseFollowers(this.release.followers)
            console.log(this.release.status + " status")
            this.release.start_date = this.unnormalizeDate(this.release.start_date)
            this.release.finish_date = this.unnormalizeDate(this.release.finish_date)
        }
    },
    mounted() {
        this.getData()
    }
})
</script>

<style scoped>
  .heading {
    font-family: Montserrat;
    font-weight: normal;
    display: block;
    margin-left: 10px;
  }

  .container{
      background-color: #F3F3F3;
      display: block;
      height: 100%;
      margin: auto;
      padding: 20px;
      border-radius: 20px;
      width: 50%;
  }
  .field__name{
    font-family: Montserrat;
    margin-left: 10px;
    font-size: 20px;
  }

  .field__data{
    font-family: Montserrat;
    padding: 10px;
    margin-left: 10px;
    font-size: 20px;
  }

  .field__container{
      background-color: white;
      border-radius: 20px;
  }

  .nav__menu{
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    float: left;
    width: 20%;
    margin-left: 4px;
    margin-top: 4px;
  }

  .content {
    float: right;
    width: 80%;
    margin-top: 30px;
  }

  .tag{
    float: right;
  }

</style>