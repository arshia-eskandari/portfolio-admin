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
    <div className={`relative mb-6 ${containerClassName}`}>
      {type !== "text" ? (
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
          <FontAwesomeIcon
            icon={type === "email" ? faEnvelope : faLock}
            color="white"
          />
        </div>
      ) : undefined}
      <input
        name={name}
        type={type}
        className={`block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 ps-10 text-sm text-white placeholder-gray-400 outline-none`}
        placeholder={type === "email" ? "name@example.com" : "password"}
      />
    </div>
  );
};

export default TextInput;
