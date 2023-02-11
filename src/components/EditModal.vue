<script setup>
import { ref, toRefs } from 'vue';
import { useTaskStore } from '../stores/taskStore';

const props = defineProps({
    showModal: {
        type: Boolean,
        default: false,
    },
    taskID: {
        type: String,
        default: "",
    },
})
const emit = defineEmits(["close-modal"]);
const taskStore = useTaskStore()

const { getTask } = taskStore
const { taskID } = toRefs(props);

const handleSubmit=()=>{
    const newTask = document.getElementById('edit_task')
    const newDescription = document.getElementById('edit_description')
    taskStore.editTask(taskID.value, newTask.value, newDescription.value)
    emit('close-modal')
}

</script>

<template>
    <Teleport to="body">
        <transition name="fade">
            <dialog v-if="showModal" open>
                <article>
                    <h3>Edit your Task</h3>
                    <form @submit.prevent="handleSubmit()">
                        <input 
                        type="text" 
                        id="edit_task" 
                        name="task"
                        :value="getTask(taskID).task"
                        required placeholder="I want to ..."
                        />

                        <textarea 
                        type="text" 
                        id="edit_description" 
                        name="task_description"
                        placeholder="Add description"
                        :value="getTask(taskID).description"
                        ></textarea>

                        <footer class="grid">
                            <button class="secondary" @click="$emit('close-modal')">
                                Cancel
                            </button>
                            <button type="submit">
                                Confirm
                            </button>
                        </footer>
                    </form>
                </article>
            </dialog>
        </transition>
    </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

form{
    margin-bottom: 0;
}
</style>