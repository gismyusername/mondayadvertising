<template>
  <div class="brilliance-area pb-100">
    <div class="container">
      <div
        class="bg-color-faf4f4 brilliance-wrap text-center position-relative z-1"
      >
        <div class="brilliance-content">
          <h2>
            A Symphony of Brilliance: Our Team, Your Symphony, A Harmonious
            Future
          </h2>
          <p>
            The team at Adli continuously monitors and optimizes our campaigns,
            keeping us ahead of the competition. Urgent need? call us
          </p>
          <router-link to="/our-team" class="default-btn">
            JOIN OUR TEAM
            <img src="../../assets/images/icon-right-white.png" alt="" />
          </router-link>
        </div>

        <img
          src="../../assets/images/shape-5.png"
          class="shape shape-9"
          alt="shape"
        />
        <img
          src="../../assets/images/shape-6.png"
          class="shape shape-10"
          alt="shape"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ASymphonyOfBrilliance",
};
</script>

<style lang="scss" scoped>
.brilliance-wrap {
  padding: 90px 100px;
  border-radius: 20px;
}
.brilliance-content {
  max-width: 672px;
  margin: auto;
  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .brilliance-wrap {
    padding: 20px;
  }
  .brilliance-content {
    h2 {
      font-size: 25px;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .brilliance-wrap {
    padding: 50px;
  }
  .brilliance-content {
    h2 {
      font-size: 30px;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
    }
  }
}
</style>