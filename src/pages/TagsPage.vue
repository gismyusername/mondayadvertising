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
import OurAchievements from "../components/Tags/OurAchievements.vue";
import BlogContent from "../components/Tags/BlogContent.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "TagsPage",
  components: {
    MainNavbar,
    OurAchievements,
    BlogContent,
    MainFooter,
  },
});
</script>