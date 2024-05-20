"use client";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FC, ReactNode, useState } from "react";

interface IDropdownButtonProp {
  text: string;
  icon?: IconDefinition;
  dropdownItems: ReactNode[];
}

const DropdownButton: FC<IDropdownButtonProp> = ({
  text,
  icon,
  dropdownItems,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="dropdown-button w-full flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group group-hover focus:outline-none"
      >
        <div className="flex items-center">
          {icon ? (
            <FontAwesomeIcon
              icon={icon}
              className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
          ) : null}
          <span className="ms-3">{text}</span>
        </div>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
            dropdownOpen
              ? "transition-transform duration-500 rotate-180"
              : "transition-transform duration-500 rotate-0"
          }`}
        />
      </button>
      <ul
        id="dropdown-items"
        className={`${
          dropdownOpen ? "block" : "hidden"
        } transition duration-500 py-2 space-y-2`}
      >
        {dropdownItems.map((item, i) => (
          <li
            className="flex items-center w-full ps-4 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            key={i}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DropdownButton;
