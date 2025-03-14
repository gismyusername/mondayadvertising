<template>
  <div class="banner-area bg-1 pb-100">
    <div class="container">
      <div class="banner-content text-center">
        <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          Boost your business with results-driven paid search ads!
        </h1>
        <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          Our seasoned team of paid search specialists leverages cutting-edge
          technology.
        </p>

        <router-link
          to="/contact-us"
          class="default-btn"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          LET’S TALK
          <img
            src="../../assets/images/icon-right-white.png"
            alt="right-chevron"
          />
        </router-link>
      </div>
      <div
        class="border-style text-center"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <img src="../../assets/images/banner-1.png" alt="banner" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBanner",
};
</script>

<style lang="scss" scoped>
.banner-area {
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 186px;
  &.bg-1 {
    background-image: url(../../assets/images/banner-bg-1.png);
  }
}
.banner-content {
  max-width: 1000px;
  margin: auto;

  h1 {
    font-size: 70px;
    line-height: 80px;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 31px;
  }
  .default-btn {
    margin-bottom: 30px;
    padding: 17px 42.3px;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .banner-area {
    padding-top: 100px;
  }
  .banner-content {
    h1 {
      font-size: 30px;
      line-height: normal;
      margin-bottom: 15px;
    }
    p {
      font-size: 16px;
      margin-bottom: 15px;
    }
    .default-btn {
      margin-bottom: 15px;
    }
    &.style-two {
      p {
        margin-bottom: 30px;
        font-size: 16px;
      }
      .default-btn {
        margin-bottom: 30px;
      }
      .review-on {
        .review {
          margin-bottom: 0;
        }
        p {
          margin-bottom: 0;
        }
      }
    }
    &.style-three {
      p {
        font-size: 16px;
        margin-bottom: 20px;
      }
      .mb-75 {
        margin-bottom: 30px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .banner-area {
    padding-top: 100px;
  }
  .banner-content {
    h1 {
      font-size: 40px;
      line-height: normal;
      margin-bottom: 15px;
    }
    p {
      font-size: 17px;
      margin-bottom: 15px;
    }
    &.style-two {
      p {
        margin-bottom: 30px;
        font-size: 16px;
      }
      .default-btn {
        margin-bottom: 30px;
      }
      .review-on {
        .review {
          margin-bottom: 0;
        }
        p {
          margin-bottom: 0;
        }
      }
    }
    &.style-three {
      p {
        font-size: 16px;
        margin-bottom: 20px;
      }
      .mb-75 {
        margin-bottom: 30px;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .banner-area {
    padding-top: 160px;
  }
  .banner-content {
    h1 {
      font-size: 62px;
    }
    &.style-two {
      p {
        margin-bottom: 30px;
      }
      .default-btn {
        margin-bottom: 50px;
      }
      .review-on {
        .review {
          margin-bottom: 0;
        }
        p {
          margin-bottom: 0;
        }
      }
    }
  }
}
/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .banner-content {
    &.style-two {
      p {
        margin-bottom: 30px;
      }
      .default-btn {
        margin-bottom: 80px;
      }
      .review-on {
        .review {
          margin-bottom: 0;
        }
        p {
          margin-bottom: 0;
        }
      }
    }
  }
}
/* Min width 1400px to Max width 1799px */
@media only screen and (min-width: 1400px) and (max-width: 1700px) {
  .banner-content {
    h1 {
      font-size: 65px;
    }
  }
}
</style>