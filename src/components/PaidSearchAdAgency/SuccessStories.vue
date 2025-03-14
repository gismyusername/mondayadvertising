<template>
  <div class="success-stories-area bg pt-100 pb-75">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7 col-xxl-6">
          <div class="row">
            <div
              class="col-lg-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div class="success-single-item">
                <img src="../../assets/images/success-1.jpg" alt="success-1" />
                <router-link
                  to="/success-story-details"
                  class="success-content d-flex align-items-center justify-content-between mb-20"
                >
                  <div>
                    <h3>HiBootstrap</h3>
                    <span>Premium Themes</span>
                  </div>
                  <div class="icon">
                    <img
                      src="../../assets/images/icon-up-right-arrow.png"
                      alt="icon-up-right-arrow"
                    />
                  </div>
                </router-link>
              </div>
            </div>
            <div
              class="col-lg-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div class="success-single-item">
                <img src="../../assets/images/success-2.jpg" alt="success-2" />
                <router-link
                  to="/success-story-details"
                  class="success-content d-flex align-items-center justify-content-between mb-20"
                >
                  <div>
                    <h3>Bolster</h3>
                    <span>eCommerce</span>
                  </div>
                  <div class="icon">
                    <img
                      src="../../assets/images/icon-up-right-arrow.png"
                      alt="icon-up-right-arrow"
                    />
                  </div>
                </router-link>
              </div>
            </div>
            <div
              class="col-lg-12"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div class="success-single-item">
                <img src="../../assets/images/success-3.jpg" alt="success-3" />
                <router-link
                  to="/success-story-details"
                  class="success-content d-flex align-items-center justify-content-between"
                >
                  <div>
                    <h3>Shoponix</h3>
                    <span>eCommerce</span>
                  </div>
                  <div class="icon">
                    <img
                      src="../../assets/images/icon-up-right-arrow.png"
                      alt="icon-up-right-arrow"
                    />
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-lg-5 col-xxl-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <div class="success-content">
            <img
              class="object"
              src="../../assets/images/object.png"
              alt="object"
            />
            <span class="top-title">SUCCESS STORIES</span>
            <h2>Driving success through strategic paid search advertising!</h2>
            <router-link to="/success-stories" class="read-more">
              VIEW MORE
              <img
                src="../../assets/images/icon-right-red.png"
                alt="icon-right-red"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessStories",
};
</script>

<style lang="scss" scoped>
.success-stories-area {
  &.bg {
    background: linear-gradient(
      180deg,
      #fff 0%,
      rgba(255, 150, 150, 0.27) 0%,
      rgba(255, 150, 150, 0.27) 0.01%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}
.success-single-item {
  position: relative;
  margin-bottom: 30px;
  img {
    border-radius: 20px;
  }
  .success-content {
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.85);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-decoration: none;
    padding: 16px 20px;
    margin: 30px;

    &.mb-20 {
      margin-bottom: 20px;
    }
    h3 {
      font-size: 22px;
      color: var(--whiteColor);
      margin-bottom: 3px;
    }
    span {
      color: #cacaca;
    }
    .icon {
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 50px;
      background-color: #232323;
      transition: var(--transition);
    }
  }
  &.style-two {
    .success-content {
      position: unset;
      margin: 0;
      background-color: transparent;
      padding: 0;
      margin-top: 30px;
      h3 {
        color: var(--headingColor);
      }
      span {
        color: var(--bodyColor);
      }
      .icon {
        background-color: #232323;
      }
    }
  }
  &.style-three {
    .success-content {
      position: unset;
      margin: 0;
      background-color: transparent;
      padding: 0;
      margin-top: 30px;
      h3 {
        color: var(--whiteColor);
      }
      span {
        color: #cacaca;
      }
      .icon {
        background-color: #232323;
      }
    }
  }
  &:hover {
    .icon {
      background-color: var(--whiteColor);
    }
  }
}
.success-content {
  margin-left: 106px;
  .object {
    margin-bottom: 70px;
  }
  h2 {
    font-size: 36px;
    margin-bottom: 60px;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .success-single-item {
    .success-content {
      margin: 15px;
      h3 {
        font-size: 20px;
      }
      span {
        font-size: 15px;
      }
    }
  }
  .success-content {
    margin-left: 0;
    .object {
      margin-bottom: 20px;
    }
    h2 {
      font-size: 25px;
      margin-bottom: 20px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .success-content {
    margin-left: 0;
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .success-content {
    margin-left: 0;
  }
  .success-single-item {
    .success-content {
      margin: 10px;
      h3 {
        font-size: 20px;
      }
    }
  }
}
</style>