<template>
  <div class="container mb-4">
    <div v-if="pageLoad">
      <PageLoad />
    </div>
    <div v-if="!pageLoad" class="row box-detail-product mt-4 pt-3">
      <div class="col-lg-5 col-sm-12">
        <img :src="dataProduct.image_url" alt="" style="width: 450px;">
      </div>
      <div class="col-lg-7 col-sm-12">
        <h3>{{ dataProduct.name }}</h3>
        <div v-if="dataProduct && dataProduct.review" class="row">
          <div class="col-3">
            <b-form-rating v-model="dataProduct.review.rating" readonly variant="warning" class="p-0" size="sm"></b-form-rating>
          </div>
          <span class="text-muted mt-1">({{ dataProduct.review.number }} reviews)</span>
        </div>
        <p class="text-muted my-3">
          {{ dataProduct.description }}
        </p>
        <div>Price</div>
        <div class="text-success">฿ {{ this.$util.numberWithCommas(dataProduct.price) }}</div>
        <div class="my-2">
          <span>
            Quanlity
          </span>
          <i class="fa fa-minus iconMinusPlus cursor-pointer" @click="minusAmout()"></i>
          <span>{{ amount }}</span>
          <i class="fa fa-plus iconMinusPlus cursor-pointer"  @click="plusAmout()"></i>
          <!-- <button type="button" class="btn btn-primary iconMinusPlus"> <i class="fa fa-minus iconMinusPlus cursor-pointer" @click="minusAmout()"></i></button> -->
        </div>
        <div class="my-2">
          <b-button class="fs-12 px-5 py-2" variant="success" @click="addCart()"><i class="fa fa-shopping-cart text-white"></i> ADD TO CART</b-button>
        </div>
        <!-- {{ this.$store.state.cart.cartItem }} -->
      </div>
    </div>
  </div>
</template>

<script>

import Axios from 'axios'
import PageLoad from '@/components/Comom/PageLoad.vue'

export default {
  components: {
    PageLoad
  },
  data () {
    return {
      editIndex: -1,
      name: '',
      price: 0,
      mongo_api: 'https://cc-mock-api.herokuapp.com',
      dataProduct: [],
      productId: this.$route.params.id,
      amount: 1,
      pageLoad: false
    }
  },
  computed: {

  },
  created () {
    this.getProduct()
  },
  methods: {
    async getProduct () {
      this.pageLoad = true
      await Axios.get(`${this.mongo_api}/product/${this.productId}`)
        .then((r) => {
          this.dataProduct = r.data
          this.pageLoad = false
          // console.log(r)
        })
        .catch(err => alert(err))
    },
    detailProduct(data) {
      alert(data._id)
    },
    plusAmout() {
      this.amount = this.amount + 1
    },
    minusAmout() {
      if (this.amount > 1) this.amount = this.amount - 1
    },
    addCart() {
      let checkProductRepeatedly = false
      checkProductRepeatedly = this.$store.state.cart.cartItem.some(x => {
        return x.id.trim() === this.dataProduct._id.trim()
      })
      if (!checkProductRepeatedly) {
        this.$store.state.cart.cartItem.push({
          id: this.dataProduct._id,
          name: this.dataProduct.name,
          price: this.dataProduct.price,
          amount: this.amount,
          image: this.dataProduct.image_url
          // total: item.price
        })
      } else if (checkProductRepeatedly) {
        for (let i in this.$store.state.cart.cartItem) {
          if (this.$store.state.cart.cartItem[i].id === this.dataProduct._id) {
            this.$store.state.cart.cartItem[i].amount = this.$store.state.cart.cartItem[i].amount + this.amount
          }
        }
      }
      // this.$store.commit('cart/setCart', this.dataProduct)
    }
  }
}
</script>

<style>
.form-control {
  width: 100% !important;
  border: none;
  height: none;
}
.iconMinusPlus {
  border-radius: 10px;
  color: white;
  background: grey;
  padding: 8px;
}
.box-detail-product {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10px;
}
</style>
