<template lang='pug'>
    form.form
        .form__heading
            login-icon.auth__icon(height="30" width="30")
            | Вход

        .form__group
            span.form__icon
                login-icon( height="15")

            input.form__input(type="text" placeholder="Введите телефон или e-mail")

        .form__group
            span.form__icon
                password-icon( height="15")

            input.form__input(type="password" placeholder="Пароль")

        .form__group.form__group_between
            .form__switch-wrap
                .form__switch
                    input(v-show="false" type="checkbox" v-model="save")
                    label.form__switch-lbl(@click="switchSave")

                span.form__switch-text Запомнить
                
            button.form__submit(type="button" @click="postRequest")
                login-icon.auth__icon(height="15" width="15")
                | Вход

</template>

<script src='./script.js'></script>

<style lang='scss' src='../form.scss'></style>