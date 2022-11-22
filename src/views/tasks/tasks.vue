<template>
    <div class="columns is-multiline">
        <div class="column is-4" v-for="(task, key) in tasks" :key="key">
            <div class="box">
                <div class="project-tag" v-if="task.project">
                    <span class="tag is-rounded icon-text">
                        <span class="icon">
                            <font-awesome-icon icon="project-diagram" />
                        </span>
                        <span class="is-uppercase has-text-weight-bold">{{ task.project.name }}</span>
                    </span>
                </div>
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                    <div>
                        <div class="is-flex is-align-items-center">
                            <div class="icon-box is-flex-shrink-0 has-text-white mr-4 is-inline-flex has-background-primary is-justify-content-center is-align-items-center">
                                <span class="icon">
                                    <font-awesome-icon icon="check" size="lg" />
                                </span>
                            </div>
                            <div>
                                <h2 class="title is-5">{{ task.name }}</h2>
                                <p class="subtitle is-6 has-text-grey"><TimerView :time_in_sec="task.time_in_sec" /></p>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <button class="button is-danger is-small" @click="removeTask(task)">
                            <span class="icon is-small">
                                <font-awesome-icon icon="trash" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>                
    </div>
</template>

<script lang="ts" setup>
import TimerView from "@/components/tasks/timer-view.vue"
import { useStore } from '@/store'
import { computed } from 'vue'
import useNotify from '@/hooks/notifier'
import ITask from "@/interfaces/ITask"

const store = useStore()
const notify = useNotify()

store.dispatch('fetchTasks')
store.dispatch('fetchProjects')

const tasks = computed<ITask[]>(() => store.getters.tasks)

const removeTask = (task: ITask): void => {
    store.dispatch('removeTask', task)
        .then(() => {
            notify.success('Task removed successfully')
        }).catch((error) => {
            notify.error(error.message)
        })
}
</script>

<style scoped>
.icon-box {
    border-radius: 20%;
}
.box {
    position: relative;
}
.project-tag {
    position: absolute;
    left: 12px;
    top: -12px
}
</style>