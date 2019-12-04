import React from "react"
import { useAuth } from "react-use-auth"
import { useCustomAuth } from "../hooks/useCustomAuth"

export default () => {
  const { isAuthenticated, login } = useAuth()
  const { customLogout } = useCustomAuth()

  return (
    <>
      {isAuthenticated() ? (
        <button onClick={customLogout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </>
  )
}
