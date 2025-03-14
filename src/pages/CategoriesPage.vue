<template>
  <MainNavbar
    class="bg-transparent fixed-top border-bottom"
    mwClass=""
    className="m-auto"
  />
  <div class="bg-gerund-color pt-227 pb-100">
    <OurAchievements />
    <BlogContent />
  </div>
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import OurAchievements from "../components/Categories/OurAchievements.vue";
import BlogContent from "../components/Categories/BlogContent.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "CategoriesPage",
  components: {
    MainNavbar,
    OurAchievements,
    BlogContent,
    MainFooter,
  },
});
</script>