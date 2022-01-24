import { acceptHMRUpdate, defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const savedName = ref('');
  const previosNames = ref(new Set<string>());

  const usedNames = computed(() => Array.from(previosNames.value));
  const otherNames = computed(() =>
    usedNames.value.filter(name => name !== savedName.value),
  );

  function setNewName(name: string) {
    if (savedName.value) previosNames.value.add(savedName.value);

    savedName.value = name;
  }

  return {
    setNewName,
    otherNames,
    savedName,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
