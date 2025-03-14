<template>
  <MainNavbar
    class="bg-transparent fixed-top border-bottom"
    mwClass=""
    className="m-auto"
  />
  <div class="bg-gerund-color">
    <OurExperts />
    <ContactUs />
    <FaqAccordion />
  </div>
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import OurExperts from "../components/ContactUs/OurExperts.vue";
import ContactUs from "../components/ContactUs/ContactUs.vue";
import FaqAccordion from "../components/ContactUs/FaqAccordion.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ContactUsPage",
  components: {
    MainNavbar,
    OurExperts,
    ContactUs,
    FaqAccordion,
    MainFooter,
  },
});
</script>