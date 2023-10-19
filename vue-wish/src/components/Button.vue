<template>
  <button :class="['btn btn-primary', propsClass]" :data-bs-toggle="modalToggle ? 'modal' : null" :data-bs-target="bsTarget">
    <slot/>
  </button>
</template>

<script lang="ts" setup>

const props = defineProps({
  propsClass: {
    type: String
  },
  modalToggle: Boolean,
  bsTarget: String
})

</script>

<style scoped>

</style>