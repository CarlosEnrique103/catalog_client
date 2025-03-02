import { set, z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useLoaderStore from "@/store/ui/useLoaderStore";
import { loginSchema } from "../schemas/loginSchema";
import { loginApi } from "../services/loginService";
import { useUserStore } from "@/store/auth/userStore";

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
  const { setUser } = useUserStore();

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
      const response = await loginApi({ email, password });

      if (response?.data) {
        localStorage.setItem("user_token", response.data.token);
        setUser({
          id: response.data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          token: response.data.token,
          email: response.data.email,
          isAdmin: response.data.isAdmin,
        });

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

    const isSignedIn = await handleSignIn(formData.email, formData.password);

    if (isSignedIn) {
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
