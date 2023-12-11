app.component('product-display',{
    props:
    {
        premium:
        {
            type:Boolean,
            required:true

        }
    },

    template:
    /*html*/
    `  
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image"> <!--Using v-bind to link the attribute src with with value of image-->
            </div>
            <div class="product-info">
                
                <ul>
                    <!--
                    :key="device.title" giving unique key to identify each object in our list
                    device to acces to objects values - index to go through all the values in our list
                -->
                    <div v-for="(device,index) in Products" 
                    :key="device.title" 
                    @mouseover="updateDevice(index)"
                    class="color-circle"
                    :style="{backgroundColor: device.color}">
                    </div>
                </ul>

                <h1>{{ title }}</h1> 
                <h5>{{ description }}</h5></div> 

                
                    
                <p v-if="inStock">In Stock </p>
                <p v-else>Out of Stock </p>

                <p>Price: {{pricing}} CAD$</p>
                <br> 

            <button class="button2" :class="{disabledButton: !inStock}" :disabled="!inStock" @click="addToCart">Add to Cart</button>
            <button class="button2" :class="{disabledButton: !inStock}" :disabled="!inStock" @click="removeToCart">Remove to Cart</button>

        </div>

    </div>`,
    data()
        {
            return {
                
               selectedDevice:0,
   
                Products:[
                    {
                        title:"HyperX Gaming Keyboard Black",
                        description:"A high-performance black keyboard designed for gamers.",
                        color:"black",
                        quantity:100,
                        image:"./assets/images/gaming-keyboard-black.png",
                        price:190

                
                    },

                    {
                        title:" HyperX Gaming Keyboard White",
                        description:"A high-performance white keyboard designed for gamers.",
                        color:"white",
                        quantity:0,
                        image:"./assets/images/gaming-keyboard-white.png",
                        price:210

                    }],

                    reviews: []

            }

        },


        methods:
        {

            addToCart()
            {
                this.$emit('add-to-cart')
            },

            removeToCart()
            {
                this.$emit('rm-to-cart')
                  
            },

            updateDevice(index){
                this.selectedDevice=index
            },
            

            addReview(review)
            {

                this.reviews.push(review)

            }



        },
        computed: {
            title(){
              return this.Products[this.selectedDevice].title
            },
            description(){
                return this.Products[this.selectedDevice].description
              },
            image()
            {
                return this.Products[this.selectedDevice].image
            },
            inStock()
            {
                return this.Products[this.selectedDevice].quantity

            },

            pricing()
            {
                return this.Products[this.selectedDevice].price
            }

        }    
})