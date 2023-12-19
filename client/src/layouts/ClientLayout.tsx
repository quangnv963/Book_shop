import React from 'react'
import Header from '../component/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer'

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