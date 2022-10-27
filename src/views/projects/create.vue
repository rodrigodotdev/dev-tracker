<template>
    <section class="section">
        <div class="columns is-centered">
            <div class="column is-6">
                <div class="box">
                    <div class="is-flex is-align-items-center is-justify-content-space-between">
                        <div>
                            <h2 class="title is-5">Create Project</h2>
                            <p class="subtitle is-6 has-text-grey">Create a new project</p>
                        </div>
                        <div class="buttons">
                            <router-link class="button is-primary" to="/projects">
                                <span class="icon is-small">
                                    <font-awesome-icon icon="arrow-left" />
                                </span>
                                <span>Back</span>
                            </router-link>
                        </div>
                    </div>
                    <div class="mt-5">
                        <form @submit.prevent="save">
                            <div class="field">
                                <label class="label">Project Name</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Project Name" v-model="projectName" />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Description</label>
                                <div class="control">
                                    <textarea class="textarea" placeholder="Description" v-model="projectDescription"></textarea>
                                </div>
                            </div>
                            <div class="field is-grouped is-grouped-right">
                                <div class="control">
                                    <button class="button is-primary">Save</button>
                                </div>
                            </div>
                        </form>
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
    name: 'CreateProject',
    data() {
        return {
            projectName: '' as string,
            projectDescription: '' as string,
        }
    },
    methods: {
        save(): void {
            this.store.dispatch('addProject', {
                name: this.projectName,
                description: this.projectDescription,
            })
            this.$router.push('/projects')
        },
    },
    setup() {
        const store = useStore()
        return {
            store,
        }
    },
})
</script>