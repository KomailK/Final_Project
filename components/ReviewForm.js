app.component('review-form',{


    template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
    <br>
    <h2>Leave a review</h2>
    <br>
    <label for="name">Product: </label>
    <br>
    <select id="name" v-model="name">
    <option>HyperX Gaming Keyboard Black</option>
    <option>HyperX Gaming Keyboard White</option>
    <option>Logitech Gaming Wireless Mouse Black</option>
    <option>Logitech Gaming Wireless Mouse Blue</option>
    <option>Razer Gaming Headset White</option>
    <option>Razer Gaming Headset Green</option>
    </select>

    <br>
    <br>


    <label for="review">Review: </label>
    <br>
    <textarea  rows="5" cols="40" id="review" v-model="review"></textarea>

    <br>
    <br>
    <label for="rating">Rating: </label>
    <br>
    <select id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
    </select>

    <br>
    <input class="sbutton" type="submit" value="Submit">

    </form>`,


    data()
    {
        return{
            name: '',
            review: '',
            rating: null

        }
    },

    methods:
    {

        onSubmit() { 

            if (this.name ==='' || this.review ===''|| this.rating === null)
            {
                alert("Review is incomplete. Please fill out every field.")
                this.name= ''
                this.review=''
                this.rating= null
                return 
            }


            let productReview ={

                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted',productReview)

            this.name= ''
            this.review=''
            this.rating= null


        }


    }

})