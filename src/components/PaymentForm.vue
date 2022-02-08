<template>
  <form
    class="col col-12"
  >
    <h3 class="form-title">
      付款資訊
    </h3>
    <section class="form-body col col-12">
      <div class="col col-12">
        <div class="input-group input-w-lg-4 input-w-sm-full">
          <div class="input-label">
            持卡人姓名
          </div>
          <input
            v-model.lazy="ccname"
            type="text"
            placeholder="John Doe"
          >
        </div>
      </div>
      <div class="col col-12">
        <div class="input-group input-w-lg-4 input-w-sm-full">
          <div class="input-label">
            卡號
          </div>
          <input
            v-model.lazy="cardnumber"
            type="text"
            placeholder="1111 2222 3333 4444"
          >
        </div>
      </div>
      <div class="col col-12">
        <div class="input-group input-w-lg-3 input-w-sm-s3">
          <div class="input-label">
            有效期限
          </div>
          <input
            v-model.lazy="expdate"
            type="text"
            placeholder="MM/YY"
          >
        </div>
        <div class="input-group input-w-lg-3 input-w-sm-s3">
          <div class="input-label">
            CVC / CCV
          </div>
          <input
            v-model.lazy="cvv"
            type="text"
            placeholder="123"
          >
        </div>
      </div>
    </section>
    <span class="hidden">{{ hiddenOutput }}</span>
  </form>
</template>

<script>
import { storage } from '@/utils/helper'
const storeKey = 'paymentForm'

export default {
  data () {
    return {
      ccname: '',
      cardnumber: '',
      expdate: '',
      cvv: ''
    }
  },
  computed: {
    hiddenOutput () {
      const data = {
        ccname: this.ccname,
        cardnumber: this.cardnumber,
        expdate: this.expdate,
        cvv: this.cvv
      }

      storage.set(storeKey, data)
      this.$emit('payment-form-modified', data)
      return ''
    }
  },
  created () {
    const data = storage.get(storeKey)

    Object.assign(this, data)
  }
}
</script>
