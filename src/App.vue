<template>
  <PreLoader />
  <MobileNavbar />
  <router-view />
  <LightDarkSwtichBtn />
  <BackToTop />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PreLoader from "./components/Layouts/PreLoader.vue";
import MobileNavbar from "./components/Layouts/MobileNavbar.vue";
import LightDarkSwtichBtn from "./components/Layouts/LightDarkSwtichBtn.vue";
import BackToTop from "./components/Layouts/BackToTop.vue";

export default defineComponent({
  name: "App",
  components: {
    PreLoader,
    MobileNavbar,
    LightDarkSwtichBtn,
    BackToTop,
  },
});
</script>