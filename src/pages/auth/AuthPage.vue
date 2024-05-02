<template>
  <div class="nav">
    <h2 class="elon">E'lonchi uz</h2>
    <div class="oyna">
      <div class="forminput">
        <h2 class="h2">Salom <br> Xush kelibsiz!</h2>
        <vee-form
          :validation-schema="schema"
          @submit="save"
          class="sm:w-3/5 w-4/5 flex flex-col gap-5"
        >
          <VInput
            type="text"
            name="phone"
            placeholder="Telefon raqam"
            :mask="'(+998)-##-###-##-##'"
          ></VInput>
          <VPasswordInput name="password" placeholder="Password"></VPasswordInput>
          <VButton btn_type="primary" :isLoading="loading" type="submit">
            {{ btn_title }}
          </VButton>
        </vee-form>
      </div>
      <div>
        <img class="img" src="/src/assets/images/logo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import VInput from '@/components/form/VInput.vue'
import VPasswordInput from '@/components/form/VPasswordInput.vue'
import Loader from '@/components/loader/Loader.vue'
import { useAuthStore } from '@/stores/auth/auth'
import { danger, success } from '@/plugins/Notification.js'
import VButton from '@/components/form/VButton.vue'

const authStore = useAuthStore()
const schema = computed(() => {
  return {
    phone: 'required|phone:19',
    password: 'required|min:5|max:15'
  }
})

const loading = ref(false)
const btn_title = computed(() => {
  if (loading.value) {
    return 'Loading'
  } else {
    return 'Login'
  }
})

const save = async (values) => {
  loading.value = true
  await authStore.login({
    phone: values.phone
      .split('')
      .filter((char) => char === '+' || !isNaN(+char))
      .join(''),
    password: values.password
  })
  if (authStore.error) {
    danger(authStore.error)
    authStore.error = null
  } else {
    success('Login Success')
  }
  loading.value = false
}
</script>

<style lang="scss" scoped>
.nav {
  background-color: #64d00f;
  width: 100%;
  height: 100vh;
}
.elon {
  padding: 20px 0 0 30px;
  color: white;
  font-size: 30px;
  width: auto;
}
.oyna {
  margin: 220px 10px 0 10px;
  width: auto;
  height: 236px;
  background-color: white;
  display: flex;
}
.img{
  margin: 40px 0 0 10px;
  width: 160px;
  height: 160px;
}
.forminput {
  background-color: #fdf2f2;
}
.h2{
  color: #64d00f;
  margin: 5px 0 0 5px;
  font-size: 20px;
}
</style>
