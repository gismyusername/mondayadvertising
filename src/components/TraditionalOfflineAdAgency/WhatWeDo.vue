<template>
  <div class="pioneering-area ptb-100">
    <div class="container">
      <div class="section-title">
        <span
          class="top-title"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
          >WHAT WE DO</span
        >
        <h2 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
          Pioneering Offline Advertising, Breathing Life Into Brands
        </h2>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-xl-3 col-sm-6"
          v-for="pioneering in pioneerings"
          :key="pioneering.id"
          data-aos="fade-up"
          data-aos-duration="1200"
          :data-aos-delay="pioneering.dataDelay"
        >
          <div
            class="pioneering-single-item transition-y"
            @mouseover="setActivePioneerings(pioneering.id)"
            :class="{ active: activePioneerings === pioneering.id }"
          >
            <div class="icon">
              <img :src="pioneering.imageIcon" alt="rocket" />
            </div>
            <h3>{{ pioneering.title }}</h3>
            <p>
              {{ pioneering.description }}
            </p>
            <router-link to="/career-details" class="read-more">
              READ MORE
              <img
                src="../../assets/images/icon-right-red.png"
                alt="icon-right-red"
              />
            </router-link>
          </div>
        </div>

        <div class="col-lg-6 text-center">
          <p>
            Transforming your brand's online presence and generating meaningful
            results is our top priority at <span class="fw-bold">Adli.</span> As
            a leading paid search ad agency,
          </p>
          <router-link to="career-details.html" class="read-more">
            KNOW MORE ABOUT US
            <img
              src="../../assets/images/icon-right-red.png"
              alt="icon-right-red"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "WhatWeDo",

  data() {
    return {
      pioneerings: [
        {
          id: 1,
          dataDelay: 200,
          imageIcon: require("../../assets/images/rocket.png"),
          title: "Marketing Automation",
          description:
            "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive",
        },
        {
          id: 2,
          dataDelay: 300,
          imageIcon: require("../../assets/images/advertising.png"),
          title: "Display Advertising",
          description:
            "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive",
        },
        {
          id: 3,
          dataDelay: 400,
          imageIcon: require("../../assets/images/telegram.png"),
          title: "Paid Social Media",
          description:
            "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive",
        },
        {
          id: 4,
          dataDelay: 500,
          imageIcon: require("../../assets/images/ads.png"),
          title: "Native Advertising",
          description:
            "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive",
        },
      ],
      activePioneerings: ref(1),
    };
  },
  methods: {
    setActivePioneerings(id: number) {
      this.activePioneerings = id;
    },
  },
});
</script>

<style lang="scss" scoped>
.pioneering-single-item {
  background-color: var(--whiteColor);
  border-radius: 20px;
  padding: 48px 35px;
  margin-bottom: 25px;
  transition: var(--transition);
  border-radius: 20px;
  border: 1px solid #faf4f4;
  .icon {
    width: 70px;
    height: 70px;
    line-height: 70px;
    background-color: #f2f2f8;
    text-align: center;
    border-radius: 50px;
    margin-bottom: 15px;
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

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .pioneering-single-item {
    padding: 20px;
    h3 {
      font-size: 19px;
    }
    p {
      margin-bottom: 15px;
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .pioneering-single-item {
    padding: 25px;
    h3 {
      font-size: 20px;
    }
  }
}
</style>