import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/tasks",
        name: "Tasks",
        component: () => import("../views/Tasks.vue"),
    },
    {
        path: "/projects",
        name: "Projects",
        component: () => import("../views/Projects.vue")
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
    linkActiveClass: "is-active",
})

export default router