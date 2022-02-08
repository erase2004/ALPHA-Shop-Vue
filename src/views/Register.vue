<template>
  <div class="main-container">
    <!-- register -->
    <section
      class="register-container col col-lg-6 col-sm-12"
    >
      <!-- register-title -->
      <h2 class="register-title col col-12">
        結帳
      </h2>

      <!-- register-progress -->
      <RegisterProgress :page="page" />

      <!-- register-form -->
      <section class="form-container col col-12">
        <!-- address phase -->
        <AddressForm
          v-show="page === 'address'"
          @address-form-modified="addressFormData = $event"
        />
        <!-- shipping phase -->
        <ShippingForm
          v-show="page === 'shipping'"
          @shipping-changed="shippingFee = $event"
        />
        <!-- payment phase -->
        <PaymentForm
          v-show="page === 'payment'"
          @payment-form-modified="paymentFormData = $event"
        />
      </section>
    </section>
    <Cart
      :shipping-fee="shippingFee"
      @total-changed="priceTotal = $event"
    />
    <ProgressControl
      :page="page"
      @modal-opened="$emit('modal-opened')"
    />
    <span class="hidden">{{ hiddenOutput }}</span>
  </div>
</template>

<script>
import RegisterProgress from '@/components/RegisterProgress.vue'
import AddressForm from '@/components/AddressForm.vue'
import ShippingForm from '@/components/ShippingForm.vue'
import PaymentForm from '@/components/PaymentForm.vue'
import Cart from '@/components/Cart.vue'
import ProgressControl from '@/components/ProgressControl.vue'
export default {
  components: {
    RegisterProgress,
    AddressForm,
    ShippingForm,
    PaymentForm,
    Cart,
    ProgressControl
  },
  data () {
    return {
      page: 'address',
      shippingFee: 0,
      priceTotal: 0,
      addressFormData: {},
      paymentFormData: {}
    }
  },
  computed: {
    hiddenOutput () {
      const wholeData = Object.assign({},
        this.addressFormData,
        { shippingFee: this.shippingFee },
        this.paymentFormData,
        { totalPrice: this.priceTotal }
      )

      this.$emit('whole-data-modified', wholeData)
      return ''
    }
  },
  watch: {
    '$route.name': function (newValue) {
      this.page = newValue
    }
  },
  created () {
    this.page = this.$route.name
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/register.scss';
</style>
