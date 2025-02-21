<script setup lang="ts">
import { Avatar, Badge, Menubar } from "primevue";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import ThemeToggle from "./ThemeToggle.vue";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        to: '/'
    },
    {
        label: 'About',
        icon: 'pi pi-info-circle',
        to: '/about'
    },
]);
</script>

<template>
    <div class="card">
        <Menubar :model="items">
            <template #start>
                <img class="h-10 rounded-md" src="https://storage.fahrigunadi.dev/images/logo.png" alt="logo">
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <RouterLink :to="item.to" v-ripple class="flex items-center" v-bind="props.action">
                    <span>{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
                </RouterLink>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <ThemeToggle />
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                </div>
            </template>
        </Menubar>
    </div>
</template>
