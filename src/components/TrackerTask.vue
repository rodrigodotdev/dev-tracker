<template>
    <TaskBox>
        <div class="task columns is-vcentered">
            <div class="column is-8">
                <div class="columns is-vcentered">
                    <div class="column is-1">
                        <font-awesome-icon icon="fa-solid fa-check" />
                    </div>
                    <div class="column">
                        <p class="is-size-6">{{ task.description || 'Tarefa sem descrição.'}}</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="columns is-vcentered">
                    <div class="column is-1">
                        <font-awesome-icon icon="fa-solid fa-clock" />
                    </div>
                    <div class="column">
                        <p class="is-size-6">
                            <TrackerTimerView :timeInSec="task.timeInSec" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </TaskBox>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import TrackerTimerView from './TrackerTimerView.vue'
import TaskBox from './TaskBox.vue'
import ITask from '../interfaces/ITask'

export default defineComponent({
    name: "TrackerBody",
    components: {
        TrackerTimerView,
        TaskBox
    },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true,
        },
    },
})
</script>