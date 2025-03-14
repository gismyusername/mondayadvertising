<template>
  <MainNavbar
    class="bg-transparent fixed-top border-bottom"
    mwClass=""
    className="m-auto"
  />
  <div class="bg-gerund-color">
    <OurExperts />
    <AwardWinningAgency />
    <OurTeam />
    <TestimonialsContent />
    <ASymphonyOfBrilliance />
  </div>
  <IncreaseYourBrands />
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import OurExperts from "../components/OurTeam/OurExperts.vue";
import AwardWinningAgency from "../components/OurTeam/AwardWinningAgency.vue";
import OurTeam from "../components/OurTeam/OurTeam.vue";
import TestimonialsContent from "../components/OurTeam/TestimonialsContent.vue";
import ASymphonyOfBrilliance from "../components/OurTeam/ASymphonyOfBrilliance.vue";
import IncreaseYourBrands from "../components/Common/IncreaseYourBrands.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "OurTeamPage",
  components: {
    MainNavbar,
    OurExperts,
    AwardWinningAgency,
    OurTeam,
    TestimonialsContent,
    ASymphonyOfBrilliance,
    IncreaseYourBrands,
    MainFooter,
  },
});
</script>