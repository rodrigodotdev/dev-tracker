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

<script lang="ts">
import TimerView from "@/components/tasks/timer-view.vue"
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'
import useNotify from '@/hooks/notifier'
import ITask from "@/interfaces/ITask"

export default defineComponent({
    name: "Tasks",
    components: {
        TimerView,
    },
    methods: {
        removeTask(task: ITask) {
            this.store.dispatch('removeTask', task)
                .then(() => {
                    this.notify.success('Task removed successfully')
                }).catch((error) => {
                    this.notify.error(error.message)
                })
        }
    },
    setup() {
        const store = useStore()
        const notify = useNotify()

        store.dispatch('fetchTasks')
        store.dispatch('fetchProjects')

        const tasks = computed(() => store.getters.tasks as ITask[])

        return {
            store,
            notify,
            tasks
        }
    },
})
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