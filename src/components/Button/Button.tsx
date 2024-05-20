"use client"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface IButtonProp {
  text: string;
  icon?: IconDefinition;
  textAlign?: "left" | "center" | "right";
  onClick: () => void;
}

const Button: FC<IButtonProp> = ({ text, icon, textAlign, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`dropdown-button w-full flex items-center justify-${textAlign} p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group group-hover focus:outline-none`}
      >
        {icon ? (
          <FontAwesomeIcon
            icon={icon}
            className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          />
        ) : null}
        <span className="ms-3">{text}</span>
      </button>
    </>
  );
};

export default Button;
