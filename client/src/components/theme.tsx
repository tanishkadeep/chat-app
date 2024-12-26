import { useState, useEffect } from "react";
import { MdSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="cursor-pointer">
      {theme === "dark" ? (
        <MdSunny
          onClick={handleThemeToggle}
          className="text-3xl font-extrabold"
        />
      ) : (
        <IoIosMoon
          onClick={handleThemeToggle}
          className="text-3xl font-extrabold"
        />
      )}
    </div>
  );
};

export default Theme;
