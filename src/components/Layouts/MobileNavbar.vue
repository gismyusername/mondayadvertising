<template>
  <div
    :class="[
      'responsive-navbar offcanvas offcanvas-end',
      { show: stateStoreInstance.open },
    ]"
    tabindex="-1"
    id="navbarOffcanvas"
  >
    <div class="offcanvas-header">
      <router-link to="/" @click="handleClick" class="logo d-inline-block">
        <img src="../../assets/images/logo.png" alt="logo" />
      </router-link>
      <button
        type="button"
        class="close-btn"
        @click="stateStoreInstance.onChange"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i class="ri-close-fill"></i>
      </button>
    </div>
    <div class="offcanvas-body">
      <BAccordion free>
        <BAccordionItem title="HOME" visible>
          <div class="accordion-item">
            <router-link to="/" class="accordion-link" @click="handleClick">
              PAID SEARCH AD AGENCY
            </router-link>
          </div>
          <div class="accordion-item">
            <router-link
              to="/social-media-ad-agency"
              class="accordion-link"
              @click="handleClick"
            >
              SOCIAL MEDIA AD AGENCY
            </router-link>
          </div>
          <div class="accordion-item">
            <router-link
              to="/traditional-offline-ad-agency"
              class="accordion-link"
              @click="handleClick"
            >
              TRADITIONAL/OFFLINE AD AGENCY
            </router-link>
          </div>
        </BAccordionItem>
        <BAccordionItem title="OUR SOLUTIONS">
          <div class="accordion-item">
            <router-link
              to="/services"
              class="accordion-link"
              @click="handleClick"
            >
              OUR SERVICES
            </router-link>
          </div>
          <div class="accordion-item">
            <router-link
              to="/service-details"
              class="accordion-link"
              @click="handleClick"
            >
              SERVICE DETAILS
            </router-link>
          </div>
          <div class="accordion-item">
            <router-link
              to="/our-team"
              class="accordion-link"
              @click="handleClick"
            >
              OUR TEAM
            </router-link>
          </div>
        </BAccordionItem>
        <BAccordionItem title="WHO WE ARE">
          <div class="accordion-item">
            <router-link
              to="/about-us"
              class="accordion-link"
              @click="handleClick"
            >
              ABOUT US
            </router-link>
          </div>
          <div class="accordion-item">
            <router-link
              to="/careers"
              class="accordion-link"
              @click="handleClick"
            >
              CAREERS
            </router-link>
          </div>
          <div class="accordion-item">
            <router-link
              to="/CAREER DETAILS"
              class="accordion-link"
              @click="handleClick"
            >
              CAREER DETAILS
            </router-link>
          </div>
        </BAccordionItem>
        <BAccordionItem title="OUR WORK">
          <div class="accordion-item">
            <router-link
              to="/success-stories"
              class="accordion-link"
              @click="handleClick"
            >
              SUCCESS STORIES
            </router-link>
          </div>
          <div class="accordion-item">
            <router-link
              to="/success-story-details"
              class="accordion-link"
              @click="handleClick"
            >
              SUCCESS STORY DETAILS
            </router-link>
          </div>
        </BAccordionItem>
        <BAccordionItem title="PAGES">
          <div class="accordion-item">
            <router-link to="/blog" class="accordion-link" @click="handleClick">
              OUR BLOG
            </router-link>
          </div>
          <div class="accordion-item">
            <router-link
              to="/blog-details"
              class="accordion-link"
              @click="handleClick"
            >
              BLOG DETAILS
            </router-link>
          </div>
          <div class="accordion-item">
            <router-link to="/tags" class="accordion-link" @click="handleClick">
              TAGS
            </router-link>
          </div>
          <div class="accordion-item">
            <router-link
              to="/categories"
              class="accordion-link"
              @click="handleClick"
            >
              CATEGORIES
            </router-link>
          </div>
          <div class="accordion-item">
            <router-link
              to="/author"
              class="accordion-link"
              @click="handleClick"
            >
              AUTHOR
            </router-link>
          </div>
          <div class="accordion-item">
            <router-link
              to="/privacy-policy"
              class="accordion-link"
              @click="handleClick"
            >
              PRIVACY POLICY
            </router-link>
          </div>
          <div class="accordion-item">
            <router-link
              to="/terms-conditions"
              class="accordion-link"
              @click="handleClick"
            >
              TERMS & CONDITIONS
            </router-link>
          </div>
        </BAccordionItem>
        <div class="accordion-item">
          <router-link
            to="/contact-us"
            class="accordion-link"
            @click="handleClick"
          >
            CONTACT
          </router-link>
        </div>
      </BAccordion>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "../../utils/store";

export default defineComponent({
  name: "MobileNavbar",
  setup() {
    const stateStoreInstance = stateStore;
    const handleClick = () => {
      stateStoreInstance.open = false;
    };

    return {
      stateStoreInstance,
      handleClick,
    };
  },
});
</script>
