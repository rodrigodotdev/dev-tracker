<template>
    <section class="ml-2">
        {{ time }}
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TrackerTimer',
    props: {
        timeInSec: {
            type: Number,
            required: true,
        },
    },
    computed: {
        time(): string {
            const date = new Date(this.timeInSec * 1000)
            const hh = date.getUTCHours()
            const mm = date.getUTCMinutes()
            const ss = date.getSeconds()

            const formatNumber = (value: number) => `0${value}`.slice(-2)

            return [hh, mm, ss].map(formatNumber).join(':')
        },
    },
})
</script>