<template>
  <form
    class="col col-12"
  >
    <h3 class="form-title">
      運送方式
    </h3>
    <section class="form-body col col-12">
      <label
        v-for="(shipping, key) in shippingList"
        :key="key"
        class="radio-group col col-12"
      >
        <input
          :id="`shipping-${key}`"
          type="radio"
          name="shipping"
          :checked="key === shippingOption"
          @click.stop="changeOption(key, shipping.price)"
        >
        <div class="radio-info">
          <div class="col col-12">
            <div class="text">{{ shipping.name }}</div>
            <div class="price" />
          </div>
          <div class="period col col-12">{{ shipping.period }}</div>
        </div>
        <div class="radio-box-border" />
      </label>
    </section>
  </form>
</template>

<script>
import { storage } from '@/utils/helper'

const shippingList = {
  standard: {
    name: '標準運送',
    period: '約 3~7 個工作天',
    price: 0
  },
  dhl: {
    name: 'DHL 貨運',
    period: '48 小時內送達',
    price: 500
  }
}
const storeKey = 'shippingOption'

export default {
  data () {
    return {
      shippingList: shippingList,
      shippingOption: 'standard'
    }
  },
  created () {
    const checked = storage.get(storeKey)
    const validOption = Object.keys(shippingList)

    if (validOption.includes(checked)) {
      this.shippingOption = checked
    } else {
      storage.set(storeKey, this.shippingOption)
    }
    this.$emit('shipping-changed', shippingList[this.shippingOption].price)
  },
  methods: {
    changeOption (key, price) {
      this.shippingOption = key
      storage.set(storeKey, this.shippingOption)
      this.$emit('shipping-changed', price)
    }
  }
}
</script>
