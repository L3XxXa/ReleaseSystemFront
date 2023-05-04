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
        getData(){
            this.release = store.getters.getData
            this.release.start_date = this.unnormalizeDate(this.release.start_date)
            this.release.finish_date = this.unnormalizeDate(this.release.finish_date)
        }
    },
    mounted() {
        this.getData()
    }
})
</script>

<template>
    <div class="container">
        <p class="field__name">
            Название релиза
        </p>
        <div class="field__container">
            <p class="field__name">{{ release.app_name}}</p>
        </div>
        <p class="field__name">
            Дата начала релиза
        </p>
        <div class="field__container">
            <p class="field__name">{{ release.start_date}}</p>
        </div>
        <p class="field__name">
            Дата конца релиза
        </p>
        <div class="field__container">
            <p class="field__name">{{ release.finish_date}}</p>
        </div>
        <p class="field__name">
            Задача
        </p>
        <div class="field__container">
            <p class="field__name">{{ release.task_link}}</p>
        </div>
        <p class="field__name">
            Ответственный за релиз
        </p>
        <div class="field__container">
            <p class="field__name">{{ release.on_duty}}</p>
        </div>
        <p class="field__name">
            Заинтересованные в релизе
        </p>
        <div class="field__container">
            <p class="field__name">{{ release.followers}}</p>
        </div>
        <p class="field__name">
            Статус
        </p>
        <div class="field__container">
            <p class="field__name">{{ release.status}}</p>
        </div>
        <p class="field__name">
            Автотесты
        </p>
        <div class="field__container">
            <p class="field__name">{{ release.auto_tests_required}}</p>
        </div>
        <p class="field__name">
            Логи
        </p>
        <div class="field__container">
            <p class="field__name">{{ release.logs}}</p>
        </div>
    </div>
</template>

<style scoped>
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
  }
  .field__container{
      background-color: white;
      border-radius: 20px;
  }

</style>