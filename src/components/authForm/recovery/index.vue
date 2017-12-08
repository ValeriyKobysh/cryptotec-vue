<template lang='pug'>
    form.form
        .form__heading
            recovery-icon.auth__icon(height="30" width="30")
            | Восстановления пароля

        .form__group
            span.form__icon
                login-icon( height="15")

            input.form__input(
                type="text" 
                placeholder="Введите телефон или e-mail"
                v-model="login")

        .form__group.form__group_between
            .form__switch-wrap

                
            button.form__submit(type="button" @click="postRequest")
                recovery-icon.auth__icon(height="15" width="15")
                | Восстановления пароля

</template>

<script src='./script.js'></script>

<style lang='scss' src='../form.scss'></style>