<template>
    <section class="section">
        <div class="columns is-multiline">
            <!-- list box with edit ant remove buttons -->
            <div class="column is-4" v-for="(project, key) in projects" :key="key">
                <div class="box is-fullheight">
                    <div class="is-flex is-align-items-center is-justify-content-space-between">
                        <div>
                            <h2 class="title is-5">{{ project.name }}</h2>
                            <p class="subtitle is-6 has-text-grey">{{ project.description }}</p>
                        </div>
                        <div class="is-flex is-flex-direction-column is-align-items-end">
                            <button class="button is-primary is-small mb-1">
                                <span class="icon is-small">
                                    <font-awesome-icon icon="edit" />
                                </span>
                            </button>
                            <button class="button is-danger is-small">
                                <span class="icon is-small">
                                    <font-awesome-icon icon="trash" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'Projects',
    setup() {
        const store = useStore()
        const projects = computed(() => store.state.projects)

        return {
            projects,
        }
    },
})
</script>

<style scoped>
.is-fullheight {
    height: 100%;
}
</style>