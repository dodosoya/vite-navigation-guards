<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const input = ref({
  username: '',
  password: ''
})
const message = ref('')

function login() {
  message.value = ''
  if (input.value.username == 'admin' && input.value.password == 'secret') {
    store.commit('setAuthentication', true);
    router.push('private');
  } else {
    message.value = 'The username and / or password is incorrect' 
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <form
      style="display: flex; gap: 8px;"
      @submit.prevent="login"
    >
      <input
        type="text"
        name="username"
        v-model="input.username"
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        v-model="input.password"
        placeholder="Password"
      />
      <button type="submit">
        Login
      </button>
    </form>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped></style>
