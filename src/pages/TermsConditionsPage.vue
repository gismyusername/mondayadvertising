<template>
  <MainNavbar
    class="bg-transparent fixed-top border-bottom"
    mwClass=""
    className="m-auto"
  />
  <div class="bg-gerund-color pt-227 pb-100">
    <OurAchievements />
    <TermsConditions />
  </div>
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import OurAchievements from "../components/TermsConditions/OurAchievements.vue";
import TermsConditions from "../components/TermsConditions/TermsConditions.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "TermsConditionsPage",
  components: {
    MainNavbar,
    OurAchievements,
    TermsConditions,
    MainFooter,
  },
});
</script>