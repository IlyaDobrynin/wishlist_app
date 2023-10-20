<template>
  <div class="card">
    <img src="../assets/image/6369049761.webp" class="card-img-top" alt="монитор">
    <div class="card-body">
      <div class="card-title h5">{{ title }}</div>
      <div class="card-price h4 text-success">{{ price }} ₽</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title?: string,
    price?: number,
    img?: string
  }>()
</script>

<style scoped>
  .card {
    min-width: 308px;
  }
  .card-price {
    font-weight: 600;
  }
</style>