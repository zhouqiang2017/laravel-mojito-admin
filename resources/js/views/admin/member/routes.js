export default [
  {
    name: 'adminMember',
    path: 'member',
    meta: {
        provider: 'admin',
        title: 'member',
        cache: true,
        permission: 'member.index'
    },
    component: resolve => void(require(['./index.vue'], resolve))
  },
]
