<template>
  <div class="input">
    <label :for="name" class="label">{{ label }}</label>
    <vee-field
      v-if="mask"
      :id="name"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      v-mask="mask"
      masked="true"
      :disabled="disabled"
      class="inputtype"
    />
    <vee-field
      v-else
      :id="name"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      class="inputtype"
    />
    <ErrorMessage :name="name" class="text-[16px] text-red-700 select-none" />
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String },
  name: { type: String },
  type: { type: String, default: 'text' },
  placeholder: { type: String },
  mask: { type: String },
  disabled: { type: Boolean, default: false }
})
</script>

<style lang="scss" scoped>
.inputtype {
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.4rem 1rem;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
  width: 87%;
  margin: 10px 0 5px 5px;
}
.label {
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0.25rem;
}
</style>
