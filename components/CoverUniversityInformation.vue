<script setup>
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
  <div class="cover-university-info">
    <span>{{ university }}</span>
    <span>{{ school }}</span>
    <span>{{ chair }}</span>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/variables";

.cover-university-info {
  display: flex;
  flex-direction: column;
  color: #0067B9;
  font-size: variables.$cover-university-title-font-size;
  line-height: 1.05;
}
</style>