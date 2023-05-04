<template>
    <div class="form__background">
        <img src="@/assets/logo.png" class="logo__img">
        <p class="p1">Войти в аккаунт</p>
        <p class="p2">И получить доступ к системе</p>
        <Form @submit="loginUser">
            <span class="error__message__wrapper">
                <ErrorMessage name="login" class="error__message"/>
            </span>
            <Field name="login" type="string" :rules="validate_field_not_empty" class="input"
                   @blur="checkInput('login')" :class="{'error__field' : empty_login}"
                   placeholder="Логин" v-model="login"/>
            <span class="error__message__wrapper">
                <ErrorMessage name="password" class="error__message"/>
            </span>
            <Field name="password" type="password" :rules="validate_field_not_empty" class="input"
                   @blur="checkInput('password')" :class="{'error__field' : empty_password}"
                   placeholder="Пароль" v-model="password"/>
            <release-button class="button">Войти</release-button>
        </Form>
        <p class="p2" style="margin-bottom: 0" @click="registerClick">Или зарегистрироваться</p>
        <popup-window id="popup_window" class="popup__window">{{ pop_up_text }}</popup-window>
    </div>
</template>

<script>
import {ErrorMessage, Field, Form} from "vee-validate";
import router from "@/router/router";
import api from "@/api/Api";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    name: "LoginForm",
    data() {
        return {
            login: '',
            password: '',
            empty_login: false,
            empty_password: false,
            pop_up_text: ''
        }
    },
    methods: {
        validate_field_not_empty(value, field) {
            if (!value) {
                return "Обязательное поле"
            }
            switch (field.field) {
                case "login":
                    this.empty_login = false
                    break
                case "password":
                    this.empty_password = false
                    break
            }
            return true
        },
        checkInput(event) {
            switch (event) {
                case "login":
                    this.empty_login = true
                    break
                case "password":
                    this.empty_password = true
                    break
            }
        },
        registerClick(){
            router.push("/register")
        },
        createDateForCookie(){
            let date = new Date(Date.now() + 86400e10);
            date = date.toUTCString();
            return date
        },
        saveToCookie(){
            let date = this.createDateForCookie()
            document.cookie = "password=" + this.password+ "; expires=" + date
            document.cookie = "login=" + this.login + "; expires=" + date
        },
        loginUser(){
            this.saveToCookie()
            this.loginUserAsync()
        },
        async loginUserAsync(){
            let response
            let data = document.cookie
            console.log(data)
            await (async () => {
                response = await api.methods.login(data)
            })()
            if (response.status === 200) {
                console.log(response)
                await router.push("/releases")
                document.cookie = "logged=true;"
            } else {
                this.pop_up_text = "Неправильный логин или пароль"
                this.openPopup()
            }
        },
        openPopup() {
            document.getElementById("popup_window").style.display = "block"
            setTimeout(this.closePopup, 5000)
        },
        autoPlaceLogin(){
            this.login = this.getCookie("login")
        },
        getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        },
    },
    mounted() {
        this.autoPlaceLogin()
    }

}
</script>

<style scoped>

.form__background {
    padding: 30px;
    width: 30%;
    height: 50%;
    background-color: #E4E4E4;
    border-radius: 40px;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.3);
}

.logo__img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 20%;
    width: 30%;
}

.p1 {
    font-family: Montserrat;
    font-size: 24px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 5px;
}


.checkbox__container {
    margin-left: 50px;
    margin-top: 20px;
}

.p2 {
    font-family: Montserrat;
    font-size: 20px;
    text-align: center;
    margin-top: 4px;
    margin-bottom: 30px;
}

.button {
    display: block;
    margin: 30px auto 20px;
}

.input {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: 50px;
    font-family: Montserrat;
    border: 0;
    border-radius: 10px;
    font-size: 19px;
    padding-left: 10px;
}

.label {
    font-family: Montserrat;
    font-size: 20px;
    margin-left: 10px;
    margin-top: 1px;
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

.error__field {
    border: solid red 2px !important;
    color: red;
}

.error__field::placeholder {
    color: red;
}

.error__message__wrapper {
    display: block;
    height: 45px;
    margin-top: 10px;
}

.error__message {
    color: red;
    font-family: Montserrat;
    font-size: 19px;
    margin-left: 50px;
    margin-bottom: 0 !important;
}
</style>