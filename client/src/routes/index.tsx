import React from "react"
import AdminLayout from "../layouts/AdminLayout"
import ClientLayout from "../layouts/Clientlayout"
import AboutPage from "@/pages/AboutPage"
import HomePage from "@/pages/HomePage"
import ProductPage from "@/pages/ProductPage"
import ManagerDashBoardPage from "@/pages/manager/dashboard/ManagerDashBoardPage"
import ManagerProductPage from "@/pages/manager/product/ManagerProductPage"
import ManagerUserPage from "@/pages/manager/user/ManagerUserPage"
import { Route, Routes } from "react-router-dom"

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<ClientLayout/>}>
``          <Route index element={<HomePage/>}/>
``          <Route path='products' element={<ProductPage/>}/>
``          <Route path="about" element={<AboutPage/>}/>
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
``          <Route index element={<ManagerDashBoardPage/>}/>
``          <Route path='products' element={<ManagerProductPage/>}/>
``          <Route path="users" element={<ManagerUserPage/>}/>
        </Route>
    </Routes>
  )
}

export default Routers