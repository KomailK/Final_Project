app.component('product3-display',{
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
    <div class="product3-display">
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

        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>

    </div>`,
    data()
        {
            return {
                
               selectedDevice:0,
   
                Products:[
                    {
                        
                        title:"Razer Gaming Headset White",
                        description:"Elevate your gaming with our high-performance white headset.",
                        color:"white",
                        quantity:20,
                        image:"./assets/images/gaming-headset-white.png",
                        price:220

                    },
                    {
                        
                        title:"Razer Gaming Headset Green",
                        description:"Elevate your gaming with our high-performance green headset.",
                        color:"green",
                        quantity:0,
                        image:"./assets/images/gaming-headset-green.png",
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