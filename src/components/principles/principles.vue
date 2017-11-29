<template lang='pug'>
    section.principles
        .principles__container.container
            h3.principles__heading Основные принципы работы компании
            ul.principles__list.list
                li.principles__item(v-for="principle in principles")
                    span.principles__top
                        span.principles__icon
                            inovation-icon(height="65" v-if="principle.icon === 'inovation'")

                            experience-icon(height="65" v-else-if="principle.icon === 'experience'")

                            analitics-icon(height="65" v-else-if="principle.icon === 'analitics'")

                        span.principles__title {{principle.title}}

                    p.principles__text(v-for="text in principle.text") {{text}}
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>