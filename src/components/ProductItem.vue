// Dynamic image src: https://itnext.io/a-few-handy-vue-js-tricks-832703cff426

<template>
  <div
    class="product-container col col-12"
  >
    <img
      class="img-container"
      :src="require(`@/assets/images/${image}`)"
    >
    <div class="product-info">
      <div class="product-name">
        {{ name }}
      </div>
      <div class="product-control-container">
        <div class="product-control">
          <icon
            icon-class="product-action minus"
            icon-name="minus"
            @click.native="decrease"
          />
          <span class="product-count">
            {{ amount }}
          </span>
          <icon
            icon-class="product-action plus"
            icon-name="plus"
            @click.native="increase"
          />
        </div>
      </div>
      <div class="price">
        {{ price | formatPrice }}
      </div>
    </div>
  </div>
</template>

<script>
import { formatPrice } from '@/utils/mixin'

export default {
  mixins: [formatPrice],
  props: {
    image: {
      type: String,
      required: true,
      default: ''
    },
    name: {
      type: String,
      required: true,
      default: ''
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    amount: {
      type: Number,
      required: true,
      default: 0
    }
  },
  methods: {
    decrease () {
      const amount = Math.max(this.amount - 1, 0)
      this.$emit('amount-changed', amount)
    },
    increase () {
      const amount = this.amount + 1
      this.$emit('amount-changed', amount)
    }
  }
}
</script>
