
import Index from '@/components/Menu/Index'
import Login from '@/components/Menu/Login'
import User from '@/components/management/user/UserList'
import UserCreate from '@/components/management/user/UserCreate'
import UserEdit from '@/components/management/user/UserEdit'


export const routes = [
   
    { path: '/', name: 'Login', component: Login },
    { path: '/home', name: 'Index', component: Index },
    { path: '/user', name: 'User', component: User },
    { path: '/user-create', name: 'UserCreate', component: UserCreate },
    { path: '/user-edit/:id', name: 'UserEdit', component: UserEdit },

     
]
