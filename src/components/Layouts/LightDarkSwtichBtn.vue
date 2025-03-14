<template>
  <div class="dark-version">
    <label id="switch" class="switch">
      <input type="checkbox" @click="toggleDarkMode" id="slider" />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LightDarkSwtichBtn",

  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("theme-dark", this.isDarkMode);
      localStorage.setItem("theme-dark", this.isDarkMode.toString());
    },
  },
  mounted() {
    const storedDarkMode = localStorage.getItem("theme-dark");
    if (storedDarkMode) {
      this.isDarkMode = storedDarkMode === "true";
      document.body.classList.toggle("theme-dark", this.isDarkMode);
    }
  },
});
</script>