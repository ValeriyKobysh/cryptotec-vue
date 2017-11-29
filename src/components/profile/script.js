import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
//#region import icons
import largeIcon from '../../assets/image/profile-large-icon.svg'
import dollarIcon from '../../assets/image/dollar-icon.svg'
import rubIcon from '../../assets/image/rub-icon.svg'
import clockIcon from '../../assets/image/clock-icon.svg'
//endregion

export default {
    data() {
        return {
            password: {
                old: '',
                new: '',
                repeat: ''
            }
        }
    },
    computed: {
        ...mapGetters(['ProfileData','Auth'])
    },
    props: {
        
    },
    methods: {
        ...mapActions(['fetchStatusSession', 'fetchProfileData']),
    },
    components: {
        largeIcon, dollarIcon, rubIcon, clockIcon
    },
    created(){
        this.fetchStatusSession().then(data => {
            this.fetchProfileData();
        })
    }
}