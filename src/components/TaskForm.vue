<script setup>
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { useTaskStore } from '../stores/taskStore';

const taskStore = useTaskStore()
const { addTask } = taskStore

const task = ref("")
const taskDescription = ref("")
const handleSubmit = () =>{
    if( task.value !== "" ){
        let new_task = {
            id:uuidv4(),
            task:task.value,
            description:taskDescription.value,
            iscomplete:false,
        }
        addTask(new_task)
        task.value=""
        taskDescription.value=""
    }
    
}
</script>

<template>
    <form class="" @submit.prevent="handleSubmit()">
        <input 
        type="text" 
        id="task" 
        name="task" 
        required 
        placeholder="I want to ..." 
        v-model="task">

        <textarea 
        type="text" 
        id="teask_description" 
        name="task_description" 
        placeholder="Add description" 
        v-model="taskDescription"></textarea>

        <button type="submit" class="contrast">Add Task</button>
    </form>
</template>

<style scoped>
form{
    margin-top: 15px;
    margin-bottom: 0px;
}
@media only screen and (min-width: 900px) {
    form{
        padding-right: 100px;
        padding-left: 100px;
    }
}
@media only screen and (min-width: 750px) {
    form{
        padding-right: 50px;
        padding-left: 50px;
    }
} 
input{
    height: 50px;
    margin-bottom: 5px;
}
textarea{
    resize: none;
    overflow: hidden;
    margin-bottom: 5px;
}
button{
    display: flex;
    width: fit-content;
    margin: auto;
    scale:0.8;
}
</style>