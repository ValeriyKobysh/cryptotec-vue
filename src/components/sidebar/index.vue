<template lang='pug'>
    nav.sidebar__nav
        ul.sidebar__list.list
            li.sidebar__item(v-for="(link, index) in links" :key="index")
                router-link.sidebar__link.link(:to="{ name: link.home }" active-class="active") 
                    profile-icon.sidebar__icon(v-if="link.home === 'profile'" height="20")
                    trade-icon.sidebar__icon(v-else-if="link.home === 'trade' || link.home === 'history'" height="20")
                    referals-icon.sidebar__icon(v-else-if="link.home === 'referals'" height="20")
                    output-icon.sidebar__icon(v-else-if="link.home === 'output'" height="20")
                    setting-icon.sidebar__icon(v-else-if="link.home === 'settings'" height="20")
                    | {{link.title}}

</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>