<template lang="pug">
    #app
        //- header-component

        router-view

        //- footer-component
</template>

<script src="./script.js"></script>

<style lang="scss">
#app{
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>
