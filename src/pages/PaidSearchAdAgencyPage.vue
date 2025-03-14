<template>
  <MainNavbar class="bg-transparent fixed-top" mwClass="" className="m-auto" />
  <MainBanner />
  <AwardWinning />
  <WhatWeDo />
  <FunFacts />
  <CapabilitiesContent />
  <OurProcess />
  <AwardWinningAgency />
  <SuccessStories />
  <IncreaseYourBrands className="border-style pb-100" />
  <TestimonialsContent />
  <TransformYourBrand />
  <OurBlog />
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import MainBanner from "../components/PaidSearchAdAgency/MainBanner.vue";
import AwardWinning from "../components/PaidSearchAdAgency/AwardWinning.vue";
import WhatWeDo from "../components/PaidSearchAdAgency/WhatWeDo.vue";
import FunFacts from "../components/PaidSearchAdAgency/FunFacts.vue";
import CapabilitiesContent from "../components/PaidSearchAdAgency/CapabilitiesContent.vue";
import OurProcess from "../components/PaidSearchAdAgency/OurProcess.vue";
import AwardWinningAgency from "../components/PaidSearchAdAgency/AwardWinningAgency.vue";
import SuccessStories from "../components/PaidSearchAdAgency/SuccessStories.vue";
import IncreaseYourBrands from "../components/Common/IncreaseYourBrands.vue";
import TestimonialsContent from "../components/Common/TestimonialsContent.vue";
import TransformYourBrand from "../components/PaidSearchAdAgency/TransformYourBrand.vue";
import OurBlog from "../components/Common/OurBlog.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "PaidSearchAdAgencyPage",
  components: {
    MainNavbar,
    MainBanner,
    AwardWinning,
    WhatWeDo,
    FunFacts,
    CapabilitiesContent,
    OurProcess,
    AwardWinningAgency,
    SuccessStories,
    IncreaseYourBrands,
    TestimonialsContent,
    TransformYourBrand,
    OurBlog,
    MainFooter,
  },
});
</script>