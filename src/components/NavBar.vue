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
            <RouterLink to="/" style="background: transparent;"><h2>TASKFLOW</h2></RouterLink>
            <ul>
                <li>
                    <transition name="theme" mode="out-in">
                        <i class="material-icons" role="button" key=1
                         v-if="theme === 'dark'" @click="changeTheme()">
                         dark_mode
                        </i>

                        <i class="material-icons sun" role="button" key=2
                        v-else @click="changeTheme()">
                        light_mode
                        </i>
                    </transition>
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
    text-shadow: 2px 2px 2px #000;
}
/* navbar */
.container{
    padding-top: 12px;
    align-items: center;
}
i{
    scale: 2;
    color: white;
    padding: 0;
    background-color: transparent;
    border: 0;
    margin-top: auto;
    margin-bottom: auto;
    margin-top: 5px;
    margin-right: 20px;
}
i.sun{
    color: yellow;
}

.theme-enter-active, .theme-leave-active {
    transition: all .2s ease-out;
}
.theme-enter-from, .theme-leave-to {
    scale: 0;
    opacity: 0;
    transform: translateY(20%) rotateZ(100deg);
}

</style>
