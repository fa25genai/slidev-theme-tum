<script setup>
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
  <div class="slidev-layout intro">
    <div class="my-auto">
      <slot />
      <h5>
        {{ props.chair }}<br/>
        {{ props.school }}<br/>
        {{ props.university }}
      </h5>
    </div>
    <img class="tum-uhrenturm" src="../assets/TUM_Uhrenturm.png" alt="TUM Uhrenturm">
  </div>
</template>
