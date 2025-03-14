<template>
  <div class="fun-facts-area bg position-relative z-1">
    <div class="container">
      <div class="fun-facts-wrap bg-color-faf4f4">
        <div class="row align-items-center">
          <div
            class="col-lg-3 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div class="fun-fact-trophy">
              <img src="../../assets/images/trophy.png" alt="trophy" />
              <p>Award Winning Agency</p>
            </div>
          </div>

          <div class="col-lg-9">
            <div class="fun-fact-single-wrap">
              <div class="row justify-content-center">
                <div
                  class="col-lg-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <div class="fun-fact-single-item oblig">
                    <div class="icon">
                      <img
                        src="../../assets/images/icon-average.png"
                        alt="icon-average"
                      />
                    </div>
                    <h2>215 %</h2>
                    <span>Average ROI</span>
                    <p>Customers Achieved</p>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <div class="fun-fact-single-item ms-40 oblig">
                    <div class="icon">
                      <img
                        src="../../assets/images/icon-ads.png"
                        alt="icon-ads"
                      />
                    </div>
                    <h2>200,000s</h2>
                    <span>Ads</span>
                    <p>Already Created</p>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                  <div class="fun-fact-single-item ms-90">
                    <div class="icon">
                      <img
                        src="../../assets/images/icon-million.png"
                        alt="icon-million"
                      />
                    </div>
                    <h2>$10</h2>
                    <span>Million</span>
                    <p>Managed Monthly</p>
                  </div>
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
  name: "AwardWinningAgency",
};
</script>

<style lang="scss" scoped>
.fun-facts-area {
  &.bg {
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 50%;
      background-color: rgba(255, 150, 150, 0.27);
      z-index: -1;
    }
  }
}
.fun-facts-wrap {
  padding: 45px;
  padding-bottom: 20px;
  border-radius: 20px;
}
.fun-fact-trophy {
  background-color: #fee;
  border-radius: 20px;
  padding: 40px 40px;
  padding-bottom: 60px;
  text-align: center;
  margin-bottom: 25px;
  p {
    font-size: 18px;
    font-weight: 500;
    color: var(--headingColor);
  }
}
.fun-fact-single-wrap {
  margin-left: 46px;
}
.fun-fact-single-item {
  margin-bottom: 25px;
  position: relative;

  &.oblig {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 85px;
      width: 100%;
      height: 100%;
      background-image: url(../../assets/images/line-1.png);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: auto;
    }
    &.ms-40 {
      &::before {
        left: 130px;
      }
    }
  }
  .icon {
    width: 85px;
    height: 85px;
    line-height: 85px;
    text-align: center;
    background-color: #ffeeee;
    border-radius: 100px;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 36px;
    font-weight: 600;
  }
  span {
    font-weight: 600;
    font-size: 18px;
    display: block;
    margin-bottom: 20px;
  }
  p {
    color: #4c4c4c;
  }
  &.ms-40 {
    margin-left: 40px;
  }
  &.ms-90 {
    margin-left: 90px;
  }
  &.style-two {
    h2 {
      color: var(--whiteColor);
    }
    p {
      color: #ececec;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .fun-facts-wrap {
    padding: 25px;
    padding-bottom: 0;
  }
  .fun-fact-trophy {
    padding: 20px;
    padding-bottom: 30px;
  }
  .fun-fact-single-wrap {
    margin-left: 0;
  }
  .fun-fact-single-item {
    text-align: center;
    border: 1px solid #dddddd;
    padding: 20px;
    border-radius: 20px;
    &.ms-40 {
      margin-left: 0;
    }
    &.ms-90 {
      margin-left: 0;
    }
    .icon {
      margin: auto;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 25px;
    }
    span {
      font-size: 15px;
      margin-bottom: 10px;
    }
    &::before {
      display: none;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .fun-facts-wrap {
    padding: 25px;
    padding-bottom: 0;
  }
  .fun-fact-trophy {
    padding: 20px;
    padding-bottom: 30px;
  }
  .fun-fact-single-wrap {
    margin-left: 0;
  }
  .fun-fact-single-item {
    text-align: center;
    border: 1px solid #dddddd;
    padding: 20px;
    border-radius: 20px;
    &.ms-40 {
      margin-left: 0;
    }
    &.ms-90 {
      margin-left: 0;
    }
    .icon {
      margin: auto;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 25px;
    }
    span {
      font-size: 15px;
      margin-bottom: 10px;
    }
    &.oblig {
      &::before {
        display: none;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .fun-facts-wrap {
    padding: 25px;
    padding-bottom: 0;
  }
  .fun-fact-trophy {
    padding: 20px;
    padding-bottom: 30px;
    p {
      font-size: 15px;
    }
  }
  .fun-fact-single-wrap {
    margin-left: 0;
  }
  .fun-fact-single-item {
    text-align: center;
    border: 1px solid #dddddd;
    padding: 20px;
    border-radius: 20px;
    &.ms-40 {
      margin-left: 0;
    }
    &.ms-90 {
      margin-left: 0;
    }
    .icon {
      margin: auto;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 25px;
    }
    span {
      font-size: 15px;
      margin-bottom: 10px;
    }
    &.oblig {
      &::before {
        display: none;
      }
    }
  }
}
/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .fun-fact-trophy {
    padding: 40px 20px;
  }
}
/* Min width 1400px to Max width 1799px */
@media only screen and (min-width: 1400px) and (max-width: 1700px) {
  .fun-fact-trophy {
    padding: 40px 20px;
  }
}
</style>