<template lang='pug'>
    main.output
        .output__output
            .output__heading Вывод средств

            form.output__form
                .output__group
                    label.output__lbl Введите сумму:

                    input.output__input(type="text" v-model="output.sum")

                .output__group
                    label.output__lbl Выберите платежную систему:

                    input.output__input(type="text" v-model="output.payment")

                .output__group
                    label.output__lbl Номер кошелька

                    input.output__input(type="text" v-model="output.wallet")

            .output__footer
                button.output__btn(type=button) ВЫВЕСТИ СРЕДСТВА

                span.output__info Будет выведено: 
                    span.mark {{output.sum}} РУБ.

        .output__history
            .output__history-heading История операций

            table.output__table(cellspacing="0")
                tr
                    th Дата (время)
                    th Тип операции
                    th Сумма
                    th Статус
                tr(v-for="(history, index, key) in OutputHistory" :key="index")
                    td(
                        v-for="data in history" 
                        :class="{ orange: data === 'В ожидании' , green: data === 'Исполнен' , red: data === 'Отказ' }") {{data}}

            pagination
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>