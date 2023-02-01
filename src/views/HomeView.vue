<script setup>
const changeTheme = () => {
  let body = document.documentElement;
  body.dataset.theme = body.dataset.theme === "light" ? "dark" : "light";
};
</script>

<template>
  <main class="container">
    <button @click="changeTheme()">Change Theme</button>
  </main>
</template>
