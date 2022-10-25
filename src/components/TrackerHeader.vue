<template>
    <div class="box p-4">
        <div class="columns">
            <div class="column is-8" role="form">
                <input
                    type="text"
                    class="input"
                    placeholder="Qual tarefa você deseja iniciar?"
                    v-model="description"
                />
            </div>
            <div class="column">
                <TrackerTimer @stop="handleStop" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
        }
    },
    methods: {
        handleStop(timeInSec: number) : void {
            this.$emit('add', {
                timeInSec: timeInSec,
                description: this.description,
            })
            this.description = ''
        },
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