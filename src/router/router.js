import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/AudioPlayer/dist/',
        component: Main
    },
    {
        path: '/AudioPlayer/dist/:pathMatch(.*)*',
        component: Main
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
    }
)

export default router;