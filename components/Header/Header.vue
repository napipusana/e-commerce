<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand class="pointer-cursor" @click="goPage('/')">HOME</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <!-- <b-nav-item href="/">Home</b-nav-item> -->
            <b-nav-item href="javascript:;">New Products</b-nav-item>
            <b-nav-item href="javascript:;">Women</b-nav-item>
            <b-nav-item href="javascript:;">Men</b-nav-item>
            <b-nav-item href="javascript:;">Kid</b-nav-item>
            <b-nav-item href="javascript:;">Accessories</b-nav-item>
            <!-- <b-nav-item @click="navigateTo('test')" >Link</b-nav-item>
            <b-nav-item @click="navigateTo('test2')">Link</b-nav-item> -->
            <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-form>
              <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="gocart()">Cart</b-button>
            </b-nav-form> -->
            <b-button size="sm" class="my-2 my-sm-0 pl-3 pr-4 py-2 p-relative" type="submit" @click="goPage('/cart')">
              <span class="">Cart</span>
              <span class="c-cart">{{ this.$store.state.cart.cartItem.length }}</span>
            </b-button>
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
.pointer-cursor {
  cursor: pointer;
}
.c-cart {
  font-size: 12px;
  font-weight: 700;
  border-radius: 10px;
  color: white;
  background: red;
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
