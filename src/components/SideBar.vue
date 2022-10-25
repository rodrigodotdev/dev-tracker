<template>
    <div class="bg-success">
        <header class="p-2">
            <ThemeSwitcher @toggle-theme="toggleTheme" />
            <div class="has-text-centered mt-2">
                <img class="logo" src="../assets/logo.png" alt="">
                <h1 class="is-size-4 has-text-white">
                    Dev Tracker
                </h1>
            </div>
        </header>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ThemeSwitcher from './ThemeSwitcher.vue';

export default defineComponent({
    name: "SideBar",
    components: {
        ThemeSwitcher
    },
    methods: {
        toggleTheme(): void {
            this.$emit('toggle-theme')
        }
    }
})
</script>

<style scoped>
header {
    width: 100%;
    height: 100vh;
}
.logo {
    color: #e63946;
    width: 30%;
    margin: 0 auto;
}
</style>