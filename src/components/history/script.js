import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    data() {
        return {
            
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
        
    },
    created(){
        this.fetchStatusSession().then(data => {
            this.fetchDataOutputHistory();
        })
    }
}