"use client";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface IButtonProp {
  text: string;
  icon?: IconDefinition;
  className?: string;
  type?: "submit" | "reset";
  onClick?: () => void;
}

const Button: FC<IButtonProp> = ({
  text,
  icon,
  className = "justify-start",
  type,
  onClick,
}) => {
  return (
    <>
      <button onClick={onClick} type={type} className="w-full dropdown-button">
        <div
          className={`group-hover group flex w-full items-center rounded-lg p-2 text-white hover:bg-gray-700 focus:outline-none ${className}`}
        >
          {icon ? (
            <FontAwesomeIcon
              icon={icon}
              className="w-5 text-gray-400 duration-75 h-5transition group-hover:text-white"
            />
          ) : null}
          {type === "submit" ? (
            <span>{text}</span>
          ) : (
            <span className="ms-3">{text}</span>
          )}
        </div>
      </button>
    </>
  );
};

export default Button;
