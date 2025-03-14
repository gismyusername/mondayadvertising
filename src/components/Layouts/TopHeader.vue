<template>
  <div class="header-area bg-color-faf4f4">
    <div class="container-fluid mw-1740">
      <div class="d-flex justify-content-between top-header-content">
        <div class="d-flex align-items-center">
          <img src="../../assets/images/email.png" alt="email" />
          <div class="ms-2">
            <span>Email us</span>
            <a href="mailto:support@adli.com">support@adli.com</a>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <img src="../../assets/images/phone.png" alt="phone" />
          <div class="ms-2">
            <span>Call us</span>
            <a href="tel:+1-485-456-0102">+1-485-456-0102</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
};
</script>

<style lang="scss" scoped>
.top-header-content {
  padding: 12.5px 0;

  img {
    position: relative;
    top: -1px;
  }
  span {
    font-size: 13px;
    color: #4c4c4c;
    display: block;
    line-height: 1;
    margin-bottom: -3px;
  }
  a {
    font-size: 14px;
    font-weight: 600;
    color: var(--headingColor);
    line-height: 1;
    text-decoration: none;
    &:hover {
      color: var(--mainColor);
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .top-header-content {
    a {
      font-size: 13px;
    }
  }
}
</style>