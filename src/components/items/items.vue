<template lang='pug'>
    section.items
        .items__container.container
            ul.items__list.list
                li.items__item(v-for="item in items")
                    span.items__icon
                        corp-icon(height='80' v-if="item.icon === 'corp'")

                        contranct-icon(height='80' v-if="item.icon === 'contract'")

                        support-icon(height='80' v-if="item.icon === 'support'")
                    
                    span.items__heading {{item.title}}

                    p.items__text {{item.text}}

</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>