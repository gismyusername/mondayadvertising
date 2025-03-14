<template>
  <div class="capabilities-area pt-100 pb-75">
    <div class="container">
      <div
        class="d-sm-flex align-items-center justify-content-between mb-50 position-relative z-1"
      >
        <div
          class="section-title left-title mb-0"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <span class="top-title">CAPABILITIES</span>
          <h2>
            Drive traffic, generate leads, achieve success with our paid search
            services!
          </h2>
        </div>
        <router-link
          to="/services"
          class="default-btn mt-3 mt-sm-0"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          VIEW ALL SERVICES
          <img
            src="../../assets/images/icon-right-white.png"
            alt="right-chevron"
          />
        </router-link>
        <img
          src="../../assets/images/dot-lines-1.png"
          class="shape shape-1 position-absolute top-50 start-0 translate-middle-y"
          alt="dot-lines-1"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
        />
      </div>

      <div class="row justify-content-center">
        <div
          class="col-xl-3 col-sm-6"
          v-for="capabilitie in capabilities"
          :key="capabilitie.id"
          data-aos="fade-up"
          data-aos-duration="1200"
          :data-aos-delay="capabilitie.dataDelay"
        >
          <div class="capabilities-single-item transition-y">
            <div class="icon">
              <img :src="capabilitie.imageIcon" alt="Icon" />
            </div>
            <h3>{{ capabilitie.title }}</h3>
            <p>
              {{ capabilitie.description }}
            </p>
            <router-link to="/service-details" class="read-more">
              READ MORE
              <img
                src="../../assets/images/icon-right-red.png"
                alt="icon-right-red"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CapabilitiesContent",
  data() {
    return {
      capabilities: [
        {
          id: 1,
          dataDelay: 200,
          imageIcon: require("../../assets/images/icon-google-ads.png"),
          title: "Google Ads",
          description:
            "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive",
        },
        {
          id: 2,
          dataDelay: 300,
          imageIcon: require("../../assets/images/icon-microsoft-ads.png"),
          title: "Microsoft Ads",
          description:
            "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive",
        },
        {
          id: 3,
          dataDelay: 400,
          imageIcon: require("../../assets/images/icon-campaign.png"),
          title: "Social Media Ads",
          description:
            "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive",
        },
        {
          id: 4,
          dataDelay: 500,
          imageIcon: require("../../assets/images/icon-shopping.png"),
          title: "Shopping Campaign",
          description:
            "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.capabilities-area {
  background: linear-gradient(
    180deg,
    #fff 0%,
    rgba(255, 150, 150, 0.27) 0%,
    rgba(255, 150, 150, 0.27) 42.19%,
    rgba(255, 255, 255, 0) 100%
  );
}
.capabilities-single-item {
  background-color: var(--whiteColor);
  border-radius: 20px;
  padding: 48px 38px;
  margin-bottom: 25px;
  transition: var(--transition);
  .icon {
    width: 70px;
    height: 70px;
    line-height: 70px;
    background-color: #f2f2f8;
    text-align: center;
    border-radius: 50px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 35px;
  }
  &.active {
    background-color: #faf4f4;
  }
}
.shape {
  &.shape-1 {
    left: 500px !important;
    top: 62% !important;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .capabilities-single-item {
    padding: 20px;
    h3 {
      font-size: 20px;
    }
    p {
      margin-bottom: 15px;
    }
  }
}
/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .capabilities-single-item {
    padding: 25px;
    h3 {
      font-size: 20px;
    }
  }
}
</style>