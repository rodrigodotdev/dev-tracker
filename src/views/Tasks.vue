<template>
	<section>
		<TrackerHeader @add="addTask" />
		<TrackerBody :tasks="tasks" />
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TrackerHeader from '../components/TrackerHeader.vue'
import TrackerBody from '../components/TrackerBody.vue'
import ITask from '../interfaces/ITask'

export default defineComponent({
	name: 'Tasks',
	components: {
		TrackerHeader,
		TrackerBody,
	},
	data() {
		return {
			tasks: [] as ITask[],
		}
	},
	methods: {
		addTask(task: ITask): void {
			this.tasks.push(task)
		},
	},
})
</script>