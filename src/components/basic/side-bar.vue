<template>
    <div class="bg-success">
        <header class="p-2">
            <ThemeSwitcher @toggle-theme="toggleTheme" />
            <div class="has-text-centered">
                <img class="logo" src="@/assets/logo.png" alt="Dev Tracker" />
            </div>
            <SideBarMenu />
        </header>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBarMenu from './side-bar-menu.vue';
import ThemeSwitcher from './theme-switcher.vue';

export default defineComponent({
    name: "SideBar",
    components: {
    ThemeSwitcher,
    SideBarMenu
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
    overflow: auto;
}
.logo {
    width: 30%;
    margin: 0 auto;
}
</style>