<script setup>
import IntroCoverPage from "../components/IntroCoverPage.vue";

const props = defineProps({
  university: {
    type: String,
  },
  school: {
    type: String,
  },
  chair: {
    type: String,
  }
})
</script>

<template>
  <IntroCoverPage>
    <slot />
  </IntroCoverPage>
</template>
