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
    <div className="flex h-full w-full justify-center">
      <form
        action={formAction}
        className="h-80 w-96 max-w-sm self-center rounded-lg bg-slate-950 p-10"
      >
        <h1 className="pb-8 text-center text-white">
          Portfolio Admin Panel Login
        </h1>
        <TextInput
          name="email"
          type="email"
          containerClassName={state?.errors?.email ? "mb-2" : ""}
        />
        <FieldError errors={state?.errors?.email} />
        <TextInput
          name="password"
          type="password"
          containerClassName={state?.errors?.password ? "mb-2" : ""}
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
