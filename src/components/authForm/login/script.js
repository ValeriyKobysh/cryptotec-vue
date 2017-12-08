import mixin from '../../../mixins/mixins'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
//#region import plugins
import SimpleVueValidation from 'simple-vue-validator';
import { Validator } from 'simple-vue-validator';
//endregion
//#region import icons
import loginIcon from '../../../assets/image/enter-icon.svg'
import passwordIcon from '../../../assets/image/password-icon.svg'
//endregion

export default {
    mixins: [mixin, SimpleVueValidation.mixin],
    data() {
        return {
            save: true,
            login: '',
            password: ''
        }
    },
    computed: {
        
    },
    validators:{
        password(value) {
            return Validator
                .value(value)
                .required('Пароль: Поле не должно быть пустым')
      },
        login(value){
            return Validator
                .value(value)
                .required('Логин: Поле не должно быть пустым')
      }
    },
    props: {
        
    },
    methods: {
        ...mapActions(['loginUser']),

        postRequest(){
            this.$validate()
            .then( success => {
                if (success) {
                    this.$emit('resetError');

                    let sendData = {
                        login: this.login,
                        password: this.password,
                        save: this.save
                    }

                    this.loginUser(sendData);
                } else{
                    this.$emit('errors', this.validation.errors)
                }
            });
        }
    },
    components: {
        loginIcon, passwordIcon
    },
}