<template>
  <div class="sidebar-single-widget">
    <form class="position-relative">
      <input
        type="text"
        class="form-control rounded-2"
        placeholder="Search keyword"
      />
      <button
        type="submit"
        class="position-absolute top-50 end-0 translate-middle-y bg-transparent border-0"
      >
        <img src="../../assets/images/search.png" alt="search" />
      </button>
    </form>
  </div>
  <div class="sidebar-single-widget latest-post">
    <h3>Latest Post</h3>

    <router-link
      to="/blog-details"
      class="d-flex align-items-center latest-item"
    >
      <div class="flex-shrink-0">
        <img src="../../assets/images/blog-8.jpg" alt="blog" />
      </div>
      <div class="flex-grow-1 ms-3">
        <span class="date">October 21, 2024</span>
        <h4>The leading characteristics of review</h4>
      </div>
    </router-link>
    <router-link
      to="/blog-details"
      class="d-flex align-items-center latest-item"
    >
      <div class="flex-shrink-0">
        <img src="../../assets/images/blog-9.jpg" alt="blog" />
      </div>
      <div class="flex-grow-1 ms-3">
        <span class="date">October 21, 2024</span>
        <h4>The Art of Writing Compelling Ad Copy for Paid Search</h4>
      </div>
    </router-link>
    <router-link
      to="/blog-details"
      class="d-flex align-items-center latest-item"
    >
      <div class="flex-shrink-0">
        <img src="../../assets/images/blog-10.jpg" alt="blog" />
      </div>
      <div class="flex-grow-1 ms-3">
        <span class="date">October 21, 2024</span>
        <h4>Targeting: Reaching Right Audience in Paid Search</h4>
      </div>
    </router-link>
  </div>
  <div class="sidebar-single-widget categories">
    <h3>Categories</h3>

    <router-link
      to="/categories"
      class="d-flex justify-content-between cat-item"
    >
      <span class="cat">Web Design</span>
      <span>(05)</span>
    </router-link>
    <router-link
      to="/categories"
      class="d-flex justify-content-between cat-item"
    >
      <span class="cat">Branding</span>
      <span>(14)</span>
    </router-link>
    <router-link
      to="/categories"
      class="d-flex justify-content-between cat-item"
    >
      <span class="cat">Digital Art</span>
      <span>(03)</span>
    </router-link>
    <router-link
      to="/categories"
      class="d-flex justify-content-between cat-item"
    >
      <span class="cat">Graphics</span>
      <span>(12)</span>
    </router-link>
    <router-link
      to="/categories"
      class="d-flex justify-content-between cat-item"
    >
      <span class="cat">Marketing</span>
      <span>(25)</span>
    </router-link>
  </div>
  <div class="sidebar-single-widget tag">
    <h3>Tags</h3>

    <router-link to="/tags" class="tag-item">Affiliate</router-link>
    <router-link to="/tags" class="tag-item">Motions Graphics</router-link>
    <router-link to="/tags" class="tag-item">Digital Marketing</router-link>
    <router-link to="/tags" class="tag-item">Product Landing</router-link>
    <router-link to="/tags" class="tag-item">Company Branding</router-link>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style lang="scss" scoped>
.sidebar-single-widget {
  margin-bottom: 30px;
  margin-left: 40px;
  &:last-child {
    margin-bottom: 0;
  }
  .form-control {
    height: 56px;
    background-color: var(--whiteColor);
    padding-left: 22px;
  }
  .end-0 {
    right: 18px !important;
  }
  h3 {
    font-size: 22px;
    line-height: 44px;
    border-bottom: 1px solid #e1e1e1;
    margin-bottom: 28px;
  }
  &.latest-post {
    .latest-item {
      text-decoration: none;
      margin-bottom: 30px;

      img {
        border-radius: 20px;
      }
      .date {
        font-size: 14px;
        display: block;
        margin-bottom: 5px;
        font-family: var(--headingFontFamily);
        color: var(--bodyColor);
      }
      h4 {
        font-size: 18px;
        transition: var(--transition);
      }
      &:hover {
        h4 {
          color: var(--mainColor);
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &.categories {
    .cat-item {
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 12px;
      font-family: var(--headingFontFamily);

      &:last-child {
        margin-bottom: 0;
      }
      .cat {
        color: var(--headingColor);
        transition: var(--transition);
      }
      &:hover {
        .cat {
          color: var(--mainColor);
        }
      }
    }
  }
  &.tag {
    margin-bottom: -8px;
    margin-right: -3px;
    .tag-item {
      border-radius: 4px;
      background-color: var(--whiteColor);
      display: inline-block;
      text-decoration: none;
      font-size: 15px;
      font-family: var(--headingFontFamily);
      padding: 5px 18px;
      margin-bottom: 8px;
      margin-right: 3px;
      box-shadow: var(--boxShadow);
      &:hover {
        background-color: var(--mainColor);
        color: var(--whiteColor);
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sidebar-single-widget {
    margin-left: 0;
    margin-top: 30px;
    h3 {
      font-size: 20px;
    }
    &.latest-post {
      .latest-item {
        h4 {
          font-size: 17px;
        }
      }
    }
    &.categories {
      .cat-item {
        font-size: 15px;
      }
    }
    &.tag {
      .tag-item {
        padding: 5px 15px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sidebar-single-widget {
    margin-left: 0;
    margin-top: 40px;
    &.latest-post {
      .latest-item {
        h4 {
          font-size: 17px;
        }
      }
    }
    &.categories {
      .cat-item {
        font-size: 15px;
      }
    }
    &.tag {
      .tag-item {
        padding: 5px 15px;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .sidebar-single-widget {
    margin-left: 0;
    &.latest-post {
      .latest-item {
        h4 {
          font-size: 17px;
        }
      }
    }
    &.categories {
      .cat-item {
        font-size: 15px;
      }
    }
    &.tag {
      .tag-item {
        padding: 5px 15px;
      }
    }
  }
}
</style>