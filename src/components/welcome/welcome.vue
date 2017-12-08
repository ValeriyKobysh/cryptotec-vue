<template lang='pug'>
    .welcome
        .welcome__container.container
            h1.welcome__heading CRYPTOTEC
                span.bold TRADING
            
            span.welcome__desc Innovation distinguishes

            .welcome__btns
                router-link.welcome__btn.welcome__btn_default.link(:to="{ name: 'login' }") Войти в личный кабинет
                router-link.welcome__btn.welcome__btn_accent.link(:to="{ name: 'sign' }") Регистрация в компании
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>