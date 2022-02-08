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
        v-for="(product, index) in productList"
        :key="product.name"
        :image="product.image"
        :name="product.name"
        :price="product.price"
        :amount="productAmount[index]"
        @amount-changed="changeAmount($event, index)"
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
import Vue from 'vue'
import { formatPrice } from '@/utils/mixin'
import { storage } from '@/utils/helper'
import ProductItem from '@/components/ProductItem.vue'

const productList = [
  {
    name: '破壞補丁修身牛仔褲',
    image: 'product-1.jpg',
    price: 3999
  },
  {
    name: '刷色直筒牛仔褲',
    image: 'product-2.jpg',
    price: 1299
  }
]
const storeKey = 'productAmount'

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
      productList: productList,
      productAmount: [0, 0]
    }
  },
  computed: {
    priceTotal () {
      let total = 0
      total += this.shippingFee

      for (const index in productList) {
        const product = productList[index]
        total += product.price * this.productAmount[index]
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
    const amount = storage.get(storeKey)

    if (Array.isArray(amount)) {
      this.productAmount = amount
    } else {
      storage.set(storeKey, this.productAmount)
    }
  },
  methods: {
    changeAmount (data, order) {
      Vue.set(this.productAmount, order, data.amount)
      storage.set(storeKey, this.productAmount)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/cart.scss';
</style>
