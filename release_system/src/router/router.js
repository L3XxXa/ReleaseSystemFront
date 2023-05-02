import { createRouter, createWebHistory } from 'vue-router'
import createReleasePage from "@/pages/CreateReleasePage";
import ListOfReleasesPage from "@/pages/ListOfReleasesPage";
import settingsPage from "@/pages/SettingsPage";
import loginPage from "@/pages/LoginPage.vue";
const routes = [
    {
        path: '/createRelease',
        component: createReleasePage,
    },
    {
        path: '/releases',
        component: ListOfReleasesPage
    },
    {
        path: '/settings',
        component: settingsPage
    },
    {
        path: '/login',
        component: loginPage
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router