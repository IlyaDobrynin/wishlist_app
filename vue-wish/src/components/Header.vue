<template>
  <div class="header p-3 d-flex justify-content-between bg-body-secondary">
    <span class="h2">Ебейший ВИШЛИСТ</span>
    <div>
      <Button propsClass="btn-light" :modalToggle="true" bsTarget="#regModal">
        Регистрация
      </Button>
      <Button propsClass="ms-2" :modalToggle="true" bsTarget="#authModal">
        Авторизация
      </Button>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: "Header",
  components: {
    Button
  }
}
</script>

<style scoped>

</style>