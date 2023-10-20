<script setup>
import Header from "@/Layouts/Header.vue";
import Body from "@/Layouts/Body.vue";
import Modal from "@/Components/Modal.vue";

</script>

<template>
  <div class="main">
    <Header/>
    <Body/>
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
