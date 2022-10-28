import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

interface state {
    projects: IProject[];
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
            },
            {
                id: 3,
                name: "Project 3",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            },
            {
                id: 4,
                name: "Project 4",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            },
            {
                id: 5,
                name: "Project 5",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            }
        ],
    },
    mutations: {
        addProject(state, project: IProject) {
            state.projects.push(project);
        },
        updateProject(state, project: IProject) {
            const index = state.projects.findIndex((p) => p.id === project.id);
            state.projects[index] = project;
        },
        deleteProject(state, id: number) {
            state.projects = state.projects.filter((project) => project.id !== id);
        }
    },
    actions: {
        addProject({ commit }, project: IProject) {
            commit("addProject", project);
        },
        updateProject({ commit }, project: IProject) {
            commit("updateProject", project);
        },
        deleteProject({ commit }, id: number) {
            commit("deleteProject", id);
        }
    },
    getters: {
        getProjectById: (state) => (id: number) => {
            return state.projects.find(project => project.id == id);
        }
    }
});

export function useStore(): Store<state> {
    return baseUseStore(key);
}