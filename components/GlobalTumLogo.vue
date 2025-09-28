<script setup lang="ts">
import tumLogo from "../assets/tum_logo_blue.svg"
import {inject, computed} from 'vue'
import {SlidevConfig} from "@slidev/types";

const slidev = inject<any>('$$slidev-context')
const configs: SlidevConfig | undefined = slidev?.configs
</script>

<template>
  <div class="tum-logo">
    <img :src="tumLogo" alt="TUM">
  </div>
  <span>{{ author }}</span>
</template>

<style scoped lang="css">
.tum-logo {
  position: absolute;
  right: 2.7%;
  top: 5.6%;
  width: 6%;
  height: auto;
}
</style>