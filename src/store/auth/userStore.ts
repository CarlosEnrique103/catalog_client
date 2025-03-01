import { type UserAdminType } from '@/types/admin/userAdminTypes'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Actions = {
  setUser: (data: UserAdminType) => void
}

export const useUserStore = create(persist<UserAdminType & Actions>(
  (set) => ({
    name: '',
    lastName: '',
    email: '',
    role: 'moderator',
    picture: '',
    username: '',
    setUser: (data: UserAdminType) => {
      set(() => ({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        role: data.role,
        picture: data.picture,
        username: data.username
      }))
    }
  }),
  {
    name: 'user'
  }
))
