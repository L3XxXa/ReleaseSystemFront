<template>
    <div class="card" @click="showData">
        <p class="release__name">
            {{ release.app_name }}
        </p>
        <p class="release__date">
            {{ date }}
        </p>
        <p class="content__1">Автотесты {{ autotests }}</p>
        <card-button class="edit__button" @click="editRelease">
            <img src="@/assets/buttons/edit.png" class="img">
        </card-button>
        <card-button @click="deleteRelease" class="delete__button">
            <img src="@/assets/buttons/delete.png" class="img">
        </card-button>
    </div>
    <div class="space"/>

</template>

<script>
import App from "@/App";
import api from "@/api/Api";
import router from "@/router/router";
import store from "@/store/index";

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
        showData() {
            store.commit('setFields', this.release)
            router.push(`/releases/${this.release.app_name}`)
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
        editRelease() {
            alert("EDITING")
        },
        parseAutotests() {
            if (this.release.auto_tests_required) {
                this.autotests = "нужны"
            } else {
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
.release__name {
    font-family: Montserrat;
    font-size: 20px;
    text-align: center;
}

.release__date {
    font-family: Montserrat;
    font-size: 20px;
    width: 100%;
    text-align: center;
}

.content__1 {
    font-family: Montserrat;
    font-size: 20px;
    text-align: center;
    margin-bottom: 50px;
}

.edit__button:hover {
    background-color: #F5F5F5;
}

.edit__button {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 10px;
    margin-bottom: 10px;
}

.img {
    height: 28px;
    width: 30px;
    align-self: center;
}

.delete__button {
    position: absolute;
    background-color: rgba(255, 0, 0, 0.5) !important;
    margin-right: 10px;
    margin-bottom: 10px;
    bottom: 0;
    right: 0;
}

.delete__button:hover {
    background-color: rgba(255, 0, 0, 0.8) !important;
}

.card {
    padding: 20px;
    border-radius: 15px;
    position: relative;
    width: 80%;
    background-color: white;
    margin: 0 auto;
}

.space {
    margin-bottom: 10px;
}
</style>