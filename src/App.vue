<template>
  <div
    id="app"
    :data-theme="theme"
  >
    <Header
      :theme="theme"
      @change-theme="changeTheme"
    />
    <main class="site-main">
      <router-view
        @whole-data-modified="wholeData = $event"
        @modal-opened="modalShow = true"
      />
    </main>
    <Footer />
    <Modal
      v-show="modalShow"
      :whole-data="wholeData"
      @modal-closed="modalShow = false"
    />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Modal from '@/components/Modal.vue'

const themeMap = {
  light: 'dark',
  dark: 'light'
}

export default {
  components: {
    Header,
    Footer,
    Modal
  },
  data () {
    return {
      theme: 'light',
      modalShow: false,
      wholeData: {}
    }
  },
  created () {
    this.initialTheme()
  },
  methods: {
    initialTheme () {
      this.theme = localStorage.getItem('theme') || 'light'
    },
    changeTheme () {
      this.theme = themeMap[this.theme] || 'light'
      localStorage.setItem('theme', this.theme)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/reset.scss';
@import '@/styles/base.scss';
@import '@/styles/dark-theme.scss';
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
@import url('https://fonts.googleapis.com/css?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');

@mixin input-width($prefix, $division) {
  $form-full-width: 540;

  @for $index from 1 to ($division + 1) {
    .#{$prefix}-#{$index} {
        width: 100% * (($index * 65 + ($index - 1) * 30) / $form-full-width);
    }
  }
}

main.site-main {
  margin-top: 80px;
  padding-left: var(--site-edge-margin);
  padding-right: var(--site-edge-margin);
  background-color: inherit;
}

@media screen and (min-width: $screen-break-point) {
  @include input-width('input-w-lg', 6);
}

@media screen and (max-width: $screen-break-point) {
  $mobile-form-full-width: 346;

  .input-w-sm-s1 {
    width: 100% * 133 / $mobile-form-full-width;
  }
  .input-w-sm-s2 {
    width: 100% * 183 / $mobile-form-full-width;
  }
  .input-w-sm-s3 {
    width: 100% * 158 / $mobile-form-full-width;
  }
  .input-w-sm-full {
    width: 100%;
  }
  main.site-main {
    margin-top: 16px;
  }
}
</style>
