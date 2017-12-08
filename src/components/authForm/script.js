import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

//#region import plugins
import keys from 'lodash.keys'
//endregion

//#region import icons
import signIcon from '../../assets/image/key-icon.svg'
import loginIcon from '../../assets/image/enter-icon.svg'
import recoveryIcon from '../../assets/image/refresh-icon.svg'
import errorIcon from '../../assets/image/error-icon.svg'
import closeIcon from '../../assets/image/close-icon.svg'
//endregion

export default{
    data() {
        return {
            errorFields: [],
            tabs: [
                { title: 'Регистрация', icon: 'sign-icon', auth: 'sign' },
                { title: 'Вход', icon: 'login-icon', auth: 'login' },
                { title: 'Восстановление пароля', icon: 'recovery-icon', auth: 'recovery' }
            ]
        }
    },
    computed: {
    },
    components: {
        signIcon, loginIcon, recoveryIcon, errorIcon, closeIcon
    },

    methods: {
        ...mapActions(['newUser', 'loginUser']),
        updateTabs(data){
            let tab = this.tabs[data.index],
                propNanes = keys(data);
            tab.fields.forEach(element => {

                propNanes.forEach(prop => {
                    if(element.name === prop){
                        element.value = data[prop]
                    }
                });
            })
        },
        fetchErrors(errors){
            this.errorFields = errors;
        },
        updateErrors(errors){
            this.errorFields = errors
        },
        resetError(){
            this.errorFields = []
        }
    },
    created(){
        this.tab = this.$route.params.tab;
    }
}