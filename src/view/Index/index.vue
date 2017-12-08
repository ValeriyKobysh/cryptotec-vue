<template lang='pug'>
    .index-page
        header-component(
            :header="header"
            :navs="nav")

        welcome-section

        about-section

        steps-section

        items-section

        statistic-section

        principles-section

        reviews-section
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>