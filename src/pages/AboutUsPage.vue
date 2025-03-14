<template>
  <MainNavbar
    class="bg-transparent fixed-top border-bottom"
    mwClass=""
    className="m-auto"
  />
  <DriveTraffic />
  <FunFacts />
  <CapabilitiesContent />
  <IncreaseYourBrands className="border-style pb-100" />
  <TestimonialsContent />
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import DriveTraffic from "../components/AboutUs/DriveTraffic.vue";
import FunFacts from "../components/AboutUs/FunFacts.vue";
import CapabilitiesContent from "../components/AboutUs/CapabilitiesContent.vue";
import IncreaseYourBrands from "../components/Common/IncreaseYourBrands.vue";
import TestimonialsContent from "../components/Common/TestimonialsContent.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "AboutUsPage",
  components: {
    MainNavbar,
    DriveTraffic,
    FunFacts,
    CapabilitiesContent,
    IncreaseYourBrands,
    TestimonialsContent,
    MainFooter,
  },
});
</script>