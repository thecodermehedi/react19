import {createContext, useState, use} from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeCard = () => {
  const {theme, toggleTheme} = use(ThemeContext);
  return (
    <div className="flex flex-col gap-6">
      <div
        className={`${
          theme === "light"
            ? "bg-gray-50 text-neutral-900"
            : "bg-neutral-900 text-gray-50"
        } "rounded p-8  border border-gray-100 duration-300 ease-in-out"`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        dolores illo, reprehenderit voluptate recusandae perspiciatis quam,
        pariatur commodi possimus officiis quas vitae voluptatum. Magni aliquam
        eligendi itaque possimus sit dolorem.
      </div>
      <div>
        <button onClick={toggleTheme}>
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="size-10 
                text-blue-400"
            >
              <path
                fill="currentColor"
                d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m0 15c-3.9 0-7-3.1-7-7c0-2.4 1.2-4.6 3.2-5.9C4.1 2.7 4 3.4 4 4c0 4.9 4 8.9 8.9 9c-1.3 1.3-3 2-4.9 2"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="size-10 
                text-yellow-400"
            >
              <path
                fill="currentColor"
                d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m-69.66 5.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

const useHookContextNew = () => {
  return (
    <ThemeProvider>
      <ThemeCard />
    </ThemeProvider>
  );
};

export default useHookContextNew;
