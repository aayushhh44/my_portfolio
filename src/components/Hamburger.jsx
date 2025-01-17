"use client";

// export const runtime = "edge";

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex sm:hidden absolute top-2 left-2 p-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative  w-6 h-6 flex flex-col justify-between items-center group"
        aria-label="Toggle Menu"
      >
        <span
          className={`block h-1 w-full bg-black dark:bg-white rounded transform transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-3" : ""
          }`}
        ></span>

        <span
          className={`block h-1 w-4 bg-black dark:bg-white rounded transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>

        <span
          className={`block h-1 w-full bg-black dark:bg-white rounded transform transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-3" : ""
          }`}
        ></span>
      </button>
    </div>
  );
};

export default Hamburger;
