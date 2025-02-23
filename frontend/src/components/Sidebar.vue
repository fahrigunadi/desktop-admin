<template>
    <div class="w-16 md:w-48 bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-4 px-3 flex flex-col space-y-4 transition">
        <h1 class="text-md md:text-lg font-bold text-center md:text-left">App</h1>

        <nav class="flex flex-col space-y-2">
            <RouterLink v-for="item in menuItems" :key="item.to" :to="item.to"
                class="flex items-center px-3 py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                :class="{ 'bg-gray-200 dark:bg-gray-700': $route.path === item.to }">
                <i :class="item.icon" class="text-sm"></i>
                <span class="ml-2 hidden text-sm md:block">{{ item.label }}</span>
            </RouterLink>
        </nav>

        <Divider/>

        <div class="flex justify-center">
            <ThemeToggle/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import ThemeToggle from "./ThemeToggle.vue";
import { Divider } from "primevue";

const menuItems = ref([
    { label: "Home", to: "/", icon: "pi pi-home" },
    { label: "About", to: "/about", icon: "pi pi-cog" },
    { label: "Login", to: "/login", icon: "pi pi-user" },
]);
</script>