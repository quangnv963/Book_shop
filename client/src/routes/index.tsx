import React from "react"
import AdminLayout from "../layouts/AdminLayout"
import ClientLayout from "../layouts/Clientlayout"
import AboutPage from "../page/AboutPage"
import HomePage from "../page/Home"
import ProductPage from "../component/ProductPage"
import ManagerDashBoardPage from "../page/manager/ManagerDashBoardPage"
import ManagerProductPage from "../page/manager/ManagerProductPage"
import ManagerUserPage from "../page/manager/ManagerUserPage"
import { Route, Routes } from "react-router-dom"
import HomeProduct from "../component/Homeconten"
import { ShopCartProvider } from "../context/ShopCartContext"

const Routers = () => {
  return (
    <ShopCartProvider>
        <Routes>
            <Route path='/' element={<ClientLayout/>}>
              <Route path="" element={<HomeProduct/>}/>
              <Route path="/home" element={<HomePage/>}/>
            </Route>
            <Route path='/admin' element={<AdminLayout/>}>
              <Route index element={<ManagerDashBoardPage/>}/>
              <Route path='products' element={<ManagerProductPage/>}/>
              <Route path="users" element={<ManagerUserPage/>}/>
            </Route>
        </Routes>
    </ShopCartProvider>
  )
}

export default Routers