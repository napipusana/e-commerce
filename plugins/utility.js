// import Cookies from 'js-cookie'
export default (ctx, inject) => {
  inject('util', {
    numberWithCommas: function (n) {
      const number = Number.parseFloat(n).toFixed(2)
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  })
}
