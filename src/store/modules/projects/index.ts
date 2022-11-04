import IProject from "@/interfaces/IProject";
import { Module, MutationTree, ActionTree, GetterTree } from "vuex";
import { RootState } from "@/store";
import http from "@/http";

export interface ProjectsState {
    projects: IProject[];
}

const state: ProjectsState = {
    projects: [],
};

const mutations: MutationTree<ProjectsState> = {
    setProjects(state, projects: IProject[]) {
        state.projects = projects;
    },
    addProject(state, project: IProject) {
        state.projects.push(project);
    },
    updateProject(state, project: IProject) {
        const index = state.projects.findIndex((p) => p.id === project.id);
        state.projects[index] = project;
    },
    removeProject(state, project: IProject) {
        state.projects = state.projects.filter((p) => p.id !== project.id);
    }
};

const actions: ActionTree<ProjectsState, RootState> = {
    async fetchProjects({ commit }) {
        const { data } = await http.get("/projects");
        commit("setProjects", data);
    },
    async addProject({ commit }, project: IProject) {
        const { data } = await http.post("/projects", project);
        commit("addProject", data);
    },
    async updateProject({ commit }, project: IProject) {
        const { data } = await http.put(`/projects/${project.id}`, project);
        commit("updateProject", data);
    },
    async removeProject({ commit }, project: IProject) {
        await http.delete(`/projects/${project.id}`);
        commit("removeProject", project);
    }
};

const getters: GetterTree<ProjectsState, RootState> = {
    projects: state => state.projects,
    project: (state) => (id: number) => {
        return state.projects.find((project) => project.id === id);
    }
};


export const projects: Module<ProjectsState, RootState> = {
    state,
    mutations,
    actions,
    getters
};