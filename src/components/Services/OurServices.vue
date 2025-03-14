<template>
  <div class="bg-gerund-color pt-227 pb-100">
    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-lg-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div class="our-experts-content">
            <span class="top-title">OUR SERVICES</span>
            <h2>
              Drive traffic, generate leads, achieve success with our paid
              search services!
            </h2>
            <p>
              Transforming your brand's online presence and generating
              meaningful results is our top priority at <span>Adli.</span> As a
              leading paid search ad agency,
            </p>
            <router-link to="/contact-us" class="default-btn">
              GET YOUR FREE CUSTOM PROPOSAL
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
          <div class="services-img position-relative z-1 ms-lg-4">
            <img src="../../assets/images/services.png" alt="services" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurServices",
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