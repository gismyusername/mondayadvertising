<template>
  <MainNavbar
    class="bg-transparent fixed-top border-bottom"
    mwClass=""
    className="m-auto"
  />
  <div class="bg-gerund-color">
    <WinningAgency />
    <ServicesDestails />
    <AwardWinningAgency />
    <IncreaseYourBrands class="pt-100" className="border-style pb-100" />
    <TestimonialsContent />
  </div>
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import WinningAgency from "../components/ServiceDetails/WinningAgency.vue";
import ServicesDestails from "../components/ServiceDetails/ServicesDestails.vue";
import AwardWinningAgency from "../components/ServiceDetails/AwardWinningAgency.vue";
import IncreaseYourBrands from "../components/Common/IncreaseYourBrands.vue";
import TestimonialsContent from "../components/Common/TestimonialsContent.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ServiceDetailsPage",
  components: {
    MainNavbar,
    WinningAgency,
    ServicesDestails,
    AwardWinningAgency,
    IncreaseYourBrands,
    TestimonialsContent,
    MainFooter,
  },
});
</script>