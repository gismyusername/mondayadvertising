<template>
  <MainNavbar class="bg-white" mwClass="mw-1740" className="ms-auto" />
  <MainBanner />
  <WhatWeDo />
  <AwardWinningAgency />
  <CapabilitiesContent />
  <OurProcess />
  <SuccessStories />
  <UnlockSocialMediaPotential />
  <TestimonialsContent />
  <IncreaseYourBrands />
  <DriveTraffic />
  <OurBlog class="pt-100" />
  <HarnessPowerOfSocialMedia />
  <MainFooter class="bg-style" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import MainBanner from "../components/SocialMediaAdAgency/MainBanner.vue";
import WhatWeDo from "../components/SocialMediaAdAgency/WhatWeDo.vue";
import AwardWinningAgency from "../components/SocialMediaAdAgency/AwardWinningAgency.vue";
import CapabilitiesContent from "../components/SocialMediaAdAgency/CapabilitiesContent.vue";
import OurProcess from "../components/Common/OurProcess.vue";
import SuccessStories from "../components/SocialMediaAdAgency/SuccessStories.vue";
import UnlockSocialMediaPotential from "../components/SocialMediaAdAgency/UnlockSocialMediaPotential.vue";
import TestimonialsContent from "../components/SocialMediaAdAgency/TestimonialsContent.vue";
import IncreaseYourBrands from "../components/Common/IncreaseYourBrands.vue";
import DriveTraffic from "../components/SocialMediaAdAgency/DriveTraffic.vue";
import OurBlog from "../components/Common/OurBlog.vue";
import HarnessPowerOfSocialMedia from "../components/Common/HarnessPowerOfSocialMedia.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "SocialMediaAdAgencyPage",
  components: {
    MainNavbar,
    MainBanner,
    WhatWeDo,
    AwardWinningAgency,
    CapabilitiesContent,
    OurProcess,
    SuccessStories,
    UnlockSocialMediaPotential,
    TestimonialsContent,
    IncreaseYourBrands,
    DriveTraffic,
    OurBlog,
    HarnessPowerOfSocialMedia,
    MainFooter,
  },
});
</script>