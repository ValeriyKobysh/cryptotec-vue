<template lang='pug'>
    .auth
        .auth__error(v-if="errorFields.length > 0")
            button.auth__error-close()
                close-icon(height="10")
            error-icon.auth__error-icon(height="30")
            ul.auth__error-list.list
                li.auth__error-item(v-for="error in errorFields") {{error.message}}

        .auth__container.container 
            .auth__logo
                img(src="~img/header-logo-img.png")
            ul.auth__tabs.list
                li.auth__tab(v-for="(tab, index) in tabs" :key="index")
                    router-link.auth__link.link(
                        :to="{ name: tab.auth }"
                        active-class="active"
                        @click="resetError"
                        exact=true) 

                        component.auth__icon(:is="tab.icon" height="15" width="15") 

                        | {{tab.title}}

            router-view(
                @errors="updateErrors"
                @resetError="resetError"
                )

</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>