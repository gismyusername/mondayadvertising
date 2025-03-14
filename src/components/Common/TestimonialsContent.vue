<template>
  <div class="pb-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="section-title left-title">
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
            class="testimonial-slide"
          >
            <swiper-slide
              v-for="testimonial in testimonials"
              :key="testimonial.id"
            >
              <div class="testimonials-single-item">
                <span class="quality">{{ testimonial.quality }}</span>
                <p>
                  {{ testimonial.description }}
                </p>

                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img :src="testimonial.image" alt="testimonials" />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h3>{{ testimonial.name }}</h3>
                    <span class="degeneration">
                      {{ testimonial.designation }}
                    </span>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <div class="swiper-controller position-absolute bottom-0 end-0 z-1">
              <div class="controller-icon prev">
                <i class="ri-arrow-left-line"></i>
              </div>
              <div class="controller-icon next">
                <i class="ri-arrow-right-line"></i>
              </div>
            </div>
          </swiper>
        </div>

        <div
          class="col-lg-5 mt-4 mt-lg-0"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div class="testimonials-review">
            <div class="award-single-item review-on">
              <div class="d-flex align-items-center mb-1">
                <p class="review">Review On</p>
                <div>
                  <img
                    class="trustpilot"
                    src="../../assets/images/trustpilot-stars.png"
                    alt="trustpilot-stars"
                  />
                </div>
              </div>
              <div class="d-flex align-items-center">
                <img
                  class="review"
                  src="../../assets/images/trust.png"
                  alt="trust"
                />
                <p>7584+ Reviews</p>
              </div>
            </div>
            <div class="award-single-item review-on">
              <div class="d-flex align-items-center mb-1">
                <p class="review">Review On</p>
                <div>
                  <img
                    src="../../assets/images/icon-star.png"
                    alt="icon-star"
                  />
                  <img
                    src="../../assets/images/icon-star.png"
                    alt="icon-star"
                  />
                  <img
                    src="../../assets/images/icon-star.png"
                    alt="icon-star"
                  />
                  <img
                    src="../../assets/images/icon-star.png"
                    alt="icon-star"
                  />
                  <img
                    src="../../assets/images/icon-star.png"
                    alt="icon-star"
                  />
                </div>
              </div>
              <div class="d-flex align-items-center">
                <img
                  class="review"
                  src="../../assets/images/company.png"
                  alt="company"
                />
                <p>1500+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
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
          quality: "Design Quality",
          description:
            "“We have been partnering with Adli for our paid search advertising needs, and they have consistently exceeded our expectations.”",
          image: require("../../assets/images/testimonials-1.jpg"),
          name: "Jasika",
          designation: "CTO at HiBootstrap",
        },
        {
          id: 2,
          quality: "Code Quality",
          description:
            "“We have been partnering with Adli for our paid search advertising needs, and they have consistently exceeded our expectations.”",
          image: require("../../assets/images/testimonials-6.jpg"),
          name: "Anne Mari",
          designation: "CTO at HiBootstrap",
        },
        {
          id: 3,
          quality: "Theme Quality",
          description:
            "“We have been partnering with Adli for our paid search advertising needs, and they have consistently exceeded our expectations.”",
          image: require("../../assets/images/expert-1.jpg"),
          name: "Alex Dew",
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
.testimonials-single-item {
  .quality {
    background-color: #ffeeee;
    padding: 15px 23px;
    font-weight: 500;
    font-size: 18px;
    color: var(--headingColor);
    border-radius: 50px;
    font-family: var(--headingFontFamily);
    margin-bottom: 20px;
    display: inline-block;
    margin-bottom: 20px;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    color: #4c4c4c;
    font-style: italic;
    line-height: 26px;
    margin-bottom: 40px;
    max-width: 648px;
  }
  img {
    border-radius: 100px;
    border: 1px solid var(--headingColor);
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
  }
}
.testimonials-review {
  border-radius: 20px;
  background-color: #faf4f4;
  padding: 115px 100px;
  .award-single-item {
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 50px;
    margin-bottom: 50px;
    &:last-child {
      padding-bottom: 0;
      margin-bottom: 0;
      border: none;
    }
    &.review-on {
      .review {
        margin-right: 55px;
      }
      .trustpilot {
        margin-left: 50px;
      }
    }
  }
}
.award-single-item {
  margin-bottom: 25px;
  position: relative;
  z-index: 1;
  &.review-on {
    p {
      font-weight: 500;
      color: var(--headingColor);
      margin-bottom: 0 !important;
      &.review {
        position: relative;
        top: 2px;
      }
    }
    img {
      margin-right: 5px;
    }
    .review {
      margin-right: 27px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .testimonials-single-item {
    .quality {
      padding: 10px 15px;
      font-size: 16px;
    }
  }
  .testimonials-review {
    padding: 20px;
    .award-single-item.review-on {
      margin-bottom: 20px;
      padding-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
      }
      .trustpilot {
        margin-left: 0;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .testimonials-single-item {
    .quality {
      padding: 10px 15px;
      font-size: 16px;
    }
  }
  .testimonials-review {
    padding: 20px;
    .award-single-item.review-on {
      margin-bottom: 20px;
      padding-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
      }
      .trustpilot {
        margin-left: 0;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .testimonials-review {
    padding: 20px;
    .award-single-item.review-on {
      margin-bottom: 20px;
      padding-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
      }
      .trustpilot {
        margin-left: 0;
      }
    }
  }
  .testimonials-single-item-two {
    &::before {
      left: -48px;
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .testimonials-review {
    padding: 115px 65px;
  }
}
</style>