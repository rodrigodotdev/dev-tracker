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
        component: () => import("../views/projects/index.vue"),
        children: [
            {
                path: "",
                name: "Projects",
                component: () => import("../views/projects/projects.vue"),
            },
            {
                path: "create",
                name: "CreateProject",
                component: () => import("../views/projects/create.vue"),
            },
            {
                path: ":id/edit",
                name: "EditProject",
                component: () => import("../views/projects/edit.vue"),
                props: true,
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
    linkActiveClass: "is-active",
})

export default router