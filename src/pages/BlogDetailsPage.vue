<template>
  <MainNavbar
    class="bg-transparent fixed-top border-bottom"
    mwClass=""
    className="m-auto"
  />
  <BlogDetails />
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import BlogDetails from "../components/BlogDetails/BlogDetails.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "BlogDetailsPage",
  components: {
    MainNavbar,
    BlogDetails,
    MainFooter,
  },
});
</script>