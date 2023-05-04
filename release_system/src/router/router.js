import { createRouter, createWebHistory } from 'vue-router'
import createReleasePage from "@/pages/CreateReleasePage";
import ListOfReleasesPage from "@/pages/ListOfReleasesPage";
import settingsPage from "@/pages/SettingsPage";
import loginPage from "@/pages/LoginPage.vue";
import registrationPage from "@/pages/RegistrationPage.vue";
import extendedCard from "@/pages/ExtendedCardPage.vue";
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
    {
        path: '/register',
        component: registrationPage
    },
    {
        path: '/releases/:app_name',
        component: extendedCard
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router