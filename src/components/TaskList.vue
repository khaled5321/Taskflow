<script setup>
import { storeToRefs } from 'pinia';
import { useTaskStore } from '../stores/taskStore';

const taskStore = useTaskStore()
const { taskCount, tasks } = storeToRefs(taskStore)

</script>
<template>
    <div class="head">
        <h3>You currently have {{ taskCount? taskCount: 0 }} tasks</h3>
    </div>
    <div class="cards">
        <article v-for="task, index in tasks" :key="task.id"
        :class="{firstcard: index===0}">
            <p>{{ index+1 }}</p>
            <div class="headings">
                <h4 role="button">
                    <del v-if="task.iscomplete">{{task.task}}</del>
                    <template v-else>{{task.task}}</template>
                </h4>
                <h5>
                    {{task.description? task.description.slice(0,15)+"..." :"No description"}}
                </h5>
            </div>
            <div class="icons">
                <!-- <i class="material-icons" role="button">edit</i> -->
                <input type="checkbox" 
                @input.change="taskStore.changeStatus(task.id)"
                v-model="task.iscomplete"/>

                <i 
                class="material-icons" 
                role="button"
                @click="taskStore.removeTask(task.id)">delete</i>
            </div>
        </article>
    </div>
</template>

<style scoped>
h3{
    margin-top: 5px;
    text-align: center;
    margin-bottom: 0px;
}
h4{
    background: transparent;
    padding: 0;
    border: 0;
}
.headings{
    margin-bottom: 0px;
}
.firstcard{
    margin-top: 5px;
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
    align-items: center;
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