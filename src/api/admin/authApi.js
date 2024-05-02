import axiosClient from '@/api/axios/apiClient'

export const authApi = {
  login(payload) {
    const url = `user/signin`
    return axiosClient.post(url, payload)
  },
  logout() {
    const url = `admin/logout`
    return axiosClient.post(url)
  }
}
