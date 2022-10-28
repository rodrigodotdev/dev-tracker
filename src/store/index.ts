import IProject from "@/interfaces/IProject";
import ITask from "@/interfaces/ITask";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

interface state {
    projects: IProject[];
    tasks: ITask[];
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
    },
    mutations: {
        addProject(state, project) {
            state.projects.push(project);
        },
        addTask(state, task) {
            state.tasks.push(task);
        },
        deleteProject(state, id) {
            state.projects = state.projects.filter(project => project.id !== id);
        },
        deleteTask(state, id) {
            state.tasks = state.tasks.filter(task => task.id !== id);
        },
        editProject(state, project) {
            const index = state.projects.findIndex(p => p.id === project.id);
            state.projects[index] = project;
        },
        editTask(state, task) {
            const index = state.tasks.findIndex(t => t.id === task.id);
            state.tasks[index] = task;
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
        deleteProject({ commit }, id) {
            commit("deleteProject", id);
        },
        deleteTask({ commit }, id) {
            commit("deleteTask", id);
        },
        editProject({ commit }, project) {
            commit("editProject", project);
        },
        editTask({ commit }, task) {
            commit("editTask", task);
        },
    },
    getters: {
        getProjectById: (state) => (id: number) => {
            return state.projects.find(project => project.id === id);
        },
        getTaskById: (state) => (id: number) => {
            return state.tasks.find(task => task.id === id);
        },
        getTasksByProjectId: (state) => (id: number) => {
            return state.tasks.filter(task => task.project_id === id);
        },
    },
});

export function useStore(): Store<state> {
    return baseUseStore(key);
}