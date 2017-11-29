<template lang='pug'>
    section.statistic
        .statistic__container.container
            h3.statistic__heading Наша статистика
            ul.statistic__list.list
                li.statistic__item(v-for="stat in statistics") 
                    span.statistic__number {{stat.number}}
                    span.statistic__unit &nbsp;{{stat.unit}}
                    span.statistic__desc {{stat.desc}}
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>