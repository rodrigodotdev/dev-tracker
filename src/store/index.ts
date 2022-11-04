import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { projects, ProjectsState } from "./modules/projects";
import { tasks, TasksState } from "./modules/tasks";
import { notifications, NotificationsState } from "./modules/notifications";

export interface RootState {
    projects: ProjectsState;
    tasks: TasksState;
    notifications: NotificationsState;
}

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
    modules: {
        projects,
        tasks,
        notifications
    }
});

export function useStore(): Store<RootState> {
    return baseUseStore(key);
}