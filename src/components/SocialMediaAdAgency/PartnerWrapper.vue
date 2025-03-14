<template>
  <div class="partner-wrapper">
    <div class="row align-items-center">
      <div class="col-lg-2">
        <span class="partner-title-2 d-block mb-3 mb-lg-0">
          OUR MEDIA PARTNER
        </span>
      </div>

      <div class="col-lg-10">
        <div class="partner-slide-two text-center">
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
                slidesPerView: 5,
              },
              1600: {
                slidesPerView: 5,
              },
            }"
            class="partner-slide-two"
          >
            <swiper-slide v-for="partner in partners" :key="partner.id">
              <img :src="partner.image" alt="partner" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

export default defineComponent({
  name: "PartnerWrapper",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      partners: [
        {
          id: 1,
          image: require("../../assets/images/partner-7.png"),
        },
        {
          id: 2,
          image: require("../../assets/images/partner-8.png"),
        },
        {
          id: 3,
          image: require("../../assets/images/partner-9.png"),
        },
        {
          id: 4,
          image: require("../../assets/images/partner-10.png"),
        },
        {
          id: 5,
          image: require("../../assets/images/partner-11.png"),
        },
        {
          id: 6,
          image: require("../../assets/images/partner-7.png"),
        },
        {
          id: 7,
          image: require("../../assets/images/partner-8.png"),
        },
        {
          id: 8,
          image: require("../../assets/images/partner-9.png"),
        },
        {
          id: 9,
          image: require("../../assets/images/partner-10.png"),
        },
        {
          id: 10,
          image: require("../../assets/images/partner-11.png"),
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
.partner-title-2 {
  font-size: 16px;
  font-weight: 500;
  color: #4c4c4c;
}
.partner-wrapper {
  padding: {
    left: 110px;
    right: 110px;
    top: 70px;
    bottom: 70px;
  }
}
.partner-wrappers {
  padding: 100px 120px;
  border-radius: 20px;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .partner-wrappers {
    padding: 20px;
  }
  .partner-wrapper {
    padding: 20px;
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .partner-wrapper {
    padding: 20px;
  }
  .partner-wrappers {
    padding: 30px;
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .partner-wrapper {
    padding: 30px;
  }
}
/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .partner-wrapper {
    padding: 50px;
  }
}
</style>