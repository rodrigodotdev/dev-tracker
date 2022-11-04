import ITask from "@/interfaces/ITask";
import { Module, MutationTree, ActionTree, GetterTree } from "vuex";
import { RootState, useStore } from "@/store";
import http from "@/http";

export interface TasksState {
    tasks: ITask[];
}

const state: TasksState = {
    tasks: [],
};

const mutations: MutationTree<TasksState> = {
    setTasks(state, tasks: ITask[]) {
        state.tasks = tasks;
    },
    addTask(state, task: ITask) {
        state.tasks.push(task);
    },
    updateTask(state, task: ITask) {
        const index = state.tasks.findIndex((t) => t.id === task.id);
        state.tasks[index] = task;
    },
    removeTask(state, task: ITask) {
        state.tasks = state.tasks.filter((t) => t.id !== task.id);
    }
};

const actions: ActionTree<TasksState, RootState> = {
    async fetchTasks({ commit }) {
        const { data } = await http.get("/tasks");
        commit("setTasks", data);
    },
    async addTask({ commit }, task: ITask) {
        const { data } = await http.post("/tasks", task);
        commit("addTask", data);
    },
    async updateTask({ commit }, task: ITask) {
        const { data } = await http.put(`/tasks/${task.id}`, task);
        commit("updateTask", data);
    },
    async removeTask({ commit }, task: ITask) {
        await http.delete(`/tasks/${task.id}`);
        commit("removeTask", task);
    }
};

const getters: GetterTree<TasksState, RootState> = {
    tasks: (state) => {
        return state.tasks.map((task) => {
            const project = useStore().getters.project(task.project_id);
            return {
                ...task,
                project
            };
        });
    }
};

export const tasks: Module<TasksState, RootState> = {
    state,
    mutations,
    actions,
    getters
};
