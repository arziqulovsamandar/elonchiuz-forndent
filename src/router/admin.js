export default {
  path: '/admin',
  name: 'admin',
  component: () => import('@/layouts/MainLayout.vue'),
  children: [
    {
      path: '/home',
      name: 'home',
      meta: {
        child: 'home',
        requiresAdminRole: true
      },
      component: () => import('@/pages/HomePage.vue')
    },
   
  ],
  meta: {
    requiresAdminRole: true
  }
}
