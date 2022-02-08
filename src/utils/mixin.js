export const formatPrice = {
  filters: {
    formatPrice (price) {
      return `$${new Intl.NumberFormat('en-US').format(price)}`
    }
  }
}
