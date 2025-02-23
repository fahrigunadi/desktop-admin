<script setup lang="ts">
import Sidebar from '../Sidebar.vue';

</script>

<template>
    <main class="h-full w-full flex bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-gray-50">
        <Sidebar />
        <div class="flex-1">
            <slot />
        </div>
    </main>
</template>