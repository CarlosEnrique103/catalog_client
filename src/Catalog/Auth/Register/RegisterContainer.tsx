"use client";

import { PrimaryButton } from "@/components/UI/PrimaryButton";
import { Input } from "@heroui/react";
import { AuthIcon } from "@/icons";
import PasswordInput from "@/components/UI/PasswordInput";
import useRegister from "./hooks/useRegister";
import AlertCritical from "@/components/UI/AlertCritical";

export default function RegisterContainer() {
  const {
    showAlert,
    formData,
    errors,
    handleInputChange,
    handleSubmit,
    router,
  } = useRegister();

  return (
    <div className="w-full flex flex-col gap-6">
      <AuthIcon className="self-center w-10 h-10" />
      <Input
        label="First Name"
        name="firstName"
        type="text"
        value={formData.firstName}
        onChange={handleInputChange}
        isInvalid={errors.firstName !== ""}
      />
      <Input
        label="First Name"
        name="lastName"
        type="text"
        value={formData.lastName}
        onChange={handleInputChange}
        isInvalid={errors.lastName !== ""}
      />
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
        <AlertCritical title="Error" subtitle="Error during sign up" />
      )}
      <PrimaryButton onPress={handleSubmit}>Sign Up</PrimaryButton>

      <button
        className="mt-2 text-sm text-blue-500"
        onClick={() => router.push("/login")}
      >
        Already have an account? Login
      </button>
    </div>
  );
}
