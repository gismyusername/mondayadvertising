<template>
  <div class="bg-color-ef4335 pt-75 pb-75">
    <div class="container-fluid mw-1538">
      <div class="row align-items-center">
        <div class="col-lg-7 col-xxl-6">
          <div class="banner-content style-three">
            <h1
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              Print to Impress: Offline Ad Agency Extraordinaire
            </h1>
            <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
              Welcome to Adli, the offline ad agency that believes in the power
              of tangible connections. In an increasingly digital world, we
              understand advertisement.
            </p>
            <router-link
              to="/about-us"
              class="default-btn btn-two mb-75"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              BECOME A CLIENT
              <img
                src="../../assets/images/icon-right-white.png"
                alt="right-chevron"
              />
            </router-link>

            <div
              class="custom-row d-lg-flex justify-content-between align-items-center"
            >
              <div class="custom-grid-33">
                <div class="award-single-item award-winning bg">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img src="../../assets/images/award-1.png" alt="award" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p class="award mb-0">Award Winning Agency</p>
                      <p class="clients mb-0">
                        <span>3500+</span> Active Clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="custom-grid-33">
                <ul
                  class="award-single-item ps-0 list-unstyled d-flex align-items-center"
                >
                  <li class="award-item">
                    <img
                      src="../../assets/images/expert-1.jpg"
                      class="rounded-circle"
                      alt="expert"
                    />
                  </li>
                  <li class="award-item">
                    <img
                      src="../../assets/images/expert-2.jpg"
                      class="rounded-circle"
                      alt="expert"
                    />
                  </li>
                  <li class="award-item">
                    <img
                      src="../../assets/images/expert-3.jpg"
                      class="rounded-circle"
                      alt="expert"
                    />
                  </li>
                  <li class="award-experts">
                    <router-link to="/our-team">
                      <span class="text-white">Meet Our Experts</span>
                      <img
                        src="../../assets/images/icon-right-white.png"
                        alt="icon-right-white"
                      />
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-xxl-6 mt-4 mt-lg-0">
          <div
            class="banner-img-3 textlg-end"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <img src="../../assets/images/banner-3.png" alt="banner" />
            <img
              src="../../assets/images/object-3.png"
              class="object"
              alt="object"
            />
            <img
              src="../../assets/images/banner-mockup.png"
              class="banner-mockup"
              alt="banner-mockup"
            />
          </div>
        </div>
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
  &.style-two {
    max-width: 654px;
    margin-left: 0;

    p {
      font-size: 18px;
      margin-bottom: 40px;
      font-weight: 400;
    }
    .default-btn {
      margin-bottom: 100px;
      padding: 16px 47.5px;
    }
  }
  &.style-three {
    h1 {
      color: var(--whiteColor);
    }
    p {
      font-size: 18px;
      color: var(--whiteColor);
      margin-bottom: 40px;
      font-weight: 400;
    }
    .mb-75 {
      margin-bottom: 75px;
    }
    .custom-row {
      max-width: 586px;
    }
  }
}
.banner-img-3 {
  position: relative;
  .object {
    position: absolute;
    bottom: 85px;
    right: 85px;
  }
  img.banner-mockup {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}
.award-single-item {
  margin-bottom: 25px;
  position: relative;
  z-index: 1;

  .award-item {
    margin-left: -15px;
    transition: var(--transition);
    z-index: 1;
    img {
      border: 3px solid var(--whiteColor);
      width: 46px;
      height: 46px;
      cursor: pointer;
    }
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      transform: translateX(5px);
    }
  }
  .award-experts {
    margin-left: 20px;
    a {
      text-decoration: none;
      font-weight: 500;
      color: var(--headingColor);
      span {
        margin-right: 8px;
      }
    }
  }
  &.award-winning {
    p {
      font-weight: 500;
      color: var(--headingColor);
    }
    .award {
      margin-bottom: 0;
    }
    .clients {
      span {
        font-weight: 700;
        font-size: 20px;
      }
    }
    &.bg {
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.15);
      padding: 13px;

      img {
        filter: invert(1);
      }
      p {
        color: var(--whiteColor);
        font-size: 16px;
      }
      .clients {
        span {
          color: var(--whiteColor);
        }
      }
    }
  }
  &.review-on {
    p {
      font-weight: 500;
      color: var(--headingColor);
      margin-bottom: 0 !important;
      &.review {
        position: relative;
        top: 2px;
      }
    }
    img {
      margin-right: 5px;
    }
    .review {
      margin-right: 27px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
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
      padding: 16px 20px;
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
  .banner-img-3 {
    .object {
      width: 80px;
      bottom: 30px;
      right: 30px;
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .award-single-item {
    &.award-winning {
      &.bg {
        margin-right: 10px;
      }
    }
    .award-experts {
      margin-left: 17px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
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
  .award-single-item {
    &.award-winning {
      &.bg {
        margin-right: 10px;
      }
    }
    .award-experts {
      margin-left: 17px;
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .banner-content {
    h1 {
      font-size: 48px;
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