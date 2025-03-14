<template>
  <MainNavbar
    class="bg-transparent fixed-top border-bottom"
    mwClass=""
    className="m-auto"
  />
  <OurServices />
  <CapabilitiesContent />
  <OurExperts />
  <IncreaseYourBrands class="pt-100" className="border-style pb-100" />
  <TestimonialsContent />
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import OurServices from "../components/Services/OurServices.vue";
import CapabilitiesContent from "../components/Services/CapabilitiesContent.vue";
import OurExperts from "../components/Services/OurExperts.vue";
import IncreaseYourBrands from "../components/Common/IncreaseYourBrands.vue";
import TestimonialsContent from "../components/Common/TestimonialsContent.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "ServicesPage",
  components: {
    MainNavbar,
    OurServices,
    CapabilitiesContent,
    OurExperts,
    IncreaseYourBrands,
    TestimonialsContent,
    MainFooter,
  },
});
</script>