import ErrorPage from "@/components/ErrorPage/ErrorPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'This page could not be found.',
}

const NotFound = () => {
  return (
    <ErrorPage errorCode={404} errorMessage="This page could not be found." />
  );
};

export default NotFound;
