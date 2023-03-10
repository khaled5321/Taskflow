<script setup>
import { storeToRefs } from 'pinia';
import { useTaskStore } from '../stores/taskStore';
import { ref } from 'vue';
import EditModal from "./EditModal.vue";

const taskStore = useTaskStore()
const { taskCount, tasks } = storeToRefs(taskStore)

const startDrag= (evt, draggable) =>{
    evt.dataTransfer.dropEffect = 'move'
    evt.dataTransfer.effectAllowed = 'move'  
    let index = tasks.value.findIndex(e => e.id === draggable.id);
    evt.dataTransfer.setData('taskIndex', index) 
}
const onDrop =(evt, droppable)=> {      
    let draggableIndex = evt.dataTransfer.getData('taskIndex')
    let droppableIndex = tasks.value.findIndex(e => e.id === droppable.id);
    [tasks.value[draggableIndex], tasks.value[droppableIndex]] = [tasks.value[droppableIndex], tasks.value[draggableIndex]];
}

const showModal=ref(null);

const toggleModal=()=>{
    showModal.value=!showModal.value
}
const taskID = ref("")

const editTask = (id)=>{
    taskID.value = id
    toggleModal()
}

</script>
<template>
    <div class="head">
        <h3>You currently have {{ taskCount? taskCount: 0 }} tasks</h3>
    </div>
    <div class="cards">
        <TransitionGroup name="list">
            <article v-for="task, index in tasks" :key="task.id" draggable="true"  
            @dragstart="startDrag($event, task)"
            @drop="onDrop($event, task)"
            @dragover.prevent
            @dragenter.prevent
            :class="{firstcard: index===0}">
                <p>{{ index+1 }}</p>
                <div class="headings">
                    <h4>
                        <del v-if="task.iscomplete">{{task.task}}</del>
                        <template v-else>{{task.task}}</template>
                    </h4>
                    <h5>
                        {{task.description? task.description.slice(0,15)+"..." :"No description"}}
                    </h5>
                </div>
                <div class="icons">
                    <input type="checkbox"
                    @input.change="taskStore.changeStatus(task.id)"
                    v-model="task.iscomplete"/>

                    <i class="material-icons" role="button" @click="editTask(task.id)">edit</i>
                    <i
                    class="material-icons"
                    role="button"
                    @click="taskStore.removeTask(task.id)">delete</i>
                </div>
            </article>
        </TransitionGroup>
    </div>

    <EditModal v-if="showModal" :showModal="showModal" :taskID="taskID" @close-modal="toggleModal()"/>
</template>

<style scoped>
h3{
    margin-top: 5px;
    text-align: center;
    margin-bottom: 0px;
}
.headings{
    margin-bottom: 0px;
}
.firstcard{
    margin-top: 5px;
}
.cards{
    position: relative;
}
article{
    display: flex;
    align-items: center;
    gap:20px;
    
}
p{
    margin-bottom: 0px;
    padding: 10px;
    border-radius: 8%;
    color: black;
    background-color: white;
}
[data-theme="light"] p{
    color: white;
    background-color: rgb(27, 40, 50);
}
.icons{
    display: flex;
    margin-right: 0;
    margin-left: auto;
    align-items: center;
    gap: 20px;
}
i{
    scale: 1.2;
    padding: 0;
    background: transparent;
    border: 0;
}
[data-theme="light"] i, [data-theme="light"] h4{
    color: rgb(27, 40, 50);
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
  width: 100%;
}
</style>