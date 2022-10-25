<template>
    <section>
        <div class="box p-4 mb-0">
            <form @submit.prevent="save">
                <div class="field is-grouped">
                    <p class="control is-expanded has-icons-left">
                        <input class="input" type="text" placeholder="Nome do projeto" v-model="projectName">
                        <span class="icon is-small is-left">
                            <font-awesome-icon icon="diagram-project" />
                        </span>
                    </p>
                    <button class="button is-success" type="submit">
                        <span class="icon is-small">
                            <font-awesome-icon icon="check" />
                        </span>
                        <span>Salvar</span>
                    </button>
                </div>
            </form>
        </div>
        <div class="p-4">
            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="project in projects" :key="project.id">
                        <td>{{ project.id }}</td>
                        <td>{{ project.name }}</td>
                        <td>
                            <button class="button is-small is-danger" @click="remove(project.id)">
                                <span class="icon is-small">
                                    <font-awesome-icon icon="trash" />
                                </span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IProject from '../interfaces/IProject'

export default defineComponent({
    name: 'Projects',
    data() {
        return {
            projectName: '' as string,
            projects: [] as IProject[]
        }
    },
    methods: {
        save() : void {
            const project: IProject = {
                id: this.projects.length + 1,
                name: this.projectName,
            }
            this.projects.push(project)
            this.projectName = ''
        },
        remove(id: number) : void {
            this.projects = this.projects.filter(project => project.id !== id)
        }
    },
})
</script>

<style scoped>
.box {
    background-color: var(--color-primary);
    color: var(--font-color);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.table {
    background-color: var(--color-primary);
    color: var(--font-color);
}
.table th {
    background-color: var(--color-primary);
    color: var(--font-color);
}
</style>