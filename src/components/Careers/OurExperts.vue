<template>
  <div class="bg-color-ffeeee pt-75 pb-75">
    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-lg-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div class="our-experts-content">
            <span class="top-title">OUR EXPERTS</span>
            <h2>
              Beyond the Glow of Screens: Unraveling the Timeless Spell of
              Offline Advertising Magic
            </h2>
            <p>
              Transforming your brand's online presence and generating
              meaningful results is our top priority at <span>Adli.</span> As a
              leading paid search ad agency,
            </p>
            <router-link to="/our-team" class="default-btn">
              MEET THE TEAM
              <img
                src="../../assets/images/icon-right-white.png"
                alt="icon-right-white"
            /></router-link>
          </div>
        </div>

        <div
          class="col-lg-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div class="expart-img position-relative z-1 ms-lg-4">
            <img src="../../assets/images/expart.png" alt="expart" />
            <img
              src="../../assets/images/object-2.png"
              class="position-absolute bottom-0 end-0 object"
              alt="object"
            />
            <img
              src="../../assets/images/shape-3.png"
              class="shape shape-7"
              alt="shape-3"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurExperts",
};
</script>

<style lang="scss" scoped>
.our-experts-content {
  max-width: 536px;
  h2 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 25px;
  }
  p {
    margin-bottom: 45px;
    span {
      font-weight: 700;
    }
  }
}
.expart-img {
  .bottom-0 {
    bottom: 200px !important;
  }
  .end-0 {
    right: 50px !important;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .our-experts-content {
    margin-bottom: 30px;
    h2 {
      font-size: 25px;
      margin-bottom: 15px;
    }
    p {
      margin-bottom: 20px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .our-experts-content {
    margin-bottom: 30px;
    h2 {
      font-size: 30px;
      margin-bottom: 15px;
    }
    p {
      margin-bottom: 20px;
    }
  }
}
</style>