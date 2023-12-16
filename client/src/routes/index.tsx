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