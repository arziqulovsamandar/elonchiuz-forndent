<template>
  <div class="w-full flex flex-col">
    <div class="password">
      <vee-field
        id="password"
        :type="hidden ? 'password' : 'text'"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        class="password1"
      />
      <span @click="hide" class="icons">
        <svg-icon v-if="hidden" type="mdi" :path="mdiEye" class="text-color1"></svg-icon>
        <svg-icon v-else type="mdi" :path="mdiEyeOff" class="text-color1"></svg-icon>
      </span>
    </div>
    <ErrorMessage :name="name" class="text-[16px] text-red-700 select-none" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiEye, mdiEyeOff } from '@mdi/js'
const props = defineProps({
  name: { type: String },
  placeholder: { type: String },
  disabled: { type: Boolean, default: false }
})
const hidden = ref(true)
const hide = () => {
  hidden.value = !hidden.value
}
</script>

<style lang="scss" scoped>
.password {
  display: flex;
  margin: 1px 0 0 5px;
}
.password1 {
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.4rem 1rem; 
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
  width: 89%;
}
</style>
