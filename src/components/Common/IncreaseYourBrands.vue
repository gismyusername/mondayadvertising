<template>
  <div class="pb-100">
    <div class="container">
      <span class="partner-title">Increase your brand’s revenue with Adli</span>

      <div :class="className">
        <swiper
          :spaceBetween="25"
          :slidesPerView="1"
          :grabCursor="true"
          :centeredSlides="false"
          :preventClicks="true"
          :loop="true"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :breakpoints="{
            0: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
            1440: {
              slidesPerView: 6,
            },
            1600: {
              slidesPerView: 6,
            },
          }"
          class="partner-slide text-center"
        >
          <swiper-slide v-for="partner in partners" :key="partner.id">
            <img :src="partner.image" alt="partner" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

export default defineComponent({
  name: "IncreaseYourBrands",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["className"],
  data() {
    return {
      partners: [
        {
          id: 1,
          image: require("../../assets/images/partner-1.png"),
        },
        {
          id: 2,
          image: require("../../assets/images/partner-2.png"),
        },
        {
          id: 3,
          image: require("../../assets/images/partner-3.png"),
        },
        {
          id: 4,
          image: require("../../assets/images/partner-4.png"),
        },
        {
          id: 5,
          image: require("../../assets/images/partner-5.png"),
        },
        {
          id: 6,
          image: require("../../assets/images/partner-6.png"),
        },
        {
          id: 7,
          image: require("../../assets/images/partner-1.png"),
        },
        {
          id: 8,
          image: require("../../assets/images/partner-2.png"),
        },
        {
          id: 9,
          image: require("../../assets/images/partner-3.png"),
        },
        {
          id: 10,
          image: require("../../assets/images/partner-4.png"),
        },
        {
          id: 11,
          image: require("../../assets/images/partner-5.png"),
        },
        {
          id: 12,
          image: require("../../assets/images/partner-6.png"),
        },
      ],
    };
  },
  setup() {
    return {
      Autoplay,
    };
  },
});
</script>

<style lang="scss" scoped>
.partner-title {
  font-weight: 500;
  font-size: 20px;
  font-family: var(--headingFontFamily);
  margin-bottom: 50px;
  display: block;
  color: var(--headingColor);
  text-align: center;
}
</style>