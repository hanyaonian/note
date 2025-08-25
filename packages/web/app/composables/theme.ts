import { useStorage } from "./storage";

type Theme = "light" | "dark";

export const useTheme = () => {
  const { getItem, setItem } = useStorage<Theme>("theme");

  const theme = ref<Theme>(getItem() ?? "light");

  // 切换主题
  const changeTheme = () => {
    const new_theme = theme.value === "dark" ? "light" : "dark";
    setItem(new_theme);
    theme.value = new_theme;
    if (new_theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // watchMedia: (prefers-color-scheme)

  return {
    theme,
    changeTheme,
  };
};
