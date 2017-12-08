import Vue from 'vue'
import App from './view/App/App'
import router from './router/index-view'
import store from './store/store'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
