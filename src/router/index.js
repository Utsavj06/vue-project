import { createWebHistory, createRouter } from "vue-router";
import LoginPage from '../pages/Login'
import RegistrationPage from '../pages/Registration'
import HomePage from '../pages/Welcome-Page'

const routes = [
    {
        path: '/', 
        component : LoginPage
    },
    {
        path: '/register', 
        component : RegistrationPage
    },
    {
        path: '/home', 
        component : HomePage
    }
]

const Router = createRouter({
    history : createWebHistory(),
    routes
})

export default Router