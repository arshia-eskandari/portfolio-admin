import { FC } from "react";

interface IFieldErrors {
  errors?: string[];
}

const FieldError: FC<IFieldErrors> = ({ errors }) => {
  if (!errors) return null;

  return (
    <div className="p-2">
      {errors.map((error, i) => (
        <p className="text-tiny text-red-400 list-item" key={error + i}>
          {error}
        </p>
      ))}
    </div>
  );
};

export default FieldError;
