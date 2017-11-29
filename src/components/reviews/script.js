export default {
    data() {
        return {
            transformValue: 0,
            style: {
                transform: 'translate(0px)'
            }
        }
    },
    methods: {
        nextSlide() {
            const sliderItem = document.querySelector('.reviews__item');
            let sliderItemWidth = sliderItem.offsetWidth;
            
            this.transformValue += this.transformValue + sliderItemWidth
            
            this.style.transform = `translate(-${this.transformValue}px)`
        }
    }
}