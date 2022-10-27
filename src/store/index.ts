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
        }
    },
    actions: {
        addProject({ commit }, project: IProject) {
            commit("addProject", project);
        }
    },
});

export function useStore(): Store<state> {
    return baseUseStore(key);
}