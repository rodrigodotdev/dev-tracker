<template>
    <section class="section">
        <div class="columns is-centered">
            <div class="column is-6">
                <div class="box">
                    <div class="is-flex is-align-items-center is-justify-content-space-between">
                        <div>
                            <h2 class="title is-5">Edit Project</h2>
                            <p class="subtitle is-6 has-text-grey">Edit an existing project</p>
                        </div>
                        <div class="buttons">
                            <router-link class="button is-primary is-light" to="/projects">
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
                                    <input class="input" type="text" placeholder="Project Name" v-model="project.name" :class="{ 'is-danger': error.name }" />
                                </div>
                                <p class="help is-danger" v-if="error.name">{{ error.name }}</p>
                            </div>
                            <div class="field">
                                <label class="label">Description</label>
                                <div class="control">
                                    <textarea class="textarea" placeholder="Description" v-model="project.description"></textarea>
                                </div>
                            </div>
                            <div class="field is-grouped is-grouped-centered">
                                <button class="button is-primary">
                                    <span class="icon is-small">
                                        <font-awesome-icon icon="check" />
                                    </span>
                                    <span>Save</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import IProject from '@/interfaces/IProject'
import { useStore } from '@/store'
import { ref } from 'vue'
import useNotify from '@/hooks/notifier'
import { useRoute, useRouter } from 'vue-router';

const store = useStore()
const notify = useNotify()
const router = useRouter()
const route = useRoute()

const project = ref<IProject>({} as IProject)

store.dispatch('fetchProjects').then(() => {
    project.value = store.getters.project(parseInt(route.params.id as string))
    if (!project.value) {
        notify.error('Project not found')
        router.push('/projects')
    }
})

const error = ref<{ name: string }>({ name: '' })

if (!project.value) {
    notify.error('Project not found')
    router.push('/projects')
}

const save = () => {
    if (project.value.name === '') {
        error.value.name = 'Project name is required'
        return
    }
    store.dispatch('updateProject', project.value)
        .then(() => {
            notify.success('Project updated successfully')
            router.push('/projects')
        }).catch((error) => {
            notify.error(error.message)
        })
}
</script>