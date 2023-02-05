import { ref } from "vue";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);
  // const doubleCount = computed(() => count.value * 2);
  function addTask(task) {
    tasks.value.push(task)
  }
  return { tasks, addTask };
});
