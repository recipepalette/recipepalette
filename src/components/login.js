import React from "react"
import { useAuth } from "react-use-auth"

export default () => {
  const { isAuthenticated, login, logout } = useAuth()

  return (
    <>
      {isAuthenticated() ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </>
  )
}
