import mixin from '../../../mixins/mixins'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
//#region import plugins
import SimpleVueValidation from 'simple-vue-validator';
import { Validator } from 'simple-vue-validator';
//endregion
//#region import icons
import loginIcon from '../../../assets/image/enter-icon.svg'
import recoveryIcon from '../../../assets/image/refresh-icon.svg'
//endregion

export default {
    mixins: [mixin, SimpleVueValidation.mixin],
    data() {
        return {
            login: '',
        }
    },
    computed: {
        
    },
    validators:{
        login(value){
            return Validator
                .value(value)
                .required('Логин: Поле не должно быть пустым')
      }
    },
    props: {
        
    },
    methods: {
        ...mapActions(['RecoveryPassword']),

        postRequest(){
            this.$validate()
            .then( success => {
                if (success) {
                    this.$emit('resetError');

                    let sendData = {
                        login: this.login
                    }

                    this.loginUser(sendData);
                } else{
                    this.$emit('errors', this.validation.errors)
                }
            });
        }
    },
    components: {
        loginIcon, recoveryIcon
    },
}