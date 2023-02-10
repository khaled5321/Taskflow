import { ref } from "vue";
import { defineStore } from "pinia";
import { computed } from "vue";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);
  const taskCount = computed(() => tasks.value.length);


  function addTask(task) {
    tasks.value.push(task)
  }
  function changeStatus(id){
    const task = tasks.value.find(element => element.id === id)
    task.iscomplete = !task.iscomplete
  }
  function removeTask(id){
    tasks.value =  tasks.value.filter(element => element.id!== id)

  }
  return { tasks, addTask, taskCount, changeStatus, removeTask };
}, {persist: true});
