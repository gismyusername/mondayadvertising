<template>
  <div class="pb-100">
    <div class="container">
      <div class="section-title mw-600">
        <span class="top-title">TESTIMONIALS</span>
        <h2>We help to achieve customers business goals</h2>
      </div>

      <swiper
        :spaceBetween="25"
        :slidesPerView="1"
        :preventClicks="true"
        :loop="true"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :navigation="{
          nextEl: '.next',
          prevEl: '.prev',
        }"
        :modules="modules"
        class="testimonial-slide testimonials-wrappers"
      >
        <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="row align-items-center">
            <div class="col-lg-4">
              <div
                class="testimonial-img position-relative mb-4 mb-lg-0 d-inline-block"
              >
                <img :src="testimonial.image" alt="testimonials" />
                <img
                  src="../../assets/images/quotation-mark-2.png"
                  class="position-absolute end-0 top-0"
                  alt="quotation-mark-2"
                />
              </div>
            </div>
            <div class="col-lg-8">
              <div class="testimonial-quot">
                <p>{{ testimonial.description }}</p>

                <div class="testimonial-info ms-0 text-start">
                  <h3>{{ testimonial.name }}</h3>
                  <span>{{ testimonial.designation }}</span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <div class="swiper-controller testimonials-controller-three">
          <div class="controller-icon prev">
            <i class="ri-arrow-left-line"></i>
          </div>
          <div class="controller-icon next">
            <i class="ri-arrow-right-line"></i>
          </div>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

export default defineComponent({
  name: "TestimonialsContent",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      testimonials: [
        {
          id: 1,
          image: require("../../assets/images/testimonials-4.png"),
          description:
            "Their expertise and dedication have truly transformed our brand's online presence. From the initial consultation to the execution of our campaigns, they displayed an exceptional level of professionalism and creativity. They took the time to understand our brand's unique voice and target audience, resulting in campaigns that resonated deeply with our customers.",
          name: "Jasika Maya",
          designation: "CTO at HiBootstrap",
        },
        {
          id: 2,
          image: require("../../assets/images/testimonials-5.png"),
          description:
            "Their expertise and dedication have truly transformed our brand's online presence. From the initial consultation to the execution of our campaigns, they displayed an exceptional level of professionalism and creativity. They took the time to understand our brand's unique voice and target audience, resulting in campaigns that resonated deeply with our customers.",
          name: "Anne Mari",
          designation: "CTO at HiBootstrap",
        },
      ],
    };
  },
  setup() {
    return {
      Autoplay,
      modules: [Navigation],
    };
  },
});
</script>

<style lang="scss" scoped>
.testimonials-wrappers {
  max-width: 1096px;
  margin: auto;
}
.testimonial-quot {
  margin-left: 64px;
  p {
    font-weight: 500;
    line-height: 30px;
    font-size: 18px;
    color: #4c4c4c;
    font-style: italic;
    margin-bottom: 40px;
  }
}
.testimonial-img {
  .top-0 {
    top: 50px !important;
  }
  .end {
    right: -10px !important;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .testimonial-quot {
    margin-left: 0;
  }
}
/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .testimonial-quot {
    margin-left: 0;
  }
}
</style>