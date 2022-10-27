<template>
    <div class="box p-4 mb-0">
        <div class="columns">
            <div class="column is-5" role="form">
                <input
                    type="text"
                    class="input"
                    placeholder="Qual tarefa você deseja iniciar?"
                    v-model="description"
                />
            </div>
            <div class="column is-3">
                <div class="select is-fullwidth">
                    <select v-model="projectId">
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
            <div class="column">
                <TrackerTimer @stop="handleStop" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'
import TrackerTimer from './TrackerTimer.vue'

export default defineComponent({
    name: 'TrackerHeader',
    emits: ['add'],
    components: {
        TrackerTimer,
    },
    data() {
        return {
            description: '' as string,
            projectId: 0 as number,
        }
    },
    methods: {
        handleStop(timeInSec: number): void {
            this.$emit('add', {
                timeInSec: timeInSec,
                description: this.description,
            })
            this.description = ''
        },
    },
    setup() {
        const store = useStore()
        return {
            projects: computed(() => store.state.projects),
        }
    },
})
</script>

<style scoped>
.box {
    background-color: var(--color-primary);
    color: var(--font-color);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>