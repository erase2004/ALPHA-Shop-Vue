<template>
  <header class="site-header">
    <div class="header-container mx-auto">
      <!-- navbar-toggle -->
      <input
        id="navbar-toggle"
        class="navbar-toggle"
        type="checkbox"
      >
      <label
        for="navbar-toggle"
        class="burger-container"
      >
        <icon
          icon-class="icon-toggle cursor-point"
          icon-name="toggle"
        />
      </label>

      <!-- navbar-menu -->
      <nav class="navbar-menu">
        <ul class="nav-list site-menu-list mr-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="#"
            >
              男款
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="#"
            >
              女款
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="#"
            >
              最新消息
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="#"
            >
              客製商品
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="#"
            >
              聯絡我們
            </router-link>
          </li>
        </ul>
        <ul class="nav-list site-action-list">
          <!-- search -->
          <li class="nav-item">
            <icon
              icon-class="nav-icon cursor-point"
              icon-name="search"
            />
          </li>
          <!-- cart -->
          <li class="nav-item">
            <icon
              icon-class="nav-icon cursor-point"
              icon-name="cart"
            />
          </li>
          <li
            id="theme-toggle"
            class="nav-item"
            @click.stop.prevent="toggleTheme"
          >
            <!-- moon -->
            <icon
              v-show="theme === 'light'"
              icon-class="nav-icon cursor-point"
              icon-name="moon"
            />
            <!-- sun -->
            <icon
              v-show="theme === 'dark'"
              icon-class="nav-icon cursor-point"
              icon-name="sun"
            />
          </li>
        </ul>
      </nav>

      <!-- logo -->
      <router-link
        class="header-logo-container"
        to="/"
      >
        <icon
          icon-class="icon-logo cursor-point"
          icon-name="logo"
        />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleTheme () {
      this.$emit('change-theme')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/header.scss';
</style>
