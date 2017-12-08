<template lang='pug'>
    .room
        .room__top-line
            .container
                ul.room__top-line-list.list
                    -for(var i = 1; i < 11; i++)
                        li.room__top-line-item
                            img.room__top-line-img(src="~img/top-line/top-line-" + i + "-img.png")

        header-component.header_inner(
            :balance="balance"
            :header="header")

        .room__wrapper
            .room__container.container
                aside.sidebar
                    sidebar-component

                    .sidebar__info
                        .sidebar__info-heading <strong>Что такое планируемая прибыль?</strong>

                        p Планируемая прибыль – это минимум денег, которые вы заработаете за операционный период инвестируя соответственную сумму и начав торговлю. 

                        p Торговый п период – это продолжительность времени торгового пула , длится от 2 до 60 минут. Торговлю можно повторять 1 раз в день.

                        p Вывод средств на платформе моментальный.

                        p Все средства на платформе застрахованы, поэтому мы гарантируем 100% сохранность ваших средств.

                .room__content
                    router-view 

                router-view(name="events" :events="events")

        footer-component
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>