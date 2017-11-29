<template lang='pug'>
    main.referals
        .referals__header
            .referals__heading РЕФЕРАЛЬНАЯ СТРУКТУРА

            .referals__rank ВАШ РАНГ : {{Referals.rank}}

        ul.referals__structure-list.list
            li.referals__structure-item(v-for="(referal, index, key) in Referals.structure" :key="index")
                span.referals__structure-title {{structureTitles[index]}}
                span.referals__structure-value {{referal}}

        .referals__activity
            .referals__heading таблица РЕФЕРАЛЬНой активности

            ul.referals__activity-list.list
                li.referals__activity-item(v-for="(referal, index, key) in Referals.activity" :key="index")
                    span.referals__activity-title {{activityTitles[index]}}
                    span.referals__activity-value {{referal}}

</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>