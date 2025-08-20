export const useTheme = () => {
  const isDark = ref(false);

  // 初始化主题
  const initTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      isDark.value = true;
      document.documentElement.classList.add("dark");
    }
  };

  // 切换主题
  const toggleTheme = () => {
    isDark.value = !isDark.value;

    if (isDark.value) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // 设置特定主题
  const setTheme = (theme: "light" | "dark") => {
    isDark.value = theme === "dark";

    if (isDark.value) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // 监听系统主题变化
  const watchSystemTheme = () => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        isDark.value = e.matches;
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  };

  return {
    isDark: readonly(isDark),
    initTheme,
    toggleTheme,
    setTheme,
    watchSystemTheme,
  };
};
