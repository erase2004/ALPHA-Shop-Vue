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
$header-menu-item-margin-x: 16px;
$header-action-item-margin-x: 15px;

header.site-header {
  --header-height: 60px;
  --header-logo-width: 170px;
  position: sticky;
  top: 0px;
  padding-left: var(--site-edge-margin);
  padding-right: var(--site-edge-margin);
  background-color: inherit;
  text-align: center;
  z-index: 100;

  .header-container {
    display: flex;
    position: relative;
    max-width: 1100px;
    height: var(--header-height);
    background-color: inherit;
    align-items: stretch;
  }
}

nav.navbar-menu {
  display: flex;
  flex-grow: 1;
  background-color: inherit;
  align-items: center;

  .nav-list {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background-color: inherit;

    .nav-item {
      cursor: pointer;

      .nav-link {
        font-weight: 500;
        line-height: 24px;
        color: var(--main-text);
        text-decoration: none;
      }
      .nav-icon {
        width: 24px;
        height: 24px;
      }
      .nav-link, .nav-icon {
        &:hover, &:active {
          color: var(--secondary-text);
          --main-text: var(--secondary-text);
        }
      }
    }

    &.site-menu-list {
      max-width: calc(50% - var(--header-logo-width) / 2 - #{$header-menu-item-margin-x} / 8);

      .nav-item {
        margin-left: $header-menu-item-margin-x;
        margin-right: $header-menu-item-margin-x;

        &:first-child {
          margin-left: 0px;
        }
      }
    }
    &.site-action-list {
      max-width: calc(50% - var(--header-logo-width) / 2 - #{$header-action-item-margin-x} / 8);

      .nav-item {
        margin-left: $header-action-item-margin-x;
        margin-right: $header-action-item-margin-x;

        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
}

// logo
.header-logo-container {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: var(--header-height);
  width: var(--header-logo-width);
}

// navbar-toggle
input#navbar-toggle {
  display: none;
}
label.burger-container {
  display: none;
}
.icon-toggle {
  width: 24px;
  height: 24px;
}

@media screen and (max-width: $screen-break-point){
  header.site-header {
    --header-height: 56px;
    --header-logo-width: 136px;

    label.burger-container {
      display: flex;
      position: absolute;
      left: 0px;
      top: 0px;
      bottom: 0px;
      align-items: center;
    }
  }

  nav.navbar-menu {
    display: block;
    margin-top: var(--header-height);
    opacity: 0;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out, opacity 0.3s;

    .nav-list {
      justify-content: center;

      .nav-item {
        position: relative;
        padding: 24px 0;
        &:active {
          background-color: var(--active-color);
          .nav-link {
            color: var(--secondary-text);
          }
        }

        .nav-link {
          display: block;
        }
      }

      &.site-menu-list {
        max-width: unset;
        flex-direction: column;

        .nav-item {
          margin: 0px;

          &::after {
            position: absolute;
            left: 15px;
            right: 15px;
            bottom: 0px;
            border-bottom: 1px solid rgba(42, 42, 42, 0.1);
            content: "";
          }

          &:first-child {
            padding-top: 0px;
          }
          &:nth-child(4) {
            order: 1;
          }
        }
      }
      &.site-action-list {
        max-width: unset;
      }
    }
  }

  input#navbar-toggle:checked ~ nav.navbar-menu {
      opacity: 1;
      transform: scale(1);
  }
}
</style>
