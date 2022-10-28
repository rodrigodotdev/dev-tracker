<template>
    {{ time }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TimerView',
    props: {
        time_in_sec: {
            type: Number,
            required: true,
        },
    },
    computed: {
        time(): string {
            const date = new Date(this.time_in_sec * 1000)
            const hh = date.getUTCHours()
            const mm = date.getUTCMinutes()
            const ss = date.getSeconds()

            const formatNumber = (value: number) => `0${value}`.slice(-2)

            return [hh, mm, ss].map(formatNumber).join(':')
        },
    },
})
</script>