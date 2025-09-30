<script setup>
import GlobalTumLogo from './components/GlobalTumLogo.vue'
import GlobalSlideNbr from "./components/GlobalSlideNbr.vue";
import {computed} from "vue";
import BottomBarCourseInfo from "./components/BottomBarCourseInfo.vue";
// $slidev.configs.author
const isTitlePage = computed((() => $slidev.nav.currentLayout === 'cover' || $slidev.nav.currentLayout === 'intro'))
const isFinalPage = computed(() => $slidev.nav.currentLayout === 'end')
// const isDarkTheme = computed(() => $slide.dark)
// const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)')

// const isLogoWhite = computed(() => isDarkTheme.value || isFinalPage.value)
const isLogoWhite = computed(() => isFinalPage.value)
const isBottomBarVisible = computed(() => !isTitlePage.value && !isFinalPage.value)

</script>

<template>
  <div class="global-overlay">
    <GlobalTumLogo class="tum-logo" :dark-mode="isLogoWhite" />
    <div
        v-if="isBottomBarVisible"
        class="bottom-bar">
      <div class="Other">
        <BottomBarCourseInfo />
      </div>
      <div class="slide-nbr">
        <GlobalSlideNbr
            :slideNbr="$page" />
      </div>
    </div>

  </div>
</template>

<style lang="scss">
@use "./styles/variables.scss";

.global-overlay {
  pointer-events: none;
}

.tum-logo {
  position: absolute;
  top: variables.$tum-logo-height;
  right: variables.$tum-logo-height;
  width: variables.$tum-logo-height * 2;
}

.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 variables.$tum-logo-height;
  font-size: variables.$bottom-bar-font-size;
  margin-bottom: variables.$bottom-bar-bottom-margin;
}
</style>
