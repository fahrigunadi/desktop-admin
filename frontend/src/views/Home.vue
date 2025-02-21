<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { Button, Card, InputText, Message } from 'primevue'
import ThemeToggle from '../components/ThemeToggle.vue'

</script>

<template>
  <main class="flex items-center justify-center h-screen w-full bg-gray-50 dark:bg-neutral-950">
    <Card class="w-[400px]">
      <template #title>
        Login
      </template>
      <template #subtitle>Login to your account</template>
      <template #content>
        <div class="text-start space-y-4">
          <div class="flex flex-col gap-2">
            <label for="email">Email</label>
            <InputText id="email" type="email" aria-describedby="username-help" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="password">Password</label>
            <InputText id="password" invalid aria-describedby="password-help" type="password" />
            <Message size="small" severity="error" variant="simple">Password is required</Message>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <RouterLink to="/about" class="w-full">
            <Button label="Login" class="w-full !font-bold" />
          </RouterLink>
        </div>
        <div class="mt-4">
          <ThemeToggle />
        </div>
      </template>
    </Card>
  </main>
</template>
