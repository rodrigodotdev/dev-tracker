import INotification, { NotificationType } from "@/interfaces/INotification";
import IProject from "@/interfaces/IProject";
import ITask from "@/interfaces/ITask";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

interface state {
    projects: IProject[];
    tasks: ITask[];
    notifications: INotification[];
}

export const key: InjectionKey<Store<state>> = Symbol();

export const store = createStore<state>({
    state: {
        projects: [
            {
                id: 1,
                name: "Project 1",
                description: "This is project 1",
            },
            {
                id: 2,
                name: "Project 2",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            }
        ],
        tasks: [
            {
                id: 1,
                name: "This is task 1",
                time_in_sec: 3600,
                project_id: 1,
            },
            {
                id: 2,
                name: "This is task 2",
                time_in_sec: 75,
                project_id: 1,
            },
            {
                id: 3,
                name: "This is task 3",
                time_in_sec: 360,
                project_id: 2,
            },
            {
                id: 4,
                name: "This is task 4",
                time_in_sec: 3600,
                project_id: 2,
            }
        ],
        notifications: [],
    },
    mutations: {
        addProject(state, project) {
            state.projects.push(project);
        },
        addTask(state, task) {
            state.tasks.push(task);
        },
        addNotification(state, notification) {
            state.notifications.push(notification);

            setTimeout(() => {
                state.notifications = state.notifications.filter((n) => n.id !== notification.id);
            } , notification.timeout);
        },
        deleteProject(state, id) {
            state.projects = state.projects.filter(project => project.id !== id);
        },
        deleteTask(state, id) {
            state.tasks = state.tasks.filter(task => task.id !== id);
        },
        deleteNotification(state, id) {
            state.notifications = state.notifications.filter(notification => notification.id !== id);
        },
        editProject(state, project) {
            const index = state.projects.findIndex(p => p.id === project.id);
            state.projects[index] = project;
        },
    },
    actions: {
        addProject({ commit }, project) {
            project.id = store.state.projects.length + 1;
            commit("addProject", project);
        },
        addTask({ commit }, task) {
            task.id = store.state.tasks.length + 1;
            commit("addTask", task);
        },
        addNotification({ commit }, notification) {
            notification.id = store.state.notifications.length + 1;
            notification.timeout = notification.timeout || 5000;
            commit("addNotification", notification);
        },
        deleteProject({ commit }, id) {
            commit("deleteProject", id);
        },
        deleteTask({ commit }, id) {
            commit("deleteTask", id);
        },
        deleteNotification({ commit }, id) {
            commit("deleteNotification", id);
        },
        editProject({ commit }, project) {
            commit("editProject", project);
        },
    },
    getters: {
        getProjectById: (state) => (id: number) => {
            return state.projects.find(project => project.id === id);
        },
        getTasks: (state) => () => {
            return state.tasks.map(task => {
                const project = state.projects.find(project => project.id === task.project_id);
                return {
                    ...task,
                    project,
                };
            });
        }
    },
});

export function useStore(): Store<state> {
    return baseUseStore(key);
}