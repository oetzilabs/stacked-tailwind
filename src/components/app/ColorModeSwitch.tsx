import { useTheme } from "next-themes";
import { Sun, Moon } from "phosphor-react";

export const ColorModeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="dark:text-yellow-300 text-black"
      aria-label={`Change to ${localStorage.theme === "dark" ? "light" : "dark"}mode`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun weight="fill" /> : <Moon weight="fill" />}
    </button>
  );
};
