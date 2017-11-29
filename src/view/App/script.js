import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

import headerComponent from './../../components/header/header'
import footerComponent from './../../components/footer'

export default {
    name: 'app',
    data () {
      return {
        
      }
    },
    computed: {

    },
    components: {
      headerComponent,
      footerComponent
    },
    methods: {
      ...mapActions(['fetchStatusSession']),
    },
    created(){
      this.fetchStatusSession();
    }
  }