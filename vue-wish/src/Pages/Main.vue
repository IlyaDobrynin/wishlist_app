<script setup>
import Header from "@/Layouts/Header.vue";
import Gallery from "@/Pages/Gallery.vue";
import Modal from "@/Components/Modal.vue";

</script>

<template>
  <div class="main">
    <Header/>
    <Gallery/>
    <Modal :auth=true />
    <Modal :registration=true />
  </div>
</template>

<style lang="scss" scoped>
  .main { 
    max-width: 1280px;
    margin: 0 auto;
  }
</style> 
