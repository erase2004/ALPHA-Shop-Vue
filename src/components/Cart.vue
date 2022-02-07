<template>
  <!-- cart -->
  <section class="cart-container col col-lg-5 col-sm-12">
    <h3 class="cart-title">
      購物籃
    </h3>

    <section
      class="product-list col col-12"
      data-total-price="0"
    >
      <div
        class="product-container col col-12"
        data-count="0"
        data-price="3999"
      >
        <img
          class="img-container"
          src="@/assets/images/product-1.jpg"
        >
        <div class="product-info">
          <div class="product-name">
            破壞補丁修身牛仔褲
          </div>
          <div class="product-control-container">
            <div class="product-control">
              <icon
                icon-class="product-action minus"
                icon-name="minus"
              />
              <span class="product-count" />
              <icon
                icon-class="product-action plus"
                icon-name="plus"
              />
            </div>
          </div>
          <div class="price" />
        </div>
      </div>
      <div
        class="product-container col col-12"
        data-count="0"
        data-price="1299"
      >
        <img
          class="img-container"
          src="@/assets/images/product-2.jpg"
        >
        <div class="product-info">
          <div class="product-name">
            刷色直筒牛仔褲
          </div>
          <div class="product-control-container">
            <div class="product-control">
              <icon
                icon-class="product-action minus"
                icon-name="minus"
              />
              <span class="product-count" />
              <icon
                icon-class="product-action plus"
                icon-name="plus"
              />
            </div>
          </div>
          <div class="price" />
        </div>
      </div>
    </section>

    <section class="cart-info shipping col col-12">
      <div class="text">
        運費
      </div>
      <div class="price" />
    </section>
    <section class="cart-info total col col-12">
      <div class="text">
        小計
      </div>
      <div class="price" />
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/cart.scss';
</style>
