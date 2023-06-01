<template>
    <div>
        <div class="nav__menu">
            <navigation-menu></navigation-menu>
        </div>
        <div class="content">
          <Modal :visible="isVisible" title="" :closable="false" :cancelButton="{text: 'Отмена', onclick: ()=> {isVisible = false}}"	:okButton="{text: 'Поменять дату', onclick: changeDate}">
            <change-time>
            </change-time>
          </Modal>
          <h1 class="heading">
            Список релизов
          </h1>
          <div class="lists__wrapper">
            <in-process-releases :releases="inProgressReleases" class="element" @changeVisible="updateVisible" @errorChange="showError"/>
            <approve-requested-releases :releases="approveRequestedReleases" class="element" @changeVisible="updateVisible" @errorChange="showError"/>
            <planned-releases :releases="plannedReleases" class="element" @changeVisible="updateVisible"/>
          </div>
        </div>
      <popup-window id="popup_window" class="popup__window">{{ pop_up_text }}</popup-window>
    </div>
</template>

<script>
import App from "@/App.vue";
import api from "@/api/Api";
import {Modal} from "usemodal-vue3";
import store from "@/store";
import router from "@/router/router";

export default {
    name: "ListOfReleasesPage",
    components:{
      Modal
    },
    data() {
        return {
            releases: [],
            approveRequestedReleases: [],
            plannedReleases: [],
            inProgressReleases: [],
            isVisible: false,
            pop_up_text: ""
        }
    },
    methods: {
        async getData() {
            const url = new URL(App.data().link)
            url.pathname = "api/v1/releases"
            let response
            await (async () => {
                response = await api.methods.getReleases()
            })()
            console.log(response)
            if (response.status === 200) {
                this.releases = [...this.releases, ...response.data.Message]
            } else {
              this.pop_up_text = "Не получилось найти релизы"
              this.openPopup()
            }
            this.divideReleasesByStatus(response.data.Message)
        },
        updateVisible(value){
          this.isVisible = value
        },
        showError(value){
          this.pop_up_text = value
          this.openPopup()
        },
        divideReleasesByStatus(releases) {
          for (let i = 0; i < releases.length; i++) {
            switch (releases[i].status) {
              case "approval_requested":
                this.approveRequestedReleases.push(releases[i])
                break
              case "planned":
                this.plannedReleases.push(releases[i])
                break
              case "in_progress":
                this.inProgressReleases.push(releases[i])
                break
            }
          }
          this.approveRequestedReleases = this.sortReleases(this.approveRequestedReleases)
          this.plannedReleases = this.sortReleases(this.plannedReleases)
          this.inProgressReleases = this.sortReleases(this.inProgressReleases)
        },
      sortReleases(releases){
        return releases.sort(this.compareReleases)
      },
      compareReleases(a, b){
        let date1 = new Date(a.finish_date)
        let date2 = new Date(b.finish_date)
        console.log(date1 + " is DATE1")
        console.log(date2 + " IS DATE2")
        if (date1<date2){
          return -1
        }
        if (date1>date2){
          return 1
        }
        return 0
      },
      createRequestForChange(release){
        const approval_requested = this.getApprovalRequest(release)
        return {
          app_name: release.app_name,
          task_link: release.task_link,
          start_date: release.start_date,
          finish_date: release.finish_date,
          ver: release.ver,
          auto_tests_required: release.auto_tests_required,
          approve_required: approval_requested,
          on_duty: release.on_duty,
          followers: release.followers
        }
      },
      async changeDate(){
        let release = store.getters.getData
        release = this.createRequestForChange(release)
        const url = new URL(App.data().link)
        url.pathname = "api/v1/change"
        let response
        await (async () => {
          response = await api.methods.changeDate(release)
        })()
        console.log(response)
        if (response.status !== 200) {
          this.pop_up_text = "Не получилось изменить время релиза"
          this.openPopup()
          return
        } else
        this.isVisible = false
        location.reload()

      },
      openPopup() {
        document.getElementById("popup_window").style.display = "block"
        setTimeout(this.closePopup, 5000)
      },
      closePopup() {
        document.getElementById("popup_window").style.display = "none"
      },
      getApprovalRequest(release) {
        switch (release.status){
          case "approval_requested":
            return true
          case "planned":
            return false
        }
      },
      checkCookies(){
        let loginCookie = this.getCookie('login')
        let passwordCookie = this.getCookie('password')
        if (loginCookie == null || passwordCookie == null){
          router.push("/login")
        }
      },
      getCookie(cName) {
        const name = cName + "=";
        const cDecoded = decodeURIComponent(document.cookie); //to be careful
        const cArr = cDecoded.split('; ');
        let res;
        cArr.forEach(val => {
          if (val.indexOf(name) === 0) res = val.substring(name.length);
        })
        return res
      }
    },
    mounted() {
        this.checkCookies()
        this.getData()
    }
}
</script>

<style scoped>
.nav__menu {
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

.modal{
  font-family: Montserrat;
}

.popup__window {
  display: none;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  opacity: 0;
  background-color: white;
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

.content {
    float: right;
    width: 80%;
    margin-top: 30px;
}

.heading {
    font-family: Montserrat;
    font-weight: normal;
    text-align: center;
}

.lists__wrapper{
    height: 84%;
    position: absolute;
    width: 80%;
}
.element{
    display: inline-block;
    margin-left: 5%;
    width: 26.5%;
    height: 100%;
}

</style>