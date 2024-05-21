"use client";
import React from "react";
import { loginValidationSchema } from "./loginValidationSchema";
import { useFormState } from "react-dom";
import FieldError from "@/components/FieldError/FieldError";
import { login } from "./loginAction";
import Button from "@/components/Button/Button";
import TextInput from "@/components/TextInput/TextInput";

export default function Login() {
  const [state, formAction] = useFormState(login, { success: false });
  return (
    <div className="flex justify-center w-full h-full">
      <form
        action={formAction}
        className="self-center max-w-sm p-10 rounded-lg w-96 bg-slate-950"
      >
        <h1 className="pb-8 text-center text-white">
          Portfolio Admin Panel Login
        </h1>
        <TextInput
          name="email"
          type="email"
          containerClassName={state?.errors?.email ? "mb-1" : ""}
        />
        <FieldError errors={state?.errors?.email} />
        <TextInput
          name="password"
          type="password"
          containerClassName={state?.errors?.password ? "mb-1" : ""}
        />
        <FieldError errors={state?.errors?.password} />
        <Button
          type="submit"
          text="submit"
          className="justify-center bg-slate-300 !text-black hover:bg-slate-100"
        />
      </form>
    </div>
  );
}
