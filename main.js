const app = Vue.createApp({

        data()
        {
            return {
                cart:0,
                premium:false
            }

        },


        methods:
        {

            updateCart()
            {
                
                this.cart +=1

            },



            updateCart2()
            {
                if(this.cart>0)
                {
                    this.cart -=1
                }
                else
                {
                    
                    alert("Impossible, the Cart is already empty.")
                }
            },

        }
        



})
    
    

