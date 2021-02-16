<template>
  <div>
    <b-navbar toggleable="lg" class="bg-redpink">
      <div class="container">
        <b-navbar-brand class="pointer-cursor" @click="goPage('/')"><span class="text-white">HOME</span></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <!-- <b-nav-item href="/">Home</b-nav-item> -->
            <b-nav-item href="javascript:;" ><span class="text-white mx-3">New Products</span></b-nav-item>
            <b-nav-item href="javascript:;"><span class="text-white mx-3">Women</span></b-nav-item>
            <b-nav-item href="javascript:;"><span class="text-white mx-3">Men</span></b-nav-item>
            <b-nav-item href="javascript:;"><span class="text-white mx-3">Kid</span></b-nav-item>
            <b-nav-item href="javascript:;"><span class="text-white mx-3">Accessories</span></b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <div class="p-relative">
              <i class="fa fa-shopping-cart text-white pointer-cursor" style="font-size:24px" @click="goPage('/cart')"></i>
              <span class="c-cart">{{ this.$store.state.cart.cartItem.length }}</span>
            </div>
            <!-- <b-button size="sm" class="my-2 my-sm-0 pl-3 pr-4 py-2 p-relative" type="submit" @click="goPage('/cart')">
              <span class="">Cart</span>
              <span class="c-cart">{{ this.$store.state.cart.cartItem.length }}</span>
            </b-button> -->
          </b-navbar-nav>

        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
// import Cookies from 'js-cookie'

export default {
  components: {
  },
  props: {
    msg: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
     
    }
  },
  mounted() {
    
  },
  created() {
    
  },
  methods: {
    goPage(page) {
      this.$router.push(page)
    }
  }
}
</script>

<style>
.bg-redpink {
  background: #F07587;
}
.pointer-cursor {
  cursor: pointer;
}
.c-cart {
  font-size: 12px;
  font-weight: 700;
  border-radius: 10px;
  color: white;
  background: #323034;
  /* padding: 2px; */
  position: absolute;
  top: 12px;
  /* right: 100px; */
  padding-left: 5px;
  padding-right: 5px;
}
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
