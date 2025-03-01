import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useLoaderStore from "@/store/ui/useLoaderStore";
import { loginSchema } from "../schemas/loginSchema";
export default function useLogin() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { showLoader, hideLoader } = useLoaderStore();
  const [formData, setFormData] = useState<FormLoginState>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const validateForm = (updatedData: FormLoginState) => {
    try {
      loginSchema.parse(updatedData);
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
        loginSchema.shape[name as keyof FormLoginState].parse(value);
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

  const handleSignIn = async (email: string, password: string) => {
    try {
      return true;
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

    const isSignedIn = await handleSignIn(formData.email, formData.password);

    if (isSignedIn) {
      console.log({ formData });
      router.push(`/home`);
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
