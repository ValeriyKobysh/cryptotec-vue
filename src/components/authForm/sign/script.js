import mixin from '../../../mixins/mixins'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
//#region import plugins
import SimpleVueValidation from 'simple-vue-validator';
import { Validator } from 'simple-vue-validator';
//endregion
//#region import icons
import signIcon from '../../../assets/image/key-icon.svg'
import loginIcon from '../../../assets/image/enter-icon.svg'
import emailIcon from '../../../assets/image/email-icon.svg'
import passwordIcon from '../../../assets/image/password-icon.svg'
import customerIcon from '../../../assets/image/customer-icon.svg'
//endregion

export default {
    mixins: [mixin, SimpleVueValidation.mixin],
    data() {
        return {
            save: true,
            email: '',
            phone: '',
            password: '',
            repeat: '',
            idCustomer: ''
        }
    },
    computed: {
        
    },
    validators: {
        email(value) {
          return Validator
            .value(value)
            .required('Email: Поле не должно быть пустым')
            .email('Введите корректный email');
        },
        phone(value) {
            return Validator
                .value(value)
                .required('Телефон: Поле не должно быть пустым')
                .digit('Введите корректный телефон')
                .minLength('Минимум 11 цифр');
        },
        'repeat, password'(repeat, password) {
              return Validator
                .value(password)
                .required('Пароль: Поле не должно быть пустым')
                .match(repeat, 'Пароли не совпадают');
        },
        idCustomer(value){
            return Validator
                .value(value)
                .digit('Введите корректный ID партнера')
        }
    },
    props: {
        
    },
    methods: {
        ...mapActions(['newUser']),
        
        postRequest(){
            this.$validate()
            .then( success => {
                if (success) {
                    this.$emit('resetError');

                    let sendData = {
                        email: this.email,
                        phone: this.phone,
                        password: this.password,
                        idCustomer: this.idCustomer,
                        save: this.save
                    }

                    this.newUser(sendData);
                } else{
                    this.$emit('errors', this.validation.errors)
                }
            });
        }
    },
    components: {
        signIcon, loginIcon, emailIcon, passwordIcon, customerIcon
    },
}