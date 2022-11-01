<template>
    <div class="control is-expanded">
        <span class="tag is-light is-large is-rounded"><timerView :time_in_sec="time_in_sec" /></span>
    </div>
    <div class="control">
        <button class="button is-primary" @click="start" :disabled="isRunning">
            <span class="icon is-small">
                <font-awesome-icon icon="play" />
            </span>
            <span>Start</span>
        </button>
    </div>
    <div class="control">
        <button class="button is-danger" @click="stop" :disabled="!isRunning">
            <span class="icon is-small">
                <font-awesome-icon icon="stop" />
            </span>
            <span>Stop</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TimerView from './timer-view.vue';
import useNotify from '@/hooks/notifier'

export default defineComponent({
    name: "Timer",
    emits: ['stop'],
    components: {
        TimerView
    },
    data() {
        return {
            time_in_sec: 0 as number,
            timer: undefined as undefined | ReturnType<typeof setInterval>,
            isRunning: false as boolean,
        }
    },
    methods: {
        start() {
            if (this.isRunning) {
                return;
            }
            this.isRunning = true;
            useNotify().info('A task has been started!');
            this.timer = setInterval(() => {
                this.time_in_sec++;
            }, 1000);
        },
        stop() {
            if (!this.isRunning) {
                return;
            }
            this.$emit('stop', this.time_in_sec);
            this.time_in_sec = 0;
            this.isRunning = false;
            clearInterval(this.timer);
        },
    },
})
</script>