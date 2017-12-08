<template lang='pug'>
    form.form
        .form__heading
            signIcon.auth__icon(height="30" width="30")
            | Регистрация

        .form__group
            span.form__icon
                login-icon( height="15")

            input.form__input(v-model="phone" type="phone" placeholder="+1 201-555-0123")

        .form__group
            span.form__icon
                email-icon( height="15")

            input.form__input(v-model="email" type="email" placeholder="Введите e-mail")

        .form__group
            span.form__icon
                password-icon( height="15")

            input.form__input(v-model="password" type="password" placeholder="Пароль")

        .form__group
            span.form__icon
                password-icon(height="15")

            input.form__input(v-model="repeat" type="password" placeholder="Повторите пароль")

        .form__group
            span.form__icon
                customer-icon(height="15")

            input.form__input(v-model="idCustomer" type="text" placeholder="ID партнера")

        .form__group.form__group_between
            .form__switch-wrap
                .form__switch
                    input(v-show="false" type="checkbox" v-model="save")
                    label.form__switch-lbl(@click="switchSave")

                span.form__switch-text Запомнить
                
            button.form__submit(type="button" @click="postRequest")
                signIcon.auth__icon(height="15" width="15")
                | Регистрация

</template>

<script src='./script.js'></script>

<style lang='scss' src='../form.scss'></style>