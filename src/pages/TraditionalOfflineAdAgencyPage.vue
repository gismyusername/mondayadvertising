<template>
  <TopHeader />
  <NavbarTwo />
  <MainBanner />
  <PartnerWrapper />
  <WhatWeDo />
  <AwardWinningAgency />
  <IncreaseYourBrands class="bg-color-f2f2f8" />
  <CapabilitiesContent />
  <OurProcess />
  <SuccessStories />
  <TestimonialsContent />
  <OurExperts />
  <OurBlog class="pt-100" />
  <HarnessPowerOfSocialMedia />
  <MainFooter class="bg-style" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopHeader from "../components/Layouts/TopHeader.vue";
import NavbarTwo from "../components/Layouts/NavbarTwo.vue";
import MainBanner from "../components/TraditionalOfflineAdAgency/MainBanner.vue";
import PartnerWrapper from "../components/TraditionalOfflineAdAgency/PartnerWrapper.vue";
import WhatWeDo from "../components/TraditionalOfflineAdAgency/WhatWeDo.vue";
import AwardWinningAgency from "../components/TraditionalOfflineAdAgency/AwardWinningAgency.vue";
import IncreaseYourBrands from "../components/Common/IncreaseYourBrands.vue";
import CapabilitiesContent from "../components/TraditionalOfflineAdAgency/CapabilitiesContent.vue";
import OurProcess from "../components/Common/OurProcess.vue";
import SuccessStories from "../components/TraditionalOfflineAdAgency/SuccessStories.vue";
import TestimonialsContent from "../components/TraditionalOfflineAdAgency/TestimonialsContent.vue";
import OurExperts from "../components/TraditionalOfflineAdAgency/OurExperts.vue";
import OurBlog from "../components/Common/OurBlog.vue";
import HarnessPowerOfSocialMedia from "../components/Common/HarnessPowerOfSocialMedia.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "TraditionalOfflineAdAgencyPage",
  components: {
    TopHeader,
    NavbarTwo,
    MainBanner,
    PartnerWrapper,
    WhatWeDo,
    AwardWinningAgency,
    IncreaseYourBrands,
    CapabilitiesContent,
    OurProcess,
    SuccessStories,
    TestimonialsContent,
    OurExperts,
    OurBlog,
    HarnessPowerOfSocialMedia,
    MainFooter,
  },
});
</script>