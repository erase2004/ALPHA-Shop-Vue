<template>
  <div class="main-container">
    <!-- register -->
    <section
      class="register-container col col-lg-6 col-sm-12"
      data-phase="1"
      data-total-price="0"
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
        <AddressForm v-show="page === 'address'" />
        <!-- shipping phase -->
        <ShippingForm
          v-show="page === 'shipping'"
          @shipping-changed="shippingFee = $event"
        />
        <!-- credit-card phase -->
        <PaymentForm v-show="page === 'payment'" />
      </section>
    </section>
    <Cart
      :shipping-fee="shippingFee"
      @total-changed="priceTotal = $event"
    />
    <ProgressControl :page="page" />
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
      priceTotal: 0
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
