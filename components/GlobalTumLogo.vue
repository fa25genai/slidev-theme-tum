<script setup lang="ts">
import tumLogo from "../assets/tum_logo_blue.svg"
import tumLogoDark from "../assets/tum_logo_white.svg"

const props = defineProps({
  darkMode: {
    type: Boolean,
    default: false
  },
})

</script>

<template>
  <div class="tum-logo">
    <img v-if="darkMode" :src="tumLogoDark" alt="TUM">
    <img v-else :src="tumLogo" alt="TUM">
  </div>
</template>

<style scoped lang="css">
</style>