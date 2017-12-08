import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

import userIcon from '../../assets/image/user-icon.svg'
import enterIcon from '../../assets/image/enter-icon.svg'
import backdoorIcon from '../../assets/image/backdoor-icon.svg'
import accountIcon from '../../assets/image/account-icon.svg'
import profileIcon from '../../assets/image/profile-icon.svg'
import msgIcon from '../../assets/image/msg-icon.svg'
import rubIcon from '../../assets/image/rub-icon.svg'
import dollarIcon from '../../assets/image/dollar-icon.svg'

const icon = []

export default {
    name: 'header',
    data() {
        return {
            accountShow: false,
            balanceTitle: ['ВАШ БАЛАНС:', 'За сегодня', 'За неделю', 'За месяц', 'За все время']
        }
    },
    computed: {
        ...mapGetters(['getStatus']), 
    },
    props: {
        balance: { type: Array },
        header: { type: Object },
        navs: { type: Array }
    },
    methods: {
        routeName(name){
            return this.$route.path === name;
        },
        toggleAccount(){
            this.accountShow = !this.accountShow;
        },
        balansNumber(number){
            number = number.toString();

            var parts = (number + '').split('.'),
            main = parts[0],
            len = main.length,
            output = '',
            i = len - 1;
        
            while(i >= 0) {
                output = main.charAt(i) + output;
                if ((len - i) % 3 === 0 && i > 0) {
                    output = ' ' + output;
                }
                --i;
            }
    
            if (parts.length > 1) {
                output += '.' + parts[1];
            }

            return output;
        }
    },
    components: {
        userIcon, enterIcon, backdoorIcon, accountIcon, profileIcon, msgIcon,
        rubIcon, dollarIcon
    },
    created() {
    }
}
