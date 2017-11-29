<template lang='pug'>
    section.reviews
        .reviews__container.container
            h3.reviews__heading Отзывы-Вебинары
            .reviews__slider
                ul.reviews__list.list(:style="style")
                    li.reviews__item(v-for="n, index in 20")
                        span.reviews__video
                            iframe(src="https://www.youtube.com/embed/7kQoPMrrUuo" frameborder="0" gesture="media" allowfullscreen)

                        span.reviews__text Клип-5 ночей с Фредди (Music video) {{index + 1}}
            .reviews__navs
                a.reviews__nav.prev
                a.reviews__nav.next(@click="nextSlide")
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>