<template>
  <div class="pb-100">
    <div class="container">
      <div class="section-title">
        <span class="top-title">TESTIMONIALS</span>
        <h2>We help to achieve customers business goals</h2>
      </div>

      <div class="border-style pb-75">
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
          class="testimonial-slide"
        >
          <swiper-slide
            v-for="testimonial in testimonials"
            :key="testimonial.id"
          >
            <div class="testimonial-wrapper">
              <div class="row align-items-center">
                <div class="col-lg-3">
                  <div class="testimonial-info">
                    <img :src="testimonial.image" alt="testimonials" />
                    <h3>{{ testimonial.name }}</h3>
                    <span class="degeneration">
                      {{ testimonial.designation }}
                    </span>
                  </div>
                </div>
                <div class="col-lg-9">
                  <div class="for-before-after">
                    <div class="testimonials-single-item-two">
                      <img
                        src="../../assets/images/quotation-mark.png"
                        alt="quotation-mark"
                      />
                      <p>
                        {{ testimonial.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <div class="swiper-controller testimonials-controller">
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
          image: require("../../assets/images/testimonials-2.jpg"),
          name: "Jasika Maya",
          designation: "CTO at HiBootstrap",
          description:
            "Their expertise and dedication have truly transformed our brand's online presence. From the initial consultation to the execution of our campaigns, they displayed an exceptional level of professionalism and creativity. They took the time to understand our brand's unique voice and target audience, resulting in campaigns that resonated deeply with our customers.",
        },
        {
          id: 1,
          image: require("../../assets/images/testimonials-3.jpg"),
          name: "Anne Mari",
          designation: "Businessman",
          description:
            "Their expertise and dedication have truly transformed our brand's online presence. From the initial consultation to the execution of our campaigns, they displayed an exceptional level of professionalism and creativity. They took the time to understand our brand's unique voice and target audience, resulting in campaigns that resonated deeply with our customers.",
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
.testimonial-info {
  max-width: 140px;
  text-align: center;
  img {
    border-radius: 100%;
    border: 1px solid var(--headingColor);
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  span {
    font: 16px;
  }
}
.testimonials-single-item-two {
  max-width: 648px;
  margin-left: auto;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -124px;
    width: 1px;
    height: 100%;
    background-color: #e3e3e3;
  }
  img {
    margin-bottom: 25px;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    font-style: italic;
    line-height: 30px;
    padding-bottom: 60px;
  }
}
.for-before-after {
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 7px;
    height: 7px;
    background-color: #e3e3e3;
    border-radius: 50px;
    left: -3px;
  }
  &::after {
    top: auto;
    bottom: 0;
  }
}
.testimonial-wrapper {
  max-width: 1038px;
  margin: auto;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .testimonial-info {
    margin: auto;
    margin-bottom: 30px;
  }
  .testimonials-single-item-two {
    &::before {
      display: none;
    }
  }
  .for-before-after {
    &::before,
    &::after {
      display: none;
    }
  }
  .testimonial-quot {
    margin-left: 0;
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
  .testimonial-info {
    margin: auto;
    margin-bottom: 30px;
  }
  .testimonials-single-item-two {
    min-width: 100%;
    &::before {
      display: none;
    }
  }
  .for-before-after {
    &::before,
    &::after {
      display: none;
    }
  }
}
</style>