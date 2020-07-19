export default [
  {
    name: 'adminBanner',
    path: 'banner',
    meta: {
        provider: 'admin',
        title: 'banner',
        cache: true,
        permission: 'banner.index'
    },
    component: resolve => void(require(['./index.vue'], resolve))
  },
]
