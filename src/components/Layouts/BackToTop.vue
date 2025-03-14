<template>
  <button
    type="button"
    id="backtotop"
    :class="{ active: isTop }"
    @click="scrollToTop()"
  >
    <i class="ri-upload-line"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BackToTop",
  data() {
    return {
      isTop: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    });
  },
});
</script>

<style lang="scss">
#backtotop {
  position: fixed;
  top: 88%;
  right: 30px;
  margin: auto;
  width: 40px;
  height: 40px;
  border: none;
  background-color: var(--mainColor);
  color: var(--whiteColor);
  transform: translateY(-50%);
  z-index: 11;
  transition: var(--transition);
  border-radius: 50px;
  opacity: 0;

  &.active {
    opacity: 1;
  }
}
</style>