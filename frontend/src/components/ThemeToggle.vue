<script setup lang="ts">
import { ToggleButton } from "primevue";
import { ref, watchEffect } from "vue";

// Cek localStorage atau default ke "light"
const theme = ref<string>(localStorage.getItem("theme") || "light");

// Fungsi toggle dark mode
const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme.value);
    document.documentElement.classList.toggle("dark", theme.value === "dark");
};

// Pastikan saat reload tetap pakai mode yang benar
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
        class="dark:outline-0 dark:p-0 dark:border-red-500"
        unstyled
        aria-label="Do you confirm"
    />
</template>
