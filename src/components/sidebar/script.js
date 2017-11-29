import profileIcon from '../../assets/image/room-icon.svg'
import tradeIcon from '../../assets/image/trade-icon.svg'
import referalsIcon from '../../assets/image/referals-icon.svg'
import outputIcon from '../../assets/image/output-icon.svg'
import settingIcon from '../../assets/image/settings-icon.svg'

export default {
    data() {
        return {
            links: [
                { title: 'Кабинет', home: 'profile' },
                { title: 'начать торговать', home: 'trade' },
                { title: 'Реферальная структура', home: 'referals' },
                { title: 'Вывод средств', home: 'output' },
                { title: 'История торговли ', home: 'history' },
                { title: 'Настройки ', home: 'settings' }
            ]
        }
    },
    computed: {
        
    },
    props: {
        
    },
    methods: {
        
    },
    components: {
        profileIcon, tradeIcon, referalsIcon, outputIcon, settingIcon
    },
}