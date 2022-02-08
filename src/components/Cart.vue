<template>
  <!-- cart -->
  <section class="cart-container col col-lg-5 col-sm-12">
    <h3 class="cart-title">
      購物籃
    </h3>

    <section
      class="product-list col col-12"
    >
      <ProductItem
        v-for="(product, key) in productList"
        :key="key"
        :image="product.image"
        :name="product.name"
        :price="product.price"
        :amount="product.amount"
        @amount-changed="changeAmount($event, key)"
      />
    </section>

    <section class="cart-info shipping col col-12">
      <div class="text">
        運費
      </div>
      <div class="price">
        {{ shippingFeeText }}
      </div>
    </section>
    <section class="cart-info total col col-12">
      <div class="text">
        小計
      </div>
      <div class="price">
        {{ priceTotal | formatPrice }}
      </div>
    </section>
  </section>
</template>

<script>
import { formatPrice } from '@/utils/mixin'
import { storage } from '@/utils/helper'
import ProductItem from '@/components/ProductItem.vue'

const productList = {
  product1: {
    name: '破壞補丁修身牛仔褲',
    image: 'product-1.jpg',
    price: 3999,
    amount: 0
  },
  product2: {
    name: '刷色直筒牛仔褲',
    image: 'product-2.jpg',
    price: 1299,
    amount: 0
  }
}
const storeKey = 'productList'

export default {
  components: {
    ProductItem
  },
  mixins: [formatPrice],
  props: {
    shippingFee: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      productList
    }
  },
  computed: {
    priceTotal () {
      let total = 0
      total += this.shippingFee

      for (const key in this.productList) {
        const product = this.productList[key]
        total += product.price * product.amount
      }

      this.$emit('total-changed', total)

      return total
    },
    shippingFeeText () {
      if (this.shippingFee === 0) {
        return '免費'
      } else {
        return this.$options.filters.formatPrice(this.shippingFee)
      }
    }
  },
  created () {
    const productList = storage.get(storeKey)

    if (typeof productList === 'object') {
      Object.assign(this.productList, productList)
    }

    storage.set(storeKey, this.productList)
  },
  methods: {
    changeAmount (amount, key) {
      this.productList[key].amount = amount
      storage.set(storeKey, this.productList)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/cart.scss';
</style>
