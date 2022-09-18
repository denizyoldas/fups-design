import { IUser } from '@/types/user.model'
import { atom, useAtom } from 'jotai'

export const authAtom = atom<IUser | any>(null)

export const useAuthAtom = () => {
  const [state, setState] = useAtom(authAtom)
  const user = localStorage.getItem('auth')

  if (user && !state) {
    setState(JSON.parse(user))
  }

  const login = (data: any) => {
    setState(data)
    localStorage.setItem('auth', JSON.stringify(data))
  }
  const logout = () => {
    localStorage.removeItem('auth')
    setState(null)
  }

  return { state, login, logout }
}

export const isLoginAtom = atom(get => {
  const user = get(authAtom)
  return !!user
})
