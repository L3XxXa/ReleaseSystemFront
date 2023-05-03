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
            <div class="checkbox__container">
                <input type="checkbox" class="checkbox" v-model="rememberMe" id="rememberMe">
                <label class="label">Запомнить меня</label>
            </div>
            <release-button class="button">Войти</release-button>
        </Form>
        <p class="p2" @click="registerClick">Или зарегистрироваться</p>
    </div>
</template>

<script>
import {ErrorMessage, Field, Form} from "vee-validate";
import router from "@/router/router";

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
            rememberMe: false,
            empty_login: false,
            empty_password: false
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
        loginUser(){
            alert(this.login + this.password)
        }
    }
}
</script>

<style scoped>

.form__background {
    width: 900px;
    position: fixed;
    height: 780px;
    background-color: #E4E4E4;
    border-radius: 40px;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.3);
}

.logo__img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.p1 {
    font-family: Montserrat;
    font-size: 30px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 5px;
}


.checkbox__container {
    margin-left: 50px;
    margin-top: 20px;
}

.p2 {
    font-family: Montserrat;
    font-size: 22px;
    text-align: center;
    margin-top: 4px;
    margin-bottom: 50px;
}

.button {
    display: block;
    margin: 80px auto 20px;
}

.input {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 800px;
    height: 62px;
    font-family: Montserrat;
    border: 0;
    border-radius: 10px;
    font-size: 22px;
    padding-left: 10px;
}

.label {
    font-family: Montserrat;
    font-size: 20px;
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
    height: 40px;
    margin-top: 10px;
}

.error__message {
    color: red;
    font-family: Montserrat;
    font-size: 20px;
    margin-left: 50px;
    margin-bottom: 0 !important;
}
</style>