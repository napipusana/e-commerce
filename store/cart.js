/* eslint-disable */
export const state = () => {
  return {
    cartItem: []
  }
}

export const mutations = {
  setCart(state, cart) {
    state.cartItem = cart
  }
}
