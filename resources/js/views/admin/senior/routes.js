export default [
  {
    name: 'adminSenior',
    path: 'senior',
    meta: {
        provider: 'admin',
        title: 'senior',
        cache: true,
        permission: 'senior.index'
    },
    component: resolve => void(require(['./index.vue'], resolve))
  },
]
