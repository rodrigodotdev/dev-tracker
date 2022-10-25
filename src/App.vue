<template>
	<main class="columns is-gapless is-multiline" :class="theme">
		<div class="column is-one-fifth side-bar">
			<SideBar @toggleTheme="toggleTheme" />
		</div>
		<div class="column is-four-fifths page-body">
            <router-view />
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from './components/SideBar.vue'

export default defineComponent({
	name: 'App',
	components: {
		SideBar,
	},
	data() {
		return {
            darkTheme: true as boolean
		}
	},
    computed: {
        theme() : string {
            return !this.darkTheme ? 'theme-dark' : 'theme-light'
        }
    },
	methods: {
		toggleTheme(): void {
			this.darkTheme = !this.darkTheme
		}
	},
})
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
