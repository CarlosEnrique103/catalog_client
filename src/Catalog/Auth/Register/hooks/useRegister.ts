import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useLoaderStore from "@/store/ui/useLoaderStore";
import { registerSchema } from "../schemas/registerSchema";
import { useUserStore } from "@/store/auth/userStore";
import { registerApi } from "../services/loginService";

export default function useRegister() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { showLoader, hideLoader } = useLoaderStore();
  const [formData, setFormData] = useState<FormRegisterState>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const validateForm = (updatedData: FormRegisterState) => {
    try {
      registerSchema.parse(updatedData);
      setIsFormValid(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setIsFormValid(false);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShowAlert(false);
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      try {
        registerSchema.shape[name as keyof FormRegisterState].parse(value);
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      } catch (error) {
        if (error instanceof z.ZodError) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error.errors[0].message,
          }));
        }
      }

      validateForm(updatedData);

      return updatedData;
    });

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await registerApi({
        firstName,
        lastName,
        email,
        password,
      });

      if (response?.data) {
        return true;
      }
      return false;
    } catch (error) {
      setShowAlert(true);
      console.error("Error during sign in:", error);
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!isFormValid) {
      return;
    }
    showLoader();

    const isRegister = await handleRegister(
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.password
    );

    if (isRegister) {
      router.push(`/login`);
    }

    hideLoader();
  };
  return {
    isFormValid,
    showAlert,
    formData,
    errors,
    handleInputChange,
    handleSubmit,
    router,
  };
}
