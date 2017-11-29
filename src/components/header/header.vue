<template lang='pug'>
    header.header
        .header__container.container
            .header__logo
                router-link.header__logo-link(:to="{name: 'home'}")
                    img.header__logo-icon(src="~img/header-logo-img.png")

            .header__balance
                ul.header__balance-list.list
                    li.header__balance-item(v-for="(bal, index, key) in balance" :key="index")
                        dollar-icon.header__balance-bigicon(width="50" height="50" v-if="index == 0")
                        span.header__balance-title {{balanceTitle[index]}}
                        span.header__balance-number {{balansNumber(bal)}}&nbsp;
                            rubIcon.header__balance-icon(height="13")

            .header__account
                .header__account-icon(@click="toggleAccount")
                    account-icon(height="40" width="40")

                .header__account-drop(v-if="accountShow")
                    .header__account-header
                        span.header__account-date Пятница 10 ноября

                        span.header__account-id ID&nbsp;
                            span.mark 518110

                    ul.header__account-list.list
                        li.header__account-item
                            router-link.header__account-link.link(:to="{ name: 'profile'} ")
                                profile-icon.header__account-img(width="20" height="20")
                                | Настройки профиля

                        li.header__account-item
                            a.header__account-link.link(href="mailto: support@tradelimited.com") 
                                msg-icon.header__account-img(width="20" height="20")
                                | support@tradelimited.com

                        li.header__account-item
                            a.header__account-link.link(href="javascript:;") 
                                enter-icon.header__account-img(width="20" height="20")
                                | Выход

            //- .header__nav
            //-     ul.header__nav-list.list
            //-         li.header__nav-item(v-for="nav in navs" v-if="routeName(nav.showAtRouteName)")
            //-             router-link.header__nav-link.link(
            //-                 :to="{ name: nav.routeName, params: nav.params }" 
                            
            //-                 ) 
            //-                 user-icon.header__nav-icon(height="12" v-if="nav.icon === 'sign'")
            //-                 enter-icon.header__nav-icon(height="12" v-else-if="nav.icon === 'enter'")
            //-                 backdoor-icon.header__nav-icon(height="12" v-else-if="nav.icon === 'back'")
            //-                 | {{nav.title}}
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>