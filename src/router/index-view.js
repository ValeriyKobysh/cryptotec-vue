import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
// import pages
import indexPage from '../view/Index'
import authPage from '../view/Auth/Auth'
import roomPage from '../view/Room'
import profitPage from '../view/Profit'
//import components
import profileComponent from '../components/profile'
import tradeComponent from '../components/trade'
import referalsComponent from '../components/referals'
import outputComponent from '../components/output'
import historyComponent from '../components/history'
import settingsComponent from '../components/settings'
import eventsComponent from '../components/events'

export default new VueRouter(
    { 
        routes: [
            { name: 'home',  path: '/', component: indexPage },
            { name: 'auth',  path: '/auth/:tab?', component: authPage },
            // catch auth redirect
            { path: '/auth', redirect: '/auth/sign' },

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