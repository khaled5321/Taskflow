import { ref } from "vue";
import { defineStore } from "pinia";
import { computed } from "vue";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);
  const taskCount = computed(() => tasks.value.length);
  const getTask = computed(() => {
    return (id) => tasks.value.find(element => element.id === id)
  });

  function addTask(task) {
    tasks.value.push(task)
  }
  function editTask(id, newTask, newDescription) {
    const task = tasks.value.find(element => element.id === id)
    task.task = newTask
    task.description = newDescription
  }
  function changeStatus(id){
    const task = tasks.value.find(element => element.id === id)
    task.iscomplete = !task.iscomplete
  }
  function removeTask(id){
    tasks.value =  tasks.value.filter(element => element.id!== id)

  }
  return { tasks, addTask, taskCount, changeStatus, removeTask, editTask, getTask };
}, {persist: true});
