app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
      default: false,
    }
  },

  template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="image">
            </div>
            <!-- /.product-image -->

            <div class="product-info">
                <h1 :style="fontColor">{{ brand + " " + product }}</h1>
                <h2 :style="fontColor">{{ title }}</h2>
                <p v-show="statement"><strong>Inventory</strong></p>
                <p v-if="inventory > 10">in stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Inventory: {{ inventory }}</p>
                <p v-else>out of stock</p>

                <p>Shipping: {{ shipping }}</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <div v-for="variant in variants" :key="variant.key" v-on:mouseover="updateImage(variant.image)"
                    class="color-circle" :style="{'background-color': variant.color}">
                    {{ variant.color }}
                </div>
                <div v-for="(variant, index) in variants" @mouseover="updateVariant(index)">
                    variant id: {{ variant.id }}
                </div>
                <button class="button" v-on:click="cart += 1" :class="{'disabled-button': !inStock}"
                    :disabled="!inStock">Add to Cart</button>
                <button class="button" @click="addToCart">加入購物車</button>
            </div>
            <!-- /.product-info -->
        </div>
        <!-- /.product-container -->
        <review-list v-if="reviews.length > 0" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>
    <!-- /.product-display -->`,

  data() {
    return {
      message: "hello vue!",
      brand: "vue mastery",
      fontColor: {
        color: "red",
        fontSize: "14px",
      },
      // image: "./meme.png", // 若名稱和 computed properties 有重複，會互相干擾
      product: "product",
      statement: false,
      inventory: 5,
      // inStock: false, // 若與 computed properties 名稱相同，會以 data() 為主
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 3,
          color: "green",
          image: "./assets/images/socks_blue.jpg",
          quantity: 50,
        },
        {
          id: 5,
          color: "blue",
          image: "./assets/images/socks_green.jpg",
          quantity: 0,
        },
      ],
      selectedVariant: 0,
      //   cart: 0,
      reviews: [],
    };
  },

  computed: {
    title() {
      return this.brand + " " + this.message;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.premium == true) {
        return "FREE";
      } else {
        return 2.99;
      }
    },

  },

  methods: {
    addToCart() {
      // this.cart = cart + 1; 不會動
      // this.cart += 1;
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    updateVariant(index) {
      this.selectedVariant = index;
      console.log(this.selectedVariant);
    },
    addReview(review) {
      this.reviews.push(review)
    }
  },
});
