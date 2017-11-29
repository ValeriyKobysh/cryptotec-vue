<template lang='pug'>
    .events 
        .events__heading Последние события

        ul.events__list.list
            li.events__item(v-for="event in events")
                span.events__img
                    img(:src="event.src")

                span.events__title {{event.title}}

                time.events__publish {{event.publish}}
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss' scoped></style>