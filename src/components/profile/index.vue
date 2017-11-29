<template lang='pug'>
    main.profile 
        .profile__dashboard
            .profile__large
                large-icon.profile__large-icon(height="60")
                span.profile__large-title Всего заработано:
                span.profile__large-value {{ProfileData[0]}} РУБ.

            .profile__grid
                .profile__small
                    span.profile__small-title Всего инвестировано:
                    span.profile__small-value 
                        dollar-icon.profile__small-icon(height="25" width="25")
                        | {{ProfileData[1]}} 
                        rub-icon.profile__small-icon(height="20")

                .profile__small
                    span.profile__small-title Доход от рефералов
                    span.profile__small-value 
                        dollar-icon.profile__small-icon(height="25" width="25")
                        | {{ProfileData[2]}} 
                        rub-icon.profile__small-icon(height="20")

                .profile__small
                    span.profile__small-title Доход с торговли
                    span.profile__small-value 
                        dollar-icon.profile__small-icon(height="25" width="25")
                        | {{ProfileData[3]}} 
                        rub-icon.profile__small-icon(height="20")

                .profile__small
                    span.profile__small-title Последнее начисление
                    span.profile__small-value 
                        clock-icon.profile__small-icon(height="25" width="25")
                        | {{ProfileData[4]}} 

        .profile__model
            .profile__data
                .profile__heading Личные данные

                .profile__group
                    label.profile__lbl Фамилия имя отчество

                    input.profile__input(type="text" v-model="Auth.name")

                .profile__group
                    label.profile__lbl Электронная почта

                    input.profile__input(type="text" v-model="Auth.email")

                .profile__group
                    label.profile__lbl Логин

                    input.profile__input(type="text" v-model="Auth.login")

                .profile__group
                    label.profile__lbl Страна проживания

                    input.profile__input(type="text" v-model="Auth.country")

                .profile__group
                    label.profile__lbl Город

                    input.profile__input(type="text" v-model="Auth.city")

                .profile__group
                    label.profile__lbl Адрес

                    input.profile__input(type="text" v-model="Auth.address")

                .profile__group
                    label.profile__lbl Номер телефона

                    input.profile__input(type="text" v-model="Auth.phone")

                button.profile__btn СОХРАНИТЬ ИЗМЕНЕНИЯ

            .profile__passwords
                .profile__heading Смена пароля

                .profile__group
                    label.profile__lbl Старый пароль

                    input.profile__input(type="password" v-model="password.old")

                .profile__group
                    label.profile__lbl Новый пароль

                    input.profile__input(type="password" v-model="password.new")

                .profile__group
                    label.profile__lbl Повторите пароль

                    input.profile__input(type="password" v-model="password.repeat")

                button.profile__btn СОХРАНИТЬ ИЗМЕНЕНИЯ
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>