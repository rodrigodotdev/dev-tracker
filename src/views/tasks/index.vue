<template>
    <section class="section py-5 has-background-white">
        <div class="columns is-vcentered is-multiline">
            <div class="column">
                <div class="is-flex is-align-items-center">
                    <div class="is-flex-shrink-0 has-text-white mr-4 is-inline-flex has-background-primary is-justify-content-center is-align-items-center">
                        <span class="icon is-large">
                            <font-awesome-icon icon="tasks" size="lg" />
                        </span>
                    </div>
                    <div>
                        <h2 class="title is-4 has-text-primary">Tasks</h2>
                        <p class="subtitle is-6 has-text-grey">Manage your tasks</p>
                    </div>
                </div>
            </div>
            <div class="column is-flex is-justify-content-flex-end">
                <div class="buttons">
                    <button class="button is-primary" @click="showCreateTask = true">
                        <span class="icon is-small">
                            <font-awesome-icon icon="plus" />
                        </span>
                        <span>New Task</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
    <section class="section pb-0" v-if="showCreateTask">
        <TasksCreate @close="showCreateTask = false" />
    </section>
    <section class="section">
        <Tasks />
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TasksCreate from './create.vue'
import Tasks from './tasks.vue'

export default defineComponent({
    name: "TasksIndex",
    components: {
        TasksCreate,
        Tasks,
    },
    data() {
        return {
            showCreateTask: false,
        };
    },
})
</script>