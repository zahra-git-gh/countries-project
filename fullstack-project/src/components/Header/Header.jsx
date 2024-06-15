import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function Header() {
  const [isDark, setIsDark] = useState(false);
  function darkModeClickHandler() {
    setIsDark((d) => !d);
  }
  if (isDark) {
    document.body.classList.add("dark");
    document.body.style.backgroundColor = "rgb(32,44,55)";
  } else {
    document.body.classList.remove("dark");
    document.body.style.backgroundColor = "rgb(250,250,250)";
  }
  return (
    <header className="w-100 h-20 shadow-lg bg-white px-5 dark:bg-[#2B3945] sm:px-7" >
      <section className="w-100 h-full flex items-center justify-between">
        <p className="font-extrabold dark:text-white md:text-lg">Where in the world?</p>
        <div
          onClick={darkModeClickHandler}
          className="flex items-center gap-1 cursor-pointer"
        >
          <FontAwesomeIcon
            className="dark:text-white"
            icon={isDark ? faSun : faMoon}
          />
          <p className="dark:text-white">
            {isDark ? "Light Mode" : "Dark Mode"}
          </p>
        </div>
      </section>
    </header>
  );
}
