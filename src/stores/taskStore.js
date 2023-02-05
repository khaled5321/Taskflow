import { ref } from "vue";
import { defineStore } from "pinia";
import { computed } from "vue";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);

  const taskCount = computed(() => tasks.value.length);




  function addTask(task) {
    tasks.value.push(task)
  }
  return { tasks, addTask, taskCount };
});
