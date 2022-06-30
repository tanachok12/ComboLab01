const app = Vue.createApp({
    data() {
        
        return {
           product : 'Shoes',
           foodinfo : 'good boiii ',
           image: './assets/images/socks_green.jpg',
            inStock : true,
            inventory: 100,
            link: 'http://www.camt.cmu.ac.th/',
            onSale : true,
            details: ['50% cotton' , '30% wool','20% polyester ' ],
            variants : [
                { id: 2234,color:'green', image: './assets/images/socks_green.jpg' },
                {id: 2235 , color: 'blue', image: './assets/images/socks_blue.jpg'}

            ],
            size: ['Size = S,M,L'],
            cart: 0 ,
            count:0


        }
    
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        changeStatus() {
            console.log(this.inventory)
            if(this.inventory== 100){
                this.inventory = 0;
            }
            else {
                this.inventory = 100;
            }

        }
    }
})
