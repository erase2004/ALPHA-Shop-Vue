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
footer.site-footer {
  display: block;
  position: relative;
  bottom: 0px;
  margin-top: 120px;
  padding-left: var(--site-edge-margin);
  padding-right: var(--site-edge-margin);
  background-color: var(--footer-background-color);

  .footer-container {
    display: flex;
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
    flex-wrap: nowrap;
    justify-content: space-between;

    .footer-logo-container {
      margin-top: 126px;
      margin-bottom: 127px;

      svg {
        display: inline-block;
        width: 175.5px;
        height: 31px;
      }
    }
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    margin-top: 64px;

    .section-title {
      font-size: 24px;
      font-weight: bold;
      line-height: 24px;
      color: var(--main-text);
    }

    .section-content {
      display: flex;
      flex-direction: column;
      margin-top: 24px;
      color: var(--secondary-text);
      & > * {
        color: inherit;
      }

      .page-link {
        margin-bottom: 8px;
        font-weight: normal;
        line-height: 17px;
        text-decoration: none;
        cursor: pointer;
      }
      .tel-info {
        margin-bottom: 8px;
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 600;
        line-height: 16px;
      }
      .social-icon {
        width: 24px;
        height: 24px;
        margin-right: 16px;
      }
    }
  }
}

@media screen and (max-width: $screen-break-point) {
  footer.site-footer {
    display: none;
  }
}
</style>
