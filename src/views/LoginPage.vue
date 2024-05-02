<template>
  <div class="bg-big_color flex justify-center items-center w-full h-screen px-20 max-md:px-5">
    <div class="self-center flex w-[456px] max-w-full flex-col mt-16 mb-24 max-md:my-10">
      <div
        class="text-bg_color text-center text-2xl font-semibold leading-6 self-center whitespace-nowrap"
      >
        {{ $t('auth.title') }}
      </div>

      <form @submit.prevent="login">
        <div
          class="rounded shadow-sm bg-white self-stretch flex grow flex-col mt-9 px-10 py-11 max-md:max-w-full max-md:px-5"
        >
          <div class="text-bg_color text-base leading-6 whitespace-nowrap self-start">Username</div>
          <div
            class="bg-gray-50 flex w-[376px] max-w-full items-start gap-0 mt-3.5 self-start relative"
          >
            <svg
              class="absolute top-2 left-2"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M14.75 10.6652C15.7191 9.88797 16.4229 8.82911 16.7642 7.63488C17.1055 6.44066 17.0675 5.16997 16.6553 3.99829C16.2432 2.82661 15.4773 1.81172 14.4634 1.09378C13.4494 0.375829 12.2375 -0.00976562 10.995 -0.00976562C9.75245 -0.00976562 8.54056 0.375829 7.52664 1.09378C6.51273 1.81172 5.74683 2.82661 5.33468 3.99829C4.92253 5.16997 4.88448 6.44066 5.22577 7.63488C5.56706 8.82911 6.27087 9.88797 7.24 10.6652C5.11937 11.4362 3.28726 12.8405 1.99214 14.6875C0.697007 16.5346 0.0015238 18.7351 0 20.9907V21.9902H22V20.9907C21.9977 18.7339 21.3008 16.5325 20.0038 14.6853C18.7068 12.8381 16.8725 11.4346 14.75 10.6652ZM7 5.99732C7 5.20654 7.2346 4.43352 7.67412 3.77602C8.11365 3.11851 8.73836 2.60605 9.46927 2.30343C10.2002 2.00082 11.0044 1.92164 11.7804 2.07591C12.5563 2.23018 13.269 2.61098 13.8284 3.17014C14.3878 3.7293 14.7688 4.44172 14.9231 5.2173C15.0775 5.99288 14.9983 6.79679 14.6955 7.52737C14.3928 8.25795 13.8801 8.88239 13.2223 9.32172C12.5645 9.76105 11.7911 9.99555 11 9.99555C9.93913 9.99555 8.92172 9.5743 8.17157 8.82449C7.42143 8.07468 7 7.05771 7 5.99732ZM2.06 19.9911C2.3045 17.7907 3.35218 15.7577 5.00255 14.2811C6.65292 12.8045 8.79007 11.9881 11.005 11.9881C13.2199 11.9881 15.3571 12.8045 17.0075 14.2811C18.6578 15.7577 19.7055 17.7907 19.95 19.9911H2.06Z"
                fill="#606161"
              />
            </svg>
            <input
              v-model="username"
              required
              type="text"
              min="5"
              placeholder="Username"
              class="w-full border border-plh_color px-9 py-[7px] outline-none rounded-md placeholder:text-plh_color text-bg_color"
            />
          </div>
          <div class="flex w-[376px] max-w-full items-start justify-between gap-5 mt-4 self-start">
            <div class="text-bg_color text-base leading-6 self-start">Password</div>
          </div>
          <div
            class="bg-gray-50 flex w-[376px] max-w-full items-start gap-0 mt-3.5 self-start relative"
          >
            <svg
              class="absolute top-2 left-2"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="22"
              viewBox="0 0 15 22"
              fill="none"
            >
              <path
                d="M12.1154 8.46154V4.51282C12.1154 3.31595 11.6291 2.16809 10.7636 1.32177C9.89802 0.475457 8.72408 0 7.5 0C6.27592 0 5.10198 0.475457 4.23643 1.32177C3.37088 2.16809 2.88462 3.31595 2.88462 4.51282V8.46154C2.11957 8.46154 1.38585 8.7587 0.844884 9.28765C0.303914 9.8166 0 10.534 0 11.2821V19.1795C0 19.9275 0.303914 20.6449 0.844884 21.1739C1.38585 21.7028 2.11957 22 2.88462 22H12.1154C12.8804 22 13.6141 21.7028 14.1551 21.1739C14.6961 20.6449 15 19.9275 15 19.1795V11.2821C15 10.534 14.6961 9.8166 14.1551 9.28765C13.6141 8.7587 12.8804 8.46154 12.1154 8.46154ZM8.65385 16.6072V16.9231C8.65385 17.2223 8.53228 17.5093 8.31589 17.7208C8.0995 17.9324 7.80602 18.0513 7.5 18.0513C7.19398 18.0513 6.9005 17.9324 6.68411 17.7208C6.46772 17.5093 6.34615 17.2223 6.34615 16.9231V16.6072C5.99737 16.4103 5.70736 16.1276 5.50494 15.7872C5.30252 15.4467 5.19474 15.0604 5.19231 14.6667C5.19231 14.0682 5.43544 13.4943 5.86822 13.0711C6.30099 12.648 6.88796 12.4103 7.5 12.4103C8.11204 12.4103 8.69901 12.648 9.13178 13.0711C9.56456 13.4943 9.80769 14.0682 9.80769 14.6667C9.80526 15.0604 9.69748 15.4467 9.49506 15.7872C9.29264 16.1276 9.00263 16.4103 8.65385 16.6072ZM9.80769 8.46154H5.19231V4.51282C5.19231 3.91438 5.43544 3.34046 5.86822 2.9173C6.30099 2.49414 6.88796 2.25641 7.5 2.25641C8.11204 2.25641 8.69901 2.49414 9.13178 2.9173C9.56456 3.34046 9.80769 3.91438 9.80769 4.51282V8.46154Z"
                fill="#606161"
              />
            </svg>
            <input
              v-model="password"
              required
              min="5"
              placeholder="**********"
              type="password"
              class="w-full border border-plh_color px-7 py-[7px] outline-none rounded-md placeholder:text-plh_color text-bg_color"
            />
          </div>
          <button
            type="submit"
            class="text-white text-center rounded-md bg-indigo-500 w-full mt-7 py-2 flex items-center justify-center gap-3"
          >
            Sign In
            <loader v-if="loading" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { authStore } from '@/stores/admin/auth.js'
import { danger, success } from '@/plugins/Notification'
import Loader from '@/components/ui/BtnLoader.vue'
const store = authStore()

const loading = ref(false)
const username = ref()
const password = ref()
const login = async () => {
  loading.value = true
  const payload = {
    username: username.value,
    password: password.value
  }
  const res = await store.login(payload)
  if (res) success('Login Success')
  else danger(store.error?.message)
  loading.value = false
}
</script>

<style lang="scss" scoped></style>
