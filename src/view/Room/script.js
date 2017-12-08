import sidebarComponent from "../../components/sidebar"
import footerComponent from "../../components/footer";
import headerComponent from "../../components/header/header"

export default {
    data() {
        return {
            balance: [10256, 0, 1100, 5089, 17058],
            events: [
                {
                    src: 'src/assets/image/example-event-img.png',
                    title: 'Выплата по деплзитам и инвестициям в тейдинг ',
                    publish: '2017/03/17 17:00'
                }
            ],
            header: {
                balance: true,
                account: true,
                nav: false
            }
        }
    },
    computed: {
        
    },
    props: {
        
    },
    methods: {
        
    },
    components: {
        sidebarComponent, footerComponent, headerComponent
    },
}