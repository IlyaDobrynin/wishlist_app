<template>
  <div class="body">
    <Card v-for="n in 15" :title="'Монитор'" :price="5860 + n" />
  </div>
</template>

<script setup>
  import Card from "@/Blocks/Card.vue";
</script>

<style scoped>
  .body {
    padding: 32px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
</style>