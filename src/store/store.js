import Vue from "vue"
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex);
Vue.use(VueResource);
//#region import modules
import auth from './modules/auth';
import trade from './modules/trade';
import referals from './modules/referals';
import history from './modules/history';
import output from './modules/output';
import profile from './modules/profile';
//endregion

const store = new Vuex.Store({
    state: {

    },
    getters: {
        $http: () => (VueResource) 
    },
    actions: {

    },
    modules: {
        auth, trade, referals, history, output, profile
    }
})

export default store;