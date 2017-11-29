import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
//#region import icons
import diamondIcon from '../../assets/image/diamond-icon.svg'
import crownIcon from '../../assets/image/crown-icon.svg'
import ingotIcon from '../../assets/image/ingot-icon.svg'
//endregion

export default {
    data() {
        return {
            icons: ['diamond-icon', 'crown-icon', 'ingot-icon']
        }
    },
    computed: {
        ...mapGetters(['Status', 'TradePrice'])
    },
    props: {
        
    },
    methods: {
        ...mapActions(['fetchStatusSession', 'fetchDataTrade']),
        splitNumber(number){
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
        diamondIcon, crownIcon, ingotIcon
        
    },
    mounted(){
        this.fetchStatusSession().then(data => {
            this.fetchDataTrade();
        })
    }
}