<template>
	<Notification />
	<main class="columns is-gapless is-multiline" :class="theme">
		<div class="column is-one-fifth side-bar">
			<SideBar @toggleTheme="toggleTheme" />
		</div>
		<div class="column is-four-fifths page-body">
            <router-view />
		</div>
	</main>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import Notification from './components/basic/notification.vue'
import SideBar from './components/basic/side-bar.vue'

const darkTheme = ref<boolean>(true)

const theme = computed<string>(() => !darkTheme.value ? 'theme-dark' : 'theme-light')

const toggleTheme = (): void => {
	darkTheme.value = !darkTheme.value
}
</script>

<style>
html,
body {
	margin: 0;
	padding: 0;
	height: 100%;
	width: 100%;
}
input:focus {
    border-color: #28617D !important;
}
.theme-light {
	--color-primary: #fff;
	--color-secondary: #fbfbfe;
	--color-tertiary: #141414;
	--font-color: #000000;
}
.theme-dark {
	--color-primary: #1b1b1b;
	--color-secondary: #242424;
	--color-tertiary: #141414;
	--font-color: #ffffff;
}
.page-body {
	background-color: var(--color-secondary);
	color: var(--font-color);
}
.side-bar {
	background-color: var(--color-tertiary);
	color: var(--font-color);
}
</style>