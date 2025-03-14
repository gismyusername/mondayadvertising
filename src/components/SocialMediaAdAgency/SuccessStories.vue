<template>
  <div class="success-stories-area bg pt-100 pb-75">
    <div class="container">
      <div class="d-sm-flex justify-content-between align-items-center mb-50">
        <div
          class="section-title left-title mb-0 mw-648"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <img
            class="object mb-4"
            src="../../assets/images/object.png"
            alt="object"
          />
          <span class="top-title">SUCCESS STORIES</span>
          <h2>Driving success through strategic paid search advertising!</h2>
        </div>
        <router-link
          to="/success-stories"
          class="read-more mt-3 d-inline-block"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          VIEW MORE
          <img
            src="../../assets/images/icon-right-red.png"
            alt="icon-right-red"
          />
        </router-link>
      </div>

      <div
        class="row align-items-center"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        <div
          class="col-lg-3 col-sm-6"
          v-for="succes in success"
          :key="succes.id"
        >
          <div class="success-single-item style-two transition-y">
            <router-link to="/success-story-details" class="d-block">
              <img :src="succes.image" alt="success" />
            </router-link>
            <router-link
              to="/success-story-details"
              class="success-content d-flex align-items-center justify-content-between"
            >
              <div>
                <h3>{{ succes.title }}</h3>
                <span>{{ succes.designation }}</span>
              </div>
              <div class="icon">
                <img
                  src="../../assets/images/icon-up-right-arrow.png"
                  alt="icon-up-right-arrow"
                />
              </div>
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
  name: "SuccessStories",
  data() {
    return {
      success: [
        {
          id: 1,
          image: require("../../assets/images/success-4.jpg"),
          title: "HiBootstrap",
          designation: "Premium Themes",
        },
        {
          id: 2,
          image: require("../../assets/images/success-5.jpg"),
          title: "Emporrium",
          designation: "Ecommerce",
        },
        {
          id: 3,
          image: require("../../assets/images/success-6.jpg"),
          title: "Ryhans",
          designation: "Technology",
        },
        {
          id: 4,
          image: require("../../assets/images/success-7.jpg"),
          title: "HiBootstrap",
          designation: "Templates",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.success-stories-area {
  &.bg {
    background: linear-gradient(
      180deg,
      #fff 0%,
      rgba(255, 150, 150, 0.27) 0%,
      rgba(255, 150, 150, 0.27) 0.01%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}
.success-single-item {
  position: relative;
  margin-bottom: 30px;
  img {
    border-radius: 20px;
  }
  .success-content {
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.85);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-decoration: none;
    padding: 16px 20px;
    margin: 30px;

    &.mb-20 {
      margin-bottom: 20px;
    }
    h3 {
      font-size: 22px;
      color: var(--whiteColor);
      margin-bottom: 3px;
    }
    span {
      color: #cacaca;
    }
    .icon {
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 50px;
      background-color: #232323;
      transition: var(--transition);
    }
  }
  &.style-two {
    .success-content {
      position: unset;
      margin: 0;
      background-color: transparent;
      padding: 0;
      margin-top: 30px;
      h3 {
        color: var(--headingColor);
      }
      span {
        color: var(--bodyColor);
      }
      .icon {
        background-color: #232323;
      }
    }
  }
  &.style-three {
    .success-content {
      position: unset;
      margin: 0;
      background-color: transparent;
      padding: 0;
      margin-top: 30px;
      h3 {
        color: var(--whiteColor);
      }
      span {
        color: #cacaca;
      }
      .icon {
        background-color: #232323;
      }
    }
  }
  &:hover {
    .icon {
      background-color: var(--whiteColor);
    }
  }
}
.success-content {
  margin-left: 106px;
  .object {
    margin-bottom: 70px;
  }
  h2 {
    font-size: 36px;
    margin-bottom: 60px;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .success-single-item {
    .success-content {
      margin: 15px;
      h3 {
        font-size: 20px;
      }
      span {
        font-size: 15px;
      }
    }
  }
  .success-content {
    margin-left: 0;
    .object {
      margin-bottom: 20px;
    }
    h2 {
      font-size: 25px;
      margin-bottom: 20px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .success-content {
    margin-left: 0;
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .success-content {
    margin-left: 0;
  }
  .success-single-item {
    .success-content {
      margin: 10px;
      h3 {
        font-size: 20px;
      }
    }
  }
}
</style>