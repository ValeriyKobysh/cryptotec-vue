<template lang='pug'>
    section.steps
        .steps__container.container
            h3.steps__heading Что нужно делать?
            ul.steps__list.list
                li.steps__item(v-for="step in steps") {{step}}
            router-link.steps__link.link(:to="{name: 'auth'}") Заработать первые деньги!
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>