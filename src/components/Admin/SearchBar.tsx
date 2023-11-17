import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export const SearchBar = ({
  search,
  setSearch,
}: {
  search?: string;
  setSearch?: Function;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex gap-x-4 mt-[3.5em] lg:flex-nowrap md:flex-nowrap flex-wrap w-full jg:justify-around justify-center lg:self-start self-center items-center lg:w-[40%] w-full lg:gap-y-0 md:gap-y-0 gap-y-2">
        <div className="flex rounded p-1 bg-[#1C1C20] items-center gap-x-1">
          <FaSearch />
          <input
            className="px-3 py-2 rounded bg-[#1C1C20] "
            placeholder="Search by event Title or Venue"
            type="text"
            onChange={(e) => setSearch && setSearch(e.target.value)}
          />
        </div>
        <input
          className="bg-[#1C1C20] min-w-[100px] rounded px-3 py-2"
          type="date"
          placeholder="Search by date"
        />
        <div>
          <div className=" relative inline-block text-left">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md  shadow-sm px-4 py-2 bg-white text-sm font-medium text-[white] bg-[#1C1C20]"
              id="dropdown-menu-button"
              aria-haspopup="true"
              aria-expanded={isOpen}
              onClick={toggleDropdown}
            >
              Status
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                id="dropdown-menu"
                aria-labelledby="dropdown-menu-button"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option
                  </a>
                  <form method="POST" action="#">
                    <button
                      type="submit"
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Option
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
