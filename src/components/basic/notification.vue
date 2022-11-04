<template>
    <div class="my-notification">
        <TransitionGroup name="slide-fade">
            <article class="message" :class="type[notification.type]" v-for="(notification, key) in notifications" :key="key">
                <div class="message-header">
                    <p>{{ notification.title }}</p>
                    <button class="delete" aria-label="delete" @click="store.dispatch('removeNotification', notification.id)"></button>
                </div>
                <div class="message-body">
                    {{ notification.message }}
                </div>
            </article>
        </TransitionGroup>
    </div>
</template>

<script lang="ts">
import INotification, { NotificationType } from "@/interfaces/INotification";
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'Notification',
    data() {
        return {
            type: {
                [NotificationType.SUCCESS]: 'is-success',
                [NotificationType.ERROR]: 'is-danger',
                [NotificationType.WARNING]: 'is-warning',
                [NotificationType.INFO]: 'is-info',
            }
        }
    },
    setup() {
        const store = useStore()
        const notifications = computed(() => store.getters.notifications as INotification[])

        return {
            store,
            notifications,
        }
    },
})
</script>

<style scoped>
.my-notification {
    position: absolute;
    right: 0;
    z-index: 100;
    padding: 1rem;
}
.slide-fade-enter-active {
    transition: all 0.5s ease-out;
}
.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>