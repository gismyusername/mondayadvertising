<template>
  <div class="winning-agency-bg">
    <div class="pt-227 pb-100">
      <div class="container">
        <div class="row align-items-center">
          <div
            class="col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div class="winning-agency-content">
              <span class="top-title">AWARD WINNING AGENCY</span>
              <h2>
                Drive traffic, generate leads, achieve success with our paid
                search services!
              </h2>
              <p>
                Transforming your brand's online presence and generating
                meaningful results is our top priority at <span> Adli.</span> As
                a leading paid search ad agency,
              </p>
              <router-link to="/contact-us" class="default-btn">
                GET YOUR FREE CUSTOM PROPOSAL
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
                  src="../../assets/images/winning-agency.png"
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
  </div>
</template>

<script>
export default {
  name: "WinningAgency",
};
</script>

<style lang="scss" scoped>
.winning-agency-bg {
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 180px;
    width: 100%;
    background: linear-gradient(to bottom, transparent, #ffffff);
    z-index: -1;
  }
}
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
.winning-agency-wrap {
  max-width: 536px;
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