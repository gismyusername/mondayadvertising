<template>
  <div class="pb-75">
    <div class="container">
      <div class="section-title">
        <span
          class="top-title"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
          >OUR PROCESS</span
        >
        <h2 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
          Your path to paid search excellence starts here!
        </h2>
      </div>
      <div
        class="row justify-content-center"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        <div class="col-lg-4 col-sm-6">
          <div class="our-process-single-item style-two position-relative mb-4">
            <img
              src="../../assets/images/dot-lines-2.png"
              class="shape shape-3 position-absolute top-0 end-0"
              alt="dot-lines-2"
            />
            <h1 class="mb-3">1</h1>
            <h3>Discovery and Strategy</h3>
            <p>
              Work closely with clients to understand their business goals,
              target audience, and budget. Develop a comprehensive
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div
            class="our-process-single-item style-two m-lg-auto position-relative mb-4"
          >
            <img
              src="../../assets/images/dot-lines-2.png"
              class="shape shape-3 position-absolute top-0 end-0"
              alt="dot-lines-2"
            />
            <h1 class="mb-3">2</h1>
            <h3>Campaign Execution</h3>
            <p>
              Work closely with clients to understand their business goals,
              target audience, and budget. Develop a comprehensive
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="our-process-single-item style-two ms-lg-auto mb-4">
            <h1 class="mb-3">3</h1>
            <h3>Reporting and Analysis</h3>
            <p>
              Work closely with clients to understand their business goals,
              target audience, and budget. Develop a comprehensive
            </p>
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
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .our-process-single-item {
    margin-bottom: 30px;
  }
}
</style>