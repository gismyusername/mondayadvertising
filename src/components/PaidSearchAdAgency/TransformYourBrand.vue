<template>
  <div class="pb-100">
    <div class="container">
      <div class="transform-wrap bg-color-f2f2f8">
        <div class="row align-items-center">
          <div
            class="col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div class="transform-left-content">
              <h2>
                Transform Your Brand with High-Impact Paid Search Campaigns!
              </h2>
            </div>
          </div>
          <div
            class="col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div class="transform-right-content">
              <p>
                The team at Adli continuously monitors and optimizes our
                campaigns, keeping us ahead of the competition. Urgent need?
                call us
              </p>
              <a class="call" href="tel:+1-485-456-0102">+1-485-456-0102</a>
              <router-link to="/about-us" class="default-btn">
                GET A FREE AUDIT
                <img
                  src="../../assets/images/icon-right-white.png"
                  alt="icon-right-white"
              /></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransformYourBrand",
};
</script>

<style lang="scss" scoped>
.transform-wrap {
  padding: 90px 111px;
  border-radius: 20px;
}
.transform-left-content {
  max-width: 465px;
  h2 {
    margin-bottom: 0;
    font-size: 36px;
  }
  &.style-two {
    h2 {
      color: var(--whiteColor);
    }
    .shape {
      &.shape-4 {
        right: -280px !important;
      }
    }
  }
}
.transform-right-content {
  max-width: 412px;
  text-align: right;
  margin-left: auto;
  p {
    margin-bottom: 20px;
  }
  .call {
    display: block;
    margin-bottom: 25px;
    font-size: 22px;
    font-weight: 600;
    color: var(--headingColor);
    &:hover {
      color: var(--mainColor);
    }
  }
  &.style-two {
    p {
      color: #ececec;
    }
    .call {
      color: var(--whiteColor);
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .transform-wrap {
    padding: 20px;
  }
  .transform-left-content {
    margin-bottom: 20px;
    h2 {
      font-size: 25px;
    }
  }
  .transform-right-content {
    text-align: left;
    max-width: 100%;
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .transform-wrap {
    padding: 30px;
  }
  .transform-left-content {
    margin-bottom: 20px;
    h2 {
      font-size: 30px;
    }
  }
  .transform-right-content {
    text-align: left;
    max-width: 100%;
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .transform-wrap {
    padding: 50px;
  }
}
</style>