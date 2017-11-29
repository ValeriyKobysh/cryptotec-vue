<template lang='pug'>
    .auth
        .auth__container.container 
            .auth__logo
                img(src="~img/header-logo-img.png")
            ul.auth__tabs.list
                li.auth__tab(v-for="(tab, index) in tabs" :key="index")
                    router-link.auth__link.link(
                        :to="{ name: 'auth', params: {tab: tab.icon}}"
                        active-class="active") 
                        sign-icon.auth__icon(v-if="tab.icon === 'sign'" height="15" width="15")
                        login-icon.auth__icon(v-else-if="tab.icon === 'login'" height="15" width="15")
                        recovery-icon.auth__icon(v-else-if="tab.icon === 'recovery'" height="15" width="15")
                        | {{tab.title}}
            form-auth(
                v-for="(form, index) in tabs"
                v-if="getParamTab(form.icon)"
                :key="index"
                :fields="form.fields" 
                :title="form.title")
                sign-icon.auth__icon(slot="iconTitle" v-if="form.icon === 'sign'" height="30" width="30")
                login-icon.auth__icon(slot="iconTitle" v-else-if="form.icon === 'login'" height="30" width="30")
                recovery-icon.auth__icon(slot="iconTitle" v-else-if="form.icon === 'recovery'" height="30" width="30")

                sign-icon.auth__icon(slot="iconButton" v-if="form.icon === 'sign'" height="15" width="15")
                login-icon.auth__icon(slot="iconButton" v-else-if="form.icon === 'login'" height="15" width="15")
                recovery-icon.auth__icon(slot="iconButton" v-else-if="form.icon === 'recovery'" height="15" width="15")
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss' scoped></style>