<script setup>
const props = defineProps({
  professor: {
    type: String,
    default: "Prof. Dr. Stephan Krusche"
  },
  course: {
    type: String,
    default: "Demo Course"
  },
  other: {
    type: String,
  }
})
</script>

<template>
<div class="course-info">
  <span> {{ professor }}</span>
  <span>|</span>
  <span> {{ course }}</span>
  <span v-if="other">|</span>
  <span v-if="other"> {{ other }}</span>
</div>
</template>

<style scoped lang="scss">
.course-info {
  display: flex;
  gap: 0.3rem;
}
</style>