import Admin from '../views/admin/main/index'
import adminUser from '../views/admin/user/routes'
import role from '../views/admin/role/routes'
import permission from '../views/admin/permission/routes'
import permissionGroup from '../views/admin/permission-group/routes'
import menu from '../views/admin/menu/routes'
import adminDashboard from '../views/admin/dashboard/routes'
import adminLogin from '../views/admin/login/routes'
import Banner from '../views/admin/banner/routes'
import Senior from '../views/admin/senior/routes'
import Member from '../views/admin/member/routes'

export default [
    {
        name: 'adminMain',
        path: '/admin',
        redirect: '/admin/dashboard',
        meta: {
            provider: 'admin',
            title: 'home',
        },
        component: Admin,
        children: [
            ...adminDashboard, ...adminUser, ...role, ...permission,
            ...permissionGroup, ...menu, ...Banner, ...Senior,
            ...Member
        ]
    },
    ...adminLogin,
]
