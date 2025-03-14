<template>
  <div class="pb-100 award-winning-area">
    <div class="container">
      <div class="border-style pb-75">
        <div class="custom-row d-lg-flex justify-content-between">
          <div
            class="custom-grid-33"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <ul
              class="award-single-item oblig ps-0 list-unstyled d-flex align-items-center"
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
                  <span>Meet Our Experts</span>
                  <img
                    src="../../assets/images/icon-right-black.png"
                    alt="icon-right-white"
                  />
                </router-link>
              </li>
            </ul>
          </div>
          <div
            class="custom-grid-33"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div class="award-single-item oblig award-winning">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img src="../../assets/images/award-1.png" alt="award" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <p class="award">Award Winning Agency</p>
                  <p class="clients"><span>3500+</span> Active Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="custom-grid-33"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <div class="award-single-item review-on">
              <div class="d-flex align-items-center mb-1">
                <p class="review">Review On</p>
                <div>
                  <img
                    src="../../assets/images/icon-star.png"
                    alt="icon-star"
                  />
                  <img
                    src="../../assets/images/icon-star.png"
                    alt="icon-star"
                  />
                  <img
                    src="../../assets/images/icon-star.png"
                    alt="icon-star"
                  />
                  <img
                    src="../../assets/images/icon-star.png"
                    alt="icon-star"
                  />
                  <img
                    src="../../assets/images/icon-star.png"
                    alt="icon-star"
                  />
                </div>
              </div>
              <div class="d-flex align-items-center">
                <img
                  class="review"
                  src="../../assets/images/company.png"
                  alt="company"
                />
                <p>1500+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AwardWinning",
};
</script>

<style lang="scss" scoped>
.award-single-item {
  margin-bottom: 25px;
  position: relative;
  z-index: 1;

  &.oblig {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: -278px;
      width: 100%;
      height: 100%;
      background-image: url(../../assets/images/line-2.png);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: auto;
    }
  }
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
  .award-single-item {
    &.oblig {
      &::before {
        display: none;
      }
    }
  }
  .award-experts {
    margin-left: 7px !important;
  }
  .custom-row {
    display: initial !important;
  }
}
/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .award-single-item {
    &.oblig {
      &::before {
        display: none;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .award-single-item {
    &.oblig {
      &::before {
        display: none;
      }
    }
  }
}
</style>