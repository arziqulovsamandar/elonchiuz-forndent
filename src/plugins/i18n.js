import { createI18n } from 'vue-i18n'
import { messages } from '@/locals'
export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'uz',
  fallbackLocale: 'en',
  messages
})
