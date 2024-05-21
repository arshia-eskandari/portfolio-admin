import { FC } from "react";

interface IFieldErrors {
  errors?: string[];
}

const FieldError: FC<IFieldErrors> = ({ errors }) => {
  if (!errors) return null;

  return (
    <>
      {errors?.map((error) => (
        <p className="mb-4 text-sm text-red-600 dark:text-red-500" key={error}>
          <span className="font-medium">{error}</span>
        </p>
      ))}
    </>
  );
};

export default FieldError;
