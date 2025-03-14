<template>
  <div class="pt-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="hibootstrap-content">
            <h3>HiBootstrap</h3>
            <div class="mb-4">
              <h4>Introduction:</h4>
              <p>
                In a world inundated with digital noise, Offline Ad Agency, a
                trailblazing marketing firm, dared to embrace the beauty of
                tangible connections. Armed with creativity and a relentless
                drive to stand out, they embarked on a journey that would
                redefine advertising success in the physical realm. This is the
                story of how Offline Ad Agency's unwavering commitment to
                innovation, old-school charm, and personalized strategies led
                them to the pinnacle of offline advertising excellence.
              </p>
            </div>

            <div class="mb-4">
              <h4>The Vision Takes Shape</h4>
              <p>
                Founded by a group of marketing enthusiasts, Offline Ad Agency
                set out to challenge the status quo of digital dominance. They
                believed that the tangible power of billboards, print media, and
                direct mail had an indelible impact on audiences that
                transcended the fleeting impressions of screens. With a vision
                to rekindle the essence of human connection, they embarked on
                their mission.
              </p>
            </div>

            <h4>Crafting Memories, Inspiring Results</h4>
            <p>
              Offline Ad Agency's commitment to crafting memorable experiences
              paid dividends. Their captivating billboards became landmarks,
              their print ads adorned coveted publications, and their direct
              mail campaigns sparked excitement in recipients' hearts. Brands
              began to witness tangible returns, witnessing not just engagement
              but lasting connections with their customers.
            </p>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="hibootstrap-img">
            <img src="../../assets/images/hibootstrap.jpg" alt="hibootstrap" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessStoryDetails",
};
</script>

<style lang="scss" scoped>
.hibootstrap-content {
  h3 {
    font-size: 36px;
    margin-bottom: 25px;
  }
  h4 {
    font-size: 16px;
    font-weight: 700;
    font-family: var(--bodyFontFamily);
    margin-bottom: 10px;
  }
}
.hibootstrap-img {
  margin-left: 120px;
  img {
    border-radius: 20px;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .hibootstrap-content {
    h3 {
      font-size: 25px;
      margin-bottom: 20px;
    }
  }
  .hibootstrap-img {
    margin-left: 0;
    margin-top: 30px;
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .hibootstrap-content {
    h3 {
      font-size: 25px;
      margin-bottom: 20px;
    }
  }
  .hibootstrap-img {
    margin-left: 0;
    margin-top: 30px;
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .hibootstrap-img {
    margin-left: 0;
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .hibootstrap-img {
    margin-left: 0;
  }
}
</style>