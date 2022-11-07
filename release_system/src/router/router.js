import { createRouter, createWebHistory } from 'vue-router'
import createReleasePage from "@/pages/CreateReleasePage";
const routes = [
    {
        path: '/createRelease',
        component: createReleasePage,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router