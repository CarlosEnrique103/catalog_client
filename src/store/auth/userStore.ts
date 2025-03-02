import { create } from "zustand";
import { persist } from "zustand/middleware";

type Actions = {
  setUser: (data: IUser) => void;
  resetUser: () => void;
};

export const useUserStore = create(
  persist<IUser & Actions>(
    (set) => ({
      id: "",
      firstName: "",
      lastName: "",
      token: "",
      email: "",
      isAdmin: false,
      setUser: (data: IUser) => {
        set(() => ({
          id: data.firstName,
          firstName: data.firstName,
          lastName: data.lastName,
          token: data.token,
          email: data.email,
          isAdmin: data.isAdmin,
        }));
      },
      resetUser: () => {
        set(() => ({
          id: "",
          firstName: "",
          lastName: "",
          token: "",
          email: "",
          isAdmin: false,
        }));
      },
    }),

    {
      name: "user",
    }
  )
);
