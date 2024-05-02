import { defineStore } from 'pinia'
import { authApi } from '../../api/auth/auth'
import router from '@/router/index.js'
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loading: false,
    error: null
  }),
  getters: {},
  actions: {
    async login(payload) {
      try {
        this.loading = true
        const data = await authApi.login(payload)
        this.user = JSON.parse(JSON.stringify(data))
        localStorage.setItem('user', JSON.stringify(data?.user))
        if (data?.tokens?.access_token) {
          localStorage.setItem('token', data.tokens.access_token)
        }

        router.push({ name: 'home' })
      } catch (error) {
        this.error = error?.response?.data?.message ? error?.response?.data?.message : error.message
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    async logout() {
      try {
        await authApi.logout()
      } catch (error) {
        console.log(error)
      }
    },

    async getProfileInfo() {
      try {
        this.loading = true
        const res = await authApi.getProfileInfo()
        this.user = { ...res }
      } catch (error) {
        this.error = error?.response?.data?.message
        console.log(error)
      } finally {
        this.loading = false
      }
    },

    async profileUpdate(payload) {
      try {
        this.loading = true
        const res = await authApi.profileUpdate(payload)
        this.user = res?.updated
        return res?.updated
      } catch (error) {
        this.error = error?.response?.data?.message
        console.log(error)
      } finally {
        this.loading = false
      }
    },

    async changePassword(payload) {
      try {
        this.loading = true
        const res = await authApi.changePassword(payload)
        console.log(res)
      } catch (error) {
        this.error = error?.response?.data?.message
        console.log(error)
      } finally {
        this.loading = false
      }
    },

    async uploadImage(payload) {
      try {
        this.loading = true
        const res = await authApi.uploadImage(payload)
        console.log(res)
        return res?.image
      } catch (error) {
        this.error = error?.response?.data?.message
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }
})
