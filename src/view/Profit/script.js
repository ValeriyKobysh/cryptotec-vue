export default {
    data() {
        return {
            
        }
    },
    computed: {
        
    },
    props: {
        
    },
    methods: {
        getRandomArbitary(min, max){
          return Math.round(Math.random() * (max - min) + min) ;
        },
        create(){
            let min = 100,
                max = 300,
                count = 60;

            let s = Snap("#profit");
            let background = s.rect(0, 0, '100%', '100%');
                background.attr({
                    fill: '#3f3f3f'
                })

            let randomArray = []
            for(let i = 0; i < count; i++){
                randomArray.push(parseFloat((this.getRandomArbitary(min, max) / 1000 + 1).toFixed(3)))
            }
            
            let horizontalLine = {
                x1: 2.5,
                x2: 2.5,
                y1: 2.5,
                y2: 97.5,
                strokeWidth: 0
            }

            let verticalLine = {
                x1: 2.5,
                x2: 2.5,
                y1: 2.5,
                y2: 97.5
            }
            for(let i = 0; i < count; i++){
                i == 0 ? horizontalLine.strokeWidth = 2 : horizontalLine.strokeWidth = 1; 
                // i == 0 ? strokeDasharray = 0 : strokeDasharray = 2; 
                // s.text(`${endX}%`, `100%`, i)
                s.line(`0`, `${horizontalLine.y1}%`, `0`, `${horizontalLine.y2}%`)
                    .attr(
                        { 
                            strokeWidth: `${horizontalLine.strokeWidth}px`,
                            stroke: '#909090',
                            strokeDasharray: strokeDasharray
                        }
                    )
                    .animate({x1: `${horizontalLine.x1}%`, x2: `${horizontalLine.x2}%`}, 1000, mina.easeinout)

                let stepX = 97.5 / count;
                startX += stepX;
                endX += stepX;
            }
            
            let countIteration = (max - min) / 10 + 1;
            for(let i = 0; i < countIteration; i++){
                i == 0 ? strokeWidth = 2 : strokeWidth = 1;

                s.line(`${startX}%`, `${startY}%`, `97.5%`, `${startY}%`)
                    .attr(
                        { 
                            strokeWidth: `${strokeWidth}px`,
                            stroke: '#909090',
                            strokeDasharray: strokeDasharray
                        }
                    )
                    // .animate({y1: `${endY}%`, y2: `${startY}%`}, 1000, mina.easeinout)

                let stepY = 97.5 / countIteration;
                startY += stepY;
                // endY += stepY;
            }
        }
    },
    components: {
        
    },
}