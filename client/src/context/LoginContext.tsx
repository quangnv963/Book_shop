import { ReactNode, createContext, useContext, useState } from "react";
import React from "react";
import Cart from "../component/Cart";
import Login from "../component/Login";



type LoginContext = {
    openLogin: () => void
    closeLogin: () => void
}
type CartItem = {
  
}
const LoginContext = createContext({} as LoginContext)
export function useLogin() {
    return useContext(LoginContext);
  }


 type LoginContextProviderProps = {
    children: ReactNode
 }
export function LoginContextProvider({children}:LoginContextProviderProps){
    const [isClickLogin, SetIsClickLogin] = useState(false)
    const openLogin = () => SetIsClickLogin(true)
    const closeLogin = () => SetIsClickLogin(false)
    return (
        <LoginContext.Provider 
        value={{
            closeLogin,
            openLogin,  
        }}>
            {children}
            {isClickLogin && <Login />}
        </LoginContext.Provider>
    )
}