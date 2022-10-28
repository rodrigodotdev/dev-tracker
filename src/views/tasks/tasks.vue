<template>
    <div class="columns is-multiline">
        <div class="column is-4" v-for="(task, key) in tasks" :key="key">
            <div class="box">
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
                        <button class="button is-danger is-small" @click="store.dispatch('deleteTask', task.id)">
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

export default defineComponent({
    name: "Tasks",
    components: {
        TimerView,
    },
    setup() {
        const store = useStore();
        const tasks = computed(() => store.state.tasks);
        return {
            store,
            tasks,
        };
    },
})
</script>

<style scoped>
.icon-box {
    border-radius: 20%;
}
</style>