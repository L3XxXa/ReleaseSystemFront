import { createRouter, createWebHistory } from 'vue-router'
import createReleasePage from "@/pages/CreateReleasePage";
import ListOfReleasesPage from "@/pages/ListOfReleasesPage";
import settingsPage from "@/pages/SettingsPage";
import logoutPage from "@/pages/LogoutPage";
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
        path: '/logout',
        component: logoutPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router