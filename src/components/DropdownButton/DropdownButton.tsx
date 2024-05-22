"use client";
import "./DropdownButton.css";
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
        className="dropdown-button"
      >
        <div className="flex items-center">
          {icon ? (
            <FontAwesomeIcon
              icon={icon}
              className="dropdown-icon"
            />
          ) : null}
          <span className="ms-3">{text}</span>
        </div>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`icon ${
            dropdownOpen ? "dropdown-open" : "dropdown-closed"
          }`}
        />
      </button>
      <div
        id="dropdown-items"
        className={`dropdown-items ${
          dropdownOpen ? "block" : "hidden"
        }`}
      >
        {dropdownItems.map((item, i) => item)}
      </div>
    </>
  );
};

export default DropdownButton;
