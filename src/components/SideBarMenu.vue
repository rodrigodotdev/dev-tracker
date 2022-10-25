<template>
    <aside class="menu p-2">
        <p class="menu-label">
            Dev Tracker
        </p>
        <ul class="menu-list">
            <li>
                <router-link to="/">
                    <font-awesome-icon icon="home" /> Home
                </router-link>
            </li>
            <li>
                <router-link to="/tasks">
                    <font-awesome-icon icon="tasks" /> Tarefas
                </router-link>
            </li>
            <li>
                <router-link to="/projects">
                    <font-awesome-icon icon="diagram-project" /> Projetos
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
    background-color: #28617D;
}
</style>