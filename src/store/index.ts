import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { createStore } from "vuex";

interface state {
    projects: IProject[];
}

export const key: InjectionKey<state> = Symbol();

export const state = createStore<state>({
    state: {
        projects: [
            {
                id: 1,
                name: "Project 1",
            },
            {
                id: 2,
                name: "Project 2",
            },
            {
                id: 3,
                name: "Project 3",
            }
        ],
    }
});