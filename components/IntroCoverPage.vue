<script setup>
import CoverUniversityInformation from "../components/CoverUniversityInformation.vue";

const props = defineProps({
  university: {
    type: String,
    default: "Technical University of Munich"
  },
  school: {
    type: String,
    default: "TUM School of Computation, Information and Technology"
  },
  chair: {
    type: String,
    default: "Applied Education Technologies"
  }
})
</script>

<template>
  <div class="slidev-layout cover">
    <CoverUniversityInformation />
    <img class="tum-uhrenturm" src="../assets/TUM_Uhrenturm.png" alt="TUM Uhrenturm">
    <slot />
  </div>
</template>

<style lang="scss">
@use "../styles/variables.scss";

.cover {
  padding: variables.$tum-logo-height;
}

h1 {
  margin-top: 1.4rem;
  font-size: variables.$cover-title-font-size;
}

p {
  max-width: 55%;
}

.tum-uhrenturm {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: auto;
}
</style>
