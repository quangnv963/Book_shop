import React from 'react'
import Header from '../component/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer'
import Cart from '../component/Cart'

type Props = {}

const ClientLayout = (props: Props) => {
 
  return (
    
    <div>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}

export default ClientLayout