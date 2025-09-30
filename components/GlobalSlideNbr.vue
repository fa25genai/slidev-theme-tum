<script setup>
const props = defineProps({
  slideNbr: {
    type: Number,
  },
})
</script>

<template>
<span>
  {{ props.slideNbr }}
</span>
</template>

<style scoped lang="scss">
</style>