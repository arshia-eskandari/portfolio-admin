import "./TextInput.css";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface ITextInputProps {
  type: "email" | "password" | "text";
  name: string;
  containerClassName?: string;
}

const TextInput: FC<ITextInputProps> = ({ type, name, containerClassName }) => {
  return (
    <div className={`text-input-container ${containerClassName}`}>
      {type !== "text" ? (
        <div className="text-input-icon">
          <FontAwesomeIcon
            icon={type === "email" ? faEnvelope : faLock}
            color="white"
          />
        </div>
      ) : undefined}
      <input
        name={name}
        type={type}
        className="text-input"
        placeholder={type === "email" ? "name@example.com" : "password"}
      />
    </div>
  );
};

export default TextInput;
