<template>
  <MainNavbar
    class="bg-transparent fixed-top border-bottom"
    mwClass=""
    className="m-auto"
  />
  <div class="bg-gerund-color pt-227 pb-100">
    <OurAchievements />
    <PrivacyPolicy />
  </div>
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import OurAchievements from "../components/PrivacyPolicy/OurAchievements.vue";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "PrivacyPolicyPage",
  components: {
    MainNavbar,
    OurAchievements,
    PrivacyPolicy,
    MainFooter,
  },
});
</script>