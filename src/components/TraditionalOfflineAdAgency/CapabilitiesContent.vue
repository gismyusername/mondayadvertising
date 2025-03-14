<template>
  <div class="ptb-100">
    <div class="container">
      <div class="section-title">
        <span
          class="top-title"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          CAPABILITIES
        </span>
        <h2 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
          Offline Ad Agency, Redefining the Essence of True Brand Engagement
        </h2>
        <router-link
          to="/services"
          class="default-btn"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          VIEW ALL SERVICES
          <img
            src="../../assets/images/icon-right-white.png"
            alt="icon-right-white"
          />
        </router-link>
      </div>
      <div class="capabilities-wraps">
        <div class="row align-items-center">
          <div
            class="col-lg-5"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <ul
              class="nav nav-tabs capabilities-tabs d-block"
              id="myTab"
              role="tablist"
            >
              <li
                class="nav-item"
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
          </div>
          <div
            class="col-lg-7"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div class="tab-content" id="myTabContent">
              <div
                v-for="(item, index) in items"
                :key="item.id"
                :class="['tab-pane', { active: activeIndex === index }]"
                v-show="activeIndex === index"
              >
                <div class="capabilities-item-content">
                  <h3>{{ item.title }}</h3>
                  <p>
                    {{ item.shortDesc }}
                  </p>
                  <div class="capabilities-img">
                    <img :src="item.image" alt="capabilities" />
                  </div>
                  <p>
                    {{ item.description }}
                  </p>
                  <router-link to="/service-details" class="read-more">
                    READ MORE
                    <img
                      src="../../assets/images/icon-right-white.png"
                      alt="icon-right-white"
                    />
                  </router-link>
                </div>
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
  name: "CapabilitiesContent",
  setup() {
    const activeIndex = ref(0);

    const items = [
      {
        id: 1,
        title: "Print Advertising",
        shortDesc:
          "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive paid search strategy",
        image: require("../../assets/images/capabilities.jpg"),
        description:
          "We excel in designing and producing captivating print ads that appear in newspapers, magazines, brochures, flyers, and other print media. Our team ensures that your brand message stands out and leaves a lasting impression on your target audience.",
      },
      {
        id: 2,
        title: "Outdoor Advertising",
        shortDesc:
          "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive paid search strategy",
        image: require("../../assets/images/capabilities-2.jpg"),
        description:
          "We excel in designing and producing captivating print ads that appear in newspapers, magazines, brochures, flyers, and other print media. Our team ensures that your brand message stands out and leaves a lasting impression on your target audience.",
      },
      {
        id: 3,
        title: "Direct Mail Marketing",
        shortDesc:
          "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive paid search strategy",
        image: require("../../assets/images/capabilities-3.jpg"),
        description:
          "We excel in designing and producing captivating print ads that appear in newspapers, magazines, brochures, flyers, and other print media. Our team ensures that your brand message stands out and leaves a lasting impression on your target audience.",
      },
      {
        id: 4,
        title: "Event Marketing",
        shortDesc:
          "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive paid search strategy",
        image: require("../../assets/images/capabilities-4.jpg"),
        description:
          "We excel in designing and producing captivating print ads that appear in newspapers, magazines, brochures, flyers, and other print media. Our team ensures that your brand message stands out and leaves a lasting impression on your target audience.",
      },
      {
        id: 5,
        title: "Radio Advertising",
        shortDesc:
          "Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive paid search strategy",
        image: require("../../assets/images/capabilities-5.jpg"),
        description:
          "We excel in designing and producing captivating print ads that appear in newspapers, magazines, brochures, flyers, and other print media. Our team ensures that your brand message stands out and leaves a lasting impression on your target audience.",
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
.capabilities-tabs {
  border-radius: 20px;
  background: #161519;
  padding: 138px 69px;
  margin-right: -28px;
  .nav-item {
    margin-bottom: 21px;
    &:last-child {
      margin-bottom: 0;
    }
    .nav-link {
      padding: 10px 0;
      border: 1px solid #e8e8e8;
      width: 100%;
      border-radius: 0;
      font-size: 22px;
      font-weight: 600;
      font-family: var(--headingFontFamily);
      color: var(--whiteColor);
      padding: 13px 11px;
      padding-left: 32px;
      border-radius: 50px;

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
          background-color: var(--mainColor);
          img {
            filter: brightness(100);
          }
        }
      }
    }
  }
}
.capabilities-wraps {
  border-radius: 20px;
  background: #ef4335;
}
.capabilities-item-content {
  padding: 59px 90px;
  h3 {
    color: var(--whiteColor);
    margin-bottom: 30px;
    font-size: 32px;
  }
  .capabilities-img {
    margin-top: 30px;
    img {
      margin-bottom: 30px;
      border-radius: 20px;
    }
  }
  p {
    margin-bottom: 20px;
    color: var(--whiteColor);
  }
  .read-more {
    color: var(--whiteColor);
    margin-top: 10px;
    display: inline-block;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .capabilities-tabs {
    padding: 20px;
    margin-right: 0;
    .nav-item {
      .nav-link {
        padding-left: 20px;
        font-size: 18px;
      }
    }
  }
  .capabilities-item-content {
    padding: 20px;
    h3 {
      margin-bottom: 15px;
      font-size: 25px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .capabilities-tabs {
    padding: 30px;
    margin-right: 0;
    .nav-item {
      .nav-link {
        padding-left: 20px;
        font-size: 18px;
      }
    }
  }
  .capabilities-item-content {
    padding: 30px;
    h3 {
      margin-bottom: 15px;
      font-size: 25px;
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .capabilities-tabs {
    padding: 70px 30px;
    margin-right: 0;
    .nav-item {
      .nav-link {
        padding-left: 20px;
        font-size: 18px;
      }
    }
  }
  .capabilities-item-content {
    padding: 30px;
    h3 {
      margin-bottom: 15px;
      font-size: 25px;
    }
  }
}
</style>
