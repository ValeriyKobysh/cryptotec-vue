import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    data() {
        return {
            structureTitles: ['Количество рефералов 1-го уровня:', 'Количество рефералов 2-го уровня:',
            'Количество рефералов 3-го уровня:', 'ваша реферальная ссылка:', 'вас пригласили:', 'ваш реферальный процент:'],
            activityTitles: ['Общее кол-во партнеров', 'Приглашенные лично партнёры', 'Кол-во партнёров без инвестиций',
            'Кол-во партнёров с инвестициями', 'Кол-во переходов по реф. ссылке', 'Заработано на партнёрской программе']
        }
    },
    computed: {
        ...mapGetters(['Referals'])
    },
    props: {
        
    },
    methods: {
        ...mapActions(['fetchStatusSession', 'fetchDataReferals']),
    },
    components: {
        
    },
    created(){
        this.fetchStatusSession().then(data => {
            this.fetchDataReferals();
        })
    }
}