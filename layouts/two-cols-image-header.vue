<!--
  Usage:
```md
---
layout: two-cols-image-header
---
This spans both
::left::
# Left
This image shows on the left
::right::
# Right
This image shows on the right
::bottom::
This shows at the bottom, aligned to the end (bottom) of the grid

<style>
.two-cols-image-header {
  column-gap: 20px; /* Adjust the gap size as needed */
}
</style>
```
-->

<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  imageLeft: {
    type: String,
    required: true,
  },
  imageRight: {
    type: String,
    required: true,
  },
  backgroundSize: {
    type: String,
    default: 'cover',
  },
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
})

const styleLeft = computed(() => handleBackground(props.imageLeft, false, props.backgroundSize))
const styleRight = computed(() => handleBackground(props.imageRight, false, props.backgroundSize))
</script>

<template>
  <div class="slidev-layout two-cols-image-header w-full h-full" :class="props.layoutClass">
    <div class="col-header">
      <slot />
    </div>

    <div class="col-left" :class="props.class">
      <div class="w-full h-full bg-center bg-no-repeat" :style="styleLeft" />
    </div>

    <div class="col-right" :class="props.class">
      <div class="w-full h-full bg-center bg-no-repeat" :style="styleRight" />
    </div>

    <div class="col-bottom" :class="props.class">
      <slot name="bottom" />
    </div>
  </div>
</template>

<style scoped>
.two-cols-image-header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr auto;
  column-gap: 0.5rem;
}

.col-header {
  grid-area: 1 / 1 / 2 / 3;
}

.col-left {
  grid-area: 2 / 1 / 3 / 2;
}

.col-right {
  grid-area: 2 / 2 / 3 / 3;
}

.col-bottom {
  align-self: end;
  grid-area: 3 / 1 / 3 / 3;
}
</style>
