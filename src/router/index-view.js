import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(Meta)
//#region import pages
import indexPage from '../view/Index'
import authPage from '../view/Auth/Auth'
import roomPage from '../view/Room'
import profitPage from '../view/Profit'
//endregion
//#region import components
import profileComponent from '../components/profile'
import tradeComponent from '../components/trade'
import referalsComponent from '../components/referals'
import outputComponent from '../components/output'
import historyComponent from '../components/history'
import settingsComponent from '../components/settings'
import eventsComponent from '../components/events'
import signFormCommponent from '../components/authForm/sign'
import loginFormCommponent from '../components/authForm/login'
import recoveryFormCommponent from '../components/authForm/recovery'
//endregion

export default new VueRouter(
    { 
        // mode: 'history',
        routes: [
            { name: 'home',  path: '/', component: indexPage },
            //#region Auth routing
            { 
                path: '/auth',
                component: authPage,
                children:[
                    { name: 'sign', path: '', component: signFormCommponent },
                    { name: 'login', path: 'login', component: loginFormCommponent },
                    { name: 'recovery', path: 'recovery', component: recoveryFormCommponent }
                ]
            },
            //endregion
            // catch auth redirect
            // { path: '/auth', redirect: '/auth/sign' },

            { 
                name: 'room',
                path: '/room',
                components: {
                    default: roomPage,
                },
                children: [
                    //#region profile routing
                    { 
                        name: 'profile',
                        path: 'profile',
                        components: {
                            default: profileComponent,
                            events: eventsComponent
                        }
                    },
                    //endregion
                    //#region trade routing
                    { 
                        name: 'trade',
                        path: 'trade',
                        components: {
                            default: tradeComponent,
                            events: eventsComponent
                        }
                    },
                    //endregion
                    //#region referals routing
                    { 
                        name: 'referals', 
                        path: 'referals', 
                        components: {
                            default: referalsComponent,
                        }
                    },
                    //endregion
                    //#region output routing
                    { 
                        name: 'output', 
                        path: 'output', 
                        components: {
                            default: outputComponent,
                            events: eventsComponent
                        }
                    },
                    //endregion
                    { name: 'history', path: 'history', component: historyComponent },
                    { name: 'settings', path: 'settings', component: settingsComponent }
                ]
            },

            { name: 'profit', path: '/profit', component: profitPage },
            // catch all redirect
            { path: '*', redirect: '/' }

        ]
    }
)