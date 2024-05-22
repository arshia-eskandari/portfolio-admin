"use client"
import { FC } from "react";
import "./ErrorPage.css";

interface IErrorPage {
  errorCode: 500 | 404;
  errorMessage: string;
}

export const ErrorPage: FC<IErrorPage> = ({ errorCode, errorMessage }) => {
  return (
    <div className="error-page-container">
      <div className="flex items-center">
        <div className="inline-block border-r-black border-r-2 pr-4 mr-4">
          <h1 className="text-3xl">{errorCode}</h1>
        </div>
        <h2 className="inline-block text-2xl">{errorMessage}</h2>
      </div>
    </div>
  );
};

export default ErrorPage;
