<template>
  <div class="container mb-4">
    <div v-if="pageLoad">
      <PageLoad/>
    </div>
    <div v-if="!pageLoad" class="mt-3">
      <h4>Product ({{dataProduct.length}})</h4>
      <div class="row">
        <div v-for="(item, i) in dataProduct" :key="i" class="p-relative mr-4 mt-3">
          <div class="card pointer-cursor" style="width: 260px;" @click="detailProduct(item)">
            <div class="sizeStyle">
              <img class="imgStyle" :src="item.image_url">
            </div>
            <div class="row mt-2">
              <div class="col-2 ml-2 mr-1">
                <img :src="item.brand_info.url" class="img_brand">
              </div>
              <div class="col mr-2 ellipsis">
                {{ item.name }}
              </div>
            </div>
            <div class="row mt-1">
              <div class="col-2 ml-2 mr-1">
              </div>
              <div class="col mr-2">
                <div class="row">
                  <div class="col-5 pr-0">
                    <small class="text-muted fs-11">Price</small>
                  </div>
                  <div class="col-7 px-0">
                    <small class="text-muted fs-11">Review ({{ item.review.number }} reviews)</small>
                  </div>
                </div>
                <div class="row">
                  <div class="col-5 pr-0">
                    <small class="text-success fs-11">฿ {{ Number.parseFloat(item.price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}</small>
                  </div>
                  <div class="col-7 pl-0">
                    <small class="text-muted fs-11"></small>
                    <b-form-rating v-model="item.review.rating" readonly variant="warning" class="p-0" size="sm"></b-form-rating>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

  },
  created () {
    this.getProduct()
  },
  methods: {
    async getProduct () {
      this.pageLoad = true
      await Axios.get(`${this.mongo_api}/product`)
        .then((r) => {
          this.dataProduct = r.data
          this.pageLoad = false
          // console.log(r)
        })
        .catch(err => alert(err))
    },
    detailProduct(data) {
      this.$router.push('/product/' + data._id)
    }
  }
}
</script>

<style>
.sizeStyle {
  width: 260px;
  height: 180px;
  background: #F8EAEF;
}
.imgStyle {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.img_brand {
  width: 50px;
  border-radius: 10px;
}
.form-control {
  width: 100% !important;
  border: none;
  height: none;
}
.ellipsis {
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
