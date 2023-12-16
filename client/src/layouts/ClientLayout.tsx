import React from 'react'
import Header from '../component/Header'
import { Outlet } from 'react-router-dom'

type Props = {}

const ClientLayout = (props: Props) => {
  return (
    <div>
      <Header />
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default ClientLayout