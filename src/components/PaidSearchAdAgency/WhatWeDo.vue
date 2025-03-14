<template>
  <div class="what-we-do-area pb-50">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div class="what-we-do-content">
            <span class="top-title">WHAT WE DO</span>
            <h2>Driving success through strategic paid search advertising!</h2>
            <router-link to="/about-us" class="read-more">
              KNOW MORE ABOUT US
              <img
                src="../../assets/images/icon-right-red.png"
                alt="icon-right-red"
              />
            </router-link>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="what-we-do-item-wrap">
            <p
              class="description"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              Transforming your brand's online presence and generating
              meaningful results is our top priority at <span>Adli</span>. As a
              leading paid search ad agency, we bring together a unique blend of
              creativity and data-driven
            </p>
            <div
              class="row justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div class="col-lg-6 col-sm-6">
                <div class="what-we-do-single-item">
                  <div class="icon">
                    <img
                      src="../../assets/images/icon-diagram.png"
                      alt="icon-diagram"
                    />
                  </div>
                  <h3>Campaign Strategy</h3>
                  <p>
                    Work closely with clients to understand their business
                    goals, target audience, and budget. Develop a comprehensive
                    paid search strategy
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="what-we-do-single-item ms-30">
                  <div class="icon">
                    <img
                      src="../../assets/images/icon-bullhorn.png"
                      alt="icon-bullhorn"
                    />
                  </div>
                  <h3>Campaign Optimization</h3>
                  <p>
                    Work closely with clients to understand their business
                    goals, target audience, and budget. Develop a comprehensive
                    paid search strategy
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="what-we-do-single-item">
                  <div class="icon">
                    <img
                      src="../../assets/images/icon-auction.png"
                      alt="icon-auction"
                    />
                  </div>
                  <h3>Bid Management</h3>
                  <p>
                    Work closely with clients to understand their business
                    goals, target audience, and budget. Develop a comprehensive
                    paid search strategy
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="what-we-do-single-item ms-30">
                  <div class="icon">
                    <img
                      src="../../assets/images/icon-speedometer.png"
                      alt="icon-speedometer"
                    />
                  </div>
                  <h3>Performance Tracking</h3>
                  <p>
                    Work closely with clients to understand their business
                    goals, target audience, and budget. Develop a comprehensive
                    paid search strategy
                  </p>
                </div>
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
  name: "WhatWeDo",
};
</script>

<style lang="scss" scoped>
.what-we-do-content {
  h2 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 70px;
  }
}
.what-we-do-item-wrap {
  max-width: 758px;
  margin-left: auto;
}
.description {
  margin-bottom: 55px;
  span {
    font-weight: 700;
  }
}
.what-we-do-single-item {
  margin-bottom: 50px;
  .icon {
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    background-color: #f2f2f8;
    border-radius: 50px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;
  }
}
.ms-30 {
  margin-left: 30px;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .what-we-do-content {
    margin-bottom: 30px;
    h2 {
      font-size: 25px;
      margin-bottom: 20px;
    }
  }
  .ms-30 {
    margin-left: 0;
  }
  .what-we-do-single-item {
    margin-bottom: 30px;
    h3 {
      font-size: 20px;
    }
  }
  .description {
    margin-bottom: 30px;
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .what-we-do-content {
    margin-bottom: 30px;
    h2 {
      font-size: 30px;
      margin-bottom: 20px;
    }
  }
  .ms-30 {
    margin-left: 0;
  }
  .what-we-do-single-item {
    margin-bottom: 30px;
  }
  .description {
    margin-bottom: 30px;
  }
}
</style>