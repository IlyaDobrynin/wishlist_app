<script setup>
import Header from "@/components/Header.vue";
import Modal from "@/components/Modal.vue";

</script>

<template>
  <div class="main">
    <Header/>
    <Modal :auth=true />
    <Modal :registration=true />
  </div>
</template>

<style scoped>
  .main {
    max-width: 1280px;
    margin: 0 auto;
  }
</style>
