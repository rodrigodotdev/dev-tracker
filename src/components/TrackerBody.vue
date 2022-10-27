<template>
    <div class="p-5">
        <TrackerTask v-for="(task, key) in tasks" :key="key" :task="task"/>
        <div class="has-text-centered">
            <TaskBox v-if="tasksIsEmpty">
                Você não está muito produtivo hoje :(
            </TaskBox>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TrackerTask from './TrackerTask.vue'
import TaskBox from './TaskBox.vue'
import ITask from '../interfaces/ITask'

export default defineComponent({
    name: 'TrackerBody',
    components: {
        TrackerTask,
        TaskBox
    },
    computed: {
        tasksIsEmpty(): boolean {
            return this.tasks.length === 0
        }
    },
    props: {
        tasks: {
            type: Array as () => ITask[],
            required: true,
        },
    },
})
</script>