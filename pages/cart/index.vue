<template>
  <div class="container">
    <div v-if="pageLoad">
      <PageLoad/>
    </div>
    <div v-if="!pageLoad" class="mt-3 box-cart p-3 mb-3">
      <h4>Cart</h4>
      <div class="row border-bottom pt-2">
        <div class="col-6">
          PRODUCT NAME
        </div>
        <div class="col-2 text-center">
          PRICE
        </div>
        <div class="col-2 text-center">
          QUANTITY
        </div>
        <div class="col-2 text-center">
          TOTAL
        </div>
      </div>
      <div v-for="(data, i) in this.$store.state.cart.cartItem" :key="i" class="row border-bottom py-3">
        <div class="col-6">
          <img :src="data.image" style="width:30px;"> <small>{{ data.name }}</small>
        </div>
        <div class="col-2 text-center">
          <!-- {{this.$util.numberWithCommas(data.price)}} -->
          <small class="text-muted">฿{{ Number.parseFloat(data.price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}</small>
        </div>
        <div class="col-2 text-center">
          <small class="text-muted">{{ data.amount }}</small>
        </div>
        <div class="col-2 text-center">
          <small class="text-muted">฿{{ Number.parseFloat(data.price * data.amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}</small>
        </div>
      </div>
      <div class="text-right mt-3">
        Subtotal ({{ this.$store.state.cart.cartItem.length }} Product): <span class="text-orange fw-700">฿{{ this.$util.numberWithCommas(totalPrice) }}</span>
      </div>
      <div class="text-right mt-3">
        <b-button class="fs-11 px-5 py-2" variant="success" @click="checkOut()">PROCEED TO CHECK OUT</b-button>
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
      pageLoad: false
    }
  },
  computed: {
    totalPrice() {
      let totalCurrentPrice = 0
      for (let i in this.$store.state.cart.cartItem) {
        this.$store.state.cart.cartItem[i].total = this.$store.state.cart.cartItem[i].amount * this.$store.state.cart.cartItem[i].price
        totalCurrentPrice = totalCurrentPrice + this.$store.state.cart.cartItem[i].total
      }
      return totalCurrentPrice
    }
  },
  created () {
    // this.getProduct()
  },
  methods: {
    checkOut() {
      alert('checkout')
    }
  }
}
</script>

<style>

.box-cart {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10px;
}
</style>
