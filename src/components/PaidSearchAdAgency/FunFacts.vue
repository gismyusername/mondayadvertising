<template>
  <div class="fun-area bg position-relative z-1">
    <div class="container">
      <div class="row g-md-0">
        <div
          class="col-md-6 col-lg-5 col-xl-4 z-2"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div class="fun-wrap position-relative">
            <div class="fun-single-item text-center text-sm-start">
              <div class="d-sm-flex align-items-center">
                <div class="flex-shrink-0">
                  <div class="icon m-auto ms-auto">
                    <img
                      src="../../assets/images/icon-growth.png"
                      alt="icon-growth"
                    />
                  </div>
                </div>
                <div class="flex-grow-1 ms-sm-3 mt-3 mt-sm-0">
                  <h3>25 +</h3>
                  <span>Years driving growth</span>
                </div>
              </div>
            </div>
            <div class="fun-single-item text-center text-sm-start">
              <div class="d-sm-flex align-items-center">
                <div class="flex-shrink-0">
                  <div class="icon m-auto ms-auto">
                    <img
                      src="../../assets/images/icon-cube.png"
                      alt="icon-cube"
                    />
                  </div>
                </div>
                <div class="flex-grow-1 ms-sm-3 mt-3 mt-sm-0">
                  <h3>1450 +</h3>
                  <span>Projects complete succesfully</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-md-6 col-lg-7 col-xl-8"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div class="h-100 fun-img position-relative">
            <img
              src="../../assets/images/fun.jpg"
              class="h-100 object-fit-cover"
              alt="fun"
            />
            <img
              src="../../assets/images/logo-icon.png"
              class="position-absolute bottom-0 end-0 logo-icon"
              alt="logo-icon"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FunFacts",
};
</script>

<style lang="scss" scoped>
.fun-area {
  &.bg {
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background-color: rgba(255, 150, 150, 0.27);
    }
  }
}
.fun-wrap {
  background-color: #161519;
  padding: 108px 70px;
  border-radius: 20px;
  margin-right: -55px;
  z-index: 2;
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
.fun-img {
  z-index: -1;
  img {
    border-radius: 20px;
  }
  .logo-icon {
    bottom: 60px !important;
    right: 60px !important;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .fun-wrap {
    padding: 30px;
    margin-right: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
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
  .fun-img {
    img {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
    .logo-icon {
      bottom: 10px !important;
      right: 10px !important;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .fun-wrap {
    padding: 30px;
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
  .fun-img {
    .logo-icon {
      bottom: 10px !important;
      right: 10px !important;
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .fun-wrap {
    padding: 80px 35px;
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .fun-wrap {
    padding: 80px 35px;
  }
}
</style>