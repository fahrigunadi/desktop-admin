<script setup lang="ts">
import { ToggleButton } from "primevue";
import { ref, watchEffect } from "vue";

const theme = ref<string>(localStorage.getItem("theme") || "light");

const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme.value);
    document.documentElement.classList.toggle("dark", theme.value === "dark");
};

watchEffect(() => {
    document.documentElement.classList.toggle("dark", theme.value === "dark");
});
</script>

<template>
    <ToggleButton
        @change="toggleTheme"
        :modelValue="theme === 'dark'"
        on="dark"
        off="light"
        onLabel=""
        offLabel=""    
        onIcon="pi pi-moon"
        offIcon="pi pi-sun"
        class="dark:outline-0 dark:p-0 dark:border-red-500 pt-2 items-center flex"
        unstyled
        aria-label="Do you confirm"
    />
</template>
