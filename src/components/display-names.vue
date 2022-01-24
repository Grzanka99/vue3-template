<script lang="ts" setup>
import { useUserStore } from '@store/user';

const userStore = useUserStore();

const currentUser = computed(() => userStore.savedName);
const previousUsers = computed(() => userStore.otherNames);
</script>

<template>
  <ul>
    <li>{{ currentUser }}</li>
    <li v-for="(user, i) in previousUsers" :key="i">{{ user }}</li>
  </ul>
</template>
