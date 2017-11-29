import MaskedInput from 'vue-masked-input' 

import emailIcon from '../../../assets/image/email-icon.svg'
import passwordIcon from '../../../assets/image/password-icon.svg'
import customerIcon from '../../../assets/image/customer-icon.svg'
import enterIcon from '../../../assets/image/enter-icon.svg'

export default {
    data(){
        return {
            sendData: {
                phone: '',
                email: '',
                password: '',
                repeatPassword: '',
                idCustomer: 0
            }
        }
    },
    props: {
        fields: { type: Array },
        title: { title: String }
    },
    components: {
        MaskedInput,
        emailIcon, passwordIcon, customerIcon, enterIcon
    },
    methods: {
        send(){

        }
    }
}