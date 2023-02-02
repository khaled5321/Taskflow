<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const theme = ref(null)

const changeTheme = () => {
  let body = document.documentElement;
  body.dataset.theme = body.dataset.theme === "light" ? "dark" : "light";
};
</script>

<template>
    <nav class="container">
        <h2>TASKFLOW</h2>
        <ul>
            <li>
                <a href="#" role="button" @click="changeTheme()">Theme</a>
            </li>
            <li>
                <RouterLink to="/" role="button" class="secondary">Login</RouterLink>
            </li>
        </ul>
    </nav>
</template> 

<style scoped>
h2{
    margin:0px
}
.container{
    padding-top: 12px;
    align-items: center;
}
</style>
