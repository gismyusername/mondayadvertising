<template>
  <div class="ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div
            class="what-we-do-contents"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <span class="top-title">WHAT WE DO</span>
            <h2>Driving success through strategic paid search advertising!</h2>
          </div>

          <ul
            class="nav nav-tabs what-we-do-tabs d-block"
            id="myTab"
            role="tablist"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <li
              class="nav-item"
              role="presentation"
              v-for="(item, index) in items"
              :key="item.id"
            >
              <button
                class="nav-link d-flex justify-content-between align-items-center"
                :class="{ active: activeIndex === index }"
                @click="setActive(index)"
              >
                <span>{{ item.title }}</span>
                <span class="icon">
                  <img
                    src="../../assets/images/icon-right-red.png"
                    alt="icon-right-red"
                  />
                </span>
              </button>
            </li>
          </ul>

          <router-link
            to="/careers"
            class="default-btn btn-two"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            GET YOUR FREE CUSTOM PROPOSAL
            <img
              src="../../assets/images/icon-right-white.png"
              alt="icon-right-white"
            />
          </router-link>
        </div>
        <div class="col-lg-6">
          <div
            class="what-we-do-content-right"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <p>
              Transforming your brand's online presence and generating
              meaningful results is our top priority at <span>Adli.</span> As a
              leading paid search ad agency,
            </p>
            <router-link to="/about-us" class="read-more">
              KNOW MORE ABOUT US
              <img
                src="../../assets/images/icon-right-red.png"
                alt="icon-right-red"
              />
            </router-link>
          </div>

          <div
            class="tab-content"
            id="myTabContent"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div
              v-for="(item, index) in items"
              :key="item.id"
              :class="['tab-pane', { active: activeIndex === index }]"
              v-show="activeIndex === index"
            >
              <div class="what-we-do-single-items position-relative z-1">
                <img
                  src="../../assets/images/shape-1.png"
                  class="shape shape-2 position-absolute top-0 end-0"
                  alt="shape"
                />
                <div class="icon">
                  <img :src="item.image" alt="icon-diagram2" />
                </div>
                <h3>{{ item.title }}</h3>
                <p>
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "WhatWeDo",
  setup() {
    const activeIndex = ref(0);

    const items = [
      {
        id: 1,
        title: "Result driven marketing",
        image: require("../../assets/images/icon-diagram2.png"),
        description:
          "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive paid search strategy",
      },
      {
        id: 2,
        title: "Social media focused",
        image: require("../../assets/images/icon-diagram2.png"),
        description:
          "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive paid search strategy",
      },
      {
        id: 3,
        title: "Content creation",
        image: require("../../assets/images/icon-diagram2.png"),
        description:
          "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive paid search strategy",
      },
      {
        id: 4,
        title: "Idea factory",
        image: require("../../assets/images/icon-diagram2.png"),
        description:
          "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive paid search strategy",
      },
      {
        id: 5,
        title: "In-house production",
        image: require("../../assets/images/icon-diagram2.png"),
        description:
          "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive paid search strategy",
      },
    ];

    const setActive = (index: number) => {
      activeIndex.value = index;
    };

    return {
      activeIndex,
      items,
      setActive,
    };
  },
});
</script>

<style lang="scss" scoped>
.what-we-do-contents {
  max-width: 424px;
  h2 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 70px;
  }
}
.what-we-do-content-right {
  margin-bottom: 75px;
  p {
    margin-bottom: 25px;
    span {
      font-weight: 700;
    }
  }
}
.what-we-do-tabs {
  margin-bottom: 37px;
  max-width: 536px;
  .nav-item {
    .nav-link {
      padding: 10px 0;
      border: none;
      border-top: 1px solid #cacaca;
      border-bottom: 1px solid #cacaca;
      width: 100%;
      border-radius: 0;
      font-size: 22px;
      font-weight: 600;
      font-family: var(--headingFontFamily);
      color: var(--bodyColor);

      .icon {
        width: 46px;
        height: 46px;
        line-height: 43px;
        background-color: #faf4f4;
        border-radius: 50px;
        transition: var(--transition);

        img {
          position: relative;
          left: 1px;
        }
      }
      &.active {
        color: var(--headingColor);
        .icon {
          background-color: var(--headingColor);
        }
      }
    }
  }
}
.what-we-do-single-items {
  border-radius: 20px;
  background-color: #faf4f4;
  padding: {
    top: 72px;
    left: 88px;
    right: 88px;
    bottom: 168px;
  }
  .icon {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border-radius: 100px;
    background-color: var(--whiteColor);
    margin-bottom: 25px;
  }
  h3 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 20px;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .what-we-do-contents {
    h2 {
      font-size: 25px;
      margin-bottom: 30px;
    }
  }
  .what-we-do-tabs {
    .nav-item {
      .nav-link {
        font-size: 18px;
      }
    }
  }
  .what-we-do-content-right {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .what-we-do-single-items {
    padding: 20px;
    .icon {
      margin-bottom: 20px;
    }
    h3 {
      font-size: 25px;
      margin-bottom: 15px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .what-we-do-contents {
    max-width: 100%;
    h2 {
      font-size: 30px;
      margin-bottom: 30px;
    }
  }
  .what-we-do-tabs {
    max-width: 100%;
    .nav-item {
      .nav-link {
        font-size: 18px;
      }
    }
  }
  .what-we-do-content-right {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .what-we-do-single-items {
    padding: 20px;
    .icon {
      margin-bottom: 20px;
    }
    h3 {
      font-size: 25px;
      margin-bottom: 15px;
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .what-we-do-single-items {
    padding: 90px 30px;
  }
}
</style>
