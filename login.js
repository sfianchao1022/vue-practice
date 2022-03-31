/* Vue.createApp({
  data() {
    return {
      message: "hello vue!",
    };
  },
}).mount("#app"); */

const app = Vue.createApp({
  data() {
    return {
      // message: "hello vue!",
      // brand: "vue mastery",
      // fontColor: {
      //   color: "red",
      //   fontSize: "14px",
      // },
      // // image: "./meme.png", // 若名稱和 computed properties 有重複，會互相干擾
      // product: "product",
      // statement: false,
      // inventory: 5,
      // // inStock: false, // 若與 computed properties 名稱相同，會以 data() 為主
      // details: ["50% cotton", "30% wool", "20% polyester"],
      // variants: [
      //   { id: 3, color: "green", image: "./assets/images/socks_blue.jpg", quantity: 50 },
      //   { id: 5, color: "blue", image: "./assets/images/socks_green.jpg", quantity: 0 },
      // ],
      // selectedVariant: 0,
      cart: [],
      premium: true,
    };
  },

  // computed: {
  //   title() {
  //     return this.brand + " " + this.message;
  //   },
  //   image() {
  //     return this.variants[this.selectedVariant].image;
  //   },
  //   inStock() {
  //     return this.variants[this.selectedVariant].quantity;
  //   }
  // },

  methods: {
    // addToCart() {
    //   // this.cart = cart + 1; 不會動
    //   this.cart += 1;
    // },
    // updateImage(variantImage) {
    //   this.image = variantImage;
    // },
    // updateVariant(index) {
    //   this.selectedVariant = index;
    //   console.log(this.selectedVariant);
    // }
    updateCart(id) {
      // this.cart += 1;
      this.cart.push(id);
    }
  },
});
