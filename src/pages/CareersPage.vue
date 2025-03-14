<template>
  <MainNavbar
    class="bg-transparent fixed-top border-bottom"
    mwClass=""
    className="m-auto"
  />
  <div class="bg-gerund-color">
    <AwardWinningAgency />
    <CareersContent />
  </div>
  <OurExperts />
  <FaqAccordion />
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import AwardWinningAgency from "../components/Careers/AwardWinningAgency.vue";
import CareersContent from "../components/Careers/CareersContent.vue";
import OurExperts from "../components/Careers/OurExperts.vue";
import FaqAccordion from "../components/Careers/FaqAccordion.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "CareersPage",
  components: {
    MainNavbar,
    AwardWinningAgency,
    CareersContent,
    OurExperts,
    FaqAccordion,
    MainFooter,
  },
});
</script>