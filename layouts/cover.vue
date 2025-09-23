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
  <div class="slidev-layout cover">
    <div class="cover-institute">
      <span>
        {{ props.chair }}<br/>
        {{ props.school }}<br/>
        {{ props.university }}
      </span>
    </div>
    <div class="my-auto w-full">
      <slot />
    </div>
    <img class="tum-uhrenturm" src="../assets/TUM_Uhrenturm.png" alt="TUM Uhrenturm">
  </div>
</template>

<style lang="css">
.cover-institute {

  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
  color: #0065BD;
}
</style>
