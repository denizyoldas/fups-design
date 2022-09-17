import { useAtom } from 'jotai'
import { useState } from 'react'
import Home from './pages/home'
import Login from './pages/login'
import { isLoginAtom } from './store/auth-atom'

function App() {
  const [isLogin] = useAtom(isLoginAtom)

  if (isLogin) {
    return <Home />
  }

  return <Login />
}

export default App
