<template>
  <MainNavbar
    class="bg-transparent fixed-top border-bottom"
    mwClass=""
    className="m-auto"
  />
  <div class="bg-gerund-color">
    <OurAchievements />
    <OurProcess />
    <SuccessStories />
    <IncreaseYourBrands className="border-style pb-100" />
    <TestimonialsContent />
  </div>
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import OurAchievements from "../components/SuccessStories/OurAchievements.vue";
import OurProcess from "../components/SuccessStories/OurProcess.vue";
import SuccessStories from "../components/SuccessStories/SuccessStories.vue";
import IncreaseYourBrands from "../components/Common/IncreaseYourBrands.vue";
import TestimonialsContent from "../components/SuccessStories/TestimonialsContent.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "SuccessStoriesPage",
  components: {
    MainNavbar,
    OurAchievements,
    OurProcess,
    SuccessStories,
    IncreaseYourBrands,
    TestimonialsContent,
    MainFooter,
  },
});
</script>