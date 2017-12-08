import headerComponent from '../../components/header/header'
import welcomeSection from '../../components/welcome/welcome'
import aboutSection from '../../components/about/about'
import stepsSection from '../../components/steps/steps'
import itemsSection from '../../components/items/items'
import statisticSection from '../../components/statistic/statistic'
import principlesSection from '../../components/principles/principles'
import reviewsSection from '../../components/reviews/reviews'

export default {
    data() {
        return {
            header: {
                balance: false,
                account: false,
                nav: true
            },
            nav: [
                {
                    title: 'Регистрация',
                    icon: 'user-icon',
                    routeName: 'sign',
                },
                {
                    title: 'Вход в кабинет',
                    icon: 'enter-icon',
                    routeName: 'login',
                }
            ]
        }
    },
    components: {
        welcomeSection, aboutSection, stepsSection,
        itemsSection, principlesSection, statisticSection,
        reviewsSection, headerComponent
    }
}