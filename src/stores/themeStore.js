import { ref } from "vue";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", () => {
  const theme = ref("dark");
  // const doubleCount = computed(() => count.value * 2);
  function setTheme() {
    theme.value = theme.value === "dark" ? "light" : "dark";
  }
  return { theme, setTheme };
});
