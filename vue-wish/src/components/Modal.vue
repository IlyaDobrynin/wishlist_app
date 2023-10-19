<template>
  <div class="modal fade" :id="id" tabindex="-1" aria-labelledby="#exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <span class="modal-title fs-5" id="exampleModalLabel">{{ auth ? 'Вход' : registration ? 'Регистрация' : null }}</span>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div v-if="registration" class="mb-3">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Электронная почта">
            </div>
            <div class="mb-3">
<!--              <label for="exampleInputEmail1" class="form-label">Логин</label>-->
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Логин">
            </div>
            <div class="mb-3">
<!--              <label for="exampleInputPassword1" class="form-label">Password</label>-->
              <input type="password" class="form-control" placeholder="Пароль" id="exampleInputPassword1">
            </div>
            <div v-if="registration" class="mb-3">
              <input type="password" class="form-control" placeholder="Подтвердите пароль" id="exampleInputPassword2">
            </div>
            <div v-if="auth" class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Заебись?</label>
            </div>
            <div v-if="registration" class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Соглашаюсь с условиями и политикой ибо нехуй. </label>
            </div>
            <button type="submit" class="btn btn-primary">{{ auth ? 'Войти' : registration ? 'Зарегестрироваться' : null }}</button>
          </form>
        </div>
<!--        <div class="modal-footer">-->
<!--          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>-->
<!--          <button type="button" class="btn btn-primary">Save changes</button>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    auth: Boolean,
    registration: Boolean
  })
  const id = props.auth ? 'authModal' : props.registration ? 'regModal' : null;
</script>

<style scoped>

</style>