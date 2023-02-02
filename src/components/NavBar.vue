<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useThemeStore } from '../stores/themeStore';

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
const { setTheme } = themeStore

const body = document.documentElement;
body.dataset.theme = theme.value;

const changeTheme = () => {
    setTheme()
    body.dataset.theme = theme.value;
};
</script>

<template>
    <header>
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
    </header>
</template> 

<style scoped>
/* header */
header{
    background-color:#0e1318;
    box-shadow: 0px 1px 1px #d2d3d3;
}
[data-theme="light"] header{
    background-color: rgb(121, 121, 121);
    box-shadow: 0px 1px 1px #000;
}
/* Title */
[data-theme="light"] h2{
    color: rgb(244, 248, 254);
}
h2{
    margin:0px;
    /* color: rgb(204, 94, 43); */
    text-shadow: 2px 2px 2px #000;
}
/* navbar */
.container{
    padding-top: 12px;
    align-items: center;
}
</style>
