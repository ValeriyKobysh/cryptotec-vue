<template lang='pug'>
    form.form
        .form__heading 
            slot(name="iconTitle")
            |{{title}}

        .form__group(v-for="field in fields")
            span.form__icon
                enter-icon(v-if="field.name === 'phone' || field.name === 'login'" height="15")
                email-icon(v-if="field.name === 'email'" height="15")
                password-icon(v-else-if="field.name === 'password' || field.name === 'repeatPassword'" height="15")
                customer-icon(v-else-if="field.name === 'idCustomers'" height="15")

            input.form__input(
                :type="field.type"
                :placeholder="field.placeholder"
                )

        .form__group.form__group_between
            .form__switch-wrap
                .form__switch
                    label.form__switch-lbl 
                        input(v-show="false" type="checkbox")

                span.form__switch-text Запомнить
                
            button.form__submit(type="button")
                slot(name="iconButton")
                | {{title}}

</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss' scoped></style>