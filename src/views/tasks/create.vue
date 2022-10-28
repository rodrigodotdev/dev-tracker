<template>
    <div class="columns is-centered">
        <div class="column">
            <div class="box">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                    <div>
                        <h2 class="title is-5">Start Task</h2>
                        <p class="subtitle is-6 has-text-grey">Start a new task</p>
                    </div>
                    <div class="buttons">
                        <button class="button is-danger is-light" @click="$emit('close')">
                            <span class="icon is-small">
                                <font-awesome-icon icon="times" />
                            </span>
                            <span>Close</span>
                        </button>
                    </div>
                </div>
                <div class="mt-5">
                    <div role="form">
                        <div class="field">
                            <label class="label">Task Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Task Name" v-model="task.name" />
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <label class="label">Project</label>
                                <div class="select is-fullwidth">
                                    <select v-model="task.project_id">
                                        <option value="0">Selecione um projeto:</option>
                                        <option
                                            v-for="project in projects"
                                            :key="project.id"
                                            :value="project.id">
                                            {{ project.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field is-grouped">
                            <Timer @stop="save" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Timer from "@/components/tasks/timer.vue"
import ITask from "@/interfaces/ITask"
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: "TasksCreate",
    components: {
        Timer,
    },
    data() {
        return {
            task: {
                name: "",
                time_in_sec: 0,
                project_id: 0,
            } as ITask,
        };
    },
    methods: {
        save(time_in_sec: number) {
            this.task.time_in_sec = time_in_sec;
            this.task.name = this.task.name || "Task";
            this.store.dispatch("addTask", this.task);
            this.task = {
                name: "",
                time_in_sec: 0,
                project_id: 0,
            } as ITask;
        },
    },
    setup() {
        const store = useStore();
        const projects = computed(() => store.state.projects);
        return {
            store,
            projects,
        };
    },
})
</script>