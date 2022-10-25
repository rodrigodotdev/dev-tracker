<template>
    <div class="box">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TrackerBox',
})
</script>

<style scoped>
.box {
    background-color: var(--color-primary);
    color: var(--font-color);
}
</style>