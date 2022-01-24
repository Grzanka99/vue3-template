<script setup lang="ts">
import DisplayNames from '@/components/display-names.vue';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

const handleChange = (event: any) => {
  userStore.setNewName(event.target.value);
};
</script>

<template>
  <input @keydown.enter="handleChange" />
  <display-names />
</template>

<route lang="yaml">
meta:
  layout: default
</route>
