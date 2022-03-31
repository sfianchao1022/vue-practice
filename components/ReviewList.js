app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },

  template:
    /*html*/
    `<div class="review-container">
        <h3><strong>Reviews</strong></h3>
        <ul>
            <li v-for="review in reviews">{{ review.name }} gave this {{ review.rating }} stars<br/>"{{ review.review }}"</li>
        </ul>
    </div>`,
});
