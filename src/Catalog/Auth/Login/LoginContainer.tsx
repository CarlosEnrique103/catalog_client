"use client";

import { PrimaryButton } from "@/components/UI/PrimaryButton";
import { Input } from "@heroui/react";
import { AuthIcon } from "@/icons";
import AlertCritical from "@/components/UI/AlertCritical";
import useLogin from "./hooks/useLogin";
import PasswordInput from "@/components/UI/PasswordInput";

export default function LoginContainer() {
  const {
    showAlert,
    formData,
    errors,
    handleInputChange,
    handleSubmit,
    router,
  } = useLogin();

  return (
    <div className="w-full flex flex-col gap-6">
      <AuthIcon className="self-center w-10 h-10" />
      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        isInvalid={errors.email !== ""}
      />
      <PasswordInput
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        isInvalid={errors.password !== ""}
      />

      {showAlert && (
        <AlertCritical
          title="Error"
          subtitle="Email or password is incorrect"
        />
      )}
      <PrimaryButton onPress={handleSubmit}>Login</PrimaryButton>
      <button
        className="mt-2 text-sm text-blue-500"
        onClick={() => router.push("/register")}
      >
        No account? Sign up
      </button>
    </div>
  );
}
