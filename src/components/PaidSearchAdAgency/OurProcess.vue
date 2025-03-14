<template>
  <div class="our-process-area bg position-relative z-1 pb-100">
    <div class="container">
      <div
        class="section-title"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <span class="top-title">OUR PROCESS</span>
        <h2>Your path to paid search excellence starts here!</h2>
      </div>
      <div class="row">
        <div class="col-lg-5">
          <div
            class="our-process-single-item"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div class="d-flex">
              <div class="flex-shrink-0">
                <h1>1</h1>
              </div>
              <div class="flex-grow-1 ms-4">
                <h3>Campaign Strategy</h3>
                <p>
                  Work closely with clients to understand their business goals,
                  target audience, and budget. Develop a comprehensive
                </p>
              </div>
            </div>
          </div>
          <div
            class="our-process-single-item"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div class="d-flex">
              <div class="flex-shrink-0">
                <h1>2</h1>
              </div>
              <div class="flex-grow-1 ms-4">
                <h3>Full Management</h3>
                <p>
                  Work closely with clients to understand their business goals,
                  target audience, and budget. Develop a comprehensive
                </p>
              </div>
            </div>
          </div>
          <div
            class="our-process-single-item"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <div class="d-flex">
              <div class="flex-shrink-0">
                <h1>3</h1>
              </div>
              <div class="flex-grow-1 ms-4">
                <h3>Transparency</h3>
                <p>
                  Work closely with clients to understand their business goals,
                  target audience, and budget. Develop a comprehensive
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-lg-7"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div
            class="our-process-img text-lg-end position-relative mt-4 mt-lg-0"
          >
            <img
              src="../../assets/images/our-process-img.png"
              alt="our-process-img"
            />
            <router-link
              to="/careers"
              class="default-btn position-absolute bottom-0 start-50 translate-middle-x"
            >
              GET A PROPOSAL
              <img
                src="../../assets/images/icon-right-white.png"
                alt="icon-right-white"
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
  name: "OurProcess",
};
</script>

<style lang="scss" scoped>
.our-process-area {
  &.bg {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 40%;
      background-color: rgba(255, 255, 255, 0);
      z-index: -1;
    }
  }
}
.our-process-single-item {
  margin-bottom: 50px;
  max-width: 500px;
  &:last-child {
    margin-bottom: 0;
  }
  h1 {
    font-size: 75px;
    font-weight: 700;
    color: #e3e3e3;
    font-family: var(--bodyFontFamily);
    font-style: italic;
    line-height: 1;
    margin-bottom: 0;
    transition: var(--transition);
  }
  h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  &:hover {
    h1 {
      color: var(--mainColor);
    }
  }
  &.style-two {
    max-width: 310px;
  }
}
.our-process-wrap {
  padding: 80px 100px;
  padding-bottom: 55px;
  border-radius: 20px;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .our-process-single-item {
    margin-bottom: 30px;
    h1 {
      font-size: 50px;
    }
    h3 {
      font-size: 20px;
    }
  }
  .our-process-wrap {
    padding: 25px;
    padding-bottom: 0;
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .our-process-single-item {
    margin-bottom: 30px;
  }
  .our-process-wrap {
    padding: 50px;
    padding-bottom: 25px;
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .our-process-wrap {
    padding: 50px;
    padding-bottom: 25px;
  }
}
</style>