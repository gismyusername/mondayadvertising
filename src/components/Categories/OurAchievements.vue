<template>
  <div class="pb-100">
    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-lg-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div class="winning-agency-content">
            <span class="top-title">CATEGORIES</span>
            <h2>
              Drive traffic, generate leads, achieve success with our paid
              search services!
            </h2>
            <p>
              Transforming your brand's online presence and generating
              meaningful results is our top priority at <span> Adli.</span> As a
              leading paid search ad agency,
            </p>
            <router-link to="/about-us" class="default-btn">
              KNOW MORE ABOUT US
              <img
                src="../../assets/images/icon-right-white.png"
                alt="icon-right-white"
              />
            </router-link>
          </div>
        </div>

        <div
          class="col-lg-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div class="winning-agency-wrap ms-lg-auto mt-4 mt-lg-0">
            <div class="winning-agency-img position-relative z-1 mb-0">
              <img
                src="../../assets/images/winning-agency-4.png"
                class="img"
                alt="winning-agency"
              />
              <img
                src="../../assets/images/object-2.png"
                class="object position-absolute bottom-0 end-0"
                alt="object"
              />
              <img
                src="../../assets/images/shape-1.png"
                class="shape shape-5"
                alt="object"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurAchievements",
};
</script>

<style lang="scss" scoped>
.winning-agency-content {
  max-width: 536px;
  h2 {
    font-size: 36px;
    margin-bottom: 25px;
  }
  p {
    margin-bottom: 50px;
    span {
      font-weight: 700;
    }
  }
  .mt-53 {
    margin-top: 53px;
  }
}
.winning-agency-img {
  margin-right: 14px;
  margin-bottom: 54px;

  .img {
    border-radius: 20px;
    box-shadow: 14px 14px 0px 0px var(--mainColor);
  }
  .object {
    bottom: 30px !important;
    right: 30px !important;
  }
}
.winning-agency-img-2 {
  position: relative;
  .object {
    bottom: 50px !important;
    left: 0 !important;
  }
}
.winning-agency-wrap {
  max-width: 536px;
}
.fun-single-item {
  margin-bottom: 65px;

  &:last-child {
    margin-bottom: 0;
  }
  .icon {
    width: 84px;
    height: 84px;
    line-height: 84px;
    text-align: center;
    background-color: #000000;
    border-radius: 50px;
  }
  h3 {
    color: var(--whiteColor);
    font-size: 36px;
    font-weight: 600;
  }
  span {
    font-size: 18px;
    color: var(--whiteColor);
  }
  &.style-two {
    .icon {
      background-color: var(--whiteColor);
      margin-bottom: 14px;
    }
    h3 {
      color: var(--headingColor);
    }
    span {
      color: #4c4c4c;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .winning-agency-content {
    h2 {
      font-size: 25px;
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 20px;
    }
    .mt-53 {
      margin-top: 30px;
    }
  }
  .winning-agency-img {
    margin-bottom: 40px;
  }
  .fun-single-item {
    margin-bottom: 30px;
    h3 {
      font-size: 30px;
    }
    span {
      font-size: 16px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .winning-agency-content {
    h2 {
      font-size: 30px;
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 20px;
    }
    .mt-53 {
      margin-top: 30px;
    }
  }
  .winning-agency-img {
    margin-bottom: 40px;
  }
  .winning-agency-content {
    max-width: 100%;
  }
  .winning-agency-wrap {
    max-width: 100%;
  }
  .fun-single-item {
    margin-bottom: 30px;
    h3 {
      font-size: 30px;
    }
    span {
      font-size: 16px;
    }
  }
}
</style>