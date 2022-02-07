<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-logo-container">
        <icon
          icon-class="icon-logo"
          icon-name="logo"
        />
      </div>
      <section class="footer-section">
        <h2 class="section-title">
          客戶服務
        </h2>
        <div class="section-content">
          <router-link
            class="page-link"
            to="#"
          >
            運送說明
          </router-link>
          <router-link
            class="page-link"
            to="#"
          >
            退換貨相關
          </router-link>
          <router-link
            class="page-link"
            to="#"
          >
            付款資訊
          </router-link>
          <router-link
            class="page-link"
            to="#"
          >
            FAQ
          </router-link>
        </div>
      </section>
      <section class="footer-section">
        <h2 class="section-title">
          關於我們
        </h2>
        <div class="section-content">
          <router-link
            class="page-link"
            to="#"
          >
            品牌故事
          </router-link>
          <router-link
            class="page-link"
            to="#"
          >
            媒體聯繫
          </router-link>
          <router-link
            class="page-link"
            to="#"
          >
            Press kit
          </router-link>
        </div>
      </section>
      <section class="footer-section">
        <h2 class="section-title">
          資訊
        </h2>
        <div class="section-content">
          <router-link
            class="page-link"
            to="#"
          >
            隱私權政策
          </router-link>
          <router-link
            class="page-link"
            to="#"
          >
            Cookie
          </router-link>
          <router-link
            class="page-link"
            to="#"
          >
            GDPR
          </router-link>
        </div>
      </section>
      <section class="footer-section">
        <h2 class="section-title">
          追蹤 ALPHA Shop
        </h2>
        <div class="section-content">
          <div class="tel-info">
            +886 02123-45678
          </div>
          <div class="social-icon-group">
            <icon
              icon-class="social-icon cursor-point"
              icon-name="facebook"
            />
            <icon
              icon-class="social-icon cursor-point"
              icon-name="instagram"
            />
            <icon
              icon-class="social-icon cursor-point"
              icon-name="whatsapp"
            />
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/styles/footer.scss';
</style>
