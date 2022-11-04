import INotification from "@/interfaces/INotification";
import { Module, MutationTree, ActionTree, GetterTree } from "vuex";
import { RootState } from "@/store";

export interface NotificationsState {
    notifications: INotification[];
}

const state: NotificationsState = {
    notifications: [],
};

const mutations: MutationTree<NotificationsState> = {
    addNotification(state, notification: INotification) {
        state.notifications.push(notification);

        setTimeout(() => {
            state.notifications = state.notifications.filter((n) => n.id !== notification.id);
        } , notification.timeout);
    },
    removeNotification(state, notification: INotification) {
        state.notifications = state.notifications.filter((n) => n.id !== notification.id);
    }
};

const actions: ActionTree<NotificationsState, RootState> = {
    addNotification({ commit }, notification: INotification) {
        notification.id = state.notifications.length + 1;
        notification.timeout = notification.timeout || 5000;
        commit("addNotification", notification);
    },
    removeNotification({ commit }, notification: INotification) {
        commit("removeNotification", notification);
    }
};

const getters: GetterTree<NotificationsState, RootState> = {
    notifications: (state) => state.notifications
};

export const notifications: Module<NotificationsState, RootState> = {
    state,
    mutations,
    actions,
    getters
};