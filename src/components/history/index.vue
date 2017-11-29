<template lang='pug'>
    main.history 
        .history__heading ИСТОРИЯ ТОРГОВЛИ

        table.history__table(cellspacing="0")
            tr
                th Дата (время)
                th Тип операции
                th Сумма
                th Статус
            tr(v-for="(history, index, key) in OutputHistory" :key="index")
                td(
                    v-for="data in history" 
                    :class="{ orange: data === 'В ожидании' , green: data === 'Исполнен' , red: data === 'Отказ' }") {{data}}
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>