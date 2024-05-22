"use client";
import './Button.css'
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
      <button onClick={onClick} type={type} className="w-full">
        <div
          className={`button-inner-container ${className}`}
        >
          {icon ? (
            <FontAwesomeIcon
              icon={icon}
              className="icon"
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
