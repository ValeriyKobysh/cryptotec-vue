import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
//#region import components
import pagination from '../pagination'
//endregion

export default {
    data() {
        return {
            output: {
                sum: 0,
                payment: '',
                wallet: ''
            }
        }
    },
    computed: {
        ...mapGetters(['Status', 'OutputHistory'])
    },
    props: {
        
    },
    methods: {
        ...mapActions(['fetchStatusSession', 'fetchDataOutputHistory'])
    },
    components: {
        pagination
    },
    created(){
        this.fetchStatusSession().then(data => {
            this.fetchDataOutputHistory();
        })
    }
}