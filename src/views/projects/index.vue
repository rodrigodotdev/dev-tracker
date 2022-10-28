<template>
    <section class="section py-5 has-background-white">
        <div class="columns is-vcentered is-multiline">
            <div class="column is-7-tablet">
                <div class="is-flex is-align-items-center">
                    <div class="is-flex-shrink-0 has-text-white mr-4 is-inline-flex has-background-primary is-justify-content-center is-align-items-center">
                        <span class="icon is-large">
                            <font-awesome-icon icon="diagram-project" size="lg" />
                        </span>
                    </div>
                    <div>
                        <h2 class="title is-4 has-text-primary">Projects</h2>
                        <p class="subtitle is-6 has-text-grey">Manage your projects</p>
                    </div>
                </div>
            </div>
            <div class="column is-5-tablet is-flex is-justify-content-flex-end">
                <div class="buttons">
                    <router-link class="button is-primary" to="/projects/create">
                        <span class="icon is-small">
                            <font-awesome-icon icon="plus" />
                        </span>
                        <span>New Project</span>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <router-view />
</template>