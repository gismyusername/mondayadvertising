<template>
  <div class="services-details-bg pb-100">
    <div class="container">
      <div class="services-details-img position-relative mb-4">
        <img
          src="../../assets/images/services-details.jpg"
          alt="services-details"
        />
        <img
          src="../../assets/images/logo-icon.png"
          class="position-absolute bottom-0 end-0"
          alt="logo-icon"
        />
      </div>

      <div class="row">
        <div class="col-lg-8">
          <div class="services-details-content">
            <h2>Paid search marketing</h2>

            <h3>Introduction:</h3>
            <p>
              Welcome to "Demystifying Paid Search Ads: A Beginner's Guide." If
              you've ever wondered how businesses appear at the top of search
              engine results, you're about to discover the secret behind their
              success. Paid search advertising, also known as Pay-Per-Click
              (PPC), is a powerful digital marketing tool that allows businesses
              to bid on keywords and display targeted ads to potential
              customers. In this comprehensive guide, we'll break down the
              fundamentals of paid search ads, empowering you to harness this
              effective strategy and propel your business to new heights in the
              digital landscape.
            </p>

            <div class="mb-lg-5 mb-4"></div>

            <h3>Chapter 1: Understanding Paid Search Advertising</h3>
            <p>
              In this chapter, we'll lay the groundwork by explaining what paid
              search ads are and how they function. You'll gain insights into
              popular advertising platforms like Google Ads and Bing Ads, and
              we'll explore the numerous benefits these ads offer to businesses
              of all sizes. By understanding the core principles of paid search
              advertising, you'll be better equipped to leverage its potential
              to drive relevant traffic and achieve your marketing objectives.
            </p>

            <div class="mb-lg-5 mb-4"></div>

            <h3>Chapter 2: The Anatomy of a Search Ad</h3>
            <p>
              Unravel the components that make up a successful search ad in this
              chapter. From captivating headlines to compelling descriptions and
              strategically placed URLs, we'll delve into the art of crafting ad
              copy that engages and resonates with your target audience. With a
              focus on relevant keywords and match types, you'll learn how to
              optimize your ads for maximum impact and relevancy.
            </p>

            <div class="mb-lg-5 mb-4"></div>

            <h3>Chapter 3: Setting Up Your First Campaign</h3>
            <p>
              Ready to create your first paid search ad campaign? This chapter
              will guide you through the process step-by-step. You'll learn how
              to define your advertising goals, structure campaigns and ad
              groups effectively, and set appropriate budgets and bidding
              strategies. Armed with this knowledge, you'll be ready to launch
              your campaign with confidence.
            </p>

            <div class="mb-lg-5 mb-4"></div>

            <h3>Chapter 4: Keyword Research & Targeting</h3>
            <p>
              The cornerstone of successful paid search advertising lies in
              selecting the right keywords. In this chapter, we'll dive into
              keyword research techniques to identify high-value, relevant terms
              that align with your business offerings. Discover how to use
              keyword tools and understand match types to ensure your ads reach
              the right audience at the right time.
            </p>
          </div>
        </div>

        <div class="col-lg-4 mt-4 mt-lg-0">
          <ServivesSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ServivesSidebar from "./ServivesSidebar.vue";

export default defineComponent({
  name: "ServicesDestails",
  components: {
    ServivesSidebar,
  },
});
</script>

<style lang="scss" scoped>
.services-details-bg {
  background: linear-gradient(
    180deg,
    #fff 0%,
    rgba(255, 150, 150, 0.27) 0%,
    rgba(255, 150, 150, 0.27) 42.19%,
    rgba(255, 255, 255, 0) 100%
  );
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 350px;
    width: 100%;
    background-color: var(--whiteColor);
    z-index: -1;
  }
}
.services-details-img {
  img {
    border-radius: 20px;
  }
  .bottom-0 {
    bottom: 45px !important;
  }
  .end-0 {
    right: 45px !important;
  }
}
.services-details-content {
  h2 {
    font-size: 36px;
    margin-bottom: 25px;
  }
  h3 {
    font-family: var(--bodyFontFamily);
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .services-details-bg::before {
    height: 100%;
  }
  .services-details-img {
    .end-0 {
      right: 10px !important;
      max-width: 60px;
    }
    .bottom-0 {
      bottom: 10px !important;
    }
  }
  .services-details-content {
    h2 {
      font-size: 25px;
      margin-bottom: 15px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .services-details-bg::before {
    height: 100%;
  }
  .services-details-img {
    .end-0 {
      right: 10px !important;
      max-width: 60px;
    }
    .bottom-0 {
      bottom: 10px !important;
    }
  }
  .services-details-content {
    h2 {
      font-size: 30px;
      margin-bottom: 15px;
    }
  }
}
</style>