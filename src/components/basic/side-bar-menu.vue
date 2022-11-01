<template>
    <aside class="menu p-2">
        <p class="menu-label">
            Dev Tracker
        </p>
        <ul class="menu-list">
            <li>
                <router-link class="has-text-white" to="/">
                    <font-awesome-icon class="mr-3" icon="home" />Home
                </router-link>
            </li>
            <li>
                <router-link class="has-text-white" to="/tasks">
                    <font-awesome-icon class="mr-3" icon="tasks" />Tasks
                </router-link>
            </li>
            <li>
                <router-link class="has-text-white" to="/projects">
                    <font-awesome-icon class="mr-3" icon="diagram-project" />Projects
                </router-link>
            </li>
        </ul>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SideBarMenu',
})
</script>

<style scoped>
.menu-list a.is-active {
    background-color: #00D1B2;
}
.menu-list a:not(.is-active):hover {
    color: #4a4a4a !important;
}
.menu-list a.is-active {
    color: #fff !important;
}
</style>