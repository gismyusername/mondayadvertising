<template>
  <MainNavbar
    class="bg-transparent fixed-top border-bottom"
    mwClass=""
    className="m-auto"
  />
  <div class="bg-gerund-color">
    <CareerDetails />
  </div>
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import CareerDetails from "../components/CareerDetails/CareerDetails.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";

export default defineComponent({
  name: "CareerDetailsPage",
  components: {
    MainNavbar,
    CareerDetails,
    MainFooter,
  },
});
</script>