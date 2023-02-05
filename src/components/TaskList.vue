<script setup>
import { storeToRefs } from 'pinia';
import { useTaskStore } from '../stores/taskStore';

const taskStore = useTaskStore()
const { taskCount, tasks } = storeToRefs(taskStore)
</script>
<template>
    <div>
        <h3>You currently have {{ taskCount? taskCount: 0 }} tasks</h3>
    </div>
    <div>
        <article v-for="task, index in tasks" :key="task.id">
            <p>{{ index }}</p>
            <div class="headings">
                <h4>{{task.task}}</h4>
                <h5>{{task.description? task.description.slice(0,15)+"..." :"No description"}}</h5>
            </div>
            <div class="icons">
                <i class="material-icons" role="button">edit</i>
                <i class="material-icons" role="button">delete</i>
            </div>
        </article>
    </div>
</template>

<style scoped>
h3{
    margin-top: 5px;
    text-align: center;
}
.headings{
    margin-bottom: 0px;
}
article{
    display: flex;
    align-items: center;
    gap:20px;
}
p{
    margin-bottom: 0px;
    padding: 15px;
    border-radius: 5%;
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
    gap: 20px;
}
i{
    scale: 1.2;
    padding: 0;
    background: transparent;
    border: 0;
}
[data-theme="light"] i{
    color: rgb(27, 40, 50);
}

</style>