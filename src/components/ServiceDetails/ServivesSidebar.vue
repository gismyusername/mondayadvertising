<template>
  <div class="servives-sidebar bg-white">
    <router-link
      to="/categories"
      class="cat-item d-flex justify-content-between align-items-center"
    >
      <span>Campaign Strategy</span>
      <img src="../../assets/images/icon-right-red.png" alt="icon-right-red" />
    </router-link>
    <router-link
      to="/categories"
      class="cat-item d-flex justify-content-between align-items-center"
    >
      <span>Campaign Optimization</span>
      <img src="../../assets/images/icon-right-red.png" alt="icon-right-red" />
    </router-link>
    <router-link
      to="/categories"
      class="cat-item d-flex justify-content-between align-items-center"
    >
      <span>Bid Management</span>
      <img src="../../assets/images/icon-right-red.png" alt="icon-right-red" />
    </router-link>
    <router-link
      to="/categories"
      class="cat-item d-flex justify-content-between align-items-center"
    >
      <span>Performance Tracking</span>
      <img src="../../assets/images/icon-right-red.png" alt="icon-right-red" />
    </router-link>
    <router-link
      to="/categories"
      class="cat-item d-flex justify-content-between align-items-center"
    >
      <span>Google Ads</span>
      <img src="../../assets/images/icon-right-red.png" alt="icon-right-red" />
    </router-link>
    <router-link
      to="/categories"
      class="cat-item d-flex justify-content-between align-items-center"
    >
      <span>Microsoft Ads</span>
      <img src="../../assets/images/icon-right-red.png" alt="icon-right-red" />
    </router-link>
    <router-link
      to="/categories"
      class="cat-item d-flex justify-content-between align-items-center"
    >
      <span>Social Media Ads</span>
      <img src="../../assets/images/icon-right-red.png" alt="icon-right-red" />
    </router-link>
    <router-link
      to="/categories"
      class="cat-item d-flex justify-content-between align-items-center"
    >
      <span>Shopping Campaign</span>
      <img src="../../assets/images/icon-right-red.png" alt="icon-right-red" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ServivesSidebar",
};
</script>

<style lang="scss" scoped>
.servives-sidebar {
  padding: 40px;
  border-radius: 20px;
  margin-left: 104px;
  .cat-item {
    font-size: 16px;
    font-weight: 600;
    font-family: var(--headingFontFamily);
    color: var(--headingColor);
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
    &:hover {
      color: var(--mainColor);
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .servives-sidebar {
    margin-left: 0;
    padding: 20px;
    box-shadow: var(--boxShadow);
    .cat-item {
      margin-bottom: 15px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .servives-sidebar {
    margin-left: 0;
    padding: 30px;
    box-shadow: var(--boxShadow);
    .cat-item {
      margin-bottom: 15px;
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .servives-sidebar {
    margin-left: 0;
    padding: 30px;
  }
}
</style>