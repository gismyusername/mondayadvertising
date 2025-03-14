<template>
  <MainNavbar
    class="bg-transparent fixed-top border-bottom"
    mwClass=""
    className="m-auto"
  />
  <div class="bg-gerund-color">
    <SuccessContent />
    <div class="success-details-bg pb-100">
      <AwardWinningAgency />
      <SuccessStoryDetails />
    </div>
  </div>
  <AwardWinning />
  <TestimonialsContent />
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import SuccessContent from "../components/SuccessStoryDetails/SuccessContent.vue";
import AwardWinningAgency from "../components/SuccessStoryDetails/AwardWinningAgency.vue";
import SuccessStoryDetails from "../components/SuccessStoryDetails/SuccessStoryDetails.vue";
import AwardWinning from "../components/SuccessStoryDetails/AwardWinning.vue";
import TestimonialsContent from "../components/SuccessStoryDetails/TestimonialsContent.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "SuccessStoryDetailsPage",
  components: {
    MainNavbar,
    SuccessContent,
    AwardWinningAgency,
    SuccessStoryDetails,
    AwardWinning,
    TestimonialsContent,
    MainFooter,
  },
});
</script>

<style lang="scss" scoped>
.success-details-bg {
  background: linear-gradient(
    180deg,
    #fff 0%,
    rgba(255, 150, 150, 0.27) 0%,
    rgba(255, 150, 150, 0.27) 42.19%,
    rgba(255, 255, 255, 0) 100%
  );
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 185px;
    width: 100%;
    background-color: var(--whiteColor);
    z-index: -1;
  }
}
</style>