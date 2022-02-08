<template>
  <!-- progress-control -->
  <section class="progress-control-container col col-lg-6 col-sm-12">
    <section
      v-if="page === 'address'"
      data-page="address"
      class="button-group col col-12"
    >
      <router-link
        class="next cursor-point"
        to="/shipping"
        tag="button"
      >
        下一步
        <icon icon-name="right-arrow" />
      </router-link>
    </section>
    <section
      v-else-if="page === 'shipping'"
      data-page="shipping"
      class="button-group col col-12"
    >
      <router-link
        class="prev cursor-point"
        to="/address"
        tag="button"
      >
        <icon icon-name="left-arrow" />
        上一步
      </router-link>
      <router-link
        class="next cursor-point"
        to="/payment"
        tag="button"
      >
        下一步
        <icon icon-name="right-arrow" />
      </router-link>
    </section>
    <section
      v-else-if="page === 'payment'"
      data-page="payment"
      class="button-group col col-12"
    >
      <router-link
        class="prev cursor-point"
        to="/shipping"
        tag="button"
      >
        <icon icon-name="left-arrow" />
        上一步
      </router-link>
      <button
        class="next cursor-point"
        @click.stop.prevent="openModal"
      >
        確認下單
      </button>
    </section>
    <section v-else />
  </section>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      required: true
    }
  },
  methods: {
    openModal () {
      this.$emit('modal-opened')
    }
  }
}
</script>

<style lang="scss" scoped>
section.button-group {
  padding-top: 24px;
  border-top: 1px solid #E6E6EB;

  button {
    display: flex;
    align-items: center;
    height: 46px;
    font-family: Inter, sans-serif;
    font-size: 14px;
    border-radius: 8px;
    border-width: 0px;
    padding: 0px;

    & > svg {
      width: 24px;
      height: 24px;
    }

    &.prev {
      background-color: transparent;
      line-height: 20px;
      font-weight: 400;
      color: #000000;

      > svg {
        margin-right: 12px;
      }
    }
    &.next {
      justify-content: center;
      width: 174px;
      font-weight: 500;
      line-height: 17px;
      background: var(--pink);
      color: #FFFFFF;
      margin-left: auto;

      > svg {
        margin-left: 12px;
      }
    }
  }
}

@media screen and (max-width: $screen-break-point) {
  section.progress-control-container {
    position: relative;
    margin-top: 24px;
    margin-bottom: 40px;
  }
  section.button-group {
    button.next {
      width: 156px;
    }

    &[data-page='address'] {
      button.next {
        width: 100%;
      }
    }
  }
}
</style>
