<template lang='pug'>
    main.trade 
        .trade__heading для начала торговли:
        ul.trade__steps.list
            li.trade__step Выберите ниже сумму торгового портфеля
            li.trade__step Пополните любым предложенным спрособом и нажмите кнопку «Начать торговлю»
            li.trade__step После окончания торгового пула выводите зараблтанные даеньги

        ul.trade__prices.list
            li.trade__price(v-for="(price, index, key) in TradePrice" :key="index")
                span.trade__price-type(v-if="price.vip") vip 

                span.trade__price-icon
                    component(:is="icons[index]" height="25") 

                span.trade__price-price {{splitNumber(price.price)}} рублей

                span.trade__price-income Прибыль от {{splitNumber(price.income)}} руб.

                span.trade__price-timing Длительность пула : {{price.timing}} минут

                .trade__price-wrap
                    a.trade__price-link.link(href="javascript:;") ИНВЕСТИРОВАТЬ

        p.trade__text Одно из направлений работы нашей компании - торговля криптовалютами, трейдинг. Курс криптовалют имеет большую волатильность, что дает высокуюдоходность при правильно организованной работе.

        p.trade__text <strong>Особенности инвестирования в трейдинг :</strong>

        .trade__text
            ul.trade__text-list.list
                li.trade__text-item Доходность торговли на бирже выше, чем доходность от майнинга
                li.trade__text-item Создан специальный стабилизационный фонд, в который идут отчисления от каждой успешной сделки.
                li.trade__text-item Возможность получать доходы сразу после завершения торгового пула.

</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>