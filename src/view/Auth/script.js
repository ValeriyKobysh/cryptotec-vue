import authSection from '../../components/authForm/authForm'
import headerComponent from '../../components/header/header'

export default {
    data(){
        return {
            header: {
                balance: false,
                account: false,
                nav: true
            },
            nav: [
                {
                    title: 'На главную страницу',
                    icon: 'backdoor-icon',
                    routeName: 'home'
                }
            ]
        }
    },
    components: {
        authSection, headerComponent
    }
}