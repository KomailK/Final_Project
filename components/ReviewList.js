app.component('review-list',
{

    props: {
     reviews:{

            type: Array,
            required:true

        }

    },
    template:

    /*html*/
    `
    <div class="review-container">
    <h3>Reviews</h3>
        <ul>
        
            <li v-for="(review,index) in reviews" :key="index">
            The {{review.name }} receives {{review.rating}} stars with the following comment :
            {{review.review}}
            <li>

        </ul>
        </div>`


})