<template>
  <div class="card">
    <p class="content__1">
      Название: {{release.app_name}}
    </p>
    <p class="content__1" >
      Даты: {{date}}
    </p>
    <p class="content__1">Автотесты: {{release.auto_tests_required}}</p>
    <p class="content__1">Согласование: {{release.approve_required}}</p>
    <p class="content__1">Ответственный: {{release.on_duty}}</p>
    <delete-release-button @click="deleteRelease"></delete-release-button>
  </div>
</template>

<script>
import DeleteReleaseButton from "@/components/UI/buttons/DeleteReleaseButton";
import axios from "axios";
import App from "@/App";


export default {
  name: "ReleaseCard",
  components: {DeleteReleaseButton},
  props:{
    release:{
      type: Object,
      required: true
    }
  },
  data(){
    return{
      date: ""
    }
  },
  methods:{
    unnormalizeDate(date) {
      date = date.substring(0, 10)
      const day = date.substring(8, 10)
      const month = date.substring(5, 7)
      const years = date.slice(0, 4)
      return day+'.'+month+'.'+years
    },
    parseDate(){
      const start_date = this.unnormalizeDate(this.release.start_date)
      const finish_date = this.unnormalizeDate(this.release.finish_date)
      this.date = start_date + " - " + finish_date
    },
    deleteRelease(){
      const url = new URL(App.data().link)
      url.pathname = "api/v1/cancel"
      const data = {
        app_name: this.release.app_name,
        on_duty: this.release.on_duty
      }
      axios({
        method: 'patch',
        url: url.href,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data
      }).then(response => {
        console.log(response.data)
        location.reload()
      }).catch(error => {
        console.log(error)
        alert("Ошибка. " + error.Message)
      })

    }
  },
  mounted() {
    this.parseDate()
  }
}
</script>

<style scoped>
  .content__1{
    font-family: Montserrat;
    font-size: 20px;
    text-align: center;

  }
  .card{
    border: 2px solid black;
    padding: 20px;
    border-radius: 15px;
    width: 20%;
    margin-bottom: 20px;
  }
</style>