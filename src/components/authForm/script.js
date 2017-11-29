import formAuth from './form/form'

import signIcon from '../../assets/image/key-icon.svg'
import loginIcon from '../../assets/image/enter-icon.svg'
import recoveryIcon from '../../assets/image/refresh-icon.svg'

export default{
    data() {
        return {
            tab: '',
            tabs: [
                {
                    title: 'Регистрация',
                    icon: 'sign',
                    fields: [
                        { name: 'phone', placeholder: '+1 201-555-0123', value: '', type: 'phone' },
                        { name: 'email', placeholder: 'Введите e-mail', value: '', type: 'email' },
                        { name: 'password', placeholder: 'Пароль', value: '', type: 'password' },
                        { name: 'repeatPassword', placeholder: 'Повторите пароль', value: '', type: 'password' },
                        { name: 'idCustomers', placeholder: 'ID партнера', value: '', type: 'text' }
                    ]
                },
                {
                    title: 'Вход',
                    icon: 'login',
                    fields: [
                        { name: 'login', placeholder: 'Введите телефон или e-mail', value: '', type: 'text' },
                        { name: 'password', placeholder: 'Пароль', value: '', type: 'password' },
                    ]
                },
                {
                    title: 'Восстановление пароля',
                    icon: 'recovery',
                    fields: [
                        { name: 'login', placeholder: 'Введите телефон или e-mail', value: '', type: 'text' }
                    ]
                }
            ]
        }
    },
    components: {
        formAuth,
        signIcon, loginIcon, recoveryIcon
    },
    methods: {
        getParamTab(match){
            return this.$route.params.tab === match;
        }
    },
    created(){
        this.tab = this.$route.params.tab;
    }
}