<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <div class="has-text-weight-bold">
            <TrackerTimerView :timeInSec="timeInSec" />
        </div>
        <button class="button is-success" @click="startTimer" :disabled="active">
            <span class="icon is-small">
                <font-awesome-icon icon="play" />
            </span>
            <span>Play</span>
        </button>
        <button class="button is-danger" @click="stopTimer" :disabled="!active">
            <span class="icon is-small">
                <font-awesome-icon icon="stop" />
            </span>
            <span>Stop</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TrackerTimerView from './TrackerTimerView.vue'

export default defineComponent({
    name: 'TrackerHeader',
    emits: ['start', 'stop'],
    components: {
        TrackerTimerView,
    },
    data() {
        return {
            timeInSec: 0 as number,
            timer: -1 as number,
            active: false as boolean,
        }
    },
    methods: {
        startTimer(): void {
            this.timer = setInterval(() => {
                this.timeInSec++
            }, 1000)
            this.active = true
        },
        stopTimer(): void {
            clearInterval(this.timer)
            this.$emit('stop', this.timeInSec)
            this.timeInSec = 0
            this.active = false
        },
    },
})
</script>